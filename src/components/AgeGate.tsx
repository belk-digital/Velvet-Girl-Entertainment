"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Check, Crown, Shield } from "lucide-react";

const VIDEO_URL =
  "https://res.cloudinary.com/denskvdyt/video/upload/v1784424144/glamour_model_final_g1nnqh.mp4";

const THUMBNAIL_URL =
  "https://res.cloudinary.com/denskvdyt/image/upload/v1784424681/ChatGPT_Image_Jul_19_2026_04_25_24_AM_wy31lt.png";

const CARD_REVEAL_TIME = 9;

const confirmations: React.ReactNode[] = [
  "You are 18 years of age or older.",
  "You understand this website contains mature content intended only for adults.",
  "Viewing such material is legal in your location.",
  <>
    You agree to our{" "}
    <a href="/terms" className="text-velvet-pink hover:underline">
      Terms of Service
    </a>{" "}
    &{" "}
    <a href="/privacy" className="text-velvet-pink hover:underline">
      Privacy Policy
    </a>
    .
  </>,
];

interface AgeGateProps {
  onVerified: () => void;
}

export default function AgeGate({ onVerified }: AgeGateProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const pulseTweenRef = useRef<gsap.core.Tween | null>(null);
  const hasRevealedRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        "[data-gate-card]",
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9 },
        0
      )
        .fromTo(
          "[data-gate-heading]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.4
        )
        .fromTo(
          "[data-gate-sub]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.55
        )
        .fromTo(
          "[data-gate-divider]",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.inOut" },
          0.65
        )
        .fromTo(
          "[data-gate-notice]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.75
        )
        .fromTo(
          "[data-gate-item]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          0.9
        )
        .fromTo(
          "[data-gate-actions]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.2
        )
        .fromTo(
          "[data-gate-footer]",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          1.4
        );

      tlRef.current = tl;
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const revealCard = () => {
      if (hasRevealedRef.current) return;
      hasRevealedRef.current = true;
      tlRef.current?.play();
      pulseTweenRef.current = gsap.to("[data-gate-pulse]", {
        boxShadow:
          "0 0 34px rgba(255,45,149,0.9), 0 0 76px rgba(255,0,128,0.45)",
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "sine.inOut",
        delay: 1.6,
      });
    };

    const onTimeUpdate = () => {
      if (video.currentTime >= CARD_REVEAL_TIME) revealCard();
    };
    const onEnded = () => {
      revealCard();
      gsap.to(thumbnailRef.current, { opacity: 1, duration: 0.8 });
      gsap.to(video, { opacity: 0, duration: 0.8 });
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  const handleEnter = () => {
    pulseTweenRef.current?.kill();
    gsap.to(rootRef.current, {
      opacity: 0,
      scale: 1.04,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: onVerified,
    });
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={thumbnailRef}
        src={THUMBNAIL_URL}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      />
      <div className="relative z-10 mx-4 w-full max-w-3xl sm:max-w-4xl">
        <div
          data-gate-card
          className="box-glow-pink rounded-[28px] border border-velvet-pink/40 bg-black/55 px-6 py-5 text-center text-white opacity-0 backdrop-blur-md sm:px-12 sm:py-6"
        >
          <h1
            data-gate-heading
            className="font-display text-2xl leading-snug opacity-0 sm:text-3xl md:text-[2rem]"
          >
            Welcome to{" "}
            <span className="align-middle font-script text-3xl text-velvet-pink text-glow-pink sm:text-4xl md:text-[2.6rem]">
              Velvet Girls
            </span>{" "}
            Entertainment
          </h1>

          <p
            data-gate-sub
            className="mt-1.5 font-body text-xs text-white/60 opacity-0 sm:text-sm"
          >
            Premium luxury companionship and exclusive entertainment
            experiences.
          </p>

          <div
            data-gate-divider
            className="mx-auto mt-3 flex origin-center items-center justify-center gap-3 opacity-0"
          >
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-velvet-pink/60 sm:w-24" />
            <Crown className="h-4 w-4 text-velvet-pink" strokeWidth={1.75} />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-velvet-pink/60 sm:w-24" />
          </div>

          <div data-gate-notice className="opacity-0">
            <p className="mt-3 font-body text-sm text-white/90 sm:text-base">
              You must be at least{" "}
              <span className="font-semibold text-velvet-pink">
                18 years
              </span>{" "}
              of age to enter this website.
            </p>
            <p className="mt-1 font-body text-xs text-white/50">
              By entering you confirm that:
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-4">
            {confirmations.map((text, i) => (
              <div
                key={i}
                data-gate-item
                className="flex items-start gap-2 text-left opacity-0"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-velvet-pink text-black">
                  <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                </span>
                <p className="font-body text-xs leading-snug text-white/80">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div
            data-gate-actions
            className="mt-5 flex flex-col items-center justify-center gap-3 opacity-0 sm:flex-row"
          >
            <button
              type="button"
              onClick={handleEnter}
              data-gate-pulse
              className="group box-glow-pink flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-8 py-3 font-body text-sm font-semibold tracking-caps text-white transition-transform duration-300 hover:scale-[1.02] sm:w-auto sm:flex-1"
            >
              ENTER SITE
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={handleExit}
              className="w-full rounded-full border border-white/30 px-8 py-3 font-body text-sm font-semibold tracking-caps text-white/80 transition-colors duration-300 hover:border-white/60 hover:text-white sm:w-auto sm:flex-1"
            >
              EXIT
            </button>
          </div>

          <div
            data-gate-footer
            className="mt-4 flex items-center justify-center gap-2 border-t border-white/10 pt-3 text-white/50 opacity-0"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <Shield className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute text-[6px] font-bold">18+</span>
            </span>
            <p className="font-body text-[10px]">
              © {new Date().getFullYear()} Velvet Girls Entertainment. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
