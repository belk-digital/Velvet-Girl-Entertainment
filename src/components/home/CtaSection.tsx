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
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/book-now"
            className="tracking-caps box-glow-pink bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-9 py-4 font-body text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
          >
            BOOK NOW
          </Link>
          <a
            href="tel:+18439387737"
            className="tracking-caps flex items-center gap-2 border border-white/25 px-9 py-4 font-body text-sm font-semibold text-white/85 transition-colors duration-300 hover:border-white/50 hover:text-white"
          >
            <Phone className="h-4 w-4 text-velvet-pink" />
            CALL (843) 938-7737
          </a>
          <a
            href="sms:+18439387737"
            className="tracking-caps flex items-center gap-2 border border-white/25 px-9 py-4 font-body text-sm font-semibold text-white/85 transition-colors duration-300 hover:border-white/50 hover:text-white"
          >
            <MessageCircle className="h-4 w-4 text-velvet-pink" />
            TEXT US
          </a>
        </div>
      </Reveal>
    </section>
  );
}
