import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEventBySlug, events } from "@/data/events";
import PageHero from "@/components/ui/PageHero";
import EventParallaxHero from "@/components/events/EventParallaxHero";
import EventDualCTA from "@/components/events/EventDualCTA";
import ShowcaseGallery from "@/components/home/ShowcaseGallery";
import { CheckCircle2 } from "lucide-react";
import { eventGalleryImages } from "@/data/eventGallery";

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};

  return {
    title: event.seoTitle,
    description: event.seoDescription,
    openGraph: {
      title: event.seoTitle,
      description: event.seoDescription,
      images: [{ url: event.heroImage }],
    },
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      {slug === "daytona-bike-week-2027" ? (
        <EventParallaxHero title={event.title} imageSrc={event.heroImage} />
      ) : (
        <PageHero
          title={event.title}
          subtitle={event.subtitle}
          bgImage={event.heroImage}
        />
      )}

      <section className="py-16 md:py-24 max-w-[120rem] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-6">
              Experience <span className="text-[#540403]">{event.title}</span> Like Never Before
            </h2>
            <p className="text-stone-300 text-lg md:text-xl font-medium leading-relaxed mb-8">
              {event.overview}
            </p>
            <div className="space-y-4">
              {event.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#540403] shrink-0 mt-0.5" />
                  <p className="text-white text-base md:text-lg font-medium">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
             <img 
               src={event.heroImage} 
               alt={`${event.title} VIP Entertainment`} 
               className="w-full h-full object-cover object-center"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
             <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-display text-2xl md:text-3xl font-bold tracking-wider">PREMIUM HOSPITALITY</p>
             </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section for Book vs Apply */}
      <EventDualCTA />
      
      {/* Visual Showcase */}
      <ShowcaseGallery 
        images={eventGalleryImages}
        linkHref="/events/gallery"
      />
    </main>
  );
}
