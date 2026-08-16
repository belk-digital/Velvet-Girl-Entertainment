"use client";

import React from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

export interface NumberStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
  label?: string;
  sublabel?: string;
}

export default function NumberStepper({
  value,
  min = 1,
  max = 100,
  onChange,
  label,
  sublabel,
}: NumberStepperProps) {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      {label && (
        <label className="mb-2 font-display text-lg sm:text-xl font-bold text-stone-900 tracking-wide text-center">
          {label}
        </label>
      )}

      <div className="flex items-center gap-6 my-4">
        {/* Decrease Button */}
        <motion.button
          type="button"
          onClick={handleDecrease}
          disabled={value <= min}
          whileHover={value <= min ? {} : { y: -2, scale: 1.05 }}
          whileTap={value <= min ? {} : { scale: 0.95 }}
          aria-label="Decrease value"
          className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border text-xl font-bold transition-all duration-300 ${
            value <= min
              ? "border-black/10 bg-stone-100 text-stone-300 cursor-not-allowed shadow-none"
              : "border-black/20 bg-white text-stone-800 hover:border-[#380605] hover:bg-[#380605] hover:text-white cursor-pointer shadow-sm"
          }`}
        >
          <Minus className="h-6 w-6" />
        </motion.button>

        {/* Number Display */}
        <div className="min-w-[80px] text-center">
          <span className="font-display text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            {value}
          </span>
        </div>

        {/* Increase Button */}
        <motion.button
          type="button"
          onClick={handleIncrease}
          disabled={value >= max}
          whileHover={value >= max ? {} : { y: -2, scale: 1.05 }}
          whileTap={value >= max ? {} : { scale: 0.95 }}
          aria-label="Increase value"
          className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border text-xl font-bold transition-all duration-300 ${
            value >= max
              ? "border-black/10 bg-stone-100 text-stone-300 cursor-not-allowed shadow-none"
              : "border-black/20 bg-white text-stone-800 hover:border-[#380605] hover:bg-[#380605] hover:text-white cursor-pointer shadow-sm"
          }`}
        >
          <Plus className="h-6 w-6" />
        </motion.button>
      </div>

      {sublabel && (
        <span className="mt-2 font-body text-xs sm:text-sm text-stone-500 font-medium tracking-wide">
          {sublabel}
        </span>
      )}
    </div>
  );
}
