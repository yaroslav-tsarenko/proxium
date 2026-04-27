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
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center"><Wifi className="w-6 h-6 text-orange-500" /></div>
              </div>
              <h1 className="text-navy-900 text-4xl lg:text-5xl font-bold tracking-tight">ISP Proxies</h1>
              <p className="text-navy-500 text-lg mt-4 max-w-2xl">Static residential IPs with datacenter speed. Persistent sessions for account management, social media, and long-running tasks.</p>
              <div className="flex items-center gap-4 mt-8">
                <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold text-base hover:bg-primary-600 transition-colors shadow-sm">Buy with Balance</Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-surface-1">
        <Container>
          <ScrollReveal><h2 className="text-navy-900 text-3xl font-bold tracking-tight text-center">Why choose ISP proxies?</h2></ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feat) => { const Icon = feat.icon; return (
              <div key={feat.title} className="bg-white border border-navy-100 rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center"><Icon className="w-5 h-5 text-orange-500" /></div>
                <h3 className="text-navy-900 text-lg font-bold mt-4">{feat.title}</h3>
                <p className="text-navy-500 text-sm mt-2">{feat.description}</p>
              </div>
            ); })}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <Container><ScrollReveal><div className="max-w-xl mx-auto"><h3 className="text-navy-900 text-xl font-bold mb-5">Included with every purchase:</h3><ul className="space-y-3">{included.map((item) => (<li key={item} className="flex items-center gap-3 text-navy-600 text-sm"><Check className="w-4 h-4 text-primary-500 shrink-0" />{item}</li>))}</ul></div></ScrollReveal></Container>
      </section>

      <section className="py-20 lg:py-28 bg-surface-1">
        <Container><ScrollReveal>
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
            <h2 className="text-white text-3xl lg:text-4xl font-bold">Ready to buy ISP proxies?</h2>
            <p className="text-navy-300 text-lg mt-4 max-w-2xl mx-auto">Top up your balance and purchase ISP proxies in minutes.</p>
            <div className="mt-8"><Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold text-base hover:bg-primary-400 transition-colors">Get Started</Link></div>
          </div>
        </ScrollReveal></Container>
      </section>
    </>
  );
}
