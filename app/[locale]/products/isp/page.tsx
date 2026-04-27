"use client";

import { useTranslations } from "next-intl";
import {
  Wifi,
  Zap,
  Clock,
  Shield,
  Globe,
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
    icon: Wifi,
    title: "Static Residential",
    description:
      "Real ISP-assigned IPs that never change. Combine residential trust with datacenter stability.",
  },
  {
    icon: Zap,
    title: "Datacenter Speed",
    description:
      "Hosted in data centers for lightning-fast response times while appearing residential.",
  },
  {
    icon: Clock,
    title: "Unlimited Sessions",
    description:
      "Keep the same IP for as long as you need. No forced rotation or session timeouts.",
  },
  {
    icon: Shield,
    title: "Account Safe",
    description:
      "Perfect for managing multiple accounts. Each account gets its own dedicated IP.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Available in 50+ countries with city-level targeting for precise geo requirements.",
  },
  {
    icon: Lock,
    title: "Clean IPs",
    description:
      "All IPs are verified clean with no prior abuse history. Fresh pools updated regularly.",
  },
];

const codeExamples = [
  {
    label: "cURL",
    language: "bash",
    code: `curl -x isp.proxium.io:6666 \\
  -U "user-isp-us-123:pass" \\
  "https://httpbin.org/ip"`,
  },
  {
    label: "Python",
    language: "python",
    code: `import requests

proxies = {
    "http": "http://user-isp-us-123:pass@isp.proxium.io:6666",
    "https": "http://user-isp-us-123:pass@isp.proxium.io:6666",
}

response = requests.get("https://httpbin.org/ip", proxies=proxies)
print(response.json())  # Same IP every time`,
  },
  {
    label: "Node.js",
    language: "javascript",
    code: `const HttpsProxyAgent = require("https-proxy-agent");

const agent = new HttpsProxyAgent(
  "http://user-isp-us-123:pass@isp.proxium.io:6666"
);

const res = await fetch("https://httpbin.org/ip", { agent });
const data = await res.json();
console.log(data); // Same IP every time`,
  },
];

export default function ISPPage() {
  const t = useTranslations("products");

  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight">
                {t("isp.title")}
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                {t("isp.description")}
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  Start Free Trial
                </Link>
                <span className="text-blue-400 font-medium">
                  {t("isp.startingAt")}
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
              The best of both worlds
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
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
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
                Per-IP pricing
              </h2>
              <p className="text-zinc-400 text-lg mt-4">
                Pay per IP with unlimited bandwidth and session duration.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { range: "1 - 50 IPs", price: "$2.00/IP", note: "per month" },
              { range: "50 - 200 IPs", price: "$1.50/IP", note: "per month" },
              { range: "200+ IPs", price: "Custom", note: "volume pricing" },
            ].map((tier) => (
              <div
                key={tier.range}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
              >
                <p className="text-zinc-400 text-sm">{tier.range}</p>
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
                  "Static residential IPs",
                  "Unlimited bandwidth",
                  "Unlimited session duration",
                  "50+ country coverage",
                  "HTTP(S) & SOCKS5",
                  "Real-time dashboard",
                  "99.9% uptime SLA",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-zinc-300 text-sm"
                  >
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
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
            <div className="bg-gradient-to-r from-blue-600/20 via-green-600/10 to-cyan-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                Try ISP proxies free
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                Get static residential IPs with datacenter speed. No session
                limits.
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
