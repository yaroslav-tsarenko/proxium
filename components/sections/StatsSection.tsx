"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Globe, Layers, Shield, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const statItems = [
  { key: "locations", icon: Globe, color: "text-primary-500" },
  { key: "types", icon: Layers, color: "text-blue-500" },
  { key: "uptime", icon: Shield, color: "text-emerald-500" },
  { key: "support", icon: Headphones, color: "text-orange-500" },
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
    <section ref={sectionRef} className="py-12 lg:py-16 bg-surface-1 border-y border-navy-100">
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
                <p className="text-navy-900 text-3xl lg:text-4xl font-bold">
                  {t(`${item.key}.value`)}
                </p>
                <p className="text-navy-500 text-sm mt-1 font-medium">
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
