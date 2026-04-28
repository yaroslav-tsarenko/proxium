"use client";

import { useTranslations } from "@/lib/translations";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { MapPin } from "lucide-react";

const flagEmojis: Record<string, string> = {
  US: "\u{1F1FA}\u{1F1F8}",
  GB: "\u{1F1EC}\u{1F1E7}",
  DE: "\u{1F1E9}\u{1F1EA}",
  FR: "\u{1F1EB}\u{1F1F7}",
  CA: "\u{1F1E8}\u{1F1E6}",
  NL: "\u{1F1F3}\u{1F1F1}",
  ES: "\u{1F1EA}\u{1F1F8}",
  IT: "\u{1F1EE}\u{1F1F9}",
  BR: "\u{1F1E7}\u{1F1F7}",
  JP: "\u{1F1EF}\u{1F1F5}",
  AU: "\u{1F1E6}\u{1F1FA}",
  IN: "\u{1F1EE}\u{1F1F3}",
};

export default function LocationsSection() {
  const t = useTranslations("locations");
  const countries = t.raw("countries") as Array<{
    name: string;
    flag: string;
    region: string;
  }>;

  return (
    <section className="py-20 lg:py-28 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 px-6 py-16 sm:px-12 lg:px-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center mb-12">
                <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
                  {t("sectionTag")}
                </span>
                <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
                  {t("title")}
                </h2>
                <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                  {t("subtitle")}
                </p>
              </div>

              <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {countries.map((country) => (
                  <div
                    key={country.flag}
                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
                  >
                    <span className="text-2xl" role="img" aria-label={country.name}>
                      {flagEmojis[country.flag] || country.flag}
                    </span>
                    <div>
                      <p className="text-zinc-50 text-sm font-semibold">
                        {country.name}
                      </p>
                      <p className="text-zinc-500 text-xs">{country.region}</p>
                    </div>
                  </div>
                ))}
              </StaggerChildren>

              <div className="flex flex-col items-center mt-8 gap-3">
                <p className="text-zinc-400 text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-green-400" />
                  {t("more")}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
