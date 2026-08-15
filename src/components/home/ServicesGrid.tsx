"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import { homepageServiceSlugs, services } from "@/data/services";

const homeServices = homepageServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s))
  .slice(0, 4);

const imageMapping: Record<string, string> = {
  "bachelor-parties": "/images/services/bachelor.png",
  "birthday-parties": "/images/services/vip.png",
  "private-events": "/images/services/couples.png",
  "vip-experiences": "/images/services/vip.png",
  "corporate-entertainment": "/images/services/yacht.png",
  "girls-night-out": "/images/services/vip.png",
  "couples-entertainment": "/images/services/couples.png",
  "pool-parties": "/images/services/yacht.png",
};

export default function ServicesGrid() {
  return (
    <Section
      className="bg-black overflow-hidden"
    >
      
      {/* Custom Left-Aligned Stacked Heading */}
      <div className="mb-20 md:mb-32 w-full">
        <div className="relative">
          <h2 className="text-6xl sm:text-8xl md:text-[9rem] font-black uppercase text-[#540403] leading-[0.9] tracking-tighter relative z-30">
            OUR <br className="md:hidden" /> SERVICES
          </h2>
          <h2 
            className="text-6xl sm:text-8xl md:text-[9rem] font-black uppercase text-transparent leading-[0.9] tracking-tighter absolute top-3 sm:top-5 md:top-6 left-0 z-20"
            style={{ WebkitTextStroke: '2px #540403' }}
            aria-hidden="true"
          >
            OUR <br className="md:hidden" /> SERVICES
          </h2>
          <h2 
            className="text-6xl sm:text-8xl md:text-[9rem] font-black uppercase text-transparent leading-[0.9] tracking-tighter absolute top-6 sm:top-10 md:top-12 left-0 z-10"
            style={{ WebkitTextStroke: '2px #540403', opacity: 0.4 }}
            aria-hidden="true"
          >
            OUR <br className="md:hidden" /> SERVICES
          </h2>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
        .marquee-menu {
          --marquee-width: 100%;
          --offset: 20%;
          --move-initial: calc(-25% + var(--offset));
          --move-final: calc(-50% + var(--offset));
          --item-font-size: 10vw;
          counter-reset: menu;
          padding: 5vh 0 10vh;
          overflow-x: hidden;
        }
        @media (min-width: 768px) {
          .marquee-menu {
            --item-font-size: 7vw;
          }
        }
        .menu__item {
          position: relative;
          padding: 0 5vw;
          cursor: pointer;
        }
        .menu__item-link {
          display: inline-block;
          position: relative;
          -webkit-text-stroke: 1px #540403;
          color: white;
          transition: opacity 0.4s;
          white-space: normal;
          word-break: break-word;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: var(--item-font-size);
          font-weight: 900;
          line-height: 1;
          padding: 0 1vw 0 4vw;
          opacity: 0.8;
        }
        @media (min-width: 768px) {
          .menu__item-link {
            -webkit-text-stroke: 2px #540403;
            white-space: nowrap;
            padding: 0 1vw;
          }
        }
        .menu__item-link::before {
          counter-increment: menu;
          content: counter(menu);
          position: absolute;
          top: 0;
          left: -4vw;
          pointer-events: none;
          font-size: 1rem;
          -webkit-text-stroke: 0px;
          color: #540403;
          font-family: monospace;
          opacity: 0.8;
        }
        @media (min-width: 768px) {
          .menu__item-link::before {
            bottom: 60%;
            top: auto;
            left: -2vw;
          }
        }
        .menu__item:hover .menu__item-link {
          transition-duration: 0.1s;
          opacity: 0;
        }
        .menu__item-img {
          pointer-events: none;
          position: absolute;
          height: 50vh;
          max-height: 600px;
          width: auto;
          aspect-ratio: 1/1;
          object-fit: cover;
          opacity: 0;
          left: 100%;
          top: 50%;
          transform: translate3d(calc(-100% - 6vw), -30%, 0) translate3d(0, 20px, 0);
          z-index: 20;
          transition: all 0.4s ease;
          border-radius: 0px;
        }
        .menu__item:hover .menu__item-img {
          opacity: 1;
          transform: translate3d(calc(-100% - 6vw), -30%, 0) rotate3d(0, 0, 1, 4deg);
        }
        .marquee {
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          overflow: hidden;
          pointer-events: none;
          z-index: 10;
        }
        .marquee__inner {
          width: fit-content;
          display: flex;
          position: relative;
          transform: translate3d(var(--move-initial), 0, 0);
          animation: marquee 5s linear infinite;
          animation-play-state: paused;
          opacity: 0;
          transition: opacity 0.1s;
        }
        .menu__item:hover .marquee__inner {
          animation-play-state: running;
          opacity: 1;
          transition-duration: 0.4s;
        }
        .marquee span {
          text-align: center;
          white-space: nowrap;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: var(--item-font-size);
          padding: 0 1vw;
          font-weight: 900;
          line-height: 1.15;
          font-style: italic;
          color: white;
        }
        @keyframes marquee {
          0% { transform: translate3d(var(--move-initial), 0, 0); }
          100% { transform: translate3d(var(--move-final), 0, 0); }
        }
      `}} />

      <nav className="marquee-menu w-full relative overflow-hidden">
        {homeServices.map((service, i) => (
          <div key={service.slug} className="menu__item">
            <Link href={`/services/${service.slug}`} className="block">
              <span className="menu__item-link uppercase font-black tracking-wider">
                {service.title}
              </span>
              
              <img 
                className="menu__item-img hidden md:block shadow-2xl" 
                src={imageMapping[service.slug] || "/images/services/vip.png"} 
                alt={service.title}
              />
              
              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <span>{service.title}</span>
                  <span>{service.title}</span>
                  <span>{service.title}</span>
                  <span>{service.title}</span>
                  <span>{service.title}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </nav>

      <div className="mt-4 text-center">
        <Link
          href="/services"
          className="tracking-caps inline-flex items-center gap-2 border border-white/25 px-8 py-3.5 font-body text-xs font-semibold text-white/85 transition-colors duration-300 hover:border-white hover:text-white"
        >
          VIEW ALL SERVICES
        </Link>
      </div>

    </Section>
  );
}
