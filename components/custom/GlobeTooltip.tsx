"use client";

import { cn } from "@/lib/utils/cn";

interface GlobeTooltipProps {
  city: string;
  country: string;
  ip?: string;
  responseTime?: string;
  visible: boolean;
  position: { x: number; y: number };
}

export default function GlobeTooltip({
  city,
  country,
  ip,
  responseTime,
  visible,
  position,
}: GlobeTooltipProps) {
  if (!visible) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-50 rounded-lg border border-zinc-700 bg-zinc-900/95 backdrop-blur-sm px-4 py-3 shadow-xl",
        "transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0",
      )}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -100%) translateY(-12px)",
      }}
    >
      <p className="text-sm font-medium text-zinc-50">
        {city}, {country}
      </p>
      {ip && <p className="mt-1 text-xs text-zinc-400 font-mono">{ip}</p>}
      {responseTime && (
        <p className="mt-1 text-xs text-green-400 font-mono">{responseTime}</p>
      )}
    </div>
  );
}
