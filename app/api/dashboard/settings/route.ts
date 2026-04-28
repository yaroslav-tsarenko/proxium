import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/lib/db/models/User";
import { getCurrentUser } from "@/lib/auth/jwt";
import { hashPassword, verifyPassword } from "@/lib/auth/passwords";

export async function GET() {
  const auth = await getCurrentUser();
  if (!auth) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  await connectDB();
  const user = await User.findById(auth.userId).select("-passwordHash");
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ user });
}

export async function PUT(request: Request) {
  const auth = await getCurrentUser();
  if (!auth) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const body = await request.json();
  const { name, surname, phone, street, city, country, postCode, currentPassword, newPassword } = body;

  await connectDB();
  const user = await User.findById(auth.userId);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (name) user.name = name;
  if (surname) user.surname = surname;
  if (phone) user.phone = phone;
  if (street) user.address.street = street;
  if (city) user.address.city = city;
  if (country) user.address.country = country;
  if (postCode) user.address.postCode = postCode;

  if (newPassword) {
    if (!currentPassword) {
      return NextResponse.json({ error: "Current password required." }, { status: 400 });
    }
    const valid = await verifyPassword(currentPassword, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: "Current password is incorrect." }, { status: 400 });
    }
    if (newPassword.length < 8) {
      return NextResponse.json({ error: "New password must be at least 8 characters." }, { status: 400 });
    }
    user.passwordHash = await hashPassword(newPassword);
  }

  await user.save();

  return NextResponse.json({ success: true });
}
