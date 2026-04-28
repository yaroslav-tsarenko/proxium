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
      "The two most common proxy types serve very different purposes. Datacenter proxies offer raw speed and low cost — ideal for bulk scraping and high-throughput tasks. Residential proxies provide real consumer IPs, making them harder to detect and better suited for account management or accessing geo-restricted content. This guide breaks down the key differences in speed, anonymity level, pricing structure, and reliability so you can match the right type to your workflow.",
    date: "2026-04-15",
    readTime: "5 min read",
    category: "Guide",
  },
  {
    slug: "balance-model-benefits",
    title: "Why Balance-Based Proxy Purchasing Works Better",
    excerpt:
      "Subscription plans force you to pay for capacity you may not use every month. A balance-based model lets you top up once and buy only the proxies you need, when you need them. No recurring charges, no wasted credits. This article compares the total cost of ownership between subscription providers and pay-as-you-go models across common use cases like scraping, social media management, and market research.",
    date: "2026-04-08",
    readTime: "4 min read",
    category: "Guide",
  },
  {
    slug: "web-scraping-best-practices",
    title: "Web Scraping Best Practices in 2026",
    excerpt:
      "Effective web scraping goes beyond writing a script. You need the right proxy rotation strategy, realistic request headers, proper rate limiting, and error handling for blocked requests. This tutorial covers the essential techniques: rotating residential proxies for high-stealth collection, datacenter proxies for speed-first jobs, session management to avoid bans, and tips for handling CAPTCHAs and JavaScript-rendered pages.",
    date: "2026-03-25",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "choosing-proxy-locations",
    title: "How to Choose the Right Proxy Locations",
    excerpt:
      "Proxy location directly affects what content you can access and how fast your connections are. Choosing a US proxy for monitoring US search results makes sense, but what about multi-region campaigns? This guide explains how to select proxy countries based on your target audience, latency requirements, and content availability.",
    date: "2026-03-18",
    readTime: "3 min read",
    category: "Guide",
  },
  {
    slug: "social-media-proxy-setup",
    title: "Setting Up Proxies for Social Media Management",
    excerpt:
      "Managing multiple social media accounts from a single IP address is a fast way to get flagged. Static residential proxies assign a unique, consistent IP to each account, mimicking normal user behavior. This step-by-step tutorial walks you through proxy configuration for popular social media platforms, covering browser setup, authentication methods, and session persistence.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Tutorial",
  },
  {
    slug: "proxy-use-cases-ecommerce",
    title: "Proxy Use Cases for E-commerce Businesses",
    excerpt:
      "Online retailers use proxies for everything from tracking competitor pricing to verifying ad placements across regions. Datacenter proxies handle high-volume price checks efficiently, while residential proxies let you view storefronts as a local customer would. Learn how e-commerce teams use proxies for MAP monitoring, inventory tracking, and market expansion research.",
    date: "2026-03-01",
    readTime: "4 min read",
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
