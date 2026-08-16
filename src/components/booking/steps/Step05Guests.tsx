"use client";

import React from "react";
import { Users } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";
import NumberStepper from "@/components/booking/NumberStepper";

export default function Step05Guests() {
  const { state, setField } = useBookingForm();

  return (
    <StepLayout stepKey={5} title="How many guests are coming?">
      <div className="flex flex-col items-center justify-center my-6">
        <div className="mb-4 text-stone-500">
          <Users className="w-8 h-8" />
        </div>

        <NumberStepper
          value={state.guestCount}
          min={1}
          max={500}
          onChange={(val) => setField("guestCount", val)}
          sublabel="Estimate total attendees"
        />
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
