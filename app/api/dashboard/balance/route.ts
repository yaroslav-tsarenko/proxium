import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/lib/db/models/User";
import { TopUp } from "@/lib/db/models/TopUp";
import { getCurrentUser } from "@/lib/auth/jwt";
import crypto from "crypto";

export async function GET() {
  const auth = await getCurrentUser();
  if (!auth) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  await connectDB();
  const user = await User.findById(auth.userId).select("balance currency");
  const topups = await TopUp.find({ userId: auth.userId }).sort({ createdAt: -1 }).limit(50);

  return NextResponse.json({ balance: user?.balance ?? 0, currency: user?.currency ?? "USD", topups });
}

export async function POST(request: Request) {
  const auth = await getCurrentUser();
  if (!auth) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { amount, currency, method } = await request.json();
  if (!amount || amount < 500) {
    return NextResponse.json({ error: "Minimum top-up is $5.00" }, { status: 400 });
  }

  await connectDB();

  const reference = `TXN-${Date.now()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;

  await TopUp.create({
    userId: auth.userId,
    amount,
    currency: currency || "USD",
    method: method || "card",
    status: "completed",
    reference,
  });

  await User.findByIdAndUpdate(auth.userId, { $inc: { balance: amount } });

  const user = await User.findById(auth.userId).select("balance");

  return NextResponse.json({ success: true, balance: user?.balance ?? 0, reference });
}
