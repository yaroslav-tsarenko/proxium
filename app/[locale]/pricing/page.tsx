"use client";

import { useTranslations } from "next-intl";
import { Check, Minus } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const plans = [
  { key: "starter", featured: false },
  { key: "pro", featured: true },
  { key: "enterprise", featured: false },
] as const;

const pricingFaqs = [
  {
    question: "How is bandwidth calculated?",
    answer:
      "Bandwidth is measured by the total data transferred through our proxy network, including both request and response payloads. Headers and connection overhead are not counted.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle. Unused bandwidth does not roll over.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Absolutely. For usage above 500 GB/month, we offer custom pricing with significant discounts. Contact our sales team for a tailored quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, wire transfers, and cryptocurrency (BTC, ETH, USDT) for annual plans.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every new account gets 1 GB of free residential bandwidth with full API access. No credit card required to start.",
  },
];

const bandwidthTiers = [
  { gb: 10, pricePerGb: 3.5 },
  { gb: 50, pricePerGb: 2.8 },
  { gb: 100, pricePerGb: 2.4 },
  { gb: 250, pricePerGb: 2.0 },
  { gb: 500, pricePerGb: 1.6 },
  { gb: 1000, pricePerGb: 1.2 },
];

export default function PricingPage() {
  const t = useTranslations("pricing");
  const [sliderValue, setSliderValue] = useState(2);

  const currentTier = bandwidthTiers[sliderValue];
  const totalCost = currentTier.gb * currentTier.pricePerGb;

  return (
    <>
      {/* Hero */}
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
                {t("subtitle")}
              </p>
            </div>
          </ScrollReveal>

          {/* Pricing Cards */}
          <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {plans.map((plan) => {
              const features = t.raw(
                `plans.${plan.key}.features`
              ) as string[];

              return (
                <div
                  key={plan.key}
                  className={
                    plan.featured
                      ? "relative bg-zinc-900 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.08)] rounded-2xl p-8"
                      : "bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
                  }
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-zinc-950 text-xs font-semibold px-3 py-1 rounded-full">
                      {t(`plans.${plan.key}.badge`)}
                    </span>
                  )}

                  <h3 className="text-zinc-50 text-lg font-semibold">
                    {t(`plans.${plan.key}.name`)}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-zinc-50 text-4xl font-bold">
                      {t(`plans.${plan.key}.price`)}
                    </span>
                    <span className="text-zinc-500 text-sm">
                      {t(`plans.${plan.key}.period`)}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm mt-2">
                    {t(`plans.${plan.key}.description`)}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={
                      plan.featured
                        ? "w-full mt-8 px-6 py-3 rounded-lg bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        : "w-full mt-8 px-6 py-3 rounded-lg bg-zinc-800 text-zinc-50 font-semibold text-sm hover:bg-zinc-700 transition-colors"
                    }
                  >
                    {t(`plans.${plan.key}.name`) === "Enterprise"
                      ? "Contact Sales"
                      : "Get Started"}
                  </button>
                </div>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      {/* Bandwidth Calculator */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight">
                Bandwidth Calculator
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                Estimate your monthly cost based on residential bandwidth usage.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-zinc-400 text-sm">Monthly Bandwidth</span>
                <span className="text-green-400 font-bold text-lg">
                  {currentTier.gb} GB
                </span>
              </div>

              <input
                type="range"
                min={0}
                max={bandwidthTiers.length - 1}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
              />

              <div className="flex justify-between text-xs text-zinc-500 mt-2">
                <span>10 GB</span>
                <span>1 TB</span>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-end">
                <div>
                  <p className="text-zinc-400 text-sm">Price per GB</p>
                  <p className="text-zinc-50 text-2xl font-bold">
                    ${currentTier.pricePerGb.toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400 text-sm">Estimated Monthly Cost</p>
                  <p className="text-green-400 text-3xl font-bold">
                    ${totalCost.toFixed(0)}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight text-center mb-12">
              Compare Plans
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-4 pr-4 text-zinc-400 text-sm font-medium">
                      Feature
                    </th>
                    <th className="py-4 px-4 text-zinc-50 text-sm font-semibold">
                      Starter
                    </th>
                    <th className="py-4 px-4 text-green-400 text-sm font-semibold">
                      Pro
                    </th>
                    <th className="py-4 px-4 text-zinc-50 text-sm font-semibold">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Residential Bandwidth", "5 GB", "50 GB", "Unlimited"],
                    ["Datacenter IPs", "Shared", "Dedicated", "Custom Pools"],
                    ["Geo-locations", "3", "All (195+)", "All + Custom"],
                    ["Concurrent Sessions", "100", "1,000", "Unlimited"],
                    ["API Access", true, true, true],
                    ["Dashboard", true, true, true],
                    ["Webhooks & Alerts", false, true, true],
                    ["Team Seats", "1", "5", "Unlimited"],
                    ["Support", "Email", "Priority", "Dedicated Manager"],
                    ["SLA", false, true, true],
                    ["SSO & Audit Logs", false, false, true],
                  ].map(([feature, starter, pro, enterprise], i) => (
                    <tr key={i} className="border-b border-zinc-800/50">
                      <td className="py-3 pr-4 text-zinc-300">{feature}</td>
                      {[starter, pro, enterprise].map((val, j) => (
                        <td key={j} className="py-3 px-4">
                          {val === true ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : val === false ? (
                            <Minus className="w-4 h-4 text-zinc-600" />
                          ) : (
                            <span className="text-zinc-300">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight text-center">
              Pricing FAQ
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto mt-12">
              <Accordion type="single" collapsible>
                {pricingFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`pf-${i}`}>
                    <AccordionTrigger className="text-zinc-100 text-base font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="bg-gradient-to-r from-green-600/20 via-cyan-600/10 to-violet-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                Start your free trial today
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                Get 1 GB of free residential bandwidth. No credit card required.
              </p>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  Get Started Free
                </Link>
              </div>
              <p className="text-zinc-500 text-xs mt-4">
                Free 1GB trial &middot; No credit card &middot; Setup in 60
                seconds
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
