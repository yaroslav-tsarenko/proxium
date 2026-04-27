"use client";

import { Wifi, Globe, Shield, Zap, Clock, Lock, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const features = [
  { icon: Wifi, title: "ISP-Level IPs", description: "Static residential IPs with datacenter-grade speed and reliability." },
  { icon: Clock, title: "Persistent Sessions", description: "Keep the same IP for as long as needed. No forced rotation." },
  { icon: Globe, title: "Global Coverage", description: "Available in key countries and regions worldwide." },
  { icon: Shield, title: "High Anonymity", description: "Appear as a residential user with ISP-backed IP addresses." },
  { icon: Zap, title: "Fast Speeds", description: "Datacenter-level speeds with residential-level trust." },
  { icon: Lock, title: "Secure Access", description: "Authenticated connections with dashboard-managed credentials." },
];

const included = ["HTTP(S) & SOCKS5 support", "Country selection", "Dashboard management", "Credential copy", "Usage tracking", "Support access"];

export default function ISPPage() {
  return (
    <>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center"><Wifi className="w-6 h-6 text-violet-400" /></div>
              </div>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight">ISP Proxies</h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">Static residential IPs with datacenter speed. Persistent sessions for account management, social media, and long-running tasks.</p>
              <div className="flex items-center gap-4 mt-8">
                <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]">Buy with Balance</Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <Container>
          <ScrollReveal><h2 className="text-zinc-50 text-3xl font-bold tracking-tight text-center">Why choose ISP proxies?</h2></ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feat) => { const Icon = feat.icon; return (
              <div key={feat.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center"><Icon className="w-5 h-5 text-violet-400" /></div>
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
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">Ready to buy ISP proxies?</h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">Top up your balance and purchase ISP proxies in minutes.</p>
              <div className="mt-8"><Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]">Get Started</Link></div>
            </div>
          </div>
        </ScrollReveal></Container>
      </section>
    </>
  );
}
