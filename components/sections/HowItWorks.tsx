"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Wallet, Search, ShoppingCart, BarChart3 } from "lucide-react";

const steps = [
  { key: "topup", icon: Wallet, color: "text-green-400", bg: "bg-green-500/10" },
  { key: "choose", icon: Search, color: "text-blue-400", bg: "bg-blue-500/10" },
  { key: "purchase", icon: ShoppingCart, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { key: "manage", icon: BarChart3, color: "text-violet-400", bg: "bg-violet-500/10" },
];

export default function HowItWorks() {
  const t = useTranslations("balance");

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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.key}
                className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <span className="text-zinc-600 text-sm font-bold">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="text-zinc-50 text-lg font-bold">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            );
          })}
        </StaggerChildren>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {(["highlight1", "highlight2", "highlight3"] as const).map((key) => (
              <p key={key} className="text-zinc-400 text-sm font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {t(key)}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
