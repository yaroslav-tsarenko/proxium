"use client";

import { useTranslations } from "next-intl";
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
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const useCases = [
  {
    key: "scraping",
    icon: Search,
    iconColor: "text-primary-600",
    iconBg: "bg-primary-50",
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
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
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
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
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
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
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
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
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
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
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
    iconColor: "text-primary-600",
    iconBg: "bg-primary-50",
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
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                {t("sectionTag")}
              </span>
              <h1 className="text-navy-900 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                {t("title")}
              </h1>
              <p className="text-navy-500 text-lg mt-4 max-w-2xl">
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
                  className="bg-white border border-navy-100 rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${useCase.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${useCase.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-navy-900 text-xl font-bold">
                        {t(`items.${useCase.key}.title`)}
                      </h2>
                      <p className="text-navy-500 text-sm">
                        {t(`items.${useCase.key}.description`)}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {useCase.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-navy-600 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0 mt-1.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-navy-100 flex items-center justify-between">
                    <span className="text-navy-400 text-xs">
                      Best proxy:{" "}
                      <span className="text-primary-600 font-medium">
                        {useCase.recommended}
                      </span>
                    </span>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
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

      <section className="py-20 lg:py-28 bg-surface-1">
        <Container>
          <ScrollReveal>
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold">
                Have a different use case?
              </h2>
              <p className="text-navy-300 text-lg mt-4 max-w-2xl mx-auto">
                Contact our team and we&apos;ll help you find the right proxy solution.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold text-base hover:bg-primary-400 transition-colors"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
