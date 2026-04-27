"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import TypeWriter from "@/components/animations/TypeWriter";

interface TerminalLine {
  type: "comment" | "command" | "output" | "success";
  text: string;
}

interface TerminalBlockProps {
  lines: TerminalLine[];
  title?: string;
  className?: string;
  animated?: boolean;
}

const lineColors: Record<TerminalLine["type"], string> = {
  comment: "text-zinc-500",
  command: "text-zinc-50",
  output: "text-cyan-400",
  success: "text-green-400",
};

const linePrefix: Record<TerminalLine["type"], string> = {
  comment: "# ",
  command: "$ ",
  output: "",
  success: "",
};

export default function TerminalBlock({
  lines,
  title = "proxium — ~/",
  className,
  animated = false,
}: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const text = lines
      .filter((l) => l.type === "command")
      .map((l) => l.text)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-xl shadow-2xl overflow-hidden",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-3 text-xs text-zinc-400 font-mono">{title}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code lines */}
      <div className="p-4 font-mono text-sm leading-relaxed">
        {lines.map((line, i) =>
          animated && line.type === "command" ? (
            <div key={i} className={cn("whitespace-pre", lineColors[line.type])}>
              <span className="text-zinc-500">$ </span>
              <TypeWriter lines={[line.text]} speed={0.03} delay={i * 0.8} />
            </div>
          ) : (
            <div key={i} className={cn("whitespace-pre", lineColors[line.type])}>
              <span className="text-zinc-500">{linePrefix[line.type]}</span>
              {line.text}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
