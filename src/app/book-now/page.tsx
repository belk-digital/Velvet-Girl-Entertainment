import type { Metadata } from "next";
import React, { Suspense } from "react";
import { BookingProvider } from "@/context/BookingProvider";
import BookingWizardFlow from "@/components/booking/BookingWizardFlow";

export const metadata: Metadata = {
  title: "Book Now — Onboarding | Velvet Girl Entertainment",
  description:
    "Let's plan your perfect night. Answer a few quick questions to create an unforgettable entertainment experience.",
  alternates: {
    canonical: "/book-now",
  },
};

export default function BookNowPage() {
  return (
    <BookingProvider>
      <Suspense fallback={null}>
        <BookingWizardFlow />
      </Suspense>
    </BookingProvider>
  );
}
