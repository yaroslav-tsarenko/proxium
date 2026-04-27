"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { X } from "lucide-react";
import gsap from "gsap";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils/cn";

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
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const switchLocale = useCallback(
    (next: Locale) => {
      router.replace(pathname, { locale: next });
      onClose();
    },
    [pathname, router, onClose],
  );

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
      className="fixed inset-0 z-50 flex flex-col bg-white/98 backdrop-blur-xl"
    >
      <div className="flex h-16 items-center justify-end px-4 sm:px-6 lg:px-8">
        <button
          onClick={onClose}
          className="text-navy-500 transition-colors hover:text-navy-900"
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
            className="text-2xl font-semibold text-navy-900 transition-colors hover:text-primary-600"
          >
            {t(key)}
          </Link>
        ))}
      </div>

      <div ref={ctaRef} className="flex flex-col items-center gap-6 pb-12">
        <div className="flex items-center gap-3">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                loc === locale
                  ? "bg-primary-50 text-primary-700"
                  : "text-navy-500 hover:text-navy-800",
              )}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>

        <Link
          href="/get-started"
          onClick={onClose}
          className="rounded-xl bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
        >
          {t("getStarted")}
        </Link>
      </div>
    </div>
  );
}
