"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";

const productLinks = [
  { href: "/products", label: "Datacenter Proxies" },
  { href: "/products", label: "Static Residential Proxies" },
  { href: "/products", label: "Rotating Residential Proxies" },
  { href: "/products", label: "Private / Dedicated Proxies" },
] as const;

const proxyTypeLinks = [
  { href: "/products", label: "Shared Proxies" },
  { href: "/products", label: "Country-based Proxies" },
  { href: "/products", label: "Social Media Proxies" },
  { href: "/products", label: "SEO Proxies" },
] as const;

const useCaseLinks = [
  { href: "/use-cases", label: "Web Scraping" },
  { href: "/use-cases", label: "Social Media Management" },
  { href: "/use-cases", label: "E-commerce Monitoring" },
  { href: "/use-cases", label: "Market Research" },
  { href: "/use-cases", label: "SEO Monitoring" },
  { href: "/use-cases", label: "Anti-Fraud" },
] as const;

const resourceLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
] as const;

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Support" },
] as const;

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-navy-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-white">Proxium</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-400 max-w-xs">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {t("products")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-navy-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {t("useCasesTitle")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {useCaseLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-navy-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {t("resources")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-navy-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {t("company")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-navy-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-navy-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-navy-400">
            {t("newsletter")}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm gap-2"
          >
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 rounded-xl border border-navy-700 bg-navy-800 px-4 py-2.5 text-sm text-white placeholder:text-navy-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-navy-800 pt-8 text-sm text-navy-400 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Proxium. {t("rights")}</p>

          <div className="flex items-center gap-6">
            <Link
              href="/legal/terms"
              className="transition-colors hover:text-white"
            >
              {t("terms")}
            </Link>
            <Link
              href="/legal/privacy"
              className="transition-colors hover:text-white"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/legal/acceptable-use"
              className="transition-colors hover:text-white"
            >
              {t("acceptable")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
