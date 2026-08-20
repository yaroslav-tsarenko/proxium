import { NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/lib/db/models/User";
import { PasswordResetToken } from "@/lib/db/models/PasswordResetToken";
import { hashPassword } from "@/lib/auth/passwords";

export async function POST(request: Request) {
  try {
    const { token, id, password } = await request.json();

    if (!token || !id || !password) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    if (typeof password !== "string" || password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    }

    await connectDB();

    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const record = await PasswordResetToken.findOne({ userId: id, tokenHash });

    if (!record || record.expiresAt < new Date()) {
      return NextResponse.json({ error: "This reset link is invalid or has expired." }, { status: 400 });
    }

    const passwordHash = await hashPassword(password);
    await User.findByIdAndUpdate(id, { passwordHash });
    await PasswordResetToken.deleteMany({ userId: id });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
