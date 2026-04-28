"use client";

import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { UserPlus, Wallet, ShoppingCart, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    description: "Sign up with your email. It takes less than a minute.",
  },
  {
    icon: Wallet,
    title: "Top up your balance",
    description: "Add funds in USD, EUR, or GBP using any supported payment method.",
  },
  {
    icon: ShoppingCart,
    title: "Buy proxies",
    description: "Choose the proxy type, country, and quantity. Pay directly from your balance.",
  },
];

const benefits = [
  "No subscriptions or recurring charges",
  "Proxies activated immediately after purchase",
  "Full dashboard for managing proxies and usage",
  "Support available 24/7",
  "Pay only for what you use",
  "50+ countries available",
];

export default function GetStartedPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              Get Started
            </span>
            <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              Start using proxies in minutes
            </h1>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              Create an account, add funds, and buy the proxies you need. No contracts, no commitments.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.title}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-zinc-700 transition-colors h-full">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-green-400 text-xs font-bold">Step {i + 1}</span>
                  <h2 className="text-zinc-50 text-lg font-bold mt-2">{step.title}</h2>
                  <p className="text-zinc-400 text-sm mt-2">{step.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-zinc-50 text-xl font-bold mb-6">Why Proxium?</h2>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-zinc-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Create Account <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-zinc-500 text-xs mt-4">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-green-400 hover:text-green-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
