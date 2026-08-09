"use client";

import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import NumberStepper from "@/components/booking/NumberStepper";

export default function Step08Dancers() {
  const { state, setField } = useBookingForm();

  return (
    <StepLayout stepKey={7} rightImage="/gallery images/Velvet girl.webp">
      <div className="py-6 max-w-xl relative z-10">
        <h1 className="mb-4 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight text-center sm:text-left">
          How many dancers would you like?
        </h1>

        <div className="my-10">
          <NumberStepper
            value={state.dancers}
            min={2}
            max={50}
            onChange={(val) => setField("dancers", val)}
            sublabel="(minimum 2)"
          />
        </div>
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
