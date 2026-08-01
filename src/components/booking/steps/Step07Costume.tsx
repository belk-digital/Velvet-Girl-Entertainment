"use client";

import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import ImageOptionCard from "@/components/booking/ImageOptionCard";

const COSTUME_OPTIONS = [
  {
    slug: "no-preference",
    title: "No Preference",
    imageSrc: undefined,
  },
  {
    slug: "police",
    title: "Police",
    imageSrc: "/gallery images/BAD COP.webp",
  },
  {
    slug: "nurse",
    title: "Nurse",
    imageSrc: "/gallery images/SEXY NURSE.webp",
  },
  {
    slug: "firefighter",
    title: "Firefighter",
    imageSrc: "/gallery images/DIOR.webp",
  },
  {
    slug: "school-girl",
    title: "School Girl",
    imageSrc: "/gallery images/BREAKFAST WITH BABES.webp",
  },
  {
    slug: "cheerleader",
    title: "Cheerleader",
    imageSrc: "/gallery images/GAME DAY GIRLS.webp",
  },
];

export default function Step07Costume() {
  const { state, setField } = useBookingForm();

  return (
    <StepLayout stepKey={7} title="Costume preference">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 my-6">
        {COSTUME_OPTIONS.map((item) => (
          <ImageOptionCard
            key={item.slug}
            imageSrc={item.imageSrc}
            title={item.title}
            selected={state.costume === item.slug}
            onClick={() => setField("costume", item.slug)}
          />
        ))}
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
