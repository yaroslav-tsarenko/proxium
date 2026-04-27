"use client";

import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

const companies = [
  "TechFlow",
  "DataSync",
  "CloudNet",
  "WebScale",
  "NetPrime",
  "InfoBase",
];

export default function LogoBanner() {
  const marqueeItems = [...companies, ...companies];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <Container>
        <ScrollReveal>
          <p className="text-navy-400 text-xs uppercase tracking-[0.2em] text-center mb-8 font-medium">
            Trusted by businesses worldwide
          </p>
        </ScrollReveal>
      </Container>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {marqueeItems.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-navy-300 text-lg font-bold whitespace-nowrap px-10 hover:text-navy-500 transition-colors cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
