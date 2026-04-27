"use client";

import { useTranslations } from "next-intl";
import {
  Smartphone,
  Signal,
  MapPin,
  Fingerprint,
  RotateCcw,
  Shield,
  Check,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import CodeSnippet from "@/components/custom/CodeSnippet";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const features = [
  {
    icon: Signal,
    title: "Real 4G/5G IPs",
    description:
      "IPs assigned by real mobile carriers. Indistinguishable from genuine mobile users.",
  },
  {
    icon: Smartphone,
    title: "10M+ Mobile IPs",
    description:
      "Massive pool across 160+ countries with coverage from all major carriers.",
  },
  {
    icon: Fingerprint,
    title: "Device Fingerprints",
    description:
      "Genuine mobile device fingerprints that pass even the most advanced anti-bot systems.",
  },
  {
    icon: MapPin,
    title: "Carrier Targeting",
    description:
      "Target specific mobile carriers, countries, and regions for precise results.",
  },
  {
    icon: RotateCcw,
    title: "Auto Rotation",
    description:
      "Automatic IP rotation on each request or configurable sticky sessions.",
  },
  {
    icon: Shield,
    title: "Highest Trust Score",
    description:
      "Mobile IPs have the highest trust scores, making them nearly impossible to detect.",
  },
];

const codeExamples = [
  {
    label: "cURL",
    language: "bash",
    code: `curl -x mobile.proxium.io:9999 \\
  -U "user-mobile:pass" \\
  "https://httpbin.org/ip"`,
  },
  {
    label: "Python",
    language: "python",
    code: `import requests

proxies = {
    "http": "http://user-mobile:pass@mobile.proxium.io:9999",
    "https": "http://user-mobile:pass@mobile.proxium.io:9999",
}

response = requests.get("https://httpbin.org/ip", proxies=proxies)
print(response.json())`,
  },
  {
    label: "Node.js",
    language: "javascript",
    code: `const HttpsProxyAgent = require("https-proxy-agent");

const agent = new HttpsProxyAgent(
  "http://user-mobile:pass@mobile.proxium.io:9999"
);

const res = await fetch("https://httpbin.org/ip", { agent });
const data = await res.json();
console.log(data);`,
  },
];

export default function MobilePage() {
  const t = useTranslations("products");

  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-violet-400" />
                </div>
                <span className="inline-flex items-center bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
                  Premium
                </span>
              </div>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight">
                {t("mobile.title")}
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                {t("mobile.description")}
              </p>
              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  Start Free Trial
                </Link>
                <span className="text-violet-400 font-medium">
                  {t("mobile.startingAt")}
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
              The most trusted proxy type
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
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-violet-400" />
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
                Premium pricing
              </h2>
              <p className="text-zinc-400 text-lg mt-4">
                Mobile proxies are premium products with the highest trust
                scores.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { range: "1 - 20 GB", price: "$6.00/GB" },
              { range: "20 - 100 GB", price: "$4.50/GB" },
              { range: "100+ GB", price: "Custom" },
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
                  "Real 4G/5G carrier IPs",
                  "160+ country coverage",
                  "Carrier-level targeting",
                  "Rotating & sticky sessions",
                  "HTTP(S) & SOCKS5",
                  "Real-time dashboard",
                  "99.9% uptime SLA",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-zinc-300 text-sm"
                  >
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
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
            <div className="bg-gradient-to-r from-violet-600/20 via-green-600/10 to-cyan-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                Try mobile proxies free
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                Experience the highest trust score proxies with a free trial.
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
