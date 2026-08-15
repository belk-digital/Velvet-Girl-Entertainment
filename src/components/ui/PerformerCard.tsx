import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, MapPin, Star, Phone, MessageCircle } from "lucide-react";
import type { Performer } from "@/data/performers";

export default function PerformerCard({ performer }: { performer: Performer }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black transition-all duration-300 hover:border-[#380605]/60 hover:shadow-[0_0_30px_rgba(84,4,3,0.15)]">
      {/* Image Section */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111]">
        <Image
          src={performer.image || "/images/placeholder.jpg"}
          alt={performer.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Top Left: Available Pill */}
        {(performer.availableToday || performer.availableTonight) && (
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/90 px-3 py-1.5 backdrop-blur-md border border-white/10">
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
            <span className="font-body text-[10px] font-bold text-white">Available Tonight</span>
          </div>
        )}

        {/* Top Right: Favorite Button */}
        <button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 active:scale-95">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="text-center">
          <h3 className="font-display text-2xl font-normal tracking-[0.2em] uppercase text-white transition-colors group-hover:text-[#380605]">
            {performer.name}
          </h3>
          
          <div className="mt-2 flex items-center justify-center gap-1.5 text-white/70">
            <MapPin className="h-3.5 w-3.5" />
            <span className="font-body text-xs font-semibold tracking-wide">
              {performer.city || performer.location}
            </span>
          </div>
          
          <div className="mt-2.5 flex items-center justify-center gap-1.5">
            <span className="font-body text-sm font-bold text-white">{performer.rating?.toFixed(1) || "5.0"}</span>
            <Star className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
            <span className="font-body text-xs font-medium text-white/50">({performer.reviewsCount || 0})</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={`/girls/${performer.slug || performer.id}`}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#380605] py-3.5 font-body text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#5c0911]"
          >
            <span>View Profile</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+18005551234"
              className="flex items-center justify-center gap-2 rounded-full border border-white/5 bg-[#111] py-3 font-body text-[10px] font-bold uppercase tracking-widest text-white/90 transition-colors hover:bg-[#222]"
            >
              <Phone className="h-3.5 w-3.5 text-white/70" />
              <span>Call</span>
            </a>
            <a
              href="sms:+18005551234"
              className="flex items-center justify-center gap-2 rounded-full border border-white/5 bg-[#111] py-3 font-body text-[10px] font-bold uppercase tracking-widest text-white/90 transition-colors hover:bg-[#222]"
            >
              <MessageCircle className="h-3.5 w-3.5 text-white/70" />
              <span>Text</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
