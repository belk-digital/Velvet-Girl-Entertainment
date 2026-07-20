import type { Metadata } from "next";
import { Calendar, DollarSign, Globe, Headset, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ApplicationForm from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "Join Our Team | Velvet Girl Entertainment",
  description:
    "Apply to become a performer with Velvet Girl Entertainment — flexible scheduling, competitive pay, and nationwide opportunities.",
};

const benefits = [
  { icon: Calendar, title: "Flexible Schedule" },
  { icon: DollarSign, title: "Competitive Pay" },
  { icon: Globe, title: "Nationwide Opportunities" },
  { icon: Headset, title: "Professional Support" },
  { icon: ShieldCheck, title: "Safe Booking Process" },
];

export default function JoinTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="JOIN OUR TEAM"
        title="Become a Velvet Girl Performer"
        subtitle="Join one of the nation's fastest-growing entertainment booking agencies."
      />

      <Section eyebrow="BENEFITS" title="Why perform with us">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-velvet-pink/40 text-velvet-pink">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-base text-white">
                  {title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="border-t border-white/10 bg-white/[0.02] px-6 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="tracking-caps mb-3 font-body text-xs font-semibold text-velvet-pink">
              APPLICATION
            </p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Apply to join
            </h2>
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
            <ApplicationForm />
          </div>
        </Reveal>
      </div>
    </>
  );
}
