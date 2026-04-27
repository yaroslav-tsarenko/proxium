"use client";

import { cn } from "@/lib/utils/cn";
import CountUp from "@/components/animations/CountUp";

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
}

function parseValue(value: string) {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value, decimals: 0 };

  const numStr = match[2];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  return {
    prefix: match[1],
    num: parseFloat(numStr),
    suffix: match[3],
    decimals,
  };
}

export default function AnimatedCounter({
  value,
  label,
  className,
}: AnimatedCounterProps) {
  const { prefix, num, suffix, decimals } = parseValue(value);

  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl font-bold text-zinc-50">
        <CountUp
          end={num}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          duration={2}
        />
      </div>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </div>
  );
}
