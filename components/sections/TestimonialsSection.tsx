"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="py-24 lg:py-32 bg-zinc-900/30">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
              &#9670; {t("sectionTag")}
            </span>
            <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
              {t("title")}
            </h2>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
            >
              <span className="text-6xl text-zinc-800 font-serif leading-none select-none">
                &ldquo;
              </span>

              <p className="text-zinc-300 text-sm italic leading-relaxed mt-2">
                {item.quote}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-sm font-semibold shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-zinc-50 text-sm font-medium">
                    {item.name}
                  </p>
                  <p className="text-zinc-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
