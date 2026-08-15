"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export interface ImageOptionCardProps {
  imageSrc?: string;
  title: string;
  selected: boolean;
  onClick: () => void;
}

export default function ImageOptionCard({
  imageSrc,
  title,
  selected,
  onClick,
}: ImageOptionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={selected ? { scale: 1.03 } : { scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative flex flex-col items-center overflow-hidden rounded-2xl border bg-black transition-all duration-300 cursor-pointer ${
        selected
          ? "border-2 border-[#5C0005] shadow-[0_4px_25px_rgba(92, 0, 5,0.2)]"
          : "border-white/10 hover:border-black/30 hover:shadow-lg"
      }`}
    >
      {/* Checkmark icon in top-right when selected */}
      {selected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-3 right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-[#5C0005] text-white shadow-md"
        >
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </motion.div>
      )}

      {/* Preview Image Container */}
      <div className="relative w-full h-36 sm:h-44 md:h-48 overflow-hidden bg-[#111] flex items-center justify-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-stone-400 font-body text-xs uppercase tracking-wider">
            <span className="text-2xl mb-1">✨</span>
            <span>Flexible</span>
          </div>
        )}
      </div>

      {/* Label */}
      <div
        className={`w-full py-3.5 px-3 text-center font-body text-xs sm:text-sm tracking-wide transition-colors ${
          selected
            ? "bg-[#5C0005]/5 font-bold text-[#5C0005]"
            : "bg-black font-semibold text-white"
        }`}
      >
        {title}
      </div>
    </motion.button>
  );
}
