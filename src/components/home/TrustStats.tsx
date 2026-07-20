import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "500+", label: "Events Booked" },
  { value: "8", label: "Cities Served" },
  { value: "24/7", label: "Booking Concierge" },
  { value: "100%", label: "Real Photos, No Filters" },
];

export default function TrustStats() {
  return (
    <div className="border-b border-white/10 bg-white/[0.02] px-6 py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="text-center">
            <p className="font-display text-3xl text-velvet-pink sm:text-4xl">
              {stat.value}
            </p>
            <p className="tracking-caps mt-2 font-body text-[10px] text-white/50 sm:text-xs">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
