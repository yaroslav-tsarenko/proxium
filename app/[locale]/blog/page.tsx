"use client";

import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Clock, ArrowRight } from "lucide-react";

const samplePosts = [
  {
    slug: "residential-vs-datacenter",
    title: "Residential vs Datacenter Proxies: Which Should You Choose?",
    excerpt:
      "A comparison of residential and datacenter proxies covering speed, anonymity, cost, and ideal use cases for each type.",
    date: "2026-04-15",
    readTime: "8 min read",
    category: "Guide",
  },
  {
    slug: "balance-model-benefits",
    title: "Why Balance-Based Proxy Purchasing Works Better",
    excerpt:
      "How a simple top-up model saves money compared to traditional subscription plans, and why more businesses are switching.",
    date: "2026-04-08",
    readTime: "6 min read",
    category: "Guide",
  },
  {
    slug: "web-scraping-best-practices",
    title: "Web Scraping Best Practices in 2026",
    excerpt:
      "Learn the latest techniques for effective web scraping, including proxy rotation strategies and anti-detection tips.",
    date: "2026-03-25",
    readTime: "12 min read",
    category: "Tutorial",
  },
  {
    slug: "choosing-proxy-locations",
    title: "How to Choose the Right Proxy Locations",
    excerpt:
      "Selecting the right country and region for your proxies makes a significant difference. Here's how to decide.",
    date: "2026-03-18",
    readTime: "7 min read",
    category: "Guide",
  },
  {
    slug: "social-media-proxy-setup",
    title: "Setting Up Proxies for Social Media Management",
    excerpt:
      "Step-by-step guide to configuring proxies for managing multiple social media accounts safely and efficiently.",
    date: "2026-03-10",
    readTime: "10 min read",
    category: "Tutorial",
  },
  {
    slug: "proxy-use-cases-ecommerce",
    title: "Proxy Use Cases for E-commerce Businesses",
    excerpt:
      "How online retailers use proxies for price monitoring, competitor research, and market analysis across regions.",
    date: "2026-03-01",
    readTime: "5 min read",
    category: "Industry",
  },
];

const categoryColors: Record<string, string> = {
  Guide: "bg-green-500/10 text-green-400",
  Tutorial: "bg-blue-500/10 text-blue-400",
  Industry: "bg-cyan-500/10 text-cyan-400",
};

export default function BlogPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              Blog
            </span>
            <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              Proxy insights & guides
            </h1>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              Guides, tutorials, and industry insights from the Proxium team.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {samplePosts.map((post) => (
            <article
              key={post.slug}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    categoryColors[post.category] ?? categoryColors.Guide
                  }`}
                >
                  {post.category}
                </span>
              </div>

              <h2 className="text-zinc-50 text-lg font-bold group-hover:text-green-400 transition-colors">
                {post.title}
              </h2>

              <p className="text-zinc-400 text-sm mt-3 flex-1 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3 text-zinc-500 text-xs">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="text-zinc-500 text-xs group-hover:text-green-400 transition-colors flex items-center gap-1">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </StaggerChildren>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-xl mx-auto">
              <p className="text-zinc-400 text-sm">
                More articles coming soon. Subscribe to get notified.
              </p>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                />
                <button className="px-6 py-2.5 rounded-xl bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
