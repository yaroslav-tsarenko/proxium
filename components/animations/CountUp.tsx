"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const proxy = { value: 0 };

    const anim = gsap.to(proxy, {
      value: end,
      duration,
      ease: "power2.out",
      onUpdate: () => setValue(proxy.value),
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [end, duration]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
