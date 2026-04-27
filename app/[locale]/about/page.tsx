"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Link } from "@/i18n/navigation";

const stats = [
  { value: "85M+", label: "Residential IPs" },
  { value: "195+", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10K+", label: "Active Users" },
  { value: "50B+", label: "Requests/Month" },
  { value: "24/7", label: "Support" },
];

const values = [
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprise charges. What you see is what you pay. Our pricing is public, our SLAs are guaranteed, and our status page is always live.",
  },
  {
    title: "Privacy First",
    description:
      "We never log your target URLs or response content. Your traffic is your business. We comply with GDPR, CCPA, and follow strict data minimization principles.",
  },
  {
    title: "Ethical Sourcing",
    description:
      "Every residential and mobile IP in our network comes from opt-in programs with full user consent. We audit our sources regularly and reject any provider that fails.",
  },
  {
    title: "Developer Experience",
    description:
      "Built by developers, for developers. One API for all proxy types, comprehensive docs, SDKs in every major language, and a dashboard that actually helps you debug.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
                &#9670; About Us
              </span>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                Building the backbone of the data-driven web
              </h1>
              <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto">
                Proxium was founded with a simple mission: make proxy
                infrastructure as reliable and easy to use as any other cloud
                service. No black boxes, no shady practices — just clean, fast,
                and ethical proxy access at scale.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-zinc-50 text-3xl font-bold tracking-tight">
                  Our story
                </h2>
                <div className="mt-6 space-y-4 text-zinc-400">
                  <p>
                    We started Proxium in 2023 after spending years fighting with
                    unreliable proxy providers. Slow speeds, hidden fees,
                    questionable IP sourcing, and APIs that felt like they were
                    designed in 2010.
                  </p>
                  <p>
                    We knew there had to be a better way. So we built Proxium
                    from scratch — a modern proxy platform with a developer-first
                    API, transparent pricing, and an ethical supply chain.
                  </p>
                  <p>
                    Today, Proxium powers data collection for thousands of
                    companies, from startups scraping their first dataset to
                    enterprises processing billions of requests per month.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-zinc-50 text-xl font-semibold mb-6">
                  Our mission
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  To democratize access to web data by providing the most
                  reliable, ethical, and developer-friendly proxy infrastructure
                  in the world. We believe that data access should be fast,
                  affordable, and transparent — without compromising on privacy
                  or ethics.
                </p>
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="text-green-400 text-sm font-medium">
                    &quot;The best proxy is the one you never have to think
                    about.&quot;
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    — Proxium founding team
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight text-center">
              Proxium in numbers
            </h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
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

      {/* Values */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
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
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8"
              >
                <h3 className="text-zinc-50 text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-3">
                  {value.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="bg-gradient-to-r from-green-600/20 via-cyan-600/10 to-violet-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                Join thousands of teams using Proxium
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                Start your free trial today. No credit card required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-zinc-800 text-zinc-50 font-semibold text-base hover:bg-zinc-700 transition-colors"
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
