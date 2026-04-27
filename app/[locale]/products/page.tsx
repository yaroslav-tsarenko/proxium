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
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    accent: "border-blue-100 hover:border-blue-200",
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
    iconColor: "text-primary-600",
    iconBg: "bg-primary-50",
    accent: "border-primary-100 hover:border-primary-200",
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
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    accent: "border-emerald-100 hover:border-emerald-200",
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
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    accent: "border-orange-100 hover:border-orange-200",
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
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                {t("sectionTag")}
              </span>
              <h1 className="text-navy-900 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                {t("title")}
              </h1>
              <p className="text-navy-500 text-lg mt-4 max-w-2xl">
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
                  className={`bg-white border-2 ${product.accent} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-6 h-6 ${product.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-navy-900 text-xl font-bold">
                        {t(`${product.key}.title`)}
                      </h2>
                    </div>
                  </div>

                  <p className="text-navy-500 text-sm mt-4 leading-relaxed">
                    {t(`${product.key}.description`)}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {product.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-navy-600 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="/get-started"
                      className="inline-flex items-center gap-1 text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors"
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

      <section className="py-20 lg:py-28 bg-surface-1">
        <Container>
          <ScrollReveal>
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold">
                Not sure which proxy to choose?
              </h2>
              <p className="text-navy-300 text-lg mt-4 max-w-2xl mx-auto">
                Contact our team and we&apos;ll help you find the right proxy type for your use case.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold text-base hover:bg-primary-400 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
