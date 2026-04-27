"use client";

import { Server, Zap, Globe, Shield, BarChart3, Lock, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const features = [
  { icon: Zap, title: "High Speed", description: "Datacenter proxies offer the fastest connection speeds, ideal for bulk operations." },
  { icon: Server, title: "Shared & Dedicated", description: "Choose shared proxies for cost efficiency or dedicated for exclusive access." },
  { icon: Globe, title: "Multiple Locations", description: "Available in key regions worldwide for location-specific tasks." },
  { icon: Shield, title: "Reliable Uptime", description: "Hosted in professional data centers with high availability." },
  { icon: BarChart3, title: "High Throughput", description: "Optimized for large-scale data collection and bulk requests." },
  { icon: Lock, title: "Secure Auth", description: "Username/password authentication with credentials in your dashboard." },
];

const included = ["HTTP(S) & SOCKS5 support", "Country-level selection", "Dashboard management", "One-click credential copy", "Usage tracking", "Support access"];

export default function DatacenterPage() {
  return (
    <>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center"><Server className="w-6 h-6 text-blue-400" /></div>
                <span className="inline-flex items-center bg-blue-500/10 text-blue-400 rounded-full px-3 py-1 text-xs font-semibold">Best Value</span>
              </div>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight">Datacenter Proxies</h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">High-speed proxies from global data centers. Best for bulk operations, fast scraping, and high-throughput tasks where speed matters most.</p>
              <div className="flex items-center gap-4 mt-8">
                <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]">Buy with Balance</Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <Container>
          <ScrollReveal><h2 className="text-zinc-50 text-3xl font-bold tracking-tight text-center">Why choose datacenter proxies?</h2></ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feat) => { const Icon = feat.icon; return (
              <div key={feat.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center"><Icon className="w-5 h-5 text-blue-400" /></div>
                <h3 className="text-zinc-50 text-lg font-bold mt-4">{feat.title}</h3>
                <p className="text-zinc-400 text-sm mt-2">{feat.description}</p>
              </div>
            ); })}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-950">
        <Container><ScrollReveal><div className="max-w-xl mx-auto"><h3 className="text-zinc-50 text-xl font-bold mb-5">Included with every purchase:</h3><ul className="space-y-3">{included.map((item) => (<li key={item} className="flex items-center gap-3 text-zinc-300 text-sm"><Check className="w-4 h-4 text-green-400 shrink-0" />{item}</li>))}</ul></div></ScrollReveal></Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <Container><ScrollReveal>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">Ready to buy datacenter proxies?</h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">Top up your balance and purchase datacenter proxies in minutes.</p>
              <div className="mt-8"><Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]">Get Started</Link></div>
            </div>
          </div>
        </ScrollReveal></Container>
      </section>
    </>
  );
}
