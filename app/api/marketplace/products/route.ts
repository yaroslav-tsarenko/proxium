import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { ProxyProduct } from "@/lib/db/models/ProxyProduct";

const SEED_PRODUCTS = [
  { name: "US Datacenter Proxy", type: "datacenter", country: "United States", countryCode: "US", pricePerUnit: 200, unit: "proxy", duration: 30, description: "High-speed US datacenter proxy for bulk operations", features: ["99.9% uptime", "1 Gbps speed", "HTTP/SOCKS5"], inStock: true },
  { name: "UK Datacenter Proxy", type: "datacenter", country: "United Kingdom", countryCode: "GB", pricePerUnit: 220, unit: "proxy", duration: 30, description: "Fast UK datacenter proxy for scraping and automation", features: ["99.9% uptime", "1 Gbps speed", "HTTP/SOCKS5"], inStock: true },
  { name: "DE Datacenter Proxy", type: "datacenter", country: "Germany", countryCode: "DE", pricePerUnit: 210, unit: "proxy", duration: 30, description: "German datacenter proxy with low latency", features: ["99.9% uptime", "1 Gbps speed", "HTTP/SOCKS5"], inStock: true },
  { name: "US Static Residential", type: "residential", country: "United States", countryCode: "US", pricePerUnit: 500, unit: "proxy", duration: 30, description: "Real US residential IP with consistent identity", features: ["Real ISP IP", "Sticky session", "High trust score"], inStock: true },
  { name: "UK Static Residential", type: "residential", country: "United Kingdom", countryCode: "GB", pricePerUnit: 550, unit: "proxy", duration: 30, description: "UK residential IP for account management", features: ["Real ISP IP", "Sticky session", "High trust score"], inStock: true },
  { name: "US Rotating Residential", type: "rotating", country: "United States", countryCode: "US", pricePerUnit: 800, unit: "GB", duration: 30, description: "Auto-rotating US residential IPs per request", features: ["Auto-rotation", "Large IP pool", "City targeting"], inStock: true },
  { name: "EU Rotating Residential", type: "rotating", country: "Germany", countryCode: "DE", pricePerUnit: 850, unit: "GB", duration: 30, description: "Rotating European residential IPs", features: ["Auto-rotation", "Multi-country", "Session control"], inStock: true },
  { name: "US Dedicated Proxy", type: "dedicated", country: "United States", countryCode: "US", pricePerUnit: 1200, unit: "proxy", duration: 30, description: "Exclusive US IP assigned only to your account", features: ["Exclusive IP", "Full control", "Custom config"], inStock: true },
  { name: "UK Dedicated Proxy", type: "dedicated", country: "United Kingdom", countryCode: "GB", pricePerUnit: 1300, unit: "proxy", duration: 30, description: "Private UK proxy for sensitive operations", features: ["Exclusive IP", "Full control", "Premium support"], inStock: true },
  { name: "US Mobile Proxy", type: "mobile", country: "United States", countryCode: "US", pricePerUnit: 2000, unit: "proxy", duration: 30, description: "Real US mobile carrier IP (4G/5G)", features: ["4G/5G carrier IP", "Highest trust", "Auto-rotation"], inStock: true },
  { name: "JP Datacenter Proxy", type: "datacenter", country: "Japan", countryCode: "JP", pricePerUnit: 250, unit: "proxy", duration: 30, description: "Tokyo-based datacenter proxy for Asia-Pacific", features: ["99.9% uptime", "Low latency", "HTTP/SOCKS5"], inStock: true },
  { name: "BR Residential Proxy", type: "residential", country: "Brazil", countryCode: "BR", pricePerUnit: 480, unit: "proxy", duration: 30, description: "Brazilian residential IP for LATAM operations", features: ["Real ISP IP", "Sticky session", "High trust score"], inStock: true },
];

export async function GET() {
  await connectDB();

  let products = await ProxyProduct.find({ inStock: true }).sort({ type: 1, pricePerUnit: 1 });

  if (products.length === 0) {
    await ProxyProduct.insertMany(SEED_PRODUCTS);
    products = await ProxyProduct.find({ inStock: true }).sort({ type: 1, pricePerUnit: 1 });
  }

  return NextResponse.json({ products });
}
