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

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"] as const;

export default function FAQSection() {
  const t = useTranslations("faq");

  return (
    <section className="py-20 lg:py-28 bg-surface-1">
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

        <ScrollReveal>
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible>
              {faqKeys.map((key) => (
                <AccordionItem key={key} value={key} className="border-navy-100">
                  <AccordionTrigger className="text-navy-900 text-base font-medium hover:text-primary-600">
                    {t(`items.${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy-500 text-sm leading-relaxed">
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
