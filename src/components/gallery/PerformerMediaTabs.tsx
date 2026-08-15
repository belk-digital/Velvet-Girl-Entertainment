"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, PlayCircle, VideoOff, ImageOff } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";

interface PerformerMediaTabsProps {
  name: string;
  images: string[];
  videos?: string[];
}

export default function PerformerMediaTabs({ name, images, videos = [] }: PerformerMediaTabsProps) {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="mt-16 md:mt-24">
      <div className="flex mb-6 rounded-md overflow-hidden border border-white/10 shadow-sm">
        <button 
          onClick={() => setActiveTab("images")}
          className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm tracking-widest transition-colors ${activeTab === "images" ? "bg-[#380605] text-white" : "bg-black text-white hover:bg-black"}`}
        >
          <ImageIcon className="w-4 h-4" />
          IMAGES
        </button>
        <button 
          onClick={() => setActiveTab("videos")}
          className={`flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm tracking-widest transition-colors border-l border-white/10 ${activeTab === "videos" ? "bg-[#380605] text-white" : "bg-black text-white hover:bg-black"}`}
        >
          <PlayCircle className="w-4 h-4" />
          VIDEOS
        </button>
      </div>

      <div className="min-h-[300px]">
        {activeTab === "images" && (
          images && images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-300">
              {images.map((src, idx) => (
                <div 
                  key={idx} 
                  className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#111] shadow-sm group cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <Image
                    src={encodeURI(decodeURI(src))}
                    alt={`${name} gallery ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 bg-black rounded-xl border border-white/10 text-stone-400 animate-in fade-in duration-300">
              <ImageOff className="w-12 h-12 mb-4 opacity-50" />
              <p className="font-semibold text-lg">No photos available</p>
              <p className="text-sm">There are no photos available for this performer yet.</p>
            </div>
          )
        )}

        {activeTab === "videos" && (
          videos && videos.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-300">
              {videos.map((src, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden bg-stone-900 shadow-sm">
                  <video src={src} controls className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 bg-black rounded-xl border border-white/10 text-stone-400 animate-in fade-in duration-300">
              <VideoOff className="w-12 h-12 mb-4 opacity-50" />
              <p className="font-semibold text-lg">No videos available</p>
              <p className="text-sm">There are no videos available for this performer yet.</p>
            </div>
          )
        )}
      </div>

      <Lightbox 
        images={images} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        initialIndex={lightboxIndex} 
      />
    </div>
  );
}
