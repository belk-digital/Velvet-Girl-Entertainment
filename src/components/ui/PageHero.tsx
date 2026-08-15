"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  theme?: "light" | "crimson" | "dark";
  className?: string;
  bgImage?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  theme = "light",
  className = "",
  bgImage = "/gallery images/Velvet girl.webp",
}: PageHeroProps) {
  const isCrimson = theme === "crimson";
  const isDark = theme === "dark";

  return (
    <div
      className={`relative overflow-hidden px-6 py-24 sm:py-32 md:py-36 border-b border-white/10 transition-colors duration-300 ${
        isCrimson
          ? "bg-[#380605] text-white"
          : isDark
          ? "bg-[#0f0f11] text-white"
          : "bg-black text-white"
      } ${className}`}
    >
      {/* Top Left Red Velvet Curtain Drapery */}
      <VelvetCurtains variant="top-left" />

      {/* Widescreen Background Photo from gallery images (.webp) */}
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src={encodeURI(bgImage)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 md:opacity-50 scale-105"
          />
          {/* Editorial Ivory Cream Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent" />
        </div>
      )}

      {/* Subtle luxury backdrop glow */}
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-20 ${
          isCrimson ? "bg-black" : "bg-[#380605]"
        }`}
      />

      <div className="relative z-30 mx-auto max-w-5xl text-center pl-0 sm:pl-8 md:pl-16">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className={`h-[1px] w-8 ${
                isCrimson ? "bg-white/40" : "bg-[#380605]"
              }`}
            />
            <p
              className={`text-xs md:text-sm font-bold uppercase tracking-widest ${
                isCrimson
                  ? "text-white/90"
                  : isDark
                  ? "text-[#C5A880]"
                  : "text-[#380605]"
              }`}
            >
              {eyebrow}
            </p>
            <span
              className={`h-[1px] w-8 ${
                isCrimson ? "bg-white/40" : "bg-[#380605]"
              }`}
            />
          </div>
        )}
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase leading-tight ${
            isCrimson || isDark ? "text-white" : "text-[#380605]"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mx-auto mt-6 max-w-2xl font-body text-base sm:text-lg font-medium leading-relaxed ${
              isCrimson
                ? "text-white/90"
                : isDark
                ? "text-white/70"
                : "text-white"
            }`}
          >
            {subtitle}
          </p>
        )}

        {/* Quick VIP Call & Text Row in Page Hero */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:8439387377"
            className="inline-flex items-center justify-center gap-2 bg-[#380605] hover:bg-[#5c0911] text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            <span>Call: (843) 938-7377</span>
          </a>
          <a
            href="sms:8439387377"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-black text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 text-[#C5A880]" />
            <span>Text VIP Dispatch</span>
          </a>
        </div>

        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}
