"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

export default function FAQSection() {
  const t = useTranslations("faq");

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
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible>
              {faqKeys.map((key) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="text-zinc-100 text-base font-medium">
                    {t(`items.${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-sm">
                    {t(`items.${key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
