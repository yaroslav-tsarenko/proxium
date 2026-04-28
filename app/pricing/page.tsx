"use client";

import { Container } from "@/components/layout/Container";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Wallet, ShoppingCart, BarChart3, Check } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const balanceSteps = [
  {
    icon: Wallet,
    color: "text-green-400",
    bg: "bg-green-500/10",
    title: "Top up your balance",
    description: "Add funds using any supported payment method. The full amount appears in your account instantly.",
  },
  {
    icon: ShoppingCart,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    title: "Buy proxies you need",
    description: "Choose proxy type, country, quantity. The cost is deducted from your balance at the moment of purchase.",
  },
  {
    icon: BarChart3,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Track and manage",
    description: "Monitor usage, manage active proxies, view payment history, and top up again when needed.",
  },
];

const pricingFaqs = [
  {
    question: "How does the balance system work?",
    answer: "You add funds to your account balance. The full amount is available immediately. Browse available proxies, choose what you need, and purchase with your balance. No subscriptions or recurring charges.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit and debit cards and other common payment methods. All transactions are processed securely.",
  },
  {
    question: "Can I get a refund on my balance?",
    answer: "Please contact our support team to discuss refund options. Unused balance can be reviewed on a case-by-case basis.",
  },
  {
    question: "Are there minimum top-up amounts?",
    answer: "Minimum top-up amounts may apply depending on payment method. Check the top-up page in your dashboard for current details.",
  },
  {
    question: "Do proxy prices vary by country?",
    answer: "Pricing may differ based on proxy type and location. Exact prices are displayed before purchase so you always know what you're paying.",
  },
];

const benefits = [
  "No monthly subscriptions",
  "No recurring charges",
  "Pay only for what you buy",
  "Instant proxy activation",
  "Full balance visibility",
  "Transparent pricing before purchase",
  "Multiple proxy types from one balance",
  "Top up anytime, any amount",
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                Balance-Based Pricing
              </span>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                No plans. No subscriptions.
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                Top up your account balance and spend it on the proxies you need. Simple, transparent, and flexible.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {balanceSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center mx-auto`}>
                    <Icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <h3 className="text-zinc-50 text-xl font-bold mt-5">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </StaggerChildren>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Top Up & Start
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-900/30">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight text-center">
                Why balance-based pricing?
              </h2>
              <p className="text-zinc-400 text-lg mt-4 text-center max-w-2xl mx-auto">
                We believe you should only pay for what you use. No wasted subscription fees, no locked-in plans.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-zinc-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-950">
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
                    <AccordionTrigger>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
