"use client";

import { useTranslations } from "next-intl";
import { Code2, RefreshCw, MapPin, BarChart3, Shield, Bell } from "lucide-react";
import { Container } from "@/components/layout/Container";
import CodeSnippet from "@/components/custom/CodeSnippet";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const featureItems = [
  {
    key: "api" as const,
    icon: Code2,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    hasCode: true,
    colSpan: "md:col-span-2",
  },
  {
    key: "rotation" as const,
    icon: RefreshCw,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    hasCode: false,
    colSpan: "md:col-span-1",
  },
  {
    key: "targeting" as const,
    icon: MapPin,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    hasCode: false,
    colSpan: "md:col-span-1",
  },
  {
    key: "dashboard" as const,
    icon: BarChart3,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    hasCode: false,
    colSpan: "md:col-span-1",
  },
  {
    key: "protocols" as const,
    icon: Shield,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    hasCode: false,
    colSpan: "md:col-span-1",
  },
  {
    key: "webhooks" as const,
    icon: Bell,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    hasCode: false,
    colSpan: "md:col-span-2",
  },
];

const codeSnippetTabs = [
  {
    label: "Python",
    language: "python",
    code: `import proxium

client = proxium.Client("your-api-key")
proxy = client.get_proxy(
    type="residential",
    country="US"
)
print(proxy.url)`,
  },
];

export default function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section className="py-24 lg:py-32 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
              &#9670; {t("sectionTag")}
            </span>
            <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
              {t("title")}
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {featureItems.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.key}
                className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 ${feature.colSpan}`}
              >
                <div
                  className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>

                <h3 className="text-zinc-50 text-lg font-semibold mt-4">
                  {t(`items.${feature.key}.title`)}
                </h3>
                <p className="text-zinc-400 text-sm mt-2">
                  {t(`items.${feature.key}.description`)}
                </p>

                {feature.hasCode && (
                  <CodeSnippet tabs={codeSnippetTabs} className="mt-6" />
                )}
              </div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
