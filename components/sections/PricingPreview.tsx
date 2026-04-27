"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const plans = [
  { key: "starter", featured: false },
  { key: "pro", featured: true },
  { key: "enterprise", featured: false },
] as const;

export default function PricingPreview() {
  const t = useTranslations("pricing");

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

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan) => {
            const features = t.raw(`plans.${plan.key}.features`) as string[];

            return (
              <div
                key={plan.key}
                className={
                  plan.featured
                    ? "relative bg-zinc-900 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.08)] rounded-2xl p-8"
                    : "bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
                }
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-zinc-950 text-xs font-semibold px-3 py-1 rounded-full">
                    {t(`plans.${plan.key}.badge`)}
                  </span>
                )}

                <h3 className="text-zinc-50 text-lg font-semibold">
                  {t(`plans.${plan.key}.name`)}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-zinc-50 text-4xl font-bold">
                    {t(`plans.${plan.key}.price`)}
                  </span>
                  <span className="text-zinc-500 text-sm">
                    {t(`plans.${plan.key}.period`)}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm mt-2">
                  {t(`plans.${plan.key}.description`)}
                </p>

                <ul className="mt-6 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    plan.featured
                      ? "w-full mt-8 px-6 py-3 rounded-lg bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                      : "w-full mt-8 px-6 py-3 rounded-lg bg-zinc-800 text-zinc-50 font-semibold text-sm hover:bg-zinc-700 transition-colors"
                  }
                >
                  {t(`plans.${plan.key}.name`) === "Enterprise"
                    ? "Contact Sales"
                    : "Get Started"}
                </button>
              </div>
            );
          })}
        </StaggerChildren>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
            >
              {t("cta")} &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
