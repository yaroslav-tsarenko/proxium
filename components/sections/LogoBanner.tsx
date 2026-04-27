"use client";

import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

const companies = [
  "DataFlow",
  "ScaleOps",
  "NetGuard",
  "CloudPeak",
  "CyberEdge",
  "InfoPlex",
];

export default function LogoBanner() {
  // Double the array for seamless looping
  const marqueeItems = [...companies, ...companies];

  return (
    <section className="py-12 bg-zinc-950 overflow-hidden">
      <Container>
        <ScrollReveal>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] text-center mb-8">
            Trusted by teams worldwide
          </p>
        </ScrollReveal>
      </Container>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {marqueeItems.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-zinc-600 text-lg font-semibold whitespace-nowrap px-10 hover:text-zinc-400 transition-colors cursor-default select-none"
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
