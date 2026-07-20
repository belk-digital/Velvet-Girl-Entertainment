import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Velvet Girl Entertainment",
  description:
    "Get in touch with our booking concierge — available 24/7 by phone, text, or the form below.",
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

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Get In Touch"
        subtitle="Our booking concierge is available 24/7 to help plan your event."
      />

      <div className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {infoItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-velvet-pink/40">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-velvet-pink/40 text-velvet-pink">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="tracking-caps font-body text-[10px] font-semibold text-white/40">
                        {label}
                      </p>
                      <p className="mt-1 font-body text-sm text-white">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href}>
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h2 className="font-display text-2xl text-white">
                Send us a message
              </h2>
              <p className="mt-1 font-body text-xs text-white/50">
                Fill out the form and a booking specialist will follow up.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
