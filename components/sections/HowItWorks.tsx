"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const steps = ["signup", "configure", "deploy"] as const;

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-24 lg:py-32 bg-zinc-900/30">
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

        <StaggerChildren className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Dashed connecting lines (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 border-t-2 border-dashed border-zinc-700 -translate-y-1/2 pointer-events-none" />
          <div className="hidden lg:block absolute top-1/2 left-2/3 w-1/3 border-t-2 border-dashed border-zinc-700 -translate-y-1/2 pointer-events-none" />

          {steps.map((step, index) => (
            <div
              key={step}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 overflow-hidden"
            >
              <span className="text-[80px] font-bold text-zinc-800/30 absolute top-4 right-4 leading-none select-none">
                {index + 1}
              </span>

              <h3 className="text-zinc-50 text-xl font-semibold relative z-10">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="text-zinc-400 text-sm mt-2 relative z-10">
                {t(`steps.${step}.description`)}
              </p>

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-green-400 mt-4 font-mono relative z-10">
                {t(`steps.${step}.code`)}
              </div>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
