import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import BookingForm from "@/components/forms/BookingForm";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";

export const metadata: Metadata = {
  title: "Book Now | Velvet Girl Entertainment",
  description:
    "Request a booking and our concierge team will confirm availability and send a personalized quote.",
};

export default function BookNowPage() {
  return (
    <>
      <PageHero
        eyebrow="BOOK NOW"
        title="Request Your Booking"
        subtitle="Tell us about your event and our booking concierge will follow up with availability and pricing."
        bgImage="/gallery images/BACHELOR PARTY_GUYS NIGHT.webp"
      />
      <div className="px-6 py-20 sm:py-28 bg-[#FAF7F2]">
        <Reveal className="mx-auto max-w-3xl">
          <div className="border border-stone-200/80 rounded-2xl bg-white p-8 sm:p-12 shadow-xl">
            <Suspense fallback={null}>
              <BookingForm />
            </Suspense>
          </div>
        </Reveal>
      </div>
      <VelvetCurtains variant="bottom" />
    </>
  );
}
