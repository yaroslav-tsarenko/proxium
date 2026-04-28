"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { UserPlus, Eye, EyeOff, Check, Loader2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ALL_COUNTRIES, EXCLUDED_COUNTRIES } from "@/lib/auth/constants";

const allowedCountries = ALL_COUNTRIES.filter(
  (c) => !(EXCLUDED_COUNTRIES as readonly string[]).includes(c),
);

const inputClass =
  "w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors";

export default function SignUpPage() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    street: "",
    city: "",
    country: "",
    postCode: "",
    agreedToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!formRef.current) return;
    const sections = formRef.current.querySelectorAll("[data-section]");
    gsap.fromTo(
      sections,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
    );
  }, []);

  const update = (key: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const passwordStrength = (() => {
    const p = form.password;
    if (p.length === 0) return { level: 0, label: "", color: "" };
    if (p.length < 8) return { level: 1, label: "Too short", color: "bg-red-500" };
    const has = {
      upper: /[A-Z]/.test(p),
      lower: /[a-z]/.test(p),
      number: /\d/.test(p),
      special: /[^A-Za-z0-9]/.test(p),
    };
    const score = Object.values(has).filter(Boolean).length;
    if (score <= 2) return { level: 2, label: "Weak", color: "bg-orange-500" };
    if (score === 3) return { level: 3, label: "Good", color: "bg-yellow-500" };
    return { level: 4, label: "Strong", color: "bg-green-500" };
  })();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
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
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950 min-h-screen">
      <Container>
        <div className="max-w-2xl mx-auto" ref={formRef}>
          <div data-section className="flex flex-col items-center text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4">
              <UserPlus className="w-6 h-6 text-green-400" />
            </div>
            <h1 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight">
              Create your account
            </h1>
            <p className="text-zinc-400 text-sm mt-2">
              Join Proxium and start using proxies in minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div data-section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8 mb-4">
              <h2 className="text-zinc-50 font-semibold mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 text-xs font-bold flex items-center justify-center">1</span>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Surname *</label>
                  <input
                    type="text"
                    required
                    value={form.surname}
                    onChange={(e) => update("surname", e.target.value)}
                    className={inputClass}
                    placeholder="Doe"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Password *</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={8}
                      value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                      className={inputClass + " pr-10"}
                      placeholder="Min. 8 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {form.password.length > 0 && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${passwordStrength.color}`}
                          style={{ width: `${(passwordStrength.level / 4) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-zinc-500">{passwordStrength.label}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={form.dateOfBirth}
                    onChange={(e) => update("dateOfBirth", e.target.value)}
                    className={inputClass + " [color-scheme:dark]"}
                  />
                </div>
              </div>
            </div>

            <div data-section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8 mb-4">
              <h2 className="text-zinc-50 font-semibold mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 text-xs font-bold flex items-center justify-center">2</span>
                Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Street, house number, apartment *</label>
                  <input
                    type="text"
                    required
                    value={form.street}
                    onChange={(e) => update("street", e.target.value)}
                    className={inputClass}
                    placeholder="123 Main St, Apt 4B"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">City *</label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className={inputClass}
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Post code *</label>
                  <input
                    type="text"
                    required
                    value={form.postCode}
                    onChange={(e) => update("postCode", e.target.value)}
                    className={inputClass}
                    placeholder="10001"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-zinc-300 text-sm font-medium mb-2">Country *</label>
                  <select
                    required
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    className={inputClass + " appearance-none"}
                  >
                    <option value="">Select your country</option>
                    {allowedCountries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div data-section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8 mb-6">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    checked={form.agreedToTerms}
                    onChange={(e) => update("agreedToTerms", e.target.checked)}
                    className="sr-only peer"
                    required
                  />
                  <div className="w-5 h-5 rounded-md border border-zinc-600 bg-zinc-800 peer-checked:bg-green-500 peer-checked:border-green-500 transition-colors flex items-center justify-center">
                    {form.agreedToTerms && <Check className="w-3.5 h-3.5 text-zinc-950" />}
                  </div>
                </div>
                <span className="text-zinc-400 text-sm leading-relaxed">
                  I agree to the{" "}
                  <Link href="/legal/terms" className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors">
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/legal/privacy" className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            {errorMsg && (
              <div data-section className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {errorMsg}
              </div>
            )}

            <div data-section>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-4 rounded-xl bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

              <p className="text-zinc-500 text-xs text-center mt-4">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-green-400 hover:text-green-300 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
