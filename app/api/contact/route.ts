import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, company, proxyType } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
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

    // Log the contact submission (replace with DB save later)
    console.log("Contact form submission:", {
      name,
      email,
      company: company || null,
      proxyType: proxyType || null,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received. We will be in touch soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
