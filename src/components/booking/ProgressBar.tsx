"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useBookingForm } from "@/hooks/useBookingForm";

export default function ProgressBar() {
  const { state } = useBookingForm();
  const currentStep = state.currentStep;
  const totalSteps = 10; // 1 to 10 are progress steps, 11 is success

  const progressPercentage =
    currentStep <= totalSteps
      ? ((currentStep - 1) / (totalSteps - 1)) * 100
      : 100;

  return (
    <header className="w-full px-6 py-4 sm:px-12 flex items-center justify-between border-b border-black/5 bg-black/80 backdrop-blur-md sticky top-0 z-40">
      {/* Left: 01 of 11 indicator */}
      <div className="font-display text-sm sm:text-base font-bold uppercase tracking-widest text-[#4C0C0A]">
        {String(Math.min(currentStep, totalSteps)).padStart(2, "0")}
        <span className="text-white/40 font-normal"> of {totalSteps}</span>
      </div>

      {/* Center: Animated Progress Line with dots */}
      <div className="hidden sm:flex items-center gap-2 flex-1 max-w-xl mx-8 relative">
        <div className="relative w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#4C0C0A] to-[#a30008] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Right: Velvet Girl Official Logo */}
      <Link href="/" className="flex items-center group">
        <Image
          src="/velvet-logo.png"
          alt="Velvet Girl Entertainment"
          width={120}
          height={119}
          className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform"
        />
      </Link>
    </header>
  );
}
