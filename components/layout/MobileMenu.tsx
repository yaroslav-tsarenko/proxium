"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import gsap from "gsap";
import { useTranslations } from "@/lib/translations";
import { useCurrency, type Currency } from "@/lib/currency";
import { cn } from "@/lib/utils/cn";

const currencies: Currency[] = ["USD", "EUR", "GBP"];

const navLinks = [
  { href: "/products", key: "products" },
  { href: "/locations", key: "locations" },
  { href: "/use-cases", key: "useCases" },
  { href: "/how-it-works", key: "howItWorks" },
] as const;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");
  const { currency, setCurrency } = useCurrency();

  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    const links = linksRef.current?.children;
    const cta = ctaRef.current;

    if (!overlay || !links || !cta) return;

    const tl = gsap.timeline();

    tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    tl.fromTo(
      Array.from(links),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power3.out" },
      "-=0.1",
    );
    tl.fromTo(
      cta,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" },
      "-=0.2",
    );

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col bg-zinc-950/95 backdrop-blur-xl"
    >
      <div className="flex h-16 items-center justify-end px-4 sm:px-6 lg:px-8">
        <button
          onClick={onClose}
          className="text-zinc-400 transition-colors hover:text-zinc-50"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div
        ref={linksRef}
        className="flex flex-1 flex-col items-center justify-center gap-6"
      >
        {navLinks.map(({ href, key }) => (
          <Link
            key={key}
            href={href}
            onClick={onClose}
            className="text-2xl font-semibold text-zinc-50 transition-colors hover:text-green-400"
          >
            {t(key)}
          </Link>
        ))}
      </div>

      <div ref={ctaRef} className="flex flex-col items-center gap-6 pb-12">
        <div className="flex items-center gap-3">
          {currencies.map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                c === currency
                  ? "bg-green-500/10 text-green-400"
                  : "text-zinc-400 hover:text-zinc-200",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <Link
          href="/get-started"
          onClick={onClose}
          className="rounded-xl bg-green-500 px-8 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-green-400"
        >
          {t("getStarted")}
        </Link>
      </div>
    </div>
  );
}
