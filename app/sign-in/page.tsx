"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950 min-h-screen flex items-center">
      <Container>
        <ScrollReveal>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-green-400" />
              </div>
              <h1 className="text-zinc-50 text-3xl font-bold tracking-tight">
                Sign in to Proxium
              </h1>
              <p className="text-zinc-400 text-sm mt-2">
                Access your dashboard, proxies, and balance.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="Your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-xl bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  Sign In
                </button>
              </form>

              <p className="text-zinc-500 text-xs text-center mt-6">
                Don&apos;t have an account?{" "}
                <Link href="/get-started" className="text-green-400 hover:text-green-300 transition-colors">
                  Get started
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
