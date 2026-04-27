"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Mail, MessageSquare, Headphones } from "lucide-react";

const proxyTypes = [
  { value: "", label: "Select proxy type" },
  { value: "datacenter", label: "Datacenter Proxies" },
  { value: "residential", label: "Static Residential Proxies" },
  { value: "rotating", label: "Rotating Residential Proxies" },
  { value: "dedicated", label: "Dedicated Proxies" },
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
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                Contact
              </span>
              <h1 className="text-navy-900 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                Get in touch
              </h1>
              <p className="text-navy-500 text-lg mt-4">
                Have a question about our proxy services or need help with your account? Our team is here to help.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-semibold">Email</h3>
                    <p className="text-navy-500 text-sm mt-1">
                      support@proxium.io
                    </p>
                    <p className="text-navy-400 text-xs mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-semibold">Live Chat</h3>
                    <p className="text-navy-500 text-sm mt-1">
                      Available Mon-Fri, 9AM-6PM UTC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-navy-900 font-semibold">Support</h3>
                    <p className="text-navy-500 text-sm mt-1">
                      Account help, troubleshooting, and setup guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-surface-1 border border-navy-100 rounded-2xl p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-navy-900 text-xl font-bold">
                    Message sent!
                  </h3>
                  <p className="text-navy-500 text-sm mt-2 max-w-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-primary-600 text-sm font-semibold hover:text-primary-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-navy-700 text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full px-4 py-3 bg-white border border-navy-200 rounded-xl text-navy-900 text-sm placeholder:text-navy-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-700 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full px-4 py-3 bg-white border border-navy-200 rounded-xl text-navy-900 text-sm placeholder:text-navy-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-700 text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, company: e.target.value }))
                      }
                      className="w-full px-4 py-3 bg-white border border-navy-200 rounded-xl text-navy-900 text-sm placeholder:text-navy-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-navy-700 text-sm font-medium mb-2">
                      Proxy Type
                    </label>
                    <select
                      value={formData.proxyType}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, proxyType: e.target.value }))
                      }
                      className="w-full px-4 py-3 bg-white border border-navy-200 rounded-xl text-navy-900 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      {proxyTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy-700 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      className="w-full px-4 py-3 bg-white border border-navy-200 rounded-xl text-navy-900 text-sm placeholder:text-navy-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-3.5 rounded-xl bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
}
