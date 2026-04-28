"use client";

import { useTranslations } from "@/lib/translations";
import {
  Search,
  TrendingUp,
  Shield,
  Users,
  ShoppingCart,
  BarChart2,
  Eye,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const useCases = [
  {
    key: "scraping",
    icon: Search,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    details: [
      "Collect public data at scale from websites",
      "Auto-rotate IPs to reduce blocking",
      "Target specific countries for localized data",
      "Compatible with popular scraping tools",
    ],
    recommended: "Rotating Residential",
  },
  {
    key: "socialMedia",
    icon: Users,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    details: [
      "Manage multiple accounts safely",
      "Each account gets a unique IP",
      "Persistent sessions for consistent identity",
      "Reduce risk of platform restrictions",
    ],
    recommended: "Static Residential",
  },
  {
    key: "ecommerce",
    icon: ShoppingCart,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    details: [
      "Monitor competitor pricing across regions",
      "Track inventory and availability",
      "Collect product data from marketplaces",
      "Fast datacenter proxies for high volume",
    ],
    recommended: "Datacenter",
  },
  {
    key: "seo",
    icon: TrendingUp,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    details: [
      "Check search rankings from any location",
      "Monitor local results and featured snippets",
      "Track competitor keywords",
      "Accurate geo-specific results",
    ],
    recommended: "Rotating Residential",
  },
  {
    key: "antiFraud",
    icon: Shield,
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10",
    details: [
      "Verify ad placements across regions",
      "Detect fraud and malicious redirects",
      "Check content compliance globally",
      "Clean IPs for accurate verification",
    ],
    recommended: "Dedicated",
  },
  {
    key: "market",
    icon: BarChart2,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    details: [
      "Access geo-restricted content worldwide",
      "Gather competitive intelligence",
      "Monitor news and reviews by region",
      "Collect market data at scale",
    ],
    recommended: "Static Residential",
  },
  {
    key: "reputation",
    icon: Eye,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    details: [
      "Monitor brand mentions across regions",
      "Track reviews and sentiment",
      "Stay informed about public perception",
      "Reliable coverage across geographies",
    ],
    recommended: "Rotating Residential",
  },
] as const;

export default function UseCasesPage() {
  const t = useTranslations("useCases");

  return (
    <>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                {t("sectionTag")}
              </span>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                {t("title")}
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                {t("subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;

              return (
                <div
                  key={useCase.key}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${useCase.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${useCase.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-zinc-50 text-xl font-bold">
                        {t(`items.${useCase.key}.title`)}
                      </h2>
                      <p className="text-zinc-400 text-sm">
                        {t(`items.${useCase.key}.description`)}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {useCase.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-zinc-300 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-500 text-xs">
                      Best proxy:{" "}
                      <span className="text-green-400 font-medium">
                        {useCase.recommended}
                      </span>
                    </span>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
                    >
                      Browse proxies <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <Container>
          <ScrollReveal>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                  Have a different use case?
                </h2>
                <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                  Contact our team and we&apos;ll help you find the right proxy solution.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    Talk to Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
