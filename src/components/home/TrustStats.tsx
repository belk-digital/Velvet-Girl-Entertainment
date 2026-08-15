import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "500+", label: "Events Booked" },
  { value: "8", label: "Cities Served" },
  { value: "24/7", label: "Booking Concierge" },
  { value: "100%", label: "Real Photos, No Filters" },
];

export default function TrustStats() {
  return (
    <div className="bg-black px-6 py-20 border-b-4 border-velvet-pink/10">
      <div className="mx-auto grid max-w-[120rem] grid-cols-2 gap-10 sm:grid-cols-4 lg:px-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="text-center">
            <p className="font-display text-4xl text-white sm:text-5xl font-bold">
              {stat.value}
            </p>
            <p className="tracking-caps mt-3 font-body text-[11px] font-bold text-velvet-pink">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
