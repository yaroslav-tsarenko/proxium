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
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                About Us
              </span>
              <h1 className="text-navy-900 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                Reliable proxies, simple purchasing
              </h1>
              <p className="text-navy-500 text-lg mt-6 max-w-2xl mx-auto">
                Proxium was built to make buying and using proxies straightforward. No complex plans, no unnecessary subscriptions — just a balance-based model where you pay for what you need.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-surface-1">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-navy-900 text-3xl font-bold tracking-tight">
                  Our approach
                </h2>
                <div className="mt-6 space-y-4 text-navy-500">
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
              <div className="bg-white border border-navy-100 rounded-2xl p-8 shadow-md">
                <h3 className="text-navy-900 text-xl font-bold mb-6">
                  Our mission
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  To provide reliable proxy access with the simplest purchasing model possible. We believe that buying proxies should be as easy as topping up a balance and choosing what you need.
                </p>
                <div className="mt-6 pt-6 border-t border-navy-100">
                  <p className="text-primary-600 text-sm font-medium">
                    &quot;Your balance is your buying power.&quot;
                  </p>
                  <p className="text-navy-400 text-xs mt-1">
                    — Proxium team
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <ScrollReveal>
            <h2 className="text-navy-900 text-3xl font-bold tracking-tight text-center">
              Proxium at a glance
            </h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-primary-600 text-3xl lg:text-4xl font-bold">
                  {stat.value}
                </p>
                <p className="text-navy-500 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-surface-1">
        <Container>
          <ScrollReveal>
            <h2 className="text-navy-900 text-3xl font-bold tracking-tight text-center">
              What we stand for
            </h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-navy-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-navy-900 text-lg font-bold">
                  {value.title}
                </h3>
                <p className="text-navy-500 text-sm mt-3 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <ScrollReveal>
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold">
                Ready to get started?
              </h2>
              <p className="text-navy-300 text-lg mt-4 max-w-2xl mx-auto">
                Top up your balance and buy the proxies you need today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold text-base hover:bg-primary-400 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-navy-600 text-white font-semibold text-base hover:bg-navy-800 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
