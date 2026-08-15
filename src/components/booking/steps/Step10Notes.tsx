"use client";

import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";
import StepNavigation from "@/components/booking/StepNavigation";

export default function Step10Notes() {
  const { state, setField } = useBookingForm();

  const maxLength = 250;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value.slice(0, maxLength);
    setField("notes", val);
  };

  return (
    <StepLayout stepKey={9} rightImage="/gallery images/DSC06322.webp">
      <div className="py-6 max-w-xl relative z-10">
        <div className="relative">
          <textarea
            value={state.notes}
            onChange={handleChange}
            placeholder="Location details, dancer preferences, special requests..."
            rows={5}
            className="w-full rounded-2xl border border-white/10 bg-black p-5 font-body text-base text-white placeholder-stone-400 outline-none transition-all duration-300 focus:border-[#5C0005] focus:ring-2 focus:ring-[#5C0005]/20 shadow-sm resize-none"
          />
          <div className="mt-2 text-right font-body text-xs text-stone-400 font-medium">
            {state.notes.length} / {maxLength}
          </div>
        </div>
      </div>

      <StepNavigation />
    </StepLayout>
  );
}
