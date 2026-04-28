"use client";

import { useTranslations } from "@/lib/translations";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { MapPin } from "lucide-react";

const regions = [
  {
    name: "North America",
    countries: [
      { name: "United States", flag: "🇺🇸", cities: "New York, Los Angeles, Chicago, Dallas, Miami" },
      { name: "Canada", flag: "🇨🇦", cities: "Toronto, Vancouver, Montreal" },
      { name: "Mexico", flag: "🇲🇽", cities: "Mexico City" },
    ],
  },
  {
    name: "Europe",
    countries: [
      { name: "United Kingdom", flag: "🇬🇧", cities: "London, Manchester" },
      { name: "Germany", flag: "🇩🇪", cities: "Frankfurt, Berlin" },
      { name: "France", flag: "🇫🇷", cities: "Paris, Marseille" },
      { name: "Netherlands", flag: "🇳🇱", cities: "Amsterdam" },
      { name: "Spain", flag: "🇪🇸", cities: "Madrid, Barcelona" },
      { name: "Italy", flag: "🇮🇹", cities: "Milan, Rome" },
      { name: "Poland", flag: "🇵🇱", cities: "Warsaw" },
      { name: "Sweden", flag: "🇸🇪", cities: "Stockholm" },
    ],
  },
  {
    name: "Asia",
    countries: [
      { name: "Japan", flag: "🇯🇵", cities: "Tokyo, Osaka" },
      { name: "India", flag: "🇮🇳", cities: "Mumbai, Delhi" },
      { name: "Singapore", flag: "🇸🇬", cities: "Singapore" },
      { name: "South Korea", flag: "🇰🇷", cities: "Seoul" },
    ],
  },
  {
    name: "South America",
    countries: [
      { name: "Brazil", flag: "🇧🇷", cities: "Sao Paulo, Rio de Janeiro" },
      { name: "Argentina", flag: "🇦🇷", cities: "Buenos Aires" },
    ],
  },
  {
    name: "Oceania",
    countries: [
      { name: "Australia", flag: "🇦🇺", cities: "Sydney, Melbourne" },
    ],
  },
];

export default function LocationsPage() {
  const t = useTranslations("locations");

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              {t("sectionTag")}
            </span>
            <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
              {t("title")}
            </h1>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-12">
          {regions.map((region) => (
            <ScrollReveal key={region.name}>
              <div>
                <h2 className="text-zinc-50 text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  {region.name}
                </h2>
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {region.countries.map((country) => (
                    <div
                      key={country.name}
                      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{country.flag}</span>
                        <h3 className="text-zinc-50 font-semibold">{country.name}</h3>
                      </div>
                      <p className="text-zinc-500 text-sm">{country.cities}</p>
                    </div>
                  ))}
                </StaggerChildren>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <p className="text-zinc-400">
              {t("more")}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
