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
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col items-center justify-start gap-2.5 bg-transparent cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        animate={selected ? { scale: 1.06 } : { scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative"
      >
        <div
          className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 transition-all duration-300 ${
            selected
              ? "border-[#380605] bg-[#380605]/[0.08] text-[#380605] shadow-[0_6px_18px_rgba(92, 0, 5,0.25)]"
              : "border-black/10 bg-white text-stone-400 group-hover:border-[#380605]/40 group-hover:text-[#380605]/70"
          }`}
        >
          {icon}
        </div>

        {/* Checkmark badge overlapping the circle's edge when selected */}
        {selected && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#380605] text-white ring-2 ring-white"
          >
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </motion.div>
        )}
      </motion.div>

      <span
        className={`font-body text-[11px] sm:text-xs font-bold uppercase tracking-wider text-center transition-colors duration-300 ${
          selected ? "text-[#380605]" : "text-stone-500 group-hover:text-stone-700"
        }`}
      >
        {title}
      </span>
    </button>
  );
}
