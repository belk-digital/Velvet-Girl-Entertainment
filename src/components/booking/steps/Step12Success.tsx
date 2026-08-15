"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Lock, RefreshCw } from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepLayout from "@/components/booking/StepLayout";

export default function Step12Success() {
  const { resetBooking } = useBookingForm();

  return (
    <StepLayout stepKey={12}>
      <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto py-8 sm:py-12">
        {/* Confetti decorative dots / badge */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6,
          }}
          className="relative mb-8 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-tr from-[#380605]/15 to-[#380605]/5 border-2 border-[#380605]/30 shadow-xl"
        >
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#380605] text-white shadow-lg">
            <Check className="h-10 w-10 stroke-[3]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
        >
          You&rsquo;re all set!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-body text-base sm:text-lg text-stone-300 max-w-md mb-10 leading-relaxed font-normal"
        >
          We&rsquo;ve received your request. Our booking specialist will contact
          you shortly to confirm the details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-xs flex flex-col items-center"
        >
          <button
            type="button"
            disabled
            className="w-full inline-flex items-center justify-center gap-2 bg-[#380605] text-white px-8 py-4 rounded-2xl font-body text-base font-bold tracking-wide shadow-lg opacity-95 cursor-default mb-4"
          >
            <span>Request Booking</span>
            <Lock className="w-4 h-4" />
          </button>

          <p className="font-body text-xs text-stone-400 mb-8 font-medium">
            Details confirmed privately with your booking specialist.
          </p>

          <Link
            href="/"
            onClick={resetBooking}
            className="inline-flex items-center gap-2 text-stone-300 hover:text-[#380605] font-body text-sm font-semibold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Return to Home &amp; Start Another</span>
          </Link>
        </motion.div>
      </div>
    </StepLayout>
  );
}
