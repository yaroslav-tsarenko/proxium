"use client";

import { useTranslations } from "next-intl";
import { Server, Globe, RefreshCw, Shield } from "lucide-react";
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
  },
  {
    key: "residential" as const,
    icon: Globe,
    iconColor: "text-primary-600",
    iconBg: "bg-primary-50",
    accent: "border-primary-100 hover:border-primary-200",
  },
  {
    key: "rotating" as const,
    icon: RefreshCw,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    accent: "border-emerald-100 hover:border-emerald-200",
  },
  {
    key: "dedicated" as const,
    icon: Shield,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    accent: "border-orange-100 hover:border-orange-200",
  },
];

export default function ProductsGrid() {
  const t = useTranslations("products");

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              {t("sectionTag")}
            </span>
            <h2 className="text-navy-900 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
              {t("title")}
            </h2>
            <p className="text-navy-500 text-lg mt-4 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {products.map((product) => {
            const Icon = product.icon;
            const bestFor = t.raw(`${product.key}.bestFor`) as string[];

            return (
              <div
                key={product.key}
                className={`bg-white border-2 ${product.accent} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${product.iconColor}`} />
                  </div>
                  {(() => {
                    try {
                      const badge = t(`${product.key}.badge`);
                      return badge ? (
                        <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-xs font-semibold">
                          {badge}
                        </span>
                      ) : null;
                    } catch {
                      return null;
                    }
                  })()}
                </div>

                <h3 className="text-navy-900 text-xl font-bold mt-5">
                  {t(`${product.key}.title`)}
                </h3>
                <p className="text-navy-500 text-sm mt-3 leading-relaxed">
                  {t(`${product.key}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {bestFor.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-navy-50 text-navy-600 text-xs font-medium px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors"
                  >
                    {t(`${product.key}.cta`)} &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
