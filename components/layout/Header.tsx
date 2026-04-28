"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { useTranslations } from "@/lib/translations";
import { useCurrency, type Currency } from "@/lib/currency";
import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

const currencies: Currency[] = ["USD", "EUR", "GBP"];

const navLinks = [
  { href: "/products", key: "products" },
  { href: "/locations", key: "locations" },
  { href: "/use-cases", key: "useCases" },
  { href: "/how-it-works", key: "howItWorks" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectCurrency = useCallback(
    (next: Currency) => {
      setCurrency(next);
      setCurrencyOpen(false);
    },
    [setCurrency],
  );

  useEffect(() => {
    if (!currencyOpen) return;
    const close = () => setCurrencyOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [currencyOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-16 transition-all duration-300",
          scrolled
            ? "border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent",
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-zinc-50 tracking-tight hover:text-green-400 transition-colors">
            proxium
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-zinc-50",
                  pathname === href ? "text-zinc-50" : "text-zinc-400",
                )}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrencyOpen(!currencyOpen);
                }}
                className="flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {currency}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {currencyOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[100px] rounded-xl border border-zinc-800 bg-zinc-900 py-1 shadow-lg">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => selectCurrency(c)}
                      className={cn(
                        "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors hover:bg-zinc-800",
                        c === currency
                          ? "text-green-400 font-medium"
                          : "text-zinc-400",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/sign-in"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
            >
              {t("signIn")}
            </Link>

            <Link
              href="/get-started"
              className="rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              {t("getStarted")}
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-zinc-400 transition-colors hover:text-zinc-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </Container>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
