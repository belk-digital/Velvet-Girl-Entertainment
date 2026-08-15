"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";

export default function Step01Welcome() {
  const { nextStep } = useBookingForm();

  return (
    <StepLayout stepKey={1} rightImage="/gallery images/BREAKFAST WITH BABES.webp">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left py-12 sm:py-24 max-w-2xl relative z-10">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
          Let&rsquo;s plan <br />
          <span className="text-[#380605]">your perfect night.</span>
        </h1>

        <p className="font-body text-base sm:text-xl text-stone-300 max-w-lg mb-10 leading-relaxed font-normal">
          We&rsquo;ll only ask a few questions to create an unforgettable
          experience.
        </p>

        <motion.button
          type="button"
          onClick={nextStep}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-[#380605] hover:bg-[#8e020a] text-white px-10 py-5 rounded-full font-body text-sm sm:text-base font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_rgba(92, 0, 5,0.3)] cursor-pointer"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </StepLayout>
  );
}
