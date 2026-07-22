import {
  Award,
  Accessibility,
  Map,
  Lock,
  Clock,
  Diamond,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const leftReasons = [
  {
    icon: Award,
    title: "Verified Performers",
    description: "Every performer is verified before joining our roster.",
  },
  {
    icon: Accessibility,
    title: "Professional Booking",
    description: "Dedicated booking agents available day and night.",
  },
  {
    icon: Map,
    title: "Nationwide Coverage",
    description: "Available in more than fifty major cities.",
  },
];

const rightReasons = [
  {
    icon: Lock,
    title: "Private & Discreet",
    description: "Your privacy is always protected.",
  },
  {
    icon: Clock,
    title: "Reliable Scheduling",
    description: "On-time arrivals and dependable communication.",
  },
  {
    icon: Diamond,
    title: "Premium Experience",
    description: "Designed for unforgettable celebrations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative w-full overflow-hidden bg-velvet-pink-hot pt-16 sm:pt-24 pb-0">
      
      <div className="relative z-10 mx-auto max-w-[120rem] px-4 sm:px-6">
        
        {/* Title */}
        <div className="mb-12 text-center flex justify-center items-center flex-wrap gap-2 sm:gap-4 z-20 relative">
           <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.85] font-black text-white/20 uppercase tracking-tighter">WHY</span>
           <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.85] font-black text-white uppercase tracking-tighter">CHOOSE US</span>
        </div>

        {/* 3-Column Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-0 max-w-[85rem] mx-auto z-10">
          
          {/* Left Features */}
          <div className="flex flex-col gap-10 lg:gap-16 z-20 lg:pr-8 xl:pr-12">
             {leftReasons.map(({icon: Icon, title, description}, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="mt-1 flex-shrink-0 text-white">
                       <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{title}</h3>
                      <p className="mt-1 sm:mt-2 font-body text-sm sm:text-base text-white/80 font-medium">{description}</p>
                    </div>
                  </div>
                </Reveal>
             ))}
          </div>

          {/* Center Image */}
          <div className="relative h-[450px] sm:h-[600px] lg:h-[750px] w-full lg:w-[450px] xl:w-[550px] mx-auto z-0 mt-8 lg:mt-0 lg:-mx-8 lg:-mb-24 pointer-events-none">
             <img 
                src="https://res.cloudinary.com/denskvdyt/image/upload/v1784623153/about-image_zwdvdt.webp" 
                alt="Why Choose Us Model"
                className="w-full h-full object-contain object-bottom"
             />
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-10 lg:gap-16 z-20 lg:pl-8 xl:pl-12">
             {rightReasons.map(({icon: Icon, title, description}, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="mt-1 flex-shrink-0 text-white">
                       <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{title}</h3>
                      <p className="mt-1 sm:mt-2 font-body text-sm sm:text-base text-white/80 font-medium">{description}</p>
                    </div>
                  </div>
                </Reveal>
             ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave Cut */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none text-black">
        <svg viewBox="0 0 1440 120" className="w-full h-[50px] sm:h-[80px] md:h-[120px]" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 L1440,120 L1440,60 L920,60 C860,60 820,110 720,110 C620,110 580,60 520,60 L0,60 Z" fill="currentColor" />
        </svg>
      </div>

    </section>
  );
}
