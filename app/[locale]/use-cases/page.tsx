"use client";

import { useTranslations } from "next-intl";
import {
  Search,
  TrendingUp,
  Eye,
  Users,
  ShoppingCart,
  BarChart2,
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
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    details: [
      "Bypass anti-bot protections with real residential IPs",
      "Auto-rotate IPs to avoid rate limits",
      "Target specific geos for localized data",
      "Support for headless browsers and Puppeteer",
    ],
    recommended: "Residential Proxies",
  },
  {
    key: "seo",
    icon: TrendingUp,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    details: [
      "Check SERP rankings from any country or city",
      "Monitor local pack and featured snippets",
      "Track competitor keywords at scale",
      "Accurate geo-specific results",
    ],
    recommended: "Residential Proxies",
  },
  {
    key: "adVerification",
    icon: Eye,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    details: [
      "Verify ad placements across regions",
      "Detect ad fraud and malicious redirects",
      "View ads as real users in any market",
      "Automated compliance checking",
    ],
    recommended: "Mobile Proxies",
  },
  {
    key: "socialMedia",
    icon: Users,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    details: [
      "Manage multiple accounts without bans",
      "Each account gets a unique IP identity",
      "ISP proxies for persistent sessions",
      "Safe automation for posting and engagement",
    ],
    recommended: "ISP Proxies",
  },
  {
    key: "ecommerce",
    icon: ShoppingCart,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    details: [
      "Monitor competitor pricing in real-time",
      "Track inventory and stock levels",
      "Collect product data across marketplaces",
      "Region-specific pricing intelligence",
    ],
    recommended: "Datacenter Proxies",
  },
  {
    key: "market",
    icon: BarChart2,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    details: [
      "Access geo-restricted content worldwide",
      "Collect sentiment data from local sources",
      "Monitor news and reviews by region",
      "Competitive intelligence at scale",
    ],
    recommended: "Residential Proxies",
  },
] as const;

export default function UseCasesPage() {
  const t = useTranslations("useCases");

  return (
    <>
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
                &#9670; {t("sectionTag")}
              </span>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                {t("title")}
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                Discover how teams use Proxium to power their workflows across
                industries.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;

              return (
                <div
                  key={useCase.key}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${useCase.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${useCase.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-zinc-50 text-xl font-semibold">
                        {t(`items.${useCase.key}.title`)}
                      </h2>
                      <p className="text-zinc-400 text-sm">
                        {t(`items.${useCase.key}.description`)}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2">
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

                  <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-500 text-xs">
                      Recommended:{" "}
                      <span className="text-green-400">
                        {useCase.recommended}
                      </span>
                    </span>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1 text-zinc-400 text-sm hover:text-zinc-200 transition-colors"
                    >
                      View product <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <div className="bg-gradient-to-r from-green-600/20 via-cyan-600/10 to-violet-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                Have a different use case?
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                Our team can help you design a custom proxy solution for any
                workflow.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
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
