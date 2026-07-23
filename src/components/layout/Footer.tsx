"use client";
import Link from "next/link";
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
    <footer ref={containerRef} className="relative w-full bg-black overflow-hidden flex flex-col items-center pt-0 pb-16 font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f90066] rounded-full blur-[200px] opacity-15 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f90066] rounded-full blur-[200px] opacity-20 translate-x-1/3 translate-y-1/3"></div>

      {/* Background Watermarks */}
      <div className="footer-watermark absolute top-0 left-0 -translate-x-[5%] -translate-y-[15%] pointer-events-none">
        <h1 
          className="text-[12rem] md:text-[20rem] font-black text-transparent opacity-40 leading-none tracking-tighter select-none"
          style={{ WebkitTextStroke: '2px #f90066' }}
        >
          VELVET
        </h1>
      </div>
      <div className="footer-watermark absolute bottom-0 right-0 translate-x-[5%] translate-y-[15%] pointer-events-none">
        <h1 
          className="text-[12rem] md:text-[20rem] font-black text-transparent opacity-40 leading-none tracking-tighter select-none"
          style={{ WebkitTextStroke: '2px #f90066' }}
        >
          GIRLS
        </h1>
      </div>

      {/* Main Image & Rotating Text */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin3d {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
      `}} />
      <div className="footer-3d-center relative z-10 w-full max-w-5xl mx-auto flex justify-center mb-16 md:mb-24" style={{ perspective: '1200px' }}>
        <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-12deg) rotateZ(8deg)' }}>

          {/* Rotating Text Ring */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d', animation: 'spin3d 12s linear infinite' }}>
            {"CONTACT US \u00A0 CONTACT US \u00A0 CONTACT US \u00A0 ".split("").map((char, i, arr) => (
              <span
                key={i}
                className="absolute text-5xl md:text-6xl font-black text-white whitespace-pre"
                style={{
                  transform: `rotateY(${i * (360 / arr.length)}deg) translateZ(180px)`,
                  textShadow: '0 0 10px rgba(255,255,255,0.4)',
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Heels Image */}
          <img
            src="https://res.cloudinary.com/denskvdyt/image/upload/v1784745931/heels-image_vemqzw.png"
            alt="Heels"
            className="absolute w-auto h-full max-h-[300px] md:max-h-[400px] object-contain drop-shadow-[0_0_80px_rgba(249,0,102,0.4)]"
            style={{ transform: 'rotateZ(-8deg) rotateX(12deg) translateZ(0)' }}
          />

        </div>
      </div>

      {/* Bottom Content Row */}
      <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">

        {/* Logo & Socials */}
        <div className="footer-content-item flex flex-col gap-6 md:gap-12">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Velvet Girl Entertainment" className="h-16 w-auto sm:h-20" />
            <span className="font-heading text-lg font-bold uppercase tracking-widest text-white sm:text-2xl">
              Velvet Girls
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#f90066] hover:text-white transition-colors" aria-label="Telegram">
              <Send className="w-5 h-5 -ml-1 mt-1" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#f90066] hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="footer-content-item grid grid-cols-2 gap-x-8 gap-y-2 font-medium text-white/90 text-sm md:text-base">
          <div className="flex flex-col gap-2">
            <Link href="/services" className="hover:text-[#f90066] transition-colors lowercase">services</Link>
            <Link href="/packages" className="hover:text-[#f90066] transition-colors lowercase">packages</Link>
            <Link href="/cities" className="hover:text-[#f90066] transition-colors lowercase">cities</Link>
            <Link href="/about" className="hover:text-[#f90066] transition-colors lowercase">about us</Link>
            <Link href="/blog" className="hover:text-[#f90066] transition-colors lowercase">blog</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/faq" className="hover:text-[#f90066] transition-colors lowercase">faq</Link>
            <Link href="/join-team" className="hover:text-[#f90066] transition-colors lowercase">join team</Link>
            <Link href="/privacy" className="hover:text-[#f90066] transition-colors lowercase">privacy</Link>
            <Link href="/terms" className="hover:text-[#f90066] transition-colors lowercase">terms</Link>
            <Link href="/disclaimer" className="hover:text-[#f90066] transition-colors lowercase">18+ disclaimer</Link>
          </div>
        </div>

        {/* Big Text */}
        <div className="footer-content-item whitespace-nowrap mt-4 md:mt-0">
          <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tighter">
            <span className="text-white">WE'LL BE HAPPY</span><br />
            <span className="text-white">TO </span>
            <span className="text-[#f90066]">ASSIST YOU</span>
          </h2>
        </div>

        {/* Button & Email */}
        <div className="footer-content-item flex flex-col items-start md:items-center gap-4 md:gap-6 min-w-[200px] mt-4 md:mt-0">
          <Link href="/book-now" className="w-full bg-white text-black font-extrabold text-sm md:text-base py-4 md:py-5 px-8 text-center hover:bg-[#f90066] hover:text-white transition-colors tracking-wide shadow-lg uppercase">
            BOOK NOW
          </Link>
          <a href="mailto:info@velvetgirlentertainment.com" className="text-white/90 hover:text-[#f90066] transition-colors text-sm md:text-base">
            info@velvetgirlentertainment.com
          </a>
        </div>

      </div>
      
      {/* Disclaimer */}
      <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-white/40">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <Shield className="h-5 w-5" strokeWidth={1.5} />
            <span className="absolute text-[6px] font-bold">18+</span>
          </span>
          <p className="font-body text-xs">
            © {new Date().getFullYear()} Velvet Girl Entertainment. All Rights Reserved.
          </p>
        </div>
        <p className="font-body text-xs text-white/40 text-center sm:text-right">
          This site contains mature content intended only for adults 18+.
        </p>
      </div>
    </footer>
  );
}
