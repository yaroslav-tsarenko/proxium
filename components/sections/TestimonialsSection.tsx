"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Star } from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              {t("sectionTag")}
            </span>
            <h2 className="text-navy-900 text-3xl lg:text-4xl font-bold tracking-tight mt-4">
              {t("title")}
            </h2>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-surface-1 border border-navy-100 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-navy-700 text-sm leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-bold shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-navy-900 text-sm font-semibold">
                    {item.name}
                  </p>
                  <p className="text-navy-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
