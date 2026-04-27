"use client";

import { useTranslations } from "next-intl";
import {
  List,
  BarChart3,
  Wallet,
  Copy,
  Filter,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const featureItems = [
  { key: "proxyList", icon: List, color: "text-primary-600", bg: "bg-primary-50" },
  { key: "analytics", icon: BarChart3, color: "text-blue-500", bg: "bg-blue-50" },
  { key: "balance", icon: Wallet, color: "text-emerald-500", bg: "bg-emerald-50" },
  { key: "credentials", icon: Copy, color: "text-orange-500", bg: "bg-orange-50" },
  { key: "filters", icon: Filter, color: "text-primary-600", bg: "bg-primary-50" },
  { key: "support", icon: Headphones, color: "text-blue-500", bg: "bg-blue-50" },
];

export default function FeaturesSection() {
  const t = useTranslations("features");

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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featureItems.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.key}
                className="bg-white border border-navy-100 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                </div>

                <h3 className="text-navy-900 text-lg font-bold mt-5">
                  {t(`items.${feature.key}.title`)}
                </h3>
                <p className="text-navy-500 text-sm mt-2 leading-relaxed">
                  {t(`items.${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
