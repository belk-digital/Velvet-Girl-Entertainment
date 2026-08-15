import React from 'react';

interface TextMarqueeProps {
  items: string[];
}

export default function TextMarquee({ items }: TextMarqueeProps) {
  // Duplicate array enough times to fill a wide screen for infinite scrolling
  const repeatedItems = Array(5).fill(items).flat();

  return (
    <div className="w-full bg-black py-4 overflow-hidden border-y border-white/10 flex items-center">
      <div className="flex w-max animate-marquee-fast">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="text-[#380605] font-black text-2xl md:text-3xl uppercase tracking-widest px-8">
              {item}
            </span>
            <span className="text-white/20 text-xl px-4">•</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {repeatedItems.map((item, idx) => (
          <div key={`dup-${idx}`} className="flex items-center shrink-0">
            <span className="text-[#380605] font-black text-2xl md:text-3xl uppercase tracking-widest px-8">
              {item}
            </span>
            <span className="text-white/20 text-xl px-4">•</span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 15s linear infinite;
        }
      `}} />
    </div>
  );
}
