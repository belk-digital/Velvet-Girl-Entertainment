import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 px-6 py-20 sm:py-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
        style={{ backgroundImage: "url('/images/gameday-girls.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,128,0.3),transparent_65%)]" />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
          Ready to Plan Your Event?
        </h2>
        <p className="mt-4 font-body text-sm text-white/65 sm:text-base">
          Contact our booking team today to discuss availability and receive
          a personalized quote.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row flex-wrap">
          <a
            href="tel:8439387377"
            className="tracking-caps box-glow-pink bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-8 py-4 font-body text-sm font-bold text-white transition-transform duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <Phone className="h-4 w-4 animate-pulse" />
            <span>CALL NOW: (843) 938-7377</span>
          </a>
          <a
            href="sms:8439387377"
            className="tracking-caps flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 px-8 py-4 font-body text-sm font-bold text-white transition-all duration-300 hover:scale-105 shadow-md"
          >
            <MessageCircle className="h-4 w-4 text-velvet-pink" />
            <span>TEXT VIP: (843) 938-7377</span>
          </a>
          <Link
            href="/book-now"
            className="tracking-caps flex items-center gap-2 border border-white/25 px-6 py-4 font-body text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-white/50 hover:text-white"
          >
            BOOK ONLINE
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
