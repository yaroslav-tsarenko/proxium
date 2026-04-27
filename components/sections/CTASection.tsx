"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-24 lg:py-32 bg-zinc-950">
      <Container>
        <ScrollReveal>
          <div className="bg-gradient-to-r from-green-600/20 via-cyan-600/10 to-violet-600/10 border border-zinc-800 rounded-3xl max-w-5xl mx-auto p-12 lg:p-16 text-center">
            <h2 className="text-zinc-50 text-3xl lg:text-4xl font-bold">
              {t("title")}
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>

            <div className="mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-500 text-zinc-950 font-semibold text-base hover:bg-green-400 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              >
                {t("button")}
              </Link>
            </div>

            <p className="text-zinc-500 text-xs mt-4">{t("note")}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
