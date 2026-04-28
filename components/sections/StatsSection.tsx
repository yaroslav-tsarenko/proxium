"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/lib/translations";
import { Container } from "@/components/layout/Container";
import { Globe, Layers, Shield, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const statItems = [
  { key: "locations", icon: Globe, color: "text-green-400" },
  { key: "types", icon: Layers, color: "text-blue-400" },
  { key: "uptime", icon: Shield, color: "text-cyan-400" },
  { key: "support", icon: Headphones, color: "text-violet-400" },
];

export default function StatsSection() {
  const t = useTranslations("stats");
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemRefs.current.filter(Boolean);

      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
    <section ref={sectionRef} className="py-12 lg:py-16 bg-zinc-900/50 border-y border-zinc-800/50">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="flex flex-col items-center justify-center py-4 opacity-0"
              >
                <Icon className={`w-6 h-6 ${item.color} mb-2`} />
                <p className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                  {t(`${item.key}.value`)}
                </p>
                <p className="text-zinc-400 text-sm mt-1 font-medium">
                  {t(`${item.key}.label`)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
