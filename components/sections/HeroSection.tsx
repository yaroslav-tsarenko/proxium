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
  { key: "countries", icon: Globe, color: "text-primary-600" },
  { key: "reliability", icon: CheckCircle, color: "text-emerald-500" },
  { key: "types", icon: Settings, color: "text-blue-500" },
  { key: "support", icon: Headphones, color: "text-orange-500", noValue: true },
  { key: "analytics", icon: BarChart3, color: "text-primary-500", noValue: true },
  { key: "custom", icon: Zap, color: "text-emerald-500", noValue: true },
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
    <section ref={sectionRef} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
      <Container>
        <div className="rounded-3xl bg-gradient-to-br from-primary-50 via-primary-50/60 to-emerald-50/40 border border-primary-100 px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div ref={contentRef} className="opacity-0">
              <span className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                {t("badge")}
              </span>

              <h1 className="mt-6">
                <span className="block text-navy-900 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  {t("titleLine1")}
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-primary-600 mt-2">
                  {t("titleLine2")}
                </span>
              </h1>

              <p className="text-navy-500 text-lg max-w-lg leading-relaxed mt-6">
                {t("subtitle")}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <Link
                  href="/get-started"
                  className="inline-flex items-center bg-primary-500 text-white font-semibold rounded-xl px-7 py-3.5 shadow-sm hover:bg-primary-600 transition-colors text-sm"
                >
                  {t("cta")}
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center border border-navy-200 text-navy-700 font-semibold rounded-xl px-7 py-3.5 hover:bg-white hover:shadow-sm transition-all text-sm"
                >
                  {t("ctaSecondary")}
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center text-primary-600 font-semibold px-4 py-3.5 hover:text-primary-700 transition-colors text-sm"
                >
                  {t("ctaTertiary")} &rarr;
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
                {(["instant", "countries", "flexible", "noSubs"] as const).map(
                  (key) => (
                    <span
                      key={key}
                      className="flex items-center gap-1.5 text-navy-500 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
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
                    className="bg-white rounded-2xl p-4 shadow-card border border-white/80 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <Icon className={`w-6 h-6 ${card.color}`} />
                    {!("noValue" in card && card.noValue) && (
                      <p className="text-navy-900 text-2xl font-bold mt-2">
                        {t(`cards.${card.key}.value`)}
                      </p>
                    )}
                    <p className="text-navy-500 text-xs font-medium mt-1">
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
