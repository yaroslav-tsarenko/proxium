import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { Order, type IProxyDetail } from "@/lib/db/models/Order";
import { getCurrentUser } from "@/lib/auth/jwt";

export async function GET() {
  const auth = await getCurrentUser();
  if (!auth) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  await connectDB();
  const orders = await Order.find({ userId: auth.userId, status: "active" }).sort({ createdAt: -1 });

  const proxies = orders.flatMap((order) =>
    order.proxyDetails.map((proxy: IProxyDetail) => ({
      orderId: order._id,
      productName: order.productName,
      productType: order.productType,
      country: order.country,
      ...proxy,
    })),
  );

  return NextResponse.json({ proxies });
}
