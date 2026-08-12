"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, UserPlus, CalendarCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function EventDualCTA() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#5C0005]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-stone-200/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
              Ready to Join the{" "}
              <span className="font-script text-[#5C0005] text-4xl md:text-5xl lg:text-6xl font-normal block mt-2">
                Bike Week Experience?
              </span>
            </h2>
            <p className="mt-6 text-stone-600 text-lg md:text-xl font-medium">
              Choose your path below. Whether you want to book premium VIP entertainment or join our elite team of Velvet Girls, we have you covered.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left CTA: Book Girls */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-stone-50 border border-stone-200 p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:border-[#5C0005]/20 flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5C0005]/0 to-[#5C0005]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-[#5C0005] group-hover:scale-110 transition-transform duration-500">
                <CalendarCheck className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-stone-900 mb-4">
                Book Girls for Bike Week
              </h3>
              <p className="text-stone-600 mb-8 leading-relaxed font-medium">
                Elevate your Bike Week experience with our premium Velvet Girl entertainers. VIP hospitality, private parties, and unforgettable memories.
              </p>
              
              <Link 
                href="/book-now"
                className="mt-auto inline-flex items-center gap-2 bg-black hover:bg-[#5C0005] text-white rounded-full px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-md group-hover:shadow-lg"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right CTA: Apply to Work */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#5C0005] text-white border border-[#590105] p-8 md:p-12 transition-all duration-500 hover:shadow-2xl flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                <UserPlus className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Apply to Work Bike Week
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed font-medium">
                Want to make incredible money during the busiest weeks of the year? Join the Velvet Girl team and work exclusive VIP events.
              </p>
              
              <Link 
                href="/join-team"
                className="mt-auto inline-flex items-center gap-2 bg-white hover:bg-black text-[#5C0005] hover:text-white rounded-full px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
              >
                <span>Apply Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
