"use client";
import Link from "next/link";
import Image from "next/image";
import { Send, Shield } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".footer-watermark", {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    gsap.from(".footer-3d-center", {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    gsap.from(".footer-content-item", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 65%",
      }
    });
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="relative w-full bg-black overflow-hidden flex flex-col items-center pt-0 pb-12 font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#380605] rounded-full blur-[220px] opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#380605] rounded-full blur-[220px] opacity-30 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* Top-Left Deep Red Solid Watermark (matching 'octo') */}
      <div className="footer-watermark absolute top-0 left-0 -translate-x-[2%] -translate-y-[10%] pointer-events-none z-0">
        <div
          aria-hidden="true"
          className="text-[9rem] sm:text-[14rem] md:text-[18rem] lg:text-[23rem]   text-[#380605] leading-none tracking-normal select-none "
          style={{
            maskImage: 'linear-gradient(to bottom, black 35%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent 100%)',
          }}
        >
          VELVET
        </div>
      </div>

      {/* Bottom-Right Soft Watermark (matching 'smm') */}
      <div className="footer-watermark absolute bottom-0 right-0 translate-x-[5%] translate-y-[15%] pointer-events-none z-0">
        <div
          aria-hidden="true"
          className="text-[9rem] sm:text-[14rem] md:text-[18rem] lg:text-[24rem] text-[#380605]/40 leading-none tracking-normal select-none "
          style={{
            maskImage: 'linear-gradient(to top, black 35%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 35%, transparent 100%)',
          }}
        >
          GIRLS
        </div>
      </div>

      {/* Main Image & Rotating Text */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin3d-footer {
          from { transform: rotateX(-15deg) rotateZ(-10deg) rotateY(0deg); }
          to { transform: rotateX(-15deg) rotateZ(-10deg) rotateY(-360deg); }
        }
      `}} />
      <div className="footer-3d-center relative z-10 w-full max-w-5xl mx-auto flex justify-center mb-16 md:mb-24" style={{ perspective: '1200px' }}>
        <div className="relative flex justify-center items-start w-[320px] h-[360px] sm:w-[400px] sm:h-[440px] md:w-[460px] md:h-[520px]" style={{ transformStyle: 'preserve-3d' }}>

          {/* Heels Image at Z=0 - Upright, touching top-0 */}
          <Image
            src="/pleasers-img-bg-remove.png"
            alt="Heels"
            fill
            sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 460px"
            className="object-contain object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            style={{ transform: 'translateZ(0px)' }}
          />

          {/* Rotating Text Ring around the legs (in front when Z>0, behind when Z<0) */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'spin3d-footer 16s linear infinite'
            }}
          >
            {"contact us \u00A0 contact us \u00A0 contact us \u00A0 ".split("").map((char, i, arr) => (
              <span
                key={i}
                className="absolute text-5xl sm:text-6xl md:text-7xl font-black text-white whitespace-pre tracking-tight"
                style={{
                  transform: `rotateY(${i * (360 / arr.length)}deg) translateZ(185px)`,
                  textShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
              >
                {char}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Content Row - Exactly matching 4-column layout in photo */}
      <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 pb-8">

        {/* Column 1: Logo & Social Buttons */}
        <div className="footer-content-item flex flex-col items-start lg:items-center gap-6 md:gap-8 shrink-0">
          <Link href="/" className="flex items-center lg:flex-col gap-3">
            <Image
              src="/velvet-logo-transparent-navbar.png"
              alt="Velvet Girl Entertainment"
              width={160}
              height={159}
              className="h-16 w-auto lg:h-28"
            />
            <span className="font-script font-normal text-2xl sm:text-3xl text-white lg:text-center">
              Velvet Girl Entertainment
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-11 h-11 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-white/10 flex items-center justify-center text-black hover:bg-[#380605] hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 -ml-0.5 mt-0.5" />
            </Link>
            <Link
              href="https://www.instagram.com/velvetgirlentertainment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-white/10 flex items-center justify-center text-black hover:bg-[#380605] hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="footer-content-item grid grid-cols-2 gap-x-10 gap-y-2.5 font-medium text-white/75 text-sm md:text-base">
          <div className="flex flex-col gap-2.5">
            <Link href="/services" className="hover:text-[#380605] transition-colors lowercase">services</Link>
            <Link href="/girls" className="hover:text-[#380605] transition-colors lowercase">girls</Link>
            <Link href="/gallery" className="hover:text-[#380605] transition-colors lowercase">gallery</Link>
            <Link href="/packages" className="hover:text-[#380605] transition-colors lowercase">packages</Link>

            <Link href="/cities" className="hover:text-[#380605] transition-colors lowercase">cities</Link>
            <Link href="/about" className="hover:text-[#380605] transition-colors lowercase">about us</Link>
            <Link href="/blog" className="hover:text-[#380605] transition-colors lowercase">blog</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <Link href="/faq" className="hover:text-[#380605] transition-colors lowercase">faq</Link>
            <Link href="/join-team" className="hover:text-[#380605] transition-colors lowercase">join team</Link>
            <Link href="/privacy" className="hover:text-[#380605] transition-colors lowercase">privacy</Link>
            <Link href="/terms" className="hover:text-[#380605] transition-colors lowercase">terms</Link>
            <Link href="/disclaimer" className="hover:text-[#380605] transition-colors lowercase">18+ disclaimer</Link>
          </div>
        </div>

        {/* Column 3: Big Text 'Your perfect night starts here.' */}
        <div className="footer-content-item whitespace-nowrap mt-2 mb-0 lg:my-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black leading-[0.93] tracking-tight">
            <span className="text-white">Your perfect</span><br />
            <span className="text-white">night starts </span>
            <span className="text-[#380605]">here.</span>
          </h2>
        </div>

        {/* Column 4: Pill Button & Email matching photo */}
        <div className="footer-content-item flex flex-col items-start lg:items-center gap-3.5 shrink-0 -mt-6 lg:mt-0">
          <Link
            href="/book-now"
            className="w-full bg-gradient-to-r from-[#380605] to-[#5a0105] text-white font-extrabold text-xs sm:text-sm py-4 px-10 text-center hover:from-[#5a0105] hover:to-[#380605] transition-all duration-300 tracking-widest uppercase rounded-full shadow-[0_10px_25px_rgba(92, 0, 5,0.35)] hover:shadow-[0_15px_30px_rgba(92, 0, 5,0.5)] hover:scale-105"
          >
            BOOK NOW
          </Link>
          <div className="flex flex-col items-start lg:items-center gap-1">
            <a
              href="tel:8439387377"
              className="text-white/80 hover:text-[#380605] transition-colors text-sm md:text-base font-semibold"
            >
              (843) 938-7377
            </a>
            <a
              href="mailto:bookings@velvetgirlentertainment.com"
              className="text-white/80 hover:text-[#380605] transition-colors text-sm md:text-base font-medium"
            >
              bookings@velvetgirlentertainment.com
            </a>
            <a
              href="mailto:inquiries@velvetgirlentertainment.com"
              className="text-white/60 hover:text-[#380605] transition-colors text-xs md:text-sm font-medium"
            >
              inquiries@velvetgirlentertainment.com
            </a>
          </div>
        </div>

      </div>

      {/* Disclaimer */}
      <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-white/40">
            <span className="relative flex h-5 w-5 items-center justify-center">
              <Shield className="h-5 w-5" strokeWidth={1.5} />
              <span className="absolute text-[6px] font-bold">18+</span>
            </span>
            <p className="font-body text-xs">
              © {new Date().getFullYear()} Velvet Girl Entertainment. All Rights Reserved.
            </p>
          </div>
          <p className="font-body text-xs text-white/40 pl-7">
            Designed and developed by{" "}
            <a
              href="https://belkdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#380605] hover:underline"
            >
              Belk Digital
            </a>
          </p>
        </div>
        <p className="font-body text-xs text-white/40 text-center sm:text-right">
          This site contains mature content intended only for adults 18+.
        </p>
      </div>
    </footer>
  );
}
