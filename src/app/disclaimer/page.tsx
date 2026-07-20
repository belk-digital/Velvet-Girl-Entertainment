import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "18+ Disclaimer | Velvet Girl Entertainment",
  description: "This website is intended for adults 18 years of age or older.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="18+ Disclaimer" />
      <div className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-start gap-4 rounded-2xl border border-velvet-pink/30 bg-white/5 p-6">
            <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-velvet-pink" />
            <p className="font-body text-sm leading-relaxed text-white/70">
              This website is intended solely for adults 18 years of age or
              older. By accessing or using this site, you confirm that you
              are at least 18 years old and that viewing this content is
              legal in your location.
            </p>
          </div>

          <div className="space-y-4 font-body text-sm leading-relaxed text-white/65">
            <p>
              Velvet Girl Entertainment provides entertainment booking
              services for private, legal celebrations. All performers
              featured on this site are professional entertainers who have
              agreed to represent themselves accurately.
            </p>
            <p>
              If you are under 18, or if viewing adult-oriented entertainment
              content is not permitted where you are located, please exit
              this website immediately.
            </p>
            <p>
              For questions about this disclaimer, contact us at{" "}
              <a
                href="mailto:bookings@velvetgirlentertainment.com"
                className="text-velvet-pink hover:underline"
              >
                bookings@velvetgirlentertainment.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
