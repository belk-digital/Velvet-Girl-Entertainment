import Reveal from "@/components/ui/Reveal";

export default function AboutSection() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="tracking-caps mb-4 font-body text-xs font-semibold text-velvet-pink">
          ABOUT US
        </p>
        <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
          About{" "}
          <span className="font-script text-4xl text-velvet-pink sm:text-5xl">
            Velvet Girl
          </span>{" "}
          Entertainment
        </h2>
        <p className="mt-6 font-body text-sm leading-relaxed text-white/65 sm:text-base">
          Velvet Girl Entertainment connects clients with experienced,
          professional entertainers for private celebrations across the
          United States.
        </p>
        <p className="mt-4 font-body text-sm leading-relaxed text-white/65 sm:text-base">
          Every booking is handled with professionalism, discretion, and
          attention to detail. Whether you&rsquo;re planning a bachelor
          party, birthday celebration, VIP gathering, or private event, our
          booking specialists help match you with performers that fit your
          occasion.
        </p>
      </Reveal>
    </section>
  );
}
