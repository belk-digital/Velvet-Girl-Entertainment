"use client";

import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";

export interface StepNavigationProps {
  onNext?: () => void;
  onBack?: () => void;
  nextLabel?: string;
  backLabel?: string;
  hideBack?: boolean;
  hideNext?: boolean;
  disabled?: boolean;
}

export default function StepNavigation({
  onNext,
  onBack,
  nextLabel = "Continue",
  backLabel = "Back",
  hideBack = false,
  hideNext = false,
  disabled = false,
}: StepNavigationProps) {
  const { nextStep, prevStep, isCurrentStepValid } = useBookingForm();

  const isNextDisabled = disabled || !isCurrentStepValid();

  const handleNextClick = useCallback(() => {
    if (isNextDisabled) return;
    if (onNext) {
      onNext();
    } else {
      nextStep();
    }
  }, [isNextDisabled, onNext, nextStep]);

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      prevStep();
    }
  };

  // Keyboard navigation: Enter to continue
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !isNextDisabled && !hideNext) {
        // Prevent accidental form submits or textarea enters
        if (
          document.activeElement?.tagName === "TEXTAREA" ||
          document.activeElement?.tagName === "BUTTON"
        ) {
          return;
        }
        e.preventDefault();
        handleNextClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isNextDisabled, hideNext, handleNextClick]);

  return (
    <footer className="w-full mt-10 pt-6 flex items-center justify-between sticky bottom-0 z-30 px-2 py-4">
      <div>
        {!hideBack && (
          <motion.button
            type="button"
            onClick={handleBackClick}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/15 bg-white text-stone-700 font-body text-sm font-semibold hover:border-black/30 hover:bg-black/[0.02] transition-colors cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </motion.button>
        )}
      </div>

      <div>
        {!hideNext && (
          <motion.button
            type="button"
            disabled={isNextDisabled}
            onClick={handleNextClick}
            whileHover={isNextDisabled ? {} : { y: -2, scale: 1.02 }}
            whileTap={isNextDisabled ? {} : { scale: 0.97 }}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md ${
              isNextDisabled
                ? "bg-stone-300 text-stone-500 cursor-not-allowed opacity-60 shadow-none"
                : "bg-[#5C0005] text-white hover:bg-[#5a0105] cursor-pointer"
            }`}
          >
            <span>{nextLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </footer>
  );
}
