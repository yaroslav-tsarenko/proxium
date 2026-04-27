"use client";

import { useTranslations } from "next-intl";
import { Globe, Server, Smartphone, Wifi } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import GlowCard from "@/components/custom/GlowCard";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const products = [
  {
    key: "residential" as const,
    icon: Globe,
    glowColor: "rgba(34,197,94,0.15)",
    iconBg: "text-green-400",
    hasBadge: true,
  },
  {
    key: "datacenter" as const,
    icon: Server,
    glowColor: "rgba(6,182,212,0.15)",
    iconBg: "text-cyan-400",
    hasBadge: false,
  },
  {
    key: "mobile" as const,
    icon: Smartphone,
    glowColor: "rgba(139,92,246,0.15)",
    iconBg: "text-violet-400",
    hasBadge: true,
  },
  {
    key: "isp" as const,
    icon: Wifi,
    glowColor: "rgba(59,130,246,0.15)",
    iconBg: "text-blue-400",
    hasBadge: false,
  },
];

export default function ProductsGrid() {
  const t = useTranslations("products");

  return (
    <section className="py-24 lg:py-32 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
              &#9670; {t("sectionTag")}
            </span>
            <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
              {t("title")}
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <GlowCard key={product.key} glowColor={product.glowColor}>
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${product.iconBg}`} />
                  </div>
                  {product.hasBadge && (
                    <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold">
                      {t(`${product.key}.badge`)}
                    </span>
                  )}
                </div>

                <h3 className="text-zinc-50 text-xl font-semibold mt-4">
                  {t(`${product.key}.title`)}
                </h3>
                <p className="text-zinc-400 text-sm mt-3">
                  {t(`${product.key}.description`)}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-400 text-sm font-medium">
                    {t(`${product.key}.startingAt`)}
                  </span>
                  <Link
                    href="/products"
                    className="text-zinc-400 text-sm hover:text-zinc-200 transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </GlowCard>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
