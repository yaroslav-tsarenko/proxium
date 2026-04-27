import HeroSection from "@/components/sections/HeroSection";
import LogoBanner from "@/components/sections/LogoBanner";
import StatsSection from "@/components/sections/StatsSection";
import ProductsGrid from "@/components/sections/ProductsGrid";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingPreview from "@/components/sections/PricingPreview";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBanner />
      <StatsSection />
      <ProductsGrid />
      <FeaturesSection />
      <HowItWorks />
      <PricingPreview />
      <UseCasesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
