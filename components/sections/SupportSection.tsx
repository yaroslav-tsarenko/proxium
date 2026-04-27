"use client";

import { useTranslations } from "next-intl";
import { Headphones, BookOpen, Rocket, Wrench } from "lucide-react";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const supportItems = [
  { key: "dedicated", icon: Headphones, color: "text-primary-600", bg: "bg-primary-50" },
  { key: "helpCenter", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50" },
  { key: "setup", icon: Rocket, color: "text-emerald-500", bg: "bg-emerald-50" },
  { key: "troubleshooting", icon: Wrench, color: "text-orange-500", bg: "bg-orange-50" },
];

export default function SupportSection() {
  const t = useTranslations("support");

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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {supportItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="bg-surface-1 border border-navy-100 rounded-2xl p-7 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mx-auto`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <h3 className="text-navy-900 text-lg font-bold mt-5">
                  {t(`items.${item.key}.title`)}
                </h3>
                <p className="text-navy-500 text-sm mt-2 leading-relaxed">
                  {t(`items.${item.key}.description`)}
                </p>
              </div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
