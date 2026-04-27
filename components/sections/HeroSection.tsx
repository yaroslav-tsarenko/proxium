"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import {
  Globe,
  CheckCircle,
  BarChart3,
  Headphones,
  Zap,
  Settings,
} from "lucide-react";

const heroCards = [
  { key: "countries", icon: Globe, color: "text-green-400" },
  { key: "reliability", icon: CheckCircle, color: "text-cyan-400" },
  { key: "types", icon: Settings, color: "text-blue-400" },
  { key: "support", icon: Headphones, color: "text-violet-400", noValue: true },
  { key: "analytics", icon: BarChart3, color: "text-green-400", noValue: true },
  { key: "custom", icon: Zap, color: "text-cyan-400", noValue: true },
];

export default function HeroSection() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        tl.fromTo(
          Array.from(cards),
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.4",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-dot-grid">
      <Container>
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 px-6 py-16 sm:px-12 lg:px-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div ref={contentRef} className="opacity-0">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                {t("badge")}
              </span>

              <h1 className="mt-6">
                <span className="block text-zinc-50 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  {t("titleLine1")}
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient-green mt-2">
                  {t("titleLine2")}
                </span>
              </h1>

              <p className="text-zinc-400 text-lg max-w-lg leading-relaxed mt-6">
                {t("subtitle")}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <Link
                  href="/get-started"
                  className="inline-flex items-center bg-green-500 text-zinc-950 font-semibold rounded-xl px-7 py-3.5 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:bg-green-400 transition-colors text-sm"
                >
                  {t("cta")}
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center border border-zinc-700 text-zinc-300 font-semibold rounded-xl px-7 py-3.5 hover:bg-zinc-800 transition-all text-sm"
                >
                  {t("ctaSecondary")}
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center text-green-400 font-semibold px-4 py-3.5 hover:text-green-300 transition-colors text-sm"
                >
                  {t("ctaTertiary")} &rarr;
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
                {(["instant", "countries", "flexible", "noSubs"] as const).map(
                  (key) => (
                    <span
                      key={key}
                      className="flex items-center gap-1.5 text-zinc-400 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {t(`benefits.${key}`)}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {heroCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.key}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <Icon className={`w-6 h-6 ${card.color}`} />
                    {!("noValue" in card && card.noValue) && (
                      <p className="text-zinc-50 text-2xl font-bold mt-2">
                        {t(`cards.${card.key}.value`)}
                      </p>
                    )}
                    <p className="text-zinc-400 text-xs font-medium mt-1">
                      {t(`cards.${card.key}.label`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
