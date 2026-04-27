"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerAmount?: number;
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  staggerAmount = 0.04,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll<HTMLSpanElement>(".tr-char");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      delay,
    });

    tl.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: staggerAmount,
      },
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [text, delay, staggerAmount]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={cn("inline-block", className)}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span key={ci} className="tr-char inline-block opacity-0">
              {char}
            </span>
          ))}
          {wi < words.length - 1 && (
            <span className="tr-char inline-block opacity-0">&nbsp;</span>
          )}
        </span>
      ))}
    </div>
  );
}
