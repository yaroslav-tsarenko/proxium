import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI!;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    postCode: { type: String, required: true },
  },
  balance: { type: Number, default: 0 },
  currency: { type: String, default: "USD" },
  agreedToTerms: { type: Boolean, required: true },
  agreedAt: { type: Date, required: true },
}, { timestamps: true });

const ProxyProductSchema = new mongoose.Schema({
  name: String, type: String, country: String, countryCode: String,
  pricePerUnit: Number, unit: String, duration: Number, description: String,
  features: [String], inStock: Boolean, bandwidth: String, speed: String,
  protocol: String, authentication: String,
}, { timestamps: true });

const PRODUCTS = [
  { name: "US Datacenter HTTP", type: "datacenter", country: "United States", countryCode: "US", pricePerUnit: 200, unit: "proxy/mo", duration: 30, description: "High-speed US datacenter proxy. Ideal for scraping, SEO monitoring, and bulk automation.", features: ["1 Gbps speed", "99.9% uptime", "HTTP/HTTPS", "IP:Port auth"], inStock: true, bandwidth: "Unlimited", speed: "1 Gbps", protocol: "HTTP/HTTPS", authentication: "IP Whitelist + User:Pass" },
  { name: "US Datacenter SOCKS5", type: "datacenter", country: "United States", countryCode: "US", pricePerUnit: 250, unit: "proxy/mo", duration: 30, description: "US SOCKS5 datacenter proxy for advanced routing and tunneling.", features: ["1 Gbps speed", "SOCKS5", "UDP support", "IP:Port auth"], inStock: true, bandwidth: "Unlimited", speed: "1 Gbps", protocol: "SOCKS5", authentication: "User:Pass" },
  { name: "UK Datacenter HTTP", type: "datacenter", country: "United Kingdom", countryCode: "GB", pricePerUnit: 220, unit: "proxy/mo", duration: 30, description: "Fast UK datacenter proxy for European web scraping.", features: ["1 Gbps speed", "99.9% uptime", "HTTP/HTTPS", "Low latency"], inStock: true, bandwidth: "Unlimited", speed: "1 Gbps", protocol: "HTTP/HTTPS", authentication: "IP Whitelist + User:Pass" },
  { name: "DE Datacenter HTTP", type: "datacenter", country: "Germany", countryCode: "DE", pricePerUnit: 210, unit: "proxy/mo", duration: 30, description: "German datacenter proxy with Frankfurt PoP.", features: ["1 Gbps speed", "99.9% uptime", "HTTP/HTTPS", "EU compliant"], inStock: true, bandwidth: "Unlimited", speed: "1 Gbps", protocol: "HTTP/HTTPS", authentication: "IP Whitelist + User:Pass" },
  { name: "JP Datacenter HTTP", type: "datacenter", country: "Japan", countryCode: "JP", pricePerUnit: 280, unit: "proxy/mo", duration: 30, description: "Tokyo-based datacenter proxy for Asia-Pacific operations.", features: ["500 Mbps speed", "99.9% uptime", "HTTP/HTTPS", "Low APAC latency"], inStock: true, bandwidth: "Unlimited", speed: "500 Mbps", protocol: "HTTP/HTTPS", authentication: "IP Whitelist + User:Pass" },
  { name: "US Static Residential", type: "residential", country: "United States", countryCode: "US", pricePerUnit: 500, unit: "proxy/mo", duration: 30, description: "Real US residential IP from major ISP. Stays the same for the full billing period.", features: ["Real ISP IP", "Sticky session", "High trust score", "HTTP/HTTPS"], inStock: true, bandwidth: "40 GB", speed: "100 Mbps", protocol: "HTTP/HTTPS", authentication: "User:Pass" },
  { name: "UK Static Residential", type: "residential", country: "United Kingdom", countryCode: "GB", pricePerUnit: 550, unit: "proxy/mo", duration: 30, description: "UK residential IP for social media management and account ops.", features: ["Real ISP IP", "Sticky session", "High trust score", "HTTP/HTTPS"], inStock: true, bandwidth: "40 GB", speed: "100 Mbps", protocol: "HTTP/HTTPS", authentication: "User:Pass" },
  { name: "DE Static Residential", type: "residential", country: "Germany", countryCode: "DE", pricePerUnit: 520, unit: "proxy/mo", duration: 30, description: "German residential IP for EU-focused account management.", features: ["Real ISP IP", "Sticky session", "High trust score", "GDPR friendly"], inStock: true, bandwidth: "40 GB", speed: "100 Mbps", protocol: "HTTP/HTTPS", authentication: "User:Pass" },
  { name: "BR Static Residential", type: "residential", country: "Brazil", countryCode: "BR", pricePerUnit: 480, unit: "proxy/mo", duration: 30, description: "Brazilian residential IP for LATAM market research.", features: ["Real ISP IP", "Sticky session", "High trust score", "HTTP/HTTPS"], inStock: true, bandwidth: "40 GB", speed: "50 Mbps", protocol: "HTTP/HTTPS", authentication: "User:Pass" },
  { name: "US Rotating Residential", type: "rotating", country: "United States", countryCode: "US", pricePerUnit: 800, unit: "GB", duration: 30, description: "Auto-rotating US residential IPs. New IP every request or sticky up to 30 min.", features: ["Auto-rotation", "10M+ IP pool", "City targeting", "Session control"], inStock: true, bandwidth: "Pay per GB", speed: "Variable", protocol: "HTTP/HTTPS", authentication: "User:Pass + Session ID" },
  { name: "EU Rotating Residential", type: "rotating", country: "Germany", countryCode: "DE", pricePerUnit: 850, unit: "GB", duration: 30, description: "Rotating residential IPs from 15+ European countries.", features: ["Auto-rotation", "5M+ IP pool", "Country targeting", "Session control"], inStock: true, bandwidth: "Pay per GB", speed: "Variable", protocol: "HTTP/HTTPS", authentication: "User:Pass + Session ID" },
  { name: "Global Rotating Residential", type: "rotating", country: "Global", countryCode: "UN", pricePerUnit: 900, unit: "GB", duration: 30, description: "Worldwide rotating residential pool covering 195+ countries.", features: ["Auto-rotation", "50M+ IP pool", "195+ countries", "ASN targeting"], inStock: true, bandwidth: "Pay per GB", speed: "Variable", protocol: "HTTP/HTTPS", authentication: "User:Pass + Session ID" },
  { name: "US Dedicated Proxy", type: "dedicated", country: "United States", countryCode: "US", pricePerUnit: 1200, unit: "proxy/mo", duration: 30, description: "Exclusive US IP assigned only to your account. Full control.", features: ["Exclusive IP", "Full control", "Custom config", "24/7 support"], inStock: true, bandwidth: "Unlimited", speed: "1 Gbps", protocol: "HTTP/HTTPS/SOCKS5", authentication: "IP Whitelist + User:Pass" },
  { name: "UK Dedicated Proxy", type: "dedicated", country: "United Kingdom", countryCode: "GB", pricePerUnit: 1300, unit: "proxy/mo", duration: 30, description: "Private UK proxy for sensitive operations and compliance.", features: ["Exclusive IP", "Full control", "Premium support", "UK data protection"], inStock: true, bandwidth: "Unlimited", speed: "1 Gbps", protocol: "HTTP/HTTPS/SOCKS5", authentication: "IP Whitelist + User:Pass" },
  { name: "US Mobile 4G/5G", type: "mobile", country: "United States", countryCode: "US", pricePerUnit: 2500, unit: "proxy/mo", duration: 30, description: "Real US mobile carrier IP (AT&T, T-Mobile, Verizon). Highest trust level.", features: ["4G/5G carrier", "Highest trust", "Auto-rotation", "Carrier selection"], inStock: true, bandwidth: "20 GB", speed: "50 Mbps", protocol: "HTTP/HTTPS", authentication: "User:Pass" },
  { name: "UK Mobile 4G/5G", type: "mobile", country: "United Kingdom", countryCode: "GB", pricePerUnit: 2800, unit: "proxy/mo", duration: 30, description: "UK mobile carrier proxy from EE, Vodafone, Three.", features: ["4G/5G carrier", "Highest trust", "Auto-rotation", "HTTP/HTTPS"], inStock: true, bandwidth: "20 GB", speed: "50 Mbps", protocol: "HTTP/HTTPS", authentication: "User:Pass" },
  { name: "US ISP Proxy", type: "isp", country: "United States", countryCode: "US", pricePerUnit: 700, unit: "proxy/mo", duration: 30, description: "Datacenter-hosted IP registered to major US ISP. Speed of DC, trust of residential.", features: ["ISP-registered IP", "DC speed", "Residential trust", "HTTP/HTTPS"], inStock: true, bandwidth: "Unlimited", speed: "1 Gbps", protocol: "HTTP/HTTPS", authentication: "User:Pass" },
  { name: "UK ISP Proxy", type: "isp", country: "United Kingdom", countryCode: "GB", pricePerUnit: 750, unit: "proxy/mo", duration: 30, description: "UK ISP-registered datacenter proxy. Best of both worlds.", features: ["ISP-registered IP", "DC speed", "Residential trust", "Low latency"], inStock: true, bandwidth: "Unlimited", speed: "1 Gbps", protocol: "HTTP/HTTPS", authentication: "User:Pass" },
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  const User = mongoose.models.User || mongoose.model("User", UserSchema);
  const ProxyProduct = mongoose.models.ProxyProduct || mongoose.model("ProxyProduct", ProxyProductSchema);

  // Seed test user
  const existing = await User.findOne({ email: "test@gmail.com" });
  if (existing) {
    existing.balance = 1000000; // $10,000.00 in cents
    existing.passwordHash = await bcrypt.hash("test123!", 12);
    await existing.save();
    console.log("Updated test user balance to $10,000");
  } else {
    await User.create({
      email: "test@gmail.com",
      passwordHash: await bcrypt.hash("test123!", 12),
      name: "Test",
      surname: "User",
      phone: "+1 (555) 000-0000",
      dateOfBirth: new Date("1995-01-15"),
      address: { street: "123 Test Street, Apt 1", city: "New York", country: "United States", postCode: "10001" },
      balance: 1000000,
      currency: "USD",
      agreedToTerms: true,
      agreedAt: new Date(),
    });
    console.log("Created test user: test@gmail.com / test123! ($10,000 balance)");
  }

  // Seed products
  await ProxyProduct.deleteMany({});
  await ProxyProduct.insertMany(PRODUCTS);
  console.log(`Seeded ${PRODUCTS.length} proxy products`);

  await mongoose.disconnect();
  console.log("Done!");
}

seed().catch((err) => { console.error(err); process.exit(1); });
