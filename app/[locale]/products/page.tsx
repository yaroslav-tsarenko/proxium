"use client";

import { useTranslations } from "next-intl";
import { Server, Globe, RefreshCw, Shield, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const products = [
  {
    key: "datacenter" as const,
    icon: Server,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    accent: "border-zinc-800 hover:border-blue-500/30",
    features: [
      "High-speed proxy connections",
      "Shared and dedicated options",
      "Optimized for bulk operations",
      "Multiple location support",
      "HTTP(S) & SOCKS5 protocols",
    ],
  },
  {
    key: "residential" as const,
    icon: Globe,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    accent: "border-zinc-800 hover:border-green-500/30",
    features: [
      "Real residential IP addresses",
      "Persistent sessions available",
      "Country-level selection",
      "Ideal for account management",
      "Low detection rates",
    ],
  },
  {
    key: "rotating" as const,
    icon: RefreshCw,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    accent: "border-zinc-800 hover:border-cyan-500/30",
    features: [
      "Automatic IP rotation",
      "New IP per request or interval",
      "Large-scale data collection",
      "Multiple countries supported",
      "Reduced blocking risk",
    ],
  },
  {
    key: "dedicated" as const,
    icon: Shield,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    accent: "border-zinc-800 hover:border-violet-500/30",
    features: [
      "Exclusive IPs for your account",
      "Maximum control and reliability",
      "Consistent performance",
      "Sensitive operations safe",
      "Full session control",
    ],
  },
];

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                {t("sectionTag")}
              </span>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                {t("title")}
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                {t("subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.key}
                  className={`bg-zinc-900 border ${product.accent} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-6 h-6 ${product.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-zinc-50 text-xl font-bold">
                        {t(`${product.key}.title`)}
                      </h2>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                    {t(`${product.key}.description`)}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {product.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-zinc-300 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="/get-started"
                      className="inline-flex items-center gap-1 text-green-400 text-sm font-semibold hover:text-green-300 transition-colors"
                    >
                      Buy with Balance <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <Container>
          <ScrollReveal>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                  Not sure which proxy to choose?
                </h2>
                <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                  Contact our team and we&apos;ll help you find the right proxy type for your use case.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    Contact Support
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
