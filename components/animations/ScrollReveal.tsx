"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
}

const directionOffset: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function ScrollReveal({
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
  children,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const offset = directionOffset[direction];

    const anim = gsap.fromTo(
      el,
      { opacity: 0, x: offset.x, y: offset.y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
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
  }, [direction, delay, duration]);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
