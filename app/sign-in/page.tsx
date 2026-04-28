"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

const inputClass =
  "w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors";

export default function SignInPage() {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
    );
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Invalid credentials.");
        setStatus("error");
        return;
      }

      router.push("/dashboard");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950 min-h-screen flex items-center">
      <Container>
        <div className="max-w-md mx-auto" ref={cardRef} style={{ opacity: 0 }}>
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

              <div>
                <label className="block text-zinc-300 text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClass + " pr-10"}
                    placeholder="Your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3.5 rounded-xl bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <p className="text-zinc-500 text-xs text-center mt-6">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-green-400 hover:text-green-300 transition-colors">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
