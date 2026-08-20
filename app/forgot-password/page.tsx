"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { KeyRound, Loader2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

const inputClass =
  "w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setMessage(data.message || "Check your inbox for a reset link.");
      setStatus("sent");
    } catch {
      setMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950 min-h-screen flex items-center">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4">
              <KeyRound className="w-6 h-6 text-green-400" />
            </div>
            <h1 className="text-zinc-50 text-3xl font-bold tracking-tight">Forgot your password?</h1>
            <p className="text-zinc-400 text-sm mt-2">
              Enter your email and we&apos;ll send you a link to reset it.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            {status === "sent" ? (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                {message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-3.5 rounded-xl bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </button>
              </form>
            )}

            <p className="text-zinc-500 text-xs text-center mt-6">
              Remembered it?{" "}
              <Link href="/sign-in" className="text-green-400 hover:text-green-300 transition-colors">
                Back to sign in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
