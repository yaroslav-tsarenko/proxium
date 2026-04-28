import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { ProxyProduct } from "@/lib/db/models/ProxyProduct";

export async function GET() {
  await connectDB();
  const products = await ProxyProduct.find({ inStock: true }).sort({ type: 1, pricePerUnit: 1 });
  return NextResponse.json({ products });
}
