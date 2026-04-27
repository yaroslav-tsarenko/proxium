"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import AnimatedCounter from "@/components/custom/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const statKeys = ["ips", "countries", "uptime", "response"] as const;

export default function StatsSection() {
  const t = useTranslations("stats");
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemRefs.current.filter(Boolean);

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-zinc-900/50 border-y border-zinc-800/50 py-12 lg:py-16"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {statKeys.map((key, i) => (
            <div
              key={key}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`flex flex-col items-center justify-center py-6 opacity-0 ${
                i < statKeys.length - 1
                  ? "border-r border-zinc-800"
                  : ""
              }`}
            >
              <AnimatedCounter
                value={t(`${key}.value`)}
                label={t(`${key}.label`)}
                className="[&>div:first-child]:text-4xl [&>div:first-child]:lg:text-5xl [&>p]:text-xs [&>p]:uppercase [&>p]:tracking-[0.15em] [&>p]:mt-1 [&>p]:text-zinc-500"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
