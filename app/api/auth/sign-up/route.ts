import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/lib/db/models/User";
import { hashPassword } from "@/lib/auth/passwords";
import { signToken, setAuthCookie } from "@/lib/auth/jwt";
import { EXCLUDED_COUNTRIES } from "@/lib/auth/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      email, password, name, surname, phone, dateOfBirth,
      street, city, country, postCode, agreedToTerms,
    } = body;

    if (!email || !password || !name || !surname || !phone || !dateOfBirth || !street || !city || !country || !postCode) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!agreedToTerms) {
      return NextResponse.json({ error: "You must agree to the Terms & Conditions." }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    if ((EXCLUDED_COUNTRIES as readonly string[]).includes(country)) {
      return NextResponse.json({ error: "Service is not available in your country." }, { status: 400 });
    }

    await connectDB();

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);

    const user = await User.create({
      email: email.toLowerCase(),
      passwordHash,
      name,
      surname,
      phone,
      dateOfBirth: new Date(dateOfBirth),
      address: { street, city, country, postCode },
      agreedToTerms: true,
      agreedAt: new Date(),
    });

    const token = await signToken({ userId: user._id.toString(), email: user.email });
    await setAuthCookie(token);

    return NextResponse.json({
      success: true,
      user: { name: user.name, email: user.email },
    });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
