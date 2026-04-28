"use client";

import { useTranslations } from "@/lib/translations";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { Wallet, Search, ShoppingCart, LayoutDashboard, ArrowRight } from "lucide-react";

const stepIcons = [Wallet, Search, ShoppingCart, LayoutDashboard];
const stepKeys = ["topup", "choose", "purchase", "manage"] as const;

export default function HowItWorksPage() {
  const t = useTranslations("balance");

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              {t("sectionTag")}
            </span>
            <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              {t("title")}
            </h1>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-8 max-w-3xl mx-auto">
          {stepKeys.map((key, i) => {
            const Icon = stepIcons[i];
            return (
              <ScrollReveal key={key}>
                <div className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-400 text-sm font-bold">
                        Step {t(`steps.${key}.step`)}
                      </span>
                    </div>
                    <h2 className="text-zinc-50 text-xl font-bold">
                      {t(`steps.${key}.title`)}
                    </h2>
                    <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                      {t(`steps.${key}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="space-y-3">
              <p className="text-zinc-50 font-semibold">{t("highlight1")}</p>
              <p className="text-zinc-400 text-sm">{t("highlight2")}</p>
              <p className="text-zinc-400 text-sm">{t("highlight3")}</p>
            </div>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 mt-6 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
