import HeroSection from "@/components/sections/HeroSection";
import LogoBanner from "@/components/sections/LogoBanner";
import StatsSection from "@/components/sections/StatsSection";
import ProductsGrid from "@/components/sections/ProductsGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import LocationsSection from "@/components/sections/LocationsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DashboardSection from "@/components/sections/DashboardSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import SupportSection from "@/components/sections/SupportSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBanner />
      <StatsSection />
      <ProductsGrid />
      <HowItWorks />
      <LocationsSection />
      <FeaturesSection />
      <DashboardSection />
      <UseCasesSection />
      <SupportSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
