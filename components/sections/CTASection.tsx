"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              {t("title")}
            </h2>
            <p className="text-navy-300 text-lg mt-4 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>

            <div className="mt-8">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-semibold text-base hover:bg-primary-400 transition-colors shadow-lg"
              >
                {t("button")}
              </Link>
            </div>

            <p className="text-navy-400 text-sm mt-4">{t("note")}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
