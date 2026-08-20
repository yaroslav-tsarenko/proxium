"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/lib/translations";
import { COMPANY } from "@/lib/company";
import { Container } from "./Container";

const productLinks = [
  { href: "/products/datacenter", label: "Datacenter Proxies" },
  { href: "/products/residential", label: "Static Residential Proxies" },
  { href: "/products", label: "Rotating Residential Proxies" },
  { href: "/products", label: "Private / Dedicated Proxies" },
] as const;

const useCaseLinks = [
  { href: "/use-cases#scraping", label: "Web Scraping" },
  { href: "/use-cases#social-media", label: "Social Media Management" },
  { href: "/use-cases#ecommerce", label: "E-commerce Monitoring" },
  { href: "/use-cases#market", label: "Market Research" },
  { href: "/use-cases#seo", label: "SEO Monitoring" },
  { href: "/use-cases#anti-fraud", label: "Anti-Fraud" },
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
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-extrabold text-zinc-50 tracking-tight hover:text-green-400 transition-colors">
              proxium
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 max-w-xs">
              {t("description")}
            </p>
            <div className="mt-5 space-y-1 text-xs leading-relaxed text-zinc-500">
              <p className="font-medium text-zinc-400">{COMPANY.name}</p>
              <p>Reg. No.: {COMPANY.regNumber}</p>
              {COMPANY.vat && <p>VAT No.: {COMPANY.vat}</p>}
              <p>{COMPANY.address}</p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-zinc-300">
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-50">
              {t("products")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-50"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-50">
              {t("useCasesTitle")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {useCaseLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-50"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-50">
              {t("resources")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-50"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-50">
              {t("company")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-50"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
              className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-green-400"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 border-t border-zinc-800 pt-8 text-sm text-zinc-400 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Proxium. {t("rights")}</p>

          <div className="flex items-center gap-4">
            <Image src="/images/visa.svg" alt="Visa" width={48} height={30} className="h-7 w-auto rounded" />
            <Image src="/images/mastercard.svg" alt="Mastercard" width={48} height={30} className="h-7 w-auto rounded" />
            <Image src="/images/pci-dss.svg" alt="PCI DSS Compliant" width={60} height={30} className="h-7 w-auto rounded" />
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/legal/terms"
              className="transition-colors hover:text-zinc-50"
            >
              {t("terms")}
            </Link>
            <Link
              href="/legal/privacy"
              className="transition-colors hover:text-zinc-50"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/legal/acceptable-use"
              className="transition-colors hover:text-zinc-50"
            >
              {t("acceptable")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
