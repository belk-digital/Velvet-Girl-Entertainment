import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesGrid from "@/components/home/ServicesGrid";
import TextMarquee from "@/components/ui/TextMarquee";
import VelvetDifference from "@/components/home/VelvetDifference";
import ShowcaseGallery from "@/components/home/ShowcaseGallery";
import PerformersCarousel from "@/components/home/PerformersCarousel";
// import OurPerformersGallery from "@/components/home/OurPerformersGallery";
// import FeaturedPerformers from "@/components/home/FeaturedPerformers";
import PackagesSection from "@/components/home/PackagesSection";
import CitiesSection from "@/components/home/CitiesSection";
import Reviews from "@/components/home/Reviews";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustStats /> */}
      <TextMarquee items={[
        "500+ EVENTS BOOKED",
        "8 CITIES SERVED",
        "24/7 BOOKING CONCIERGE",
        "100% REAL PHOTOS, NO FILTERS"
      ]} />
      {/* <AboutSection /> */}
      <WhyChooseUs />
      <PackagesSection />
      {/* <ServicesGrid /> */}
      <VelvetDifference />
      <PerformersCarousel />
      {/* <FeaturedPerformers /> */}
      <CitiesSection />
      <Reviews />
      <ShowcaseGallery />
      <FaqSection />
      {/* <CtaSection /> */}
    </>
  );
}
