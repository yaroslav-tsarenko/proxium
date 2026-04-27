"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Mail, MessageSquare, Building } from "lucide-react";

const proxyTypes = [
  { value: "", label: "Select proxy type" },
  { value: "residential", label: "Residential Proxies" },
  { value: "datacenter", label: "Datacenter Proxies" },
  { value: "mobile", label: "Mobile Proxies" },
  { value: "isp", label: "ISP Proxies" },
  { value: "mixed", label: "Multiple Types" },
  { value: "unsure", label: "Not sure yet" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    proxyType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", proxyType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Info */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
                  &#9670; Contact
                </span>
                <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                  Get in touch
                </h1>
                <p className="text-zinc-400 text-lg mt-4">
                  Have a question or need a custom solution? Our team is here to
                  help.
                </p>

                <div className="mt-12 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-zinc-50 font-semibold">Email</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        support@proxium.io
                      </p>
                      <p className="text-zinc-500 text-xs mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-zinc-50 font-semibold">Live Chat</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Available Mon-Fri, 9AM-6PM UTC
                      </p>
                      <p className="text-zinc-500 text-xs mt-1">
                        Pro and Enterprise customers get 24/7 support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                      <Building className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-zinc-50 font-semibold">Enterprise</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        enterprise@proxium.io
                      </p>
                      <p className="text-zinc-500 text-xs mt-1">
                        Custom solutions, SLAs, and dedicated support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right side - Form */}
            <ScrollReveal direction="right">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-zinc-50 text-xl font-semibold">
                      Message sent!
                    </h3>
                    <p className="text-zinc-400 text-sm mt-2 max-w-sm">
                      Thank you for reaching out. We will get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-zinc-300 text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500/50 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500/50 transition-colors"
                        placeholder="Company name (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 text-sm font-medium mb-2">
                        Proxy Type
                      </label>
                      <select
                        value={formData.proxyType}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            proxyType: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-50 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
                      >
                        {proxyTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-300 text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                        placeholder="Tell us about your project and requirements..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full px-6 py-3 rounded-lg bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
