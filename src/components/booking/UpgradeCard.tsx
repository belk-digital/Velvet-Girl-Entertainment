"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export interface UpgradeCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  selected: boolean;
  onToggle: () => void;
}

export default function UpgradeCard({
  icon,
  title,
  description,
  selected,
  onToggle,
}: UpgradeCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={selected ? { scale: 1.02 } : { scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative flex flex-col items-center justify-between p-6 sm:p-7 rounded-2xl border text-center transition-all duration-300 cursor-pointer min-h-[160px] ${
        selected
          ? "border-2 border-[#380605] bg-white text-[#380605] shadow-[0_4px_25px_rgba(92, 0, 5,0.15)]"
          : "border-black/15 bg-white text-stone-700 hover:border-black/30 hover:shadow-md"
      }`}
    >
      {/* Icon top */}
      <div
        className={`mb-3 flex items-center justify-center text-2xl ${
          selected ? "text-[#380605]" : "text-stone-600"
        }`}
      >
        {icon}
      </div>

      {/* Title & optional description */}
      <div className="flex-1 flex flex-col justify-center mb-4">
        <h4
          className={`font-display text-sm sm:text-base font-bold tracking-wide mb-1 ${
            selected ? "text-[#380605]" : "text-stone-900"
          }`}
        >
          {title}
        </h4>
        {description && (
          <p className="font-body text-xs text-stone-500 font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Checkbox badge bottom */}
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-lg border transition-all duration-300 ${
          selected
            ? "border-[#380605] bg-[#380605] text-white"
            : "border-black/25 bg-white"
        }`}
      >
        {selected && <Check className="h-4 w-4 stroke-[3]" />}
      </div>
    </motion.button>
  );
}
