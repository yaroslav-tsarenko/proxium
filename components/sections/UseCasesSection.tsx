"use client";

import { useTranslations } from "next-intl";
import {
  Search,
  TrendingUp,
  Eye,
  Users,
  ShoppingCart,
  BarChart2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const useCases = [
  { key: "scraping", icon: Search, iconColor: "text-green-400", iconBg: "bg-green-500/10" },
  { key: "seo", icon: TrendingUp, iconColor: "text-cyan-400", iconBg: "bg-cyan-500/10" },
  { key: "adVerification", icon: Eye, iconColor: "text-violet-400", iconBg: "bg-violet-500/10" },
  { key: "socialMedia", icon: Users, iconColor: "text-blue-400", iconBg: "bg-blue-500/10" },
  { key: "ecommerce", icon: ShoppingCart, iconColor: "text-amber-400", iconBg: "bg-amber-500/10" },
  { key: "market", icon: BarChart2, iconColor: "text-rose-400", iconBg: "bg-rose-500/10" },
] as const;

export default function UseCasesSection() {
  const t = useTranslations("useCases");

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
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;

            return (
              <div
                key={useCase.key}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${useCase.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${useCase.iconColor}`} />
                </div>

                <h3 className="text-zinc-50 text-lg font-semibold mt-4">
                  {t(`items.${useCase.key}.title`)}
                </h3>
                <p className="text-zinc-400 text-sm mt-2">
                  {t(`items.${useCase.key}.description`)}
                </p>
              </div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
