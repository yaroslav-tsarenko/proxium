"use client";

import { useTranslations } from "@/lib/translations";
import {
  Search,
  Users,
  ShoppingCart,
  TrendingUp,
  Shield,
  BarChart2,
  Eye,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const useCases = [
  { key: "scraping", icon: Search, color: "text-green-400", bg: "bg-green-500/10" },
  { key: "socialMedia", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
  { key: "ecommerce", icon: ShoppingCart, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { key: "seo", icon: TrendingUp, color: "text-violet-400", bg: "bg-violet-500/10" },
  { key: "antiFraud", icon: Shield, color: "text-red-400", bg: "bg-red-500/10" },
  { key: "market", icon: BarChart2, color: "text-blue-400", bg: "bg-blue-500/10" },
  { key: "reputation", icon: Eye, color: "text-green-400", bg: "bg-green-500/10" },
] as const;

export default function UseCasesSection() {
  const t = useTranslations("useCases");

  return (
    <section className="py-20 lg:py-28 bg-zinc-900/30">
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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;

            return (
              <div
                key={useCase.key}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${useCase.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${useCase.color}`} />
                </div>

                <h3 className="text-zinc-50 text-lg font-bold mt-5">
                  {t(`items.${useCase.key}.title`)}
                </h3>
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  {t(`items.${useCase.key}.description`)}
                </p>

                <div className="mt-4">
                  <span className="inline-flex items-center bg-green-500/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-lg">
                    Best: {t(`items.${useCase.key}.bestProxy`)}
                  </span>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
