"use client";

import React, { type ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";

export interface StepLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  stepKey: string | number;
  bgImage?: string;
  rightImage?: string;
}

export default function StepLayout({
  children,
  title,
  subtitle,
  stepKey,
  bgImage,
  rightImage,
}: StepLayoutProps) {
  return (
    <div
      className={`relative min-h-[calc(100vh-80px)] w-full flex flex-col justify-between overflow-hidden px-6 py-8 sm:px-12 md:py-12 ${
        bgImage
          ? "bg-black text-white"
          : "bg-[#FAF7F2] text-stone-900"
      }`}
    >
      {/* Full-Screen Background Image if provided */}
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt="Velvet Girl Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top z-0"
          />
          {/* Cinematic Luxury Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30 z-[1]" />
        </>
      )}

      {/* Blended Right-Side Background Image if provided (editorial magazine style on cream #FAF7F2 background) */}
      {rightImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Positioned on the right side of the screen - taking up 60% of width on large screens */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-[55%] h-full">
            <Image
              src={encodeURI(rightImage)}
              alt="Velvet Girl Hero"
              fill
              sizes="(max-width: 640px) 100vw, 55vw"
              className="object-cover object-top sm:object-center opacity-95"
            />
            {/* Smooth left-edge gradient so the photo dissolves into the cream #FAF7F2 background without a harsh border */}
            <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent" />
            {/* Soft top and bottom edge feathering */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FAF7F2] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
          </div>

          {/* Solid cream left side so headline text has 100% readability */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 md:w-2/5 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 to-transparent" />
        </div>
      )}

      {/* Subtle luxury red silk ambient glow decorations in corners */}
      {!bgImage && (
        <>
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-gradient-to-tr from-[#380605]/15 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-bl from-[#380605]/10 to-transparent blur-3xl" />
        </>
      )}

      {/* Signature Crimson Velvet Curtains on Every Booking Step Page */}
      <VelvetCurtains variant="top-left" />

      {/* Main Centered Content Area */}
      <div className="mx-auto w-full max-w-[1100px] flex-1 flex flex-col justify-center my-auto z-30 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={stepKey}
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex flex-col items-center sm:items-start"
          >
            {title && (
              <h1
                className={`mb-3 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center sm:text-left ${
                  bgImage ? "text-white" : "text-stone-900"
                }`}
              >
                {title}
              </h1>
            )}
            {subtitle && (
              <p
                className={`mb-8 font-body text-sm sm:text-base md:text-lg max-w-xl font-normal text-center sm:text-left ${
                  bgImage ? "text-stone-300" : "text-stone-600"
                }`}
              >
                {subtitle}
              </p>
            )}
            <div className="w-full">{children}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
