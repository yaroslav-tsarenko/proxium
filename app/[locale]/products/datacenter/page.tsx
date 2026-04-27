"use client";

import { useTranslations } from "next-intl";
import {
  Server,
  Zap,
  Shield,
  Users,
  BarChart2,
  Lock,
  Check,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import CodeSnippet from "@/components/custom/CodeSnippet";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description:
      "Sub-300ms response times from optimized data center infrastructure around the world.",
  },
  {
    icon: Server,
    title: "500K+ IPs",
    description:
      "Massive pool of datacenter IPs across multiple subnets and geographies.",
  },
  {
    icon: Users,
    title: "Shared & Dedicated",
    description:
      "Choose shared pools for cost efficiency or dedicated IPs for exclusive access.",
  },
  {
    icon: BarChart2,
    title: "Bulk Optimized",
    description:
      "Designed for high-throughput operations with unlimited concurrent connections.",
  },
  {
    icon: Shield,
    title: "Subnet Diversity",
    description:
      "IPs spread across thousands of subnets to minimize detection and blocks.",
  },
  {
    icon: Lock,
    title: "IP Authentication",
    description:
      "Support for both username/password and IP whitelist authentication methods.",
  },
];

const codeExamples = [
  {
    label: "cURL",
    language: "bash",
    code: `curl -x dc.proxium.io:8888 \\
  -U "user-datacenter:pass" \\
  "https://httpbin.org/ip"`,
  },
  {
    label: "Python",
    language: "python",
    code: `import requests

proxies = {
    "http": "http://user-datacenter:pass@dc.proxium.io:8888",
    "https": "http://user-datacenter:pass@dc.proxium.io:8888",
}

response = requests.get("https://httpbin.org/ip", proxies=proxies)
print(response.json())`,
  },
  {
    label: "Node.js",
    language: "javascript",
    code: `const HttpsProxyAgent = require("https-proxy-agent");

const agent = new HttpsProxyAgent(
  "http://user-datacenter:pass@dc.proxium.io:8888"
);

const res = await fetch("https://httpbin.org/ip", { agent });
const data = await res.json();
console.log(data);`,
  },
];

export default function DatacenterPage() {
  const t = useTranslations("products");

  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight">
                {t("datacenter.title")}
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                {t("datacenter.description")}
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  Start Free Trial
                </Link>
                <span className="text-cyan-400 font-medium">
                  {t("datacenter.startingAt")}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight text-center">
              Built for speed and scale
            </h2>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-zinc-50 text-lg font-semibold mt-4">
                    {feat.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-zinc-50 text-3xl font-bold tracking-tight">
                Flexible pricing
              </h2>
              <p className="text-zinc-400 text-lg mt-4">
                Choose shared or dedicated IPs based on your needs.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { label: "Shared IPs", price: "$0.80/IP", note: "per month" },
              {
                label: "Dedicated IPs",
                price: "$2.50/IP",
                note: "per month",
              },
              { label: "Custom Pool", price: "Contact Us", note: "volume pricing" },
            ].map((tier) => (
              <div
                key={tier.label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
              >
                <p className="text-zinc-400 text-sm">{tier.label}</p>
                <p className="text-zinc-50 text-3xl font-bold mt-2">
                  {tier.price}
                </p>
                <p className="text-zinc-500 text-xs mt-1">{tier.note}</p>
              </div>
            ))}
          </StaggerChildren>

          <ScrollReveal>
            <div className="mt-12 max-w-xl mx-auto">
              <h3 className="text-zinc-50 text-lg font-semibold mb-4">
                All plans include:
              </h3>
              <ul className="space-y-2">
                {[
                  "HTTP(S) & SOCKS5 support",
                  "Unlimited bandwidth",
                  "Multiple subnet diversity",
                  "IP whitelisting & user/pass auth",
                  "Real-time dashboard",
                  "API access",
                  "99.9% uptime SLA",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-zinc-300 text-sm"
                  >
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Code Example */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight text-center mb-12">
              Quick integration
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <CodeSnippet tabs={codeExamples} />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="bg-gradient-to-r from-cyan-600/20 via-green-600/10 to-violet-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                Try datacenter proxies free
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                Get started with shared datacenter IPs and upgrade anytime.
              </p>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
