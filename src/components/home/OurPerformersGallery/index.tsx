"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { performers } from "@/data/performers";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const PerformerCardContent = ({ performer, isActive }: { performer: any, isActive?: boolean }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#111] flex flex-col border ${
    isActive ? 'border-[#F90267] shadow-[0_0_30px_rgba(249,2,103,0.6),0_0_60px_rgba(249,2,103,0.2)]' : 'border-[#F90267]/30'
  } transition-all duration-300`}>
    {/* Full-bleed Image */}
    <img
      src={performer.image}
      alt={performer.name}
      className="absolute inset-0 w-full h-full object-cover object-top"
    />

    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

    {/* Rating badge — top left */}
    <div className="absolute top-3 left-3 z-20 bg-black/70 px-2 py-1 flex flex-col items-center gap-0.5 backdrop-blur-sm">
      <div className="flex items-center gap-1">
        <Star className="w-2.5 h-2.5 text-[#F90267] fill-current" />
        <span className="text-white text-[0.6rem] font-black">{performer.rating}</span>
      </div>
      <span className="text-white/60 text-[0.42rem] font-bold tracking-widest">RATING</span>
    </div>

    {/* Available Tonight — top right */}
    {performer.availableTonight && (
      <div className="absolute top-3 right-3 z-20 bg-[#F90267] px-2 py-1 text-center">
        <span className="text-white text-[0.45rem] font-black tracking-widest leading-tight block uppercase">
          AVAILABLE<br />TONIGHT
        </span>
      </div>
    )}

    {/* Bottom overlay content */}
    <div className="absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4 flex flex-col gap-1.5">
      {/* Verified badge */}
      {performer.isVerified && (
        <div className="flex items-center gap-1 bg-[#F90267] w-fit px-2 py-0.5 mb-0.5">
          <ShieldCheck className="w-2.5 h-2.5 text-white" />
          <span className="text-white text-[0.5rem] font-black tracking-widest uppercase">VERIFIED</span>
        </div>
      )}

      {/* Name */}
      <h3 className="text-white font-black uppercase tracking-tight leading-none text-xl sm:text-2xl">
        {performer.name}
      </h3>

      {/* Location */}
      <div className="flex items-center gap-1 text-white/80">
        <MapPin className="w-3 h-3 text-[#F90267] shrink-0" />
        <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-wider">{performer.location}</span>
      </div>

      {/* Specialty/Title */}
      <p className="text-white/90 text-[0.6rem] sm:text-[0.65rem] font-black tracking-widest uppercase">
        {performer.title}
      </p>

      {/* Stars + count */}
      <div className="flex items-center gap-0.5">
        {[1,2,3,4,5].map(s => (
          <Star key={s} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#F90267] fill-current" />
        ))}
        <span className="text-[#F90267] text-[0.6rem] font-bold ml-1">{performer.rating}</span>
        <span className="text-white/50 text-[0.6rem] ml-0.5">({performer.eventsCount}+ EVENTS)</span>
      </div>

      {/* BOOK NOW + Heart */}
      <div className="flex items-center gap-2 mt-1">
        <button className="flex-1 bg-[#F90267] hover:bg-white hover:text-black transition-colors text-white font-black text-[0.6rem] sm:text-[0.65rem] tracking-widest uppercase py-2.5 px-3 flex items-center justify-center gap-1.5">
          BOOK NOW <ArrowRight className="w-3 h-3" strokeWidth={3} />
        </button>
        <button className="w-9 h-9 flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors shrink-0">
          <Heart className="w-4 h-4 text-[#F90267]" />
        </button>
      </div>
    </div>
  </div>
);

export default function OurPerformersGallery() {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(Math.floor(performers.length / 2));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setIsClient(true); }, []);

  useGSAP(() => {
    if (!isClient) return;
    const isMobile = window.innerWidth < 768;

    performers.forEach((_, i) => {
      const offset = i - activeIndex;
      const abs = Math.abs(offset);
      const sign = Math.sign(offset);

      // Coverflow spread — image 2 reference
      const xGap = isMobile ? 110 : 165;
      const translateX = sign * Math.min(abs, 4) * xGap + (offset > 4 ? (offset - 4) * xGap : offset < -4 ? (offset + 4) * xGap : 0);
      const rotateY = offset === 0 ? 0 : sign * -52;
      const translateZ = offset === 0 ? 0 : -220 - abs * 35;
      const scale = offset === 0 ? 1 : Math.max(0.45, 0.78 - abs * 0.08);
      const zIdx = 50 - abs;
      const opacity = abs > 4 ? 0 : Math.max(0.1, 1 - abs * 0.18);

      gsap.to(`.pf-card-${i}`, {
        x: translateX,
        rotateY,
        z: translateZ,
        scale,
        zIndex: zIdx,
        opacity,
        duration: 0.75,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }, { scope: containerRef, dependencies: [activeIndex, isClient] });

  const handlePrev = () => setActiveIndex(p => Math.max(0, p - 1));
  const handleNext = () => setActiveIndex(p => Math.min(performers.length - 1, p + 1));

  if (!isClient) return <section className="min-h-[90vh] bg-black" />;

  return (
    <section ref={containerRef} className="relative w-full bg-black overflow-hidden flex flex-col py-16 md:py-24">

      {/* Heading Section */}
      <div className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 mb-8 md:mb-16 z-30 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="relative">
          <h2 className="text-5xl sm:text-7xl md:text-[7.5rem] font-black uppercase text-[#f90066] leading-[0.9] tracking-tighter relative z-30">
            OUR PERFORMERS
          </h2>
          <h2
            className="text-5xl sm:text-7xl md:text-[7.5rem] font-black uppercase text-black leading-[0.9] tracking-tighter absolute top-3 sm:top-5 md:top-6 left-0 z-20"
            style={{ WebkitTextStroke: "2px #f90066" }}
            aria-hidden="true"
          >
            OUR PERFORMERS
          </h2>
          <h2
            className="text-5xl sm:text-7xl md:text-[7.5rem] font-black uppercase text-black leading-[0.9] tracking-tighter absolute top-6 sm:top-10 md:top-12 left-0 z-10"
            style={{ WebkitTextStroke: "2px #f90066", opacity: 0.4 }}
            aria-hidden="true"
          >
            OUR PERFORMERS
          </h2>
        </div>
        <p className="font-body text-sm text-white/60 sm:text-base max-w-sm relative z-30 tracking-widest uppercase font-bold text-left md:text-right">
          Professional. Verified. Unforgettable.
        </p>
      </div>

      {/* Coverflow Section */}
      <div
        className="relative w-full h-[640px] sm:h-[740px] md:h-[820px] flex items-center justify-center overflow-hidden"
        style={{ perspective: "1600px" }}
      >
        {/* Pink oval floor glow — 3 layered ellipses, matches image 2 */}
        <div className="absolute bottom-[72px] sm:bottom-[80px] md:bottom-[88px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[700px] md:w-[800px] h-[50px] md:h-[60px] bg-[#F90267]/30 blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-[72px] sm:bottom-[80px] md:bottom-[88px] left-1/2 -translate-x-1/2 w-[380px] sm:w-[480px] md:w-[560px] h-[28px] md:h-[36px] bg-[#F90267]/55 blur-2xl pointer-events-none z-0" />
        <div className="absolute bottom-[72px] sm:bottom-[80px] md:bottom-[88px] left-1/2 -translate-x-1/2 w-[200px] sm:w-[260px] md:w-[320px] h-[14px] md:h-[18px] bg-[#F90267]/90 blur-md pointer-events-none z-0" />

        {/* Cards */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {performers.map((performer, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={performer.id}
                onClick={() => setActiveIndex(i)}
                className={`pf-card-${i} absolute group cursor-pointer will-change-transform`}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
              >
                {/* Card + Reflection wrapper */}
                <div className={`relative ${isActive ? "w-[220px] sm:w-[260px] md:w-[300px]" : "w-[180px] sm:w-[220px] md:w-[260px]"} transition-none`}>
                  {/* Main Card */}
                  <div className={`${isActive ? 'h-[360px] sm:h-[420px] md:h-[480px]' : 'h-[300px] sm:h-[350px] md:h-[400px]'}`}>
                    <PerformerCardContent performer={performer} isActive={isActive} />
                  </div>

                  {/* Floor Reflection — flush below card, fades downward */}
                  <div
                    className="absolute left-0 w-full pointer-events-none overflow-hidden"
                    style={{
                      top: isActive ? "360px" : "300px",
                      height: isActive ? "130px" : "90px",
                      transform: "scaleY(-1)",
                      opacity: isActive ? 0.5 : 0.25,
                      maskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.9) 100%)",
                      WebkitMaskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.9) 100%)",
                    }}
                  >
                    <div style={{ transform: "scaleY(-1)", height: isActive ? "130px" : "90px", overflow: "hidden" }}>
                      <PerformerCardContent performer={performer} isActive={isActive} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="absolute left-2 sm:left-4 md:left-8 z-50 w-11 h-11 md:w-14 md:h-14 border-2 border-[#F90267] flex items-center justify-center text-white hover:bg-[#F90267] transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
        </button>
        <button
          onClick={handleNext}
          disabled={activeIndex === performers.length - 1}
          className="absolute right-2 sm:right-4 md:right-8 z-50 w-11 h-11 md:w-14 md:h-14 border-2 border-[#F90267] flex items-center justify-center text-white hover:bg-[#F90267] transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {performers.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2 bg-[#F90267]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
