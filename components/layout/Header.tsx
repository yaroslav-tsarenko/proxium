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
            ? "border-b border-navy-200 bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent",
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-navy-900">
              Proxium
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="text-sm font-medium text-navy-600 transition-colors hover:text-navy-900"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-navy-500 transition-colors hover:text-navy-900"
              >
                {locale.toUpperCase()}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[140px] rounded-xl border border-navy-200 bg-white py-1 shadow-lg">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={cn(
                        "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors hover:bg-navy-50",
                        loc === locale
                          ? "text-primary-600 font-medium"
                          : "text-navy-600",
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
              className="text-sm font-medium text-navy-600 transition-colors hover:text-navy-900"
            >
              {t("signIn")}
            </Link>

            <Link
              href="/get-started"
              className="rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 shadow-sm"
            >
              {t("getStarted")}
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-navy-600 transition-colors hover:text-navy-900 lg:hidden"
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
