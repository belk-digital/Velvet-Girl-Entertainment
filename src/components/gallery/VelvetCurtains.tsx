"use client";

import React from "react";

interface VelvetCurtainsProps {
  variant: "top-left" | "bottom";
  className?: string;
}

export default function VelvetCurtains({
  variant,
  className = "",
}: VelvetCurtainsProps) {
  if (variant === "top-left") {
    return (
      <div
        className={`pointer-events-none absolute top-0 left-0 z-20 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] h-[220px] sm:h-[300px] md:h-[380px] lg:h-[440px] overflow-hidden select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-top-left drop-shadow-2xl"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="velvetFold1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8c040d" />
              <stop offset="25%" stopColor="#4a0105" />
              <stop offset="55%" stopColor="#740107" />
              <stop offset="85%" stopColor="#2b0002" />
              <stop offset="100%" stopColor="#1a0001" />
            </linearGradient>

            <linearGradient id="velvetFold2" x1="0.1" y1="0" x2="0.9" y2="1">
              <stop offset="0%" stopColor="#a80510" />
              <stop offset="35%" stopColor="#5c0911" />
              <stop offset="70%" stopColor="#3b0003" />
              <stop offset="100%" stopColor="#1a0001" />
            </linearGradient>

            <linearGradient id="velvetFold3" x1="0" y1="0" x2="1" y2="0.9">
              <stop offset="0%" stopColor="#960814" />
              <stop offset="40%" stopColor="#4a0105" />
              <stop offset="80%" stopColor="#2b0002" />
              <stop offset="100%" stopColor="#0a0000" />
            </linearGradient>

            <radialGradient
              id="velvetSheen"
              cx="25%"
              cy="25%"
              r="60%"
              fx="20%"
              fy="20%"
            >
              <stop offset="0%" stopColor="#df1424" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#740107" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2b0002" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Deepest Back Fold - tapers gracefully into the left wall at (0, 520) */}
          <path
            d="M0 0 L320 0 C260 160 160 360 0 520 Z"
            fill="url(#velvetFold1)"
          />

          {/* Secondary Swag / Middle Layer - tapers into (0, 440) */}
          <path
            d="M0 0 L240 0 C190 140 120 300 0 440 Z"
            fill="url(#velvetFold2)"
          />

          {/* Dramatic Front Drape - tapers into (0, 340) */}
          <path
            d="M0 0 L160 0 C130 110 80 230 0 340 Z"
            fill="url(#velvetFold3)"
          />

          {/* Lux Satin Highlight Curve */}
          <path
            d="M0 0 L140 0 C100 100 60 200 0 300 Z"
            fill="url(#velvetSheen)"
          />

          {/* Subtle Golden Fringe / Trim Highlight on the Edge */}
          <path
            d="M320 0 C260 160 160 360 0 520"
            stroke="#4a0105"
            strokeWidth="3"
            strokeOpacity="0.6"
          />
        </svg>
      </div>
    );
  }

  // Bottom Variant
  return (
    <div
      className={`pointer-events-none absolute bottom-0 left-0 right-0 z-20 w-full h-[120px] sm:h-[160px] md:h-[220px] overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-bottom"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bottomVelvet1" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#740107" />
            <stop offset="30%" stopColor="#740107" />
            <stop offset="65%" stopColor="#4a0105" />
            <stop offset="100%" stopColor="#2b0002" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="bottomVelvet2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#740107" />
            <stop offset="35%" stopColor="#740107" />
            <stop offset="75%" stopColor="#5c0911" />
            <stop offset="100%" stopColor="#1a0001" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Seamless Solid Bottom Edge matching FAQ hex color #740107 */}
        <path d="M0 220 L1440 220 L1440 240 L0 240 Z" fill="#740107" />

        {/* Sweeping Left Bottom Fold */}
        <path
          d="M0 240 C180 240 320 160 480 200 C640 240 800 240 960 190 C1120 140 1280 220 1440 240 L1440 240 L0 240 Z"
          fill="url(#bottomVelvet1)"
        />

        {/* Secondary Layering Folds */}
        <path
          d="M0 240 C240 180 480 220 720 190 C960 160 1200 200 1440 170 L1440 240 L0 240 Z"
          fill="url(#bottomVelvet2)"
          opacity="0.9"
        />

        {/* Dramatic Corner Drapes Left & Right Bottom */}
        <path
          d="M0 240 L0 80 C60 140 120 200 240 240 Z"
          fill="url(#bottomVelvet2)"
        />
        <path
          d="M1440 240 L1440 60 C1360 120 1280 200 1180 240 Z"
          fill="url(#bottomVelvet2)"
        />
      </svg>
    </div>
  );
}
