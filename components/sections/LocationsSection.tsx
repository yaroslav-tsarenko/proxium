"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { MapPin } from "lucide-react";

const flagEmojis: Record<string, string> = {
  US: "🇺🇸",
  GB: "🇬🇧",
  DE: "🇩🇪",
  FR: "🇫🇷",
  CA: "🇨🇦",
  NL: "🇳🇱",
  ES: "🇪🇸",
  IT: "🇮🇹",
  BR: "🇧🇷",
  JP: "🇯🇵",
  AU: "🇦🇺",
  IN: "🇮🇳",
};

export default function LocationsSection() {
  const t = useTranslations("locations");
  const countries = t.raw("countries") as Array<{
    name: string;
    flag: string;
    region: string;
  }>;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <div className="rounded-3xl bg-gradient-to-br from-primary-50 to-emerald-50/40 border border-primary-100 px-6 py-16 sm:px-12 lg:px-16">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="inline-flex items-center bg-white text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide shadow-sm">
                {t("sectionTag")}
              </span>
              <h2 className="text-navy-900 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
                {t("title")}
              </h2>
              <p className="text-navy-500 text-lg mt-4 max-w-2xl">
                {t("subtitle")}
              </p>
            </div>

            <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {countries.map((country) => (
                <div
                  key={country.flag}
                  className="bg-white rounded-xl p-4 border border-white/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
                >
                  <span className="text-2xl" role="img" aria-label={country.name}>
                    {flagEmojis[country.flag] || country.flag}
                  </span>
                  <div>
                    <p className="text-navy-900 text-sm font-semibold">
                      {country.name}
                    </p>
                    <p className="text-navy-400 text-xs">{country.region}</p>
                  </div>
                </div>
              ))}
            </StaggerChildren>

            <div className="flex flex-col items-center mt-8 gap-3">
              <p className="text-navy-500 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary-500" />
                {t("more")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
