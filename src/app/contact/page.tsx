import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone, ClipboardList, PhoneCall, CalendarCheck, PartyPopper } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Booking | Velvet Girl Entertainment",
  description:
    "Book verified, professional entertainers for your next event. Call, text, or send a booking inquiry — our concierge team responds within hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Booking | Velvet Girl Entertainment",
    description:
      "Book verified, professional entertainers for your next event. Our concierge team responds within hours to help plan bachelor parties, private events, and more.",
    url: "/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact & Booking | Velvet Girl Entertainment",
    description:
      "Book verified, professional entertainers for your next event. Our concierge team responds within hours.",
  },
};

const infoItems = [
  {
    icon: MessageCircle,
    label: "Text Us",
    value: "(843) 938-7737",
    href: "sms:+18439387737",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "(843) 938-7737",
    href: "tel:+18439387737",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bookings@velvetgirlentertainment.com",
    href: "mailto:bookings@velvetgirlentertainment.com",
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "24/7 booking concierge",
  },
  {
    icon: MapPin,
    label: "Service Areas",
    value: "8 cities and growing",
    href: "/cities",
  },
];

const bookingSteps = [
  {
    icon: ClipboardList,
    title: "Send Your Inquiry",
    description:
      "Tell us your event type, date, and city using the form below, or reach out directly by phone, text, or email.",
  },
  {
    icon: PhoneCall,
    title: "Speak With a Specialist",
    description:
      "A booking specialist follows up within a few hours to go over availability, pricing, and any specific requests for your event.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm & Reserve",
    description:
      "Once details are set, a deposit secures your date and locks in your entertainer for the event.",
  },
  {
    icon: PartyPopper,
    title: "Enjoy Your Event",
    description:
      "Your entertainer arrives on time and ready to go, so you can focus on celebrating with your group.",
  },
];

const faqs = [
  {
    question: "How fast will I hear back?",
    answer:
      "Our booking concierge responds to most inquiries within a few hours during normal operating hours. If you need a fast turnaround, calling or texting us directly is the quickest way to reach a specialist.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Yes. Whatever you share with us — your contact details, event information, and preferences — is used only to coordinate your booking and is never sold or shared with outside parties.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://velvetgirlentertainment.com/contact/#webpage",
      url: "https://velvetgirlentertainment.com/contact",
      name: "Contact & Booking | Velvet Girl Entertainment",
      description:
        "Book verified, professional entertainers for your next event. Call, text, or send a booking inquiry — our concierge team responds within hours.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://velvetgirlentertainment.com/#organization",
      name: "Velvet Girl Entertainment",
      url: "https://velvetgirlentertainment.com/",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-843-938-7737",
        contactType: "Customer Service",
        email: "bookings@velvetgirlentertainment.com",
        availableLanguage: ["English"],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="CONTACT"
        title="Book Your Event"
        subtitle="Our booking concierge is available 24/7 to help plan your bachelor party, private event, or celebration."
      />

      <Section eyebrow="HOW IT WORKS" title="The Booking Process" theme="muted">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="flex flex-col items-start gap-4 border border-black/10 bg-white p-6 h-full shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#740107]/10 text-[#740107]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-black">{title}</p>
                  <p className="mt-1 font-body text-sm text-black/70 font-medium">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-body text-sm text-black/60 font-medium">
          Not sure which package fits your event? Browse our{" "}
          <Link href="/packages" className="font-bold text-[#740107] hover:underline">
            entertainment packages
          </Link>{" "}
          to get a feel for pricing before you reach out.
        </p>
      </Section>

      <div className="px-6 py-20 sm:py-28 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {infoItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-start gap-4 border border-black/10 bg-white p-6 shadow-sm hover:border-[#740107]/50 transition-colors duration-300">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#740107]/10 text-[#740107]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="tracking-widest font-body text-[11px] font-bold uppercase text-black/50">
                        {label}
                      </p>
                      <p className="mt-1 font-body text-base font-bold text-black">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="border border-black/10 bg-white p-8 sm:p-12 shadow-sm">
              <h2 className="font-display text-3xl font-bold text-black">
                Send us a message
              </h2>
              <p className="mt-2 font-body text-sm text-black/70 font-medium">
                Fill out the form and a booking specialist will follow up.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
              <p className="mt-4 font-body text-xs text-black/50 font-medium">
                Your information is kept private and used only to coordinate your booking.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Section eyebrow="FAQ" title="Common Questions" theme="muted">
        <div className="mx-auto max-w-3xl space-y-6">
          {faqs.map(({ question, answer }) => (
            <Reveal key={question}>
              <div className="border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-black">{question}</h3>
                <p className="mt-2 font-body text-sm text-black/70 font-medium leading-relaxed">
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
