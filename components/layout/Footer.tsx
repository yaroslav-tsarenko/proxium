"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";

const productLinks = [
  { href: "/products/residential", key: "residential" },
  { href: "/products/datacenter", key: "datacenter" },
  { href: "/products/mobile", key: "mobile" },
  { href: "/products/isp", key: "isp" },
] as const;

const resourceLinks = [
  { href: "/docs", key: "docs" },
  { href: "/blog", key: "blog" },
  { href: "/use-cases", key: "useCases" },
  { href: "/docs/api", key: "apiReference" },
] as const;

const companyLinks = [
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
  { href: "/status", key: "status" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tProducts = useTranslations("products");

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      {/* Gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-green-500 to-cyan-500" />

      <Container className="py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + description */}
          <div>
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="text-green-500">●</span>
              <span className="font-mono text-xl font-extrabold text-zinc-50">
                Proxium
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              {t("description")}
            </p>
          </div>

          {/* Col 2: Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-50">
              {t("products")}
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    {tProducts(`${key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-50">
              {t("resources")}
            </h3>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    {key === "apiReference"
                      ? "API Reference"
                      : tNav(key as "docs" | "blog" | "useCases")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-50">
              {t("company")}
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    {key === "about"
                      ? "About"
                      : key === "status"
                        ? t("status")
                        : tNav("contact")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter row */}
        <div className="mt-12 flex flex-col items-start gap-4 border-t border-zinc-800/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-zinc-400">
            {t("newsletter")}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm gap-2"
          >
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-50 placeholder:text-zinc-600 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50"
            />
            <button
              type="submit"
              className="rounded-lg bg-green-500 px-5 py-2 text-[13px] font-semibold text-zinc-950 transition-colors hover:bg-green-400"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-zinc-800/60 pt-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Proxium. {t("rights")}</p>

          <div className="flex items-center gap-6">
            <Link
              href="/legal/terms"
              className="transition-colors hover:text-zinc-300"
            >
              {t("terms")}
            </Link>
            <Link
              href="/legal/privacy"
              className="transition-colors hover:text-zinc-300"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/legal/acceptable-use"
              className="transition-colors hover:text-zinc-300"
            >
              {t("acceptable")}
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-green-500">●</span>
            <span>Operational</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
