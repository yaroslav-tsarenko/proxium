"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className,
  glowColor = "rgba(34,197,94,0.15)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden transition-all duration-300",
        isHovered && "border-zinc-700 -translate-y-1",
        className,
      )}
    >
      {/* Glow effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
