"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Wallet, Search, ShoppingCart, BarChart3 } from "lucide-react";

const steps = [
  { key: "topup", icon: Wallet, color: "text-primary-600", bg: "bg-primary-50" },
  { key: "choose", icon: Search, color: "text-blue-500", bg: "bg-blue-50" },
  { key: "purchase", icon: ShoppingCart, color: "text-emerald-500", bg: "bg-emerald-50" },
  { key: "manage", icon: BarChart3, color: "text-orange-500", bg: "bg-orange-50" },
];

export default function HowItWorks() {
  const t = useTranslations("balance");

  return (
    <section className="py-20 lg:py-28 bg-surface-1">
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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.key}
                className="relative bg-white border border-navy-100 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <span className="text-navy-300 text-sm font-bold">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="text-navy-900 text-lg font-bold">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-navy-500 text-sm mt-2 leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            );
          })}
        </StaggerChildren>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {(["highlight1", "highlight2", "highlight3"] as const).map((key) => (
              <p key={key} className="text-navy-600 text-sm font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                {t(key)}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
