"use client";

import { useTranslations } from "next-intl";
import {
  Globe,
  Shield,
  Zap,
  MapPin,
  RotateCcw,
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
    icon: Globe,
    title: "85M+ Real IPs",
    description:
      "Access the largest pool of residential IPs sourced from real ISPs across 195+ countries.",
  },
  {
    icon: Shield,
    title: "Highest Anonymity",
    description:
      "Appear as a real user with genuine IP fingerprints. Lowest block rates in the industry.",
  },
  {
    icon: MapPin,
    title: "Precision Targeting",
    description:
      "Target by country, state, city, or ASN. Get the exact location you need for your task.",
  },
  {
    icon: RotateCcw,
    title: "Smart Rotation",
    description:
      "Automatic IP rotation with configurable intervals. Sticky sessions up to 30 minutes.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description:
      "Average response time under 0.6 seconds with optimized routing and load balancing.",
  },
  {
    icon: Lock,
    title: "Ethically Sourced",
    description:
      "All IPs come from opt-in networks with full user consent. GDPR and CCPA compliant.",
  },
];

const codeExamples = [
  {
    label: "cURL",
    language: "bash",
    code: `curl -x proxy.proxium.io:7777 \\
  -U "user-residential:pass" \\
  "https://httpbin.org/ip"`,
  },
  {
    label: "Python",
    language: "python",
    code: `import requests

proxies = {
    "http": "http://user-residential:pass@proxy.proxium.io:7777",
    "https": "http://user-residential:pass@proxy.proxium.io:7777",
}

response = requests.get("https://httpbin.org/ip", proxies=proxies)
print(response.json())`,
  },
  {
    label: "Node.js",
    language: "javascript",
    code: `const HttpsProxyAgent = require("https-proxy-agent");

const agent = new HttpsProxyAgent(
  "http://user-residential:pass@proxy.proxium.io:7777"
);

const res = await fetch("https://httpbin.org/ip", { agent });
const data = await res.json();
console.log(data);`,
  },
];

export default function ResidentialPage() {
  const t = useTranslations("products");

  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
                  Most Popular
                </span>
              </div>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight">
                {t("residential.title")}
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                {t("residential.description")}
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  Start Free Trial
                </Link>
                <span className="text-green-400 font-medium">
                  {t("residential.startingAt")}
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
              Why choose residential proxies?
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
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-400" />
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
                Simple, usage-based pricing
              </h2>
              <p className="text-zinc-400 text-lg mt-4">
                Pay only for the bandwidth you use. Volume discounts available.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { range: "1 - 50 GB", price: "$2.80/GB" },
              { range: "50 - 250 GB", price: "$2.20/GB" },
              { range: "250+ GB", price: "Custom" },
            ].map((tier) => (
              <div
                key={tier.range}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
              >
                <p className="text-zinc-400 text-sm">{tier.range}</p>
                <p className="text-zinc-50 text-3xl font-bold mt-2">
                  {tier.price}
                </p>
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
                  "195+ countries geo-targeting",
                  "City & ASN-level targeting",
                  "Rotating and sticky sessions",
                  "Real-time dashboard",
                  "API access with SDKs",
                  "99.9% uptime SLA",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-zinc-300 text-sm"
                  >
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
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
            <div className="bg-gradient-to-r from-green-600/20 via-cyan-600/10 to-violet-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                Try residential proxies free
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                Get 1 GB of free bandwidth with full access to 85M+ IPs.
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
