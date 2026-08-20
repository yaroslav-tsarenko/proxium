import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/lib/db/models/User";
import { Order } from "@/lib/db/models/Order";
import { ProxyProduct } from "@/lib/db/models/ProxyProduct";
import { getCurrentUser } from "@/lib/auth/jwt";
import { sendMail } from "@/lib/email/mailer";
import { orderConfirmationEmail } from "@/lib/email/templates";
import { generateInvoicePdf } from "@/lib/email/invoice";
import crypto from "crypto";

async function sendOrderEmail(user: {
  email: string; name: string; surname: string; currency: string;
  address?: { street?: string; city?: string; country?: string; postCode?: string };
}, order: { _id: unknown; productName: string; quantity: number; totalPrice: number; createdAt: Date }) {
  try {
    const orderId = String(order._id);
    const addr = user.address
      ? [user.address.street, user.address.city, user.address.postCode, user.address.country].filter(Boolean).join(", ")
      : undefined;
    const pdf = await generateInvoicePdf({
      orderId,
      createdAt: order.createdAt,
      customer: { name: `${user.name} ${user.surname}`, email: user.email, address: addr },
      productName: order.productName,
      quantity: order.quantity,
      unitPrice: order.totalPrice / order.quantity,
      totalPrice: order.totalPrice,
      currency: user.currency,
    });
    const email = orderConfirmationEmail({
      orderId,
      productName: order.productName,
      quantity: order.quantity,
      totalPrice: order.totalPrice,
      currency: user.currency,
      createdAt: order.createdAt,
    });
    await sendMail({
      to: user.email,
      ...email,
      attachments: [{ filename: `invoice-${orderId.slice(-8).toUpperCase()}.pdf`, content: pdf, contentType: "application/pdf" }],
    });
  } catch (err) {
    console.error("Failed to send order confirmation email:", err);
  }
}

function generateProxy(expiresAt: Date) {
  const octet = () => Math.floor(Math.random() * 254) + 1;
  return {
    ip: `${octet()}.${octet()}.${octet()}.${octet()}`,
    port: 10000 + Math.floor(Math.random() * 50000),
    username: `prx_${crypto.randomBytes(4).toString("hex")}`,
    password: crypto.randomBytes(8).toString("hex"),
    protocol: "HTTP",
    expiresAt,
  };
}

export async function GET() {
  const auth = await getCurrentUser();
  if (!auth) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  await connectDB();
  const orders = await Order.find({ userId: auth.userId }).sort({ createdAt: -1 }).limit(50);
  return NextResponse.json({ orders });
}

export async function POST(request: Request) {
  const auth = await getCurrentUser();
  if (!auth) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { productId, quantity } = await request.json();
  if (!productId || !quantity || quantity < 1) {
    return NextResponse.json({ error: "Product and quantity required." }, { status: 400 });
  }

  await connectDB();

  const product = await ProxyProduct.findById(productId);
  if (!product || !product.inStock) {
    return NextResponse.json({ error: "Product not available." }, { status: 404 });
  }

  const totalPrice = product.pricePerUnit * quantity;
  const user = await User.findById(auth.userId);
  if (!user || user.balance < totalPrice) {
    return NextResponse.json({ error: "Insufficient balance." }, { status: 400 });
  }

  const expiresAt = new Date(Date.now() + product.duration * 24 * 60 * 60 * 1000);
  const proxyDetails = Array.from({ length: quantity }, () => generateProxy(expiresAt));

  const order = await Order.create({
    userId: auth.userId,
    productId: product._id,
    productName: product.name,
    productType: product.type,
    country: product.country,
    quantity,
    totalPrice,
    currency: user.currency,
    proxyDetails,
  });

  await User.findByIdAndUpdate(auth.userId, { $inc: { balance: -totalPrice } });

  sendOrderEmail(user, order);

  return NextResponse.json({ success: true, order });
}
