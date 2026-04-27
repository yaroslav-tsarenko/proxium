"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Menu, ChevronDown } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/products", key: "products" },
  { href: "/locations", key: "locations" },
  { href: "/use-cases", key: "useCases" },
  { href: "/how-it-works", key: "howItWorks" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = useCallback(
    (next: Locale) => {
      router.replace(pathname, { locale: next });
      setLangOpen(false);
    },
    [pathname, router],
  );

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
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-green-500 flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.4)] group-hover:shadow-[0_0_18px_rgba(34,197,94,0.5)] transition-shadow">
              <span className="text-zinc-950 font-extrabold text-xs leading-none">p</span>
            </div>
            <span className="text-lg font-bold text-zinc-50 tracking-tight">
              proxium
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {locale.toUpperCase()}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[140px] rounded-xl border border-zinc-800 bg-zinc-900 py-1 shadow-lg">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={cn(
                        "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors hover:bg-zinc-800",
                        loc === locale
                          ? "text-green-400 font-medium"
                          : "text-zinc-400",
                      )}
                    >
                      {localeNames[loc]}
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
