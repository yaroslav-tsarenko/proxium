"use client";

import { Container } from "@/components/layout/Container";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Lock, BookOpen, Terminal, ArrowRight } from "lucide-react";

export default function DocsPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              Resources
            </span>
            <h1 className="text-navy-900 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              Getting Started
            </h1>
            <p className="text-navy-500 text-lg mt-4 max-w-2xl">
              Learn how to set up and use Proxium proxies. Full documentation and API access are available inside your dashboard.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-surface-1 border border-navy-100 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-navy-900 text-lg font-bold mt-5">Setup Guides</h3>
              <p className="text-navy-500 text-sm mt-2">
                Step-by-step instructions for configuring proxies in browsers, tools, and scripts.
              </p>
            </div>

            <div className="bg-surface-1 border border-navy-100 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto">
                <Terminal className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-navy-900 text-lg font-bold mt-5">Minimal API Access</h3>
              <p className="text-navy-500 text-sm mt-2">
                Basic API for checking your proxy list and account data. Available after sign-up inside the dashboard.
              </p>
            </div>

            <div className="bg-surface-1 border border-navy-100 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-navy-900 text-lg font-bold mt-5">Dashboard Access</h3>
              <p className="text-navy-500 text-sm mt-2">
                Full documentation, credentials, and management tools are available inside your account dashboard.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors"
            >
              Create an account to access full docs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
