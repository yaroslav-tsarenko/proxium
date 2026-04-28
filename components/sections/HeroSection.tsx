"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useTranslations } from "@/lib/translations";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CheckCircle } from "lucide-react";

const GlobeScene = dynamic(
  () => import("@/components/three/GlobeScene"),
  { ssr: false },
);

export default function HeroSection() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
      );

      if (globeRef.current) {
        tl.fromTo(
          globeRef.current,
          { opacity: 0, scale: 1.1 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=0.4",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          <div ref={contentRef} className="opacity-0">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              {t("badge")}
            </span>

            <h1 className="mt-6">
              <span className="block text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                {t("titleLine1")}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-gradient-multi mt-2">
                {t("titleLine2")}
              </span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-md leading-relaxed mt-6">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/get-started"
                className="inline-flex items-center bg-green-500 text-zinc-950 font-semibold rounded-lg px-8 py-3.5 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:bg-green-400 transition-all text-[15px]"
              >
                {t("cta")}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center border border-zinc-700 text-zinc-300 font-semibold rounded-lg px-8 py-3.5 hover:bg-zinc-800 hover:border-zinc-600 transition-all text-sm"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
              {(["instant", "countries", "flexible", "noSubs"] as const).map(
                (key) => (
                  <span
                    key={key}
                    className="flex items-center gap-1.5 text-zinc-500 text-[13px]"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    {t(`benefits.${key}`)}
                  </span>
                ),
              )}
            </div>
          </div>

          <div ref={globeRef} className="hidden lg:flex opacity-0 items-center justify-center relative">
            <div className="aspect-square w-full max-w-[600px] mx-auto">
              <GlobeScene className="h-full w-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
