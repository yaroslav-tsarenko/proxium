"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "proxium-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (e.g. private mode) — show the banner anyway
      setVisible(true);
    }
  }, []);

  const persist = (choice: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore write failures
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm leading-relaxed text-zinc-400">
          We use essential cookies to run Proxium and, with your consent, optional
          cookies to improve your experience. Read our{" "}
          <Link
            href="/legal/privacy"
            className="font-medium text-green-400 transition-colors hover:text-green-300"
          >
            Privacy Policy
          </Link>{" "}
          to learn more.
        </p>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
