"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

const inputClass =
  "w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors";

function ResetPasswordForm() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token") ?? "";
  const id = params.get("id") ?? "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setMessage("Passwords do not match.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, id, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("done");
      setTimeout(() => router.push("/sign-in"), 1800);
    } catch {
      setMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (!token || !id) {
    return (
      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
        Invalid reset link.{" "}
        <Link href="/forgot-password" className="underline">Request a new one</Link>.
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
        Password updated. Redirecting to sign in...
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-zinc-300 text-sm font-medium mb-2">New password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass + " pr-10"}
            placeholder="At least 8 characters"
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

      <div>
        <label className="block text-zinc-300 text-sm font-medium mb-2">Confirm password</label>
        <input
          type={showPassword ? "text" : "password"}
          required
          minLength={8}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className={inputClass}
          placeholder="Repeat your password"
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
            Updating...
          </>
        ) : (
          "Update password"
        )}
      </button>
    </form>
  );
}

export default function ResetPasswordPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950 min-h-screen flex items-center">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-green-400" />
            </div>
            <h1 className="text-zinc-50 text-3xl font-bold tracking-tight">Set a new password</h1>
            <p className="text-zinc-400 text-sm mt-2">Choose a strong password for your account.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <Suspense fallback={<div className="text-zinc-500 text-sm text-center">Loading...</div>}>
              <ResetPasswordForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
