"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import TerminalBlock from "@/components/custom/TerminalBlock";

const GlobeScene = dynamic(() => import("@/components/three/GlobeScene"), {
  ssr: false,
});

const terminalLines = [
  { type: "comment" as const, text: "# Quick start with Proxium API" },
  { type: "command" as const, text: "curl -x proxy.proxium.io:7777 \\" },
  { type: "command" as const, text: '  -U "user:pass" \\' },
  { type: "command" as const, text: "  https://httpbin.org/ip" },
  { type: "output" as const, text: '{ "origin": "185.xxx.xxx.42" }' },
  { type: "success" as const, text: "✓ 200 OK — 0.34s — US/New York" },
];

export default function HeroSection() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1Line1Ref = useRef<HTMLSpanElement>(null);
  const h1Line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaPrimaryRef = useRef<HTMLAnchorElement>(null);
  const ctaSecondaryRef = useRef<HTMLAnchorElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          h1Line1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3",
        )
        .fromTo(
          h1Line2Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          [ctaPrimaryRef.current, ctaSecondaryRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          "-=0.2",
        )
        .fromTo(
          trustRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2",
        )
        .fromTo(
          rightColRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8 },
          "-=0.6",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-zinc-950 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(161,161,170,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient mesh orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />

      <Container className="relative z-10 flex items-center min-h-screen py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center w-full">
          {/* Left column */}
          <div>
            {/* Badge */}
            <div ref={badgeRef} className="opacity-0">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide">
                &#10022; {t("badge")}
              </span>
            </div>

            {/* H1 */}
            <h1 className="mt-6">
              <span
                ref={h1Line1Ref}
                className="block text-zinc-50 text-5xl lg:text-6xl font-extrabold tracking-tighter opacity-0"
              >
                {t("titleLine1")}
              </span>
              <span
                ref={h1Line2Ref}
                className="block text-5xl lg:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-green-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent opacity-0"
              >
                {t("titleLine2")}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-zinc-400 text-lg max-w-md leading-relaxed mt-6 opacity-0"
            >
              {t("subtitle")}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                ref={ctaPrimaryRef}
                href="/signup"
                className="inline-flex items-center bg-green-500 text-zinc-950 font-semibold rounded-lg px-8 py-3.5 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:bg-green-400 transition-colors opacity-0"
              >
                {t("cta")} &rarr;
              </Link>
              <Link
                ref={ctaSecondaryRef}
                href="/docs"
                className="inline-flex items-center border border-zinc-700 text-zinc-300 rounded-lg px-8 py-3.5 hover:bg-zinc-800 transition-colors opacity-0"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            {/* Trust line */}
            <p ref={trustRef} className="text-zinc-500 text-xs mt-6 opacity-0">
              Free 1GB trial &middot; No credit card &middot; Setup in 60s
            </p>
          </div>

          {/* Right column */}
          <div ref={rightColRef} className="relative opacity-0">
            {/* Globe — lg+ only */}
            <div className="hidden lg:block w-full aspect-square">
              <GlobeScene />
            </div>

            {/* Terminal overlay */}
            <div className="lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[90%]">
              <TerminalBlock lines={terminalLines} animated />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
