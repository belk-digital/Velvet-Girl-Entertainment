import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedPerformers from "@/components/home/FeaturedPerformers";
import PackagesSection from "@/components/home/PackagesSection";
import CitiesSection from "@/components/home/CitiesSection";
import Reviews from "@/components/home/Reviews";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <AboutSection />
      <WhyChooseUs />
      <ServicesGrid />
      <FeaturedPerformers />
      <PackagesSection />
      <CitiesSection />
      <Reviews />
      <FaqSection />
      <CtaSection />
    </>
  );
}
