"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export interface OptionCardProps {
  icon?: ReactNode;
  title: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionCard({
  icon,
  title,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={selected ? { scale: 1.03 } : { scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
        selected
          ? "border-2 border-[#740107] bg-white text-[#740107] shadow-[0_4px_20px_rgba(116,1,7,0.15)]"
          : "border-black/15 bg-white text-stone-700 hover:border-black/30 hover:shadow-md"
      }`}
    >
      {/* Checkmark icon in top-right when selected */}
      {selected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#740107] text-white"
        >
          <Check className="h-3 w-3 stroke-[3]" />
        </motion.div>
      )}

      {icon && (
        <div
          className={`mb-3 flex items-center justify-center ${
            selected ? "text-[#740107]" : "text-stone-700"
          }`}
        >
          {icon}
        </div>
      )}

      <span
        className={`font-body text-xs sm:text-sm tracking-wide ${
          selected ? "font-bold text-[#740107]" : "font-semibold text-stone-800"
        }`}
      >
        {title}
      </span>
    </motion.button>
  );
}
