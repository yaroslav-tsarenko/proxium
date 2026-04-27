"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils/cn";

interface TypeWriterProps {
  lines: string[];
  className?: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

export default function TypeWriter({
  lines,
  className,
  delay = 0,
  speed = 0.03,
  onComplete,
}: TypeWriterProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const fullText = lines.join("\n");
    const chars = fullText.split("");
    let current = "";

    const tl = gsap.timeline({
      delay,
      onComplete,
    });

    chars.forEach((char) => {
      tl.call(
        () => {
          current += char;
          setDisplayedLines(current.split("\n"));
        },
        [],
        `+=${speed}`,
      );
    });

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [lines, delay, speed, onComplete]);

  return (
    <div className={cn("font-mono", className)}>
      {displayedLines.map((line, i) => (
        <div key={i}>
          {line}
          {i === displayedLines.length - 1 && (
            <span className="inline-block w-2 h-4 bg-current align-middle animate-pulse ml-0.5" />
          )}
        </div>
      ))}
    </div>
  );
}
