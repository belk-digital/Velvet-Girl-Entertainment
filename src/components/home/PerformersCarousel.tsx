"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  MapPin,
  Heart,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Silk = dynamic(() => import("@/components/ui/Silk"), { ssr: false });

import { performers as rawPerformers } from "@/data/performers";

const PINK = "#740107";

type Performer = {
  slug: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  events: string;
  available?: boolean;
  verified?: boolean;
  image: string;
};

const performers: Performer[] = rawPerformers.map((p) => ({
  slug: p.slug || p.id,
  name: p.name,
  location: p.location,
  role: p.title,
  rating: p.rating,
  events: p.eventsCount.replace(/\s*events/i, ""),
  available: p.availableTonight,
  verified: p.isVerified,
  image: p.image,
}));


const DEFAULT_TITLE = "Our Performers";

export default function PerformersCarousel({
  title = DEFAULT_TITLE,
  sectionId,
}: {
  title?: string;
  sectionId?: string | null;
}) {
  const n = performers.length;
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const go = useCallback((dir: number) => setActive((a) => (a + dir + n) % n), [n]);

  // Auto-slide every 4s, paused on hover/touch interaction
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused) return;
    autoSlideRef.current = setInterval(() => go(1), 2500);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
    // Resetting on `active` restarts the 4s countdown after any manual navigation
  }, [isPaused, go, active]);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;
      if (isLeftSwipe) {
        go(1);
      } else if (isRightSwipe) {
        go(-1);
      }
    }
    setIsPaused(false);
  };

  return (
    <section id="performers-section" className="relative overflow-hidden bg-[#740107] py-16 sm:py-24 min-h-screen flex flex-col justify-between">
      {/* Interactive WebGL Animated Silk Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Silk
          speed={5}
          scale={1}
          color="#A80512"
          noiseIntensity={0.8}
          rotation={1.6}
        />
      </div>

      {/* heading */}
      <div className="relative z-10 mb-8 sm:mb-12 text-center">
        <h2 className="flex items-center justify-center gap-3 sm:gap-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-normal text-white leading-tight font-script drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="text-3xl sm:text-5xl md:text-6xl text-white">✦</span>
          <span
            data-cms-section={sectionId ?? undefined}
            data-cms-type="performers"
            data-cms-field="title"
          >
            {title}
          </span>
          <span className="text-3xl sm:text-5xl md:text-6xl text-white">✦</span>
        </h2>
      </div>

      {/* 3D coverflow stage */}
      <div
        className="relative mx-auto h-[640px] sm:h-[720px] md:h-[800px] w-full max-w-[1800px] px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Removed pink oval floor glow */}

        {/* Perspective wrapper */}
        <div
          className="relative h-full w-full"
          style={{ perspective: "2200px" }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {performers.map((p, i) => {
              let offset = i - active;
              if (offset > n / 2) offset -= n;
              if (offset < -n / 2) offset += n;
              const abs = Math.abs(offset);
              const sign = Math.sign(offset);
              const isCenter = offset === 0;
              const visible = abs <= 3;

              // Absolute pixel spread — fills viewport edge to edge like image 2
              // Adjusted for mobile screens
              const xStep = abs === 0 
                ? 0 
                : abs === 1 
                  ? (isMobile ? 220 : 360) 
                  : abs === 2 
                    ? (isMobile ? 380 : 660) 
                    : (isMobile ? 520 : 920);
              const xPx = sign * xStep;
              const z = -abs * 130;
              const ry = isCenter ? 0 : -sign * 35;
              const scale = isCenter ? 1 : Math.max(0.45, 0.78 - abs * 0.10);
              const opacity = !visible ? 0 : isCenter ? 1 : Math.max(0.12, 1 - abs * 0.20);

              const transform = [
                `translateX(-50%)`,
                `translateX(${xPx}px)`,
                `translateZ(${z}px)`,
                `rotateY(${ry}deg)`,
                `scale(${scale})`,
              ].join(" ");

              return (
                <article
                  key={p.name}
                  onClick={() => {
                    if (!isCenter && visible) {
                      setActive(i);
                    } else if (isCenter) {
                      router.push(`/girls/${p.slug}`);
                    }
                  }}
                  className="absolute left-1/2 top-1/2 w-[280px] sm:w-[340px] md:w-[400px]"
                  style={{
                    transform: `translateY(-50%) ${transform}`,
                    transformStyle: "preserve-3d",
                    transition: "transform 650ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease",
                    opacity,
                    zIndex: 100 - abs,
                    pointerEvents: visible ? "auto" : "none",
                    cursor: isCenter ? "default" : "pointer",
                  }}
                >
                  {/* Card */}
                  <PerformerCard p={p} center={isCenter} isMobile={isMobile} />
                </article>
              );
            })}
          </div>
        </div>

        {/* nav arrows */}
        <button
          type="button"
          aria-label="Previous performer"
          onClick={() => go(-1)}
          className="hidden sm:flex absolute left-2 sm:left-6 top-1/2 z-[200] h-12 w-12 sm:h-14 sm:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl border border-black/10 transition-transform hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
        <button
          type="button"
          aria-label="Next performer"
          onClick={() => go(1)}
          className="hidden sm:flex absolute right-2 sm:right-6 top-1/2 z-[200] h-12 w-12 sm:h-14 sm:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl border border-black/10 transition-transform hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      </div>

      {/* swipe hint */}
      <p className="relative z-10 mt-4 text-center text-xs font-bold uppercase tracking-widest text-white/60 sm:hidden">
        Swipe to explore more
      </p>

      {/* dots */}
      <div className="relative z-10 mt-8 flex items-center justify-center gap-3">
        {performers.map((p, i) => (
          <button
            key={p.name}
            type="button"
            aria-label={`Go to ${p.name}`}
            onClick={() => setActive(i)}
            className="h-3 w-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === active ? PINK : "rgba(255,255,255,0.4)",
              border: i === active ? "2px solid #fff" : "none",
              transform: i === active ? "scale(1.25)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 sm:h-7 sm:w-7" fill={PINK} aria-hidden>
      <path d="M12 0l2.4 8.4L22.8 12l-8.4 3.6L12 24l-2.4-8.4L1.2 12l8.4-3.6z" />
    </svg>
  );
}

function PerformerCard({ p, center, isMobile }: { p: Performer; center: boolean; isMobile?: boolean }) {
  return (
    <div
      className="relative overflow-hidden flex flex-col"
      style={{
        height: center ? (isMobile ? "460px" : "560px") : (isMobile ? "400px" : "490px"),
        border: `1.5px solid ${center ? PINK : "rgba(249,2,103,0.35)"}`,
        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.8)",
      }}
    >
      {/* Full-bleed image */}
      <Image
        src={p.image}
        alt={p.name}
        fill
        sizes="(max-width: 640px) 90vw, 400px"
        className="object-cover object-top"
        draggable={false}
      />
      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

      {/* Rating badge — top left */}
      <div className="absolute left-3 top-3 z-20 flex flex-col items-center gap-0.5 bg-black/70 px-2.5 py-1.5 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-current" style={{ color: PINK }} />
          <span className="text-[11px] font-black text-white">{p.rating.toFixed(1)}</span>
        </div>
        <span className="text-[8px] font-bold tracking-widest text-white/60">RATING</span>
      </div>

      {/* Available Tonight — top right */}
      {p.available && (
        <div
          className="absolute right-3 top-3 z-20 px-2.5 py-1.5 text-center"
          style={{ backgroundColor: PINK }}
        >
          <span className="block text-[9px] font-black uppercase leading-tight tracking-wider text-white">
            AVAILABLE<br />TONIGHT
          </span>
        </div>
      )}

      {/* Bottom overlay */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4 flex flex-col gap-1.5">
        {/* Verified */}
        {p.verified && (
          <div
            className="flex w-fit items-center gap-1 px-2 py-0.5 mb-1"
            style={{ backgroundColor: PINK }}
          >
            <ShieldCheck className="h-3 w-3 text-white" />
            <span className="text-[9px] font-black uppercase tracking-widest text-white">VERIFIED</span>
          </div>
        )}

        {/* Name */}
        <h3 className="font-display text-xl font-black uppercase leading-none tracking-tight text-white sm:text-2xl">
          {p.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-white/80">
          <MapPin className="h-3 w-3 shrink-0" style={{ color: PINK }} />
          <span className="text-[10px] font-bold tracking-wide">{p.location}</span>
        </div>

        {/* Role */}
        <p className="text-[10px] font-black uppercase tracking-widest text-white/80">{p.role}</p>

        {/* Stars + count */}
        <div className="flex items-center gap-0.5">
          {[0,1,2,3,4].map((s) => (
            <Star
              key={s}
              className="h-3 w-3"
              style={{ color: PINK, fill: s < Math.round(p.rating) ? PINK : "transparent" }}
            />
          ))}
          <span className="ml-1 text-[10px] font-bold" style={{ color: PINK }}>{p.rating.toFixed(1)}</span>
          <span className="ml-0.5 text-[10px] text-white/50">({p.events} EVENTS)</span>
        </div>

        {/* VIEW PROFILE + Heart */}
        <div className="mt-1 flex items-center gap-2">
          <Link
            href={`/girls/${p.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-1 items-center justify-center gap-1.5 py-2.5 px-4 text-[10px] font-black uppercase tracking-widest text-white transition-colors"
            style={{ backgroundColor: PINK }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#fff", e.currentTarget.style.color = "#000")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = PINK, e.currentTarget.style.color = "#fff")}
          >
            VIEW PROFILE <ArrowRight className="h-3 w-3" strokeWidth={3} />
          </Link>
          <button
            type="button"
            aria-label="Save performer"
            onClick={(e) => e.stopPropagation()}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/60 transition-colors hover:border-white/50"
            style={{ borderRadius: 0 }}
          >
            <Heart className="h-4 w-4" style={{ color: PINK }} />
          </button>
        </div>
      </div>
    </div>
  );
}
