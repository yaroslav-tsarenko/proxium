import { NextResponse } from "next/server";

const posts = [
  {
    slug: "residential-vs-datacenter",
    title: "Residential vs Datacenter Proxies: Which Should You Choose?",
    excerpt:
      "A comprehensive comparison of residential and datacenter proxies covering speed, anonymity, cost, and ideal use cases.",
    date: "2026-04-15",
    readTime: "8 min read",
    category: "Guide",
    author: "Proxium Team",
  },
  {
    slug: "web-scraping-best-practices",
    title: "Web Scraping Best Practices in 2026",
    excerpt:
      "Learn the latest techniques for effective and ethical web scraping, including proxy rotation strategies and anti-detection tips.",
    date: "2026-04-08",
    readTime: "12 min read",
    category: "Tutorial",
    author: "Proxium Team",
  },
  {
    slug: "proxy-authentication-guide",
    title: "The Complete Guide to Proxy Authentication",
    excerpt:
      "Everything you need to know about proxy authentication methods: username/password, IP whitelisting, and API tokens.",
    date: "2026-03-25",
    readTime: "6 min read",
    category: "Docs",
    author: "Proxium Team",
  },
  {
    slug: "mobile-proxies-explained",
    title: "Mobile Proxies Explained: Why They Have the Highest Trust Score",
    excerpt:
      "Dive deep into mobile proxies — how they work, why sites trust them, and when you should use them over other proxy types.",
    date: "2026-03-18",
    readTime: "10 min read",
    category: "Guide",
    author: "Proxium Team",
  },
  {
    slug: "geo-targeting-strategies",
    title: "Advanced Geo-Targeting Strategies for Data Collection",
    excerpt:
      "Master geo-targeting with proxies: country, city, and ASN-level targeting for accurate localized data.",
    date: "2026-03-10",
    readTime: "7 min read",
    category: "Tutorial",
    author: "Proxium Team",
  },
  {
    slug: "ethical-proxy-sourcing",
    title: "Ethical Proxy Sourcing: How Proxium Builds Trust",
    excerpt:
      "Our commitment to ethical IP sourcing and why it matters for your business compliance and reputation.",
    date: "2026-03-01",
    readTime: "5 min read",
    category: "Company",
    author: "Proxium Team",
  },
];

export async function GET() {
  return NextResponse.json({ posts }, { status: 200 });
}
