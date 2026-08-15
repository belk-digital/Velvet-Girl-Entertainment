import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "18+ Disclaimer | Velvet Girl Entertainment",
  description: "This website is intended for adults 18 years of age or older.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "18+ Disclaimer | Velvet Girl Entertainment",
    description: "This website is intended for adults 18 years of age or older.",
    url: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="18+ Disclaimer" />
      <div className="px-6 py-20 sm:py-28 bg-black">
        <div className="mx-auto max-w-3xl space-y-8 font-body text-base leading-relaxed text-stone-300 font-normal">
          <div className="flex items-start gap-4 border border-[#380605]/30 bg-[#380605]/5 p-6 shadow-sm">
            <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-[#380605]" />
            <p className="font-body text-base leading-relaxed text-stone-200 font-medium">
              This website is intended solely for adults 18 years of age or
              older. By accessing or using this site, you confirm that you
              are at least 18 years old and that viewing this content is
              legal in your location.
            </p>
          </div>

          <div className="space-y-6 font-body text-base leading-relaxed text-stone-300 font-normal">
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
                href="mailto:inquiries@velvetgirlentertainment.com"
                className="text-[#380605] font-bold underline"
              >
                inquiries@velvetgirlentertainment.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

