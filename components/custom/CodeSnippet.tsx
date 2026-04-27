"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface CodeTab {
  label: string;
  language: string;
  code: string;
}

interface CodeSnippetProps {
  tabs: CodeTab[];
  className?: string;
}

function highlightSyntax(code: string): string {
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Comments (// and #)
  html = html.replace(
    /(\/\/.*$|#.*$)/gm,
    '<span class="text-zinc-500">$1</span>',
  );

  // Strings (double and single quoted)
  html = html.replace(
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g,
    '<span class="text-cyan-400">$1</span>',
  );

  // Keywords
  html = html.replace(
    /\b(const|let|var|function|return|import|export|from|default|if|else|for|while|class|new|this|async|await|try|catch|throw|typeof|interface|type|extends|implements)\b/g,
    '<span class="text-violet-400">$1</span>',
  );

  // Numbers
  html = html.replace(
    /\b(\d+\.?\d*)\b/g,
    '<span class="text-amber-400">$1</span>',
  );

  // Booleans & null
  html = html.replace(
    /\b(true|false|null|undefined|nil)\b/g,
    '<span class="text-orange-400">$1</span>',
  );

  return html;
}

export default function CodeSnippet({ tabs, className }: CodeSnippetProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tabs[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden",
        className,
      )}
    >
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-zinc-800">
        <div className="flex">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-4 py-2.5 text-xs font-mono transition-colors",
                i === activeTab
                  ? "text-zinc-50 bg-zinc-900 border-b-2 border-green-500"
                  : "text-zinc-500 hover:text-zinc-300",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-mono"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-zinc-300">
          <code
            dangerouslySetInnerHTML={{
              __html: highlightSyntax(tabs[activeTab].code),
            }}
          />
        </pre>
      </div>
    </div>
  );
}
