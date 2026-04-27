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
  { href: "/pricing", key: "pricing" },
  { href: "/use-cases", key: "useCases" },
  { href: "/docs", key: "docs" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
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
          "fixed inset-x-0 top-0 z-40 h-16 transition-colors duration-300",
          scrolled
            ? "border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <Container className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-green-500">●</span>
            <span className="font-mono text-xl font-extrabold text-zinc-50">
              Proxium
            </span>
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden items-center gap-6 lg:flex">
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

          {/* Right side — desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {locale.toUpperCase()}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[140px] rounded-lg border border-zinc-800 bg-zinc-900 py-1 shadow-xl">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={cn(
                        "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors hover:bg-zinc-800",
                        loc === locale
                          ? "text-green-400"
                          : "text-zinc-400 hover:text-zinc-50",
                      )}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sign In */}
            <Link
              href="/sign-in"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
            >
              {t("signIn")}
            </Link>

            {/* Get Started */}
            <Link
              href="/get-started"
              className="rounded-lg bg-green-500 px-5 py-2 text-[13px] font-semibold text-zinc-950 transition-colors hover:bg-green-400"
            >
              {t("getStarted")}
            </Link>
          </div>

          {/* Hamburger — mobile */}
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
