import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  Wine,
  Ship,
  Crown,
  Music,
  PartyPopper
} from "lucide-react";
import { getPublishedPerformers, getPerformerBySlugFromCms } from "@/lib/cms";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";
import PerformerCarousel from "@/components/gallery/PerformerCarousel";
import PerformerMediaTabs from "@/components/gallery/PerformerMediaTabs";

const SERVICE_ICONS: Record<string, typeof Wine> = {
  "bachelor party": Wine,
  "private yacht": Ship,
  "vip hospitality": Crown,
  afterparty: Music,
};

import { performers as staticPerformers } from "@/data/performers";

export async function generateStaticParams() {
  const performers = await getPublishedPerformers();
  const allPerformers = performers.length > 0 ? performers : staticPerformers;
  return allPerformers.map((p) => ({
    slug: p.slug || p.id,
  }));
}

import { getPerformerBySlug } from "@/data/performers";

export default async function PerformerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let performer: any = await getPerformerBySlugFromCms(slug);

  if (!performer) {
    const staticPerformer = getPerformerBySlug(slug);
    if (staticPerformer) {
      performer = {
        ...staticPerformer,
        bio: null,
        tagline: staticPerformer.tagline || null,
        videos: [],
        galleryImages: staticPerformer.galleryImages || [],
      };
    }
  }

  if (!performer) {
    notFound();
  }

  const displayRating = performer.rating?.toFixed(1) || "5.0";
  const displayReviewsCount = performer.reviewsCount || 48;
  const eventsCount = performer.eventsCount || "160+ EVENTS";

  // Ensure the primary profile image is always the first one in the gallery
  const allGalleryImages = [performer.image, ...(performer.galleryImages || [])].filter(Boolean);
  
  // Remove duplicates in case the primary image is already in the gallery array
  const uniqueGalleryImages = Array.from(new Set(allGalleryImages));

  const galleryImages = uniqueGalleryImages;

  return (
    <main className="min-h-screen bg-[var(--background)] font-body text-stone-900 pb-24 relative overflow-hidden">
      <VelvetCurtains variant="top-left" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Left: Image Carousel */}
          <PerformerCarousel images={galleryImages.slice(0, 4)} name={performer.name} />

          {/* Right: Details */}
          <div className="flex flex-col py-4">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black mb-3">
              {performer.name}
            </h1>
            
            <div className="flex items-center gap-2 text-stone-800 font-bold tracking-widest text-sm uppercase mb-4">
              <MapPin className="w-4 h-4" />
              <span>{performer.location || performer.city || "CHARLESTON, SC"}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold mb-8">
              <div className="flex items-center gap-1.5 text-[#5C0005]">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-stone-800">{displayRating}</span>
              </div>
              <span className="text-stone-300">|</span>
              <span className="text-stone-600">{displayReviewsCount} Verified Client Reviews</span>
              <span className="text-stone-300">|</span>
              <span className="text-[#5C0005] uppercase">{eventsCount}</span>
            </div>

            {/* Attributes */}
            <div className="mb-8">
              <h3 className="text-[#5C0005] font-bold text-sm mb-3">Attributes:</h3>
              <div className="flex flex-wrap gap-2">
                {performer.tags?.map((tag: string) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-stone-200 text-stone-600 text-sm font-medium capitalize shadow-sm">
                    {tag}
                  </span>
                ))}
                {performer.hairColor && (
                  <span className="px-4 py-1.5 rounded-full border border-stone-200 text-stone-600 text-sm font-medium capitalize shadow-sm">
                    {performer.hairColor} Hair
                  </span>
                )}
              </div>
            </div>

            {/* Specialties */}
            {performer.services && performer.services.length > 0 && (
              <div className="mb-10">
                <h3 className="text-[#5C0005] font-bold text-sm mb-4">Available Specialties:</h3>
                <div className="flex flex-wrap gap-6 sm:gap-10">
                  {performer.services.map((service: string) => {
                    const Icon = SERVICE_ICONS[service.toLowerCase()] ?? PartyPopper;
                    return (
                      <div key={service} className="flex flex-col items-center gap-2 text-[#5C0005]">
                        <Icon className="w-8 h-8 stroke-1" />
                        <span className="text-xs font-semibold text-stone-700 text-center max-w-[80px]">{service}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* About */}
            {(performer.tagline || performer.bio) && (
              <div className="mb-10">
                <h3 className="text-[#5C0005] font-bold text-sm mb-3">About</h3>
                {performer.tagline && (
                  <p className="text-stone-800 font-semibold mb-2">{performer.tagline}</p>
                )}
                {performer.bio && (
                  <p className="text-stone-600 leading-relaxed whitespace-pre-line">{performer.bio}</p>
                )}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:8439387377" className="flex items-center justify-center gap-2 bg-[#5C0005] hover:bg-[#5c0911] text-white py-4 rounded-md font-bold text-sm tracking-widest transition-colors shadow-sm">
                <Phone className="w-4 h-4" />
                CALL / TEXT
              </a>
              <Link href={`/book-now?performer=${performer.slug || performer.id}`} className="flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-[#5C0005] border border-stone-200 py-4 rounded-md font-bold text-sm tracking-widest transition-colors shadow-sm">
                <Calendar className="w-4 h-4" />
                BOOK ONLINE
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Section: Tabs & Media */}
        <PerformerMediaTabs name={performer.name} images={galleryImages} videos={performer.videos ?? []} />

      </div>
    </main>
  );
}
