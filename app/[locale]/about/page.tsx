"use client";

import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Link } from "@/i18n/navigation";

const stats = [
  { value: "50+", label: "Global Locations" },
  { value: "6+", label: "Proxy Types" },
  { value: "99.5%", label: "Reliability" },
  { value: "24/7", label: "Support" },
];

const values = [
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprise charges. You see exactly what you pay before every purchase. Balance-based spending means full control.",
  },
  {
    title: "Privacy",
    description:
      "We take your privacy seriously. Your proxy usage and account data are protected with industry-standard security practices.",
  },
  {
    title: "Simplicity",
    description:
      "No complicated plans or subscription tiers. Top up your balance, buy what you need, manage everything from one dashboard.",
  },
  {
    title: "Reliability",
    description:
      "Proxy infrastructure you can count on. We maintain high uptime and consistent performance across all proxy types and locations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                About Us
              </span>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                Reliable proxies, simple purchasing
              </h1>
              <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto">
                Proxium was built to make buying and using proxies straightforward. No complex plans, no unnecessary subscriptions — just a balance-based model where you pay for what you need.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-zinc-50 text-3xl font-bold tracking-tight">
                  Our approach
                </h2>
                <div className="mt-6 space-y-4 text-zinc-400">
                  <p>
                    We noticed that most proxy services make purchasing unnecessarily complicated with tiered plans, feature gates, and recurring charges for resources you might not fully use.
                  </p>
                  <p>
                    Proxium takes a different approach. You add money to your account balance and spend it on exactly the proxies you need — datacenter, residential, rotating, or dedicated. No waste, no lock-in.
                  </p>
                  <p>
                    Your dashboard gives you full visibility into your balance, purchases, active proxies, and usage. Everything in one place.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-zinc-50 text-xl font-bold mb-6">
                  Our mission
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  To provide reliable proxy access with the simplest purchasing model possible. We believe that buying proxies should be as easy as topping up a balance and choosing what you need.
                </p>
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="text-green-400 text-sm font-medium">
                    &quot;Your balance is your buying power.&quot;
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    — Proxium team
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight text-center">
              Proxium at a glance
            </h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-green-400 text-3xl lg:text-4xl font-bold">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight text-center">
              What we stand for
            </h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300"
              >
                <h3 className="text-zinc-50 text-lg font-bold">
                  {value.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                  Ready to get started?
                </h2>
                <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                  Top up your balance and buy the proxies you need today.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-zinc-700 text-zinc-300 font-semibold text-base hover:bg-zinc-800 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
