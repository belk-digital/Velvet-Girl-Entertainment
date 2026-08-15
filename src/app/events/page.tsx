import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { events } from "@/data/events";
import { ArrowRight, CalendarDays } from "lucide-react";
import EventDualCTA from "@/components/events/EventDualCTA";

export const metadata: Metadata = {
  title: "Special Events & Rallies | Velvet Girl Entertainment",
  description: "Join Velvet Girl Entertainment at the biggest rallies and events. Book premium VIP hospitality for Myrtle Beach Bike Week, Daytona Bike Week, and more.",
};

export default function EventsHubPage() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        title="Special Events"
        subtitle="The Ultimate VIP Entertainment Experience at the Biggest Rallies"
        bgImage="/gallery images/GAME DAY GIRLS.webp"
      />

      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Upcoming <span className="text-[#4C0C0A]">Rallies & Events</span>
          </h2>
          <p className="mt-6 text-stone-300 text-lg font-medium leading-relaxed">
            Velvet Girl Entertainment brings world-class hospitality to the nation's most anticipated events. Browse our upcoming calendar and secure your VIP experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event) => (
            <Link 
              key={event.slug} 
              href={`/events/${event.slug}`}
              className="group relative bg-black rounded-3xl overflow-hidden shadow-xl border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img 
                  src={event.heroImage} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                  <CalendarDays className="w-4 h-4 text-[#4C0C0A]" />
                  2027 Event
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#4C0C0A] mb-3">
                  {event.title}
                </h3>
                <p className="text-stone-300 font-medium text-lg mb-6 leading-relaxed flex-1">
                  {event.subtitle}
                </p>
                
                <div className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm group-hover:text-[#4C0C0A] transition-colors mt-auto pt-4 border-t border-stone-100">
                  <span>View Event Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <EventDualCTA />
    </main>
  );
}
