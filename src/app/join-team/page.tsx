import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, DollarSign, Globe, Headset, ShieldCheck, ClipboardList, MessageSquare, UserCheck, Sparkles } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ApplicationForm from "@/components/forms/ApplicationForm";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";
import HowToBookTimeline from "@/components/ui/HowToBookTimeline";

export const metadata: Metadata = {
  title: "Join Our Team | Become a Performer | Velvet Girl Entertainment",
  description:
    "Apply to become a performer with Velvet Girl Entertainment — flexible scheduling, competitive pay, professional support, and nationwide booking opportunities.",
  alternates: {
    canonical: "/join-team",
  },
  openGraph: {
    title: "Join Our Team | Become a Performer | Velvet Girl Entertainment",
    description:
      "Apply to become a performer with Velvet Girl Entertainment — flexible scheduling, competitive pay, professional support, and nationwide booking opportunities.",
    url: "/join-team",
  },
  twitter: {
    card: "summary",
    title: "Join Our Team | Velvet Girl Entertainment",
    description:
      "Apply to become a performer with Velvet Girl Entertainment — flexible scheduling, competitive pay, and nationwide opportunities.",
  },
};

const benefits = [
  { icon: Calendar, title: "Flexible Schedule" },
  { icon: DollarSign, title: "Competitive Pay" },
  { icon: Globe, title: "Nationwide Opportunities" },
  { icon: Headset, title: "Professional Support" },
  { icon: ShieldCheck, title: "Safe Booking Process" },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Your Application",
    description:
      "Fill out the form below with your details, availability, and photos so our team can get to know you.",
  },
  {
    icon: MessageSquare,
    title: "We Review & Reach Out",
    description:
      "Our team reviews every application and follows up if it looks like a fit — usually within a few business days.",
  },
  {
    icon: UserCheck,
    title: "Onboarding & Verification",
    description:
      "We verify your ID, confirm your booking preferences and travel availability, and set up your profile.",
  },
  {
    icon: Sparkles,
    title: "Start Receiving Bookings",
    description:
      "Once you're onboarded, you start receiving booking opportunities that match your schedule and location.",
  },
];

const faqs = [
  {
    question: "Do I need prior experience to apply?",
    answer:
      "No. Prior experience as a performer or in hospitality is a plus, but it's not required. We're looking for confidence, professionalism, and reliability — we'll walk you through the rest during onboarding.",
  },
  {
    question: "Is my application kept private?",
    answer:
      "Yes. Your application and personal information are reviewed only by our internal team and are never shared publicly or with clients without your consent.",
  },
  {
    question: "How do travel bookings work?",
    answer:
      "For bookings outside your home city, our team coordinates logistics with you directly and covers agreed-upon travel arrangements as part of the booking terms.",
  },
  {
    question: "Can I set my own schedule?",
    answer:
      "Yes. Performers work as independent contractors and have full control over which bookings they accept based on their own availability and comfort level.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://velvetgirlentertainment.com/join-team/#webpage",
      url: "https://velvetgirlentertainment.com/join-team",
      name: "Join Our Team | Become a Performer | Velvet Girl Entertainment",
      description:
        "Apply to become a performer with Velvet Girl Entertainment — flexible scheduling, competitive pay, professional support, and nationwide booking opportunities.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://velvetgirlentertainment.com/#organization",
      name: "Velvet Girl Entertainment",
      url: "https://velvetgirlentertainment.com/",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default function JoinTeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="JOIN OUR TEAM"
        title="Become a Velvet Girl Performer"
        subtitle="Join one of the nation's fastest-growing entertainment booking agencies."
        bgImage="/gallery images/Velvet girl.webp"
      />

      <Section eyebrow="BENEFITS" title="Why perform with us">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full border border-stone-200/80 rounded-xl bg-white p-8 text-center shadow-sm hover:border-[#740107]/50 hover:shadow-md transition-all">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#740107]/10 text-[#740107]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-stone-900">
                  {title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Performer Spotlight Showcase (.webp) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-left">
          <div className="relative overflow-hidden rounded-2xl shadow-xl border border-stone-200/80 aspect-[16/10] group">
            <Image
              src={encodeURI("/gallery images/LOTUS.webp")}
              alt="Performer Spotlight 1"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold uppercase tracking-wider">
              Nationwide VIP Bookings &amp; Professional Concierge Support
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl border border-stone-200/80 aspect-[16/10] group">
            <Image
              src={encodeURI("/gallery images/DIOR.webp")}
              alt="Performer Spotlight 2"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold uppercase tracking-wider">
              Flexible Scheduling &amp; Verified Privacy Protection
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="HOW IT WORKS" title="Our Application Process">
        <HowToBookTimeline steps={steps} />
      </Section>

      <div className="border-t border-stone-200/80 bg-[#FAF7F2] px-6 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="tracking-caps mb-3 font-body text-xs font-bold uppercase text-[#740107]">
              APPLICATION
            </p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-[#740107] sm:text-4xl">
              Apply to join
            </h2>
          </div>
          <div className="mt-10 border border-stone-200/80 rounded-2xl bg-white p-8 sm:p-12 shadow-xl">
            <ApplicationForm />
          </div>
        </Reveal>
      </div>

      <VelvetCurtains variant="bottom" />
      <Section eyebrow="FAQ" title="Common Questions" theme="muted">
        <div className="mx-auto max-w-3xl space-y-6">
          {faqs.map(({ question, answer }) => (
            <Reveal key={question}>
              <div className="border border-stone-200/80 rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-stone-900">{question}</h3>
                <p className="mt-2 font-body text-sm text-stone-600 font-medium leading-relaxed">
                  {answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
