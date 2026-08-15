"use client";

import React from "react";
import { Check } from "lucide-react";

export interface FormWizardHeaderProps {
  steps: string[];
  currentStep: number; // 1-indexed
  onStepClick?: (stepNumber: number) => void;
}

export default function FormWizardHeader({
  steps,
  currentStep,
  onStepClick,
}: FormWizardHeaderProps) {
  const progressPercentage =
    steps.length > 1 ? ((currentStep - 1) / (steps.length - 1)) * 100 : 100;

  return (
    <div className="mb-8 w-full">
      {/* Top Status & Title */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 items-center justify-center rounded-full bg-[#5C0005] px-2.5 font-body text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            Step {currentStep} of {steps.length}
          </span>
          <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-wide">
            {steps[currentStep - 1]}
          </h4>
        </div>
        <span className="font-body text-xs font-semibold uppercase tracking-wider text-white/50">
          {Math.round(progressPercentage)}% Complete
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="relative mb-6 h-1.5 w-full overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full bg-gradient-to-r from-[#5C0005] to-[#a30008] transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Step Circles & Labels */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {steps.map((stepTitle, idx) => {
          const stepNumber = idx + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isClickable = isCompleted && Boolean(onStepClick);

          return (
            <button
              key={stepTitle}
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && onStepClick?.(stepNumber)}
              className={`group flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 ${
                isCurrent
                  ? "border-[#5C0005] bg-[#5C0005]/5 shadow-sm"
                  : isCompleted
                  ? "border-white/10 bg-black hover:border-[#5C0005]/40 cursor-pointer"
                  : "border-white/10 bg-black/[0.02] opacity-60 cursor-not-allowed"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  isCompleted
                    ? "bg-[#5C0005] text-white group-hover:scale-105"
                    : isCurrent
                    ? "border-2 border-[#5C0005] bg-white text-[#5C0005]"
                    : "border border-black/25 bg-black text-white/50"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                ) : (
                  stepNumber
                )}
              </span>
              <span
                className={`truncate font-body text-xs uppercase tracking-wider ${
                  isCurrent
                    ? "font-bold text-white"
                    : isCompleted
                    ? "font-semibold text-white/80"
                    : "font-medium text-white/50"
                }`}
              >
                {stepTitle}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
