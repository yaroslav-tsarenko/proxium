"use client";

import { Container } from "@/components/layout/Container";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Lock, BookOpen, Terminal, ArrowRight } from "lucide-react";

export default function DocsPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              Resources
            </span>
            <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              Getting Started
            </h1>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              Learn how to set up and use Proxium proxies. Full documentation and API access are available inside your dashboard.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-zinc-50 text-lg font-bold mt-5">Setup Guides</h3>
              <p className="text-zinc-400 text-sm mt-2">
                Step-by-step instructions for configuring proxies in browsers, tools, and scripts.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto">
                <Terminal className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-zinc-50 text-lg font-bold mt-5">Minimal API Access</h3>
              <p className="text-zinc-400 text-sm mt-2">
                Basic API for checking your proxy list and account data. Available after sign-up inside the dashboard.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 text-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-zinc-50 text-lg font-bold mt-5">Dashboard Access</h3>
              <p className="text-zinc-400 text-sm mt-2">
                Full documentation, credentials, and management tools are available inside your account dashboard.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 text-green-400 text-sm font-semibold hover:text-green-300 transition-colors"
            >
              Create an account to access full docs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
