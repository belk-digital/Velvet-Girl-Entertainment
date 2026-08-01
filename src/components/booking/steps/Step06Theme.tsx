"use client";

import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import ImageOptionCard from "@/components/booking/ImageOptionCard";

const THEME_OPTIONS = [
  {
    slug: "no-preference",
    title: "No Preference",
    imageSrc: undefined,
  },
  {
    slug: "bad-cop",
    title: "Bad Cop",
    imageSrc: "/gallery images/BAD COP.webp",
  },
  {
    slug: "sexy-nurse",
    title: "Sexy Nurse",
    imageSrc: "/gallery images/SEXY NURSE.webp",
  },
  {
    slug: "dominatrix",
    title: "Dominatrix",
    imageSrc: "/gallery images/DOMINATRIX.webp",
  },
  {
    slug: "cheerleader",
    title: "Cheerleader",
    imageSrc: "/gallery images/GAME DAY GIRLS.webp",
  },
  {
    slug: "school-girl",
    title: "School Girl",
    imageSrc: "/gallery images/BREAKFAST WITH BABES.webp",
  },
];

export default function Step06Theme() {
  const { state, setField } = useBookingForm();

  return (
    <StepLayout stepKey={6} title="Choose a party theme">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 my-6">
        {THEME_OPTIONS.map((item) => (
          <ImageOptionCard
            key={item.slug}
            imageSrc={item.imageSrc}
            title={item.title}
            selected={state.theme === item.slug}
            onClick={() => setField("theme", item.slug)}
          />
        ))}
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
