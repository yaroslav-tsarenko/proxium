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
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    accent: "border-zinc-800 hover:border-blue-500/30",
  },
  {
    key: "residential" as const,
    icon: Globe,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    accent: "border-zinc-800 hover:border-green-500/30",
  },
  {
    key: "rotating" as const,
    icon: RefreshCw,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    accent: "border-zinc-800 hover:border-cyan-500/30",
  },
  {
    key: "dedicated" as const,
    icon: Shield,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    accent: "border-zinc-800 hover:border-violet-500/30",
  },
];

export default function ProductsGrid() {
  const t = useTranslations("products");

  return (
    <section className="py-20 lg:py-28 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              {t("sectionTag")}
            </span>
            <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
              {t("title")}
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
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
                className={`bg-zinc-900 border ${product.accent} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${product.iconColor}`} />
                  </div>
                  {(() => {
                    try {
                      const badge = t(`${product.key}.badge`);
                      return badge ? (
                        <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs font-semibold">
                          {badge}
                        </span>
                      ) : null;
                    } catch {
                      return null;
                    }
                  })()}
                </div>

                <h3 className="text-zinc-50 text-xl font-bold mt-5">
                  {t(`${product.key}.title`)}
                </h3>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                  {t(`${product.key}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {bestFor.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-zinc-800 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center text-green-400 text-sm font-semibold hover:text-green-300 transition-colors"
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
