"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";

gsap.registerPlugin(ScrollTrigger);

interface StaggerChildrenProps {
  stagger?: number;
  className?: string;
  children: ReactNode;
}

export default function StaggerChildren({
  stagger = 0.12,
  className,
  children,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;
    if (items.length === 0) return;

    const anim = gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [stagger]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
