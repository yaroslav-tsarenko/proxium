"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function DashboardSection() {
  const t = useTranslations("dashboard");
  const features = t.raw("features") as string[];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                {t("sectionTag")}
              </span>
              <h2 className="text-navy-900 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
                {t("title")}
              </h2>
              <p className="text-navy-500 text-lg mt-4 max-w-lg">
                {t("subtitle")}
              </p>

              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                    <span className="text-navy-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-navy-400 text-xs ml-2 font-mono">
                  dashboard.proxium.io
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-navy-700/50 rounded-xl p-4">
                  <p className="text-navy-400 text-xs font-medium uppercase tracking-wider mb-2">
                    Account Balance
                  </p>
                  <p className="text-white text-3xl font-bold">$247.50</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-navy-700/50 rounded-xl p-3 text-center">
                    <p className="text-primary-400 text-xl font-bold">12</p>
                    <p className="text-navy-400 text-xs mt-0.5">Active</p>
                  </div>
                  <div className="bg-navy-700/50 rounded-xl p-3 text-center">
                    <p className="text-emerald-400 text-xl font-bold">4</p>
                    <p className="text-navy-400 text-xs mt-0.5">Countries</p>
                  </div>
                  <div className="bg-navy-700/50 rounded-xl p-3 text-center">
                    <p className="text-blue-400 text-xl font-bold">99.2%</p>
                    <p className="text-navy-400 text-xs mt-0.5">Uptime</p>
                  </div>
                </div>

                <div className="bg-navy-700/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-navy-300 text-xs font-medium uppercase tracking-wider">
                      Recent Proxies
                    </p>
                    <p className="text-primary-400 text-xs font-medium">View All</p>
                  </div>
                  {[
                    { type: "Datacenter", loc: "US", status: "Active" },
                    { type: "Residential", loc: "DE", status: "Active" },
                    { type: "Rotating", loc: "GB", status: "Active" },
                  ].map((proxy) => (
                    <div
                      key={`${proxy.type}-${proxy.loc}`}
                      className="flex items-center justify-between py-2 border-t border-navy-600/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-white text-sm">{proxy.type}</span>
                      </div>
                      <span className="text-navy-400 text-xs">{proxy.loc}</span>
                      <span className="text-emerald-400 text-xs font-medium">
                        {proxy.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
