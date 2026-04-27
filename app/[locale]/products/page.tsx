"use client";

import { useTranslations } from "next-intl";
import { Globe, Server, Smartphone, Wifi, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import GlowCard from "@/components/custom/GlowCard";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const products = [
  {
    key: "residential" as const,
    href: "/products/residential" as const,
    icon: Globe,
    glowColor: "rgba(34,197,94,0.15)",
    iconColor: "text-green-400",
    features: [
      "85M+ IPs from real ISPs",
      "195+ country targeting",
      "City & ASN-level precision",
      "Rotating & sticky sessions",
      "HTTP(S) & SOCKS5",
    ],
  },
  {
    key: "datacenter" as const,
    href: "/products/datacenter" as const,
    icon: Server,
    glowColor: "rgba(6,182,212,0.15)",
    iconColor: "text-cyan-400",
    features: [
      "500K+ high-speed IPs",
      "Shared & dedicated pools",
      "Sub-300ms response time",
      "Unlimited bandwidth options",
      "Bulk operations optimized",
    ],
  },
  {
    key: "mobile" as const,
    href: "/products/mobile" as const,
    icon: Smartphone,
    glowColor: "rgba(139,92,246,0.15)",
    iconColor: "text-violet-400",
    features: [
      "10M+ 4G/5G IPs",
      "Real mobile carriers",
      "160+ countries",
      "Genuine device fingerprints",
      "Carrier-level targeting",
    ],
  },
  {
    key: "isp" as const,
    href: "/products/isp" as const,
    icon: Wifi,
    glowColor: "rgba(59,130,246,0.15)",
    iconColor: "text-blue-400",
    features: [
      "Static residential IPs",
      "Datacenter speed",
      "Persistent sessions",
      "Account management safe",
      "Unlimited session duration",
    ],
  },
];

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <>
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
                &#9670; {t("sectionTag")}
              </span>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                {t("title")}
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                {t("subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <GlowCard key={product.key} glowColor={product.glowColor}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${product.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-zinc-50 text-xl font-semibold">
                        {t(`${product.key}.title`)}
                      </h2>
                      <p className="text-zinc-400 text-sm mt-1">
                        {t(`${product.key}.description`)}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {product.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-zinc-300 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-green-400 text-sm font-medium">
                      {t(`${product.key}.startingAt`)}
                    </span>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1 text-zinc-400 text-sm hover:text-zinc-200 transition-colors"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </GlowCard>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <div className="bg-gradient-to-r from-green-600/20 via-cyan-600/10 to-violet-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
              <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
                Not sure which proxy to choose?
              </h2>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
                Talk to our team and we will help you find the right proxy type
                for your use case.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
