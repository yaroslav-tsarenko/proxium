import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Log the waitlist signup (replace with DB save later)
    console.log("Waitlist signup:", {
      email,
      source: source || "website",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "You have been added to the waitlist." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
