import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Velvet Girl Entertainment",
  description: "How Velvet Girl Entertainment collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" />
      <div className="px-6 py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-3xl space-y-8 font-body text-base leading-relaxed text-black/80 font-normal">
          <p className="text-black/40 text-sm font-semibold">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <p>
            This Privacy Policy is a placeholder template and should be
            reviewed by a qualified attorney before publishing. It explains,
            in general terms, how Velvet Girl Entertainment (&ldquo;we,&rdquo;
            &ldquo;us&rdquo;) handles information collected through this
            website and our booking process.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-black">
              Information We Collect
            </h2>
            <p>
              When you submit a booking or contact form, we collect
              information such as your name, phone number, email address,
              event city, and event details. We may also collect standard
              technical information (such as browser type and general usage
              data) when you visit this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-black">
              How We Use Information
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to booking and contact requests</li>
              <li>To coordinate performer availability and scheduling</li>
              <li>To communicate with you about your booking</li>
              <li>To improve our services and this website</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-black">
              How We Protect Your Information
            </h2>
            <p>
              We limit access to client information to the booking staff who
              need it to fulfill your request, and we do not sell your
              personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-black">
              Cookies
            </h2>
            <p>
              This site may use basic cookies or local storage (for example,
              to remember that you have confirmed you are 18 or older) to
              improve your browsing experience.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-black">Contact Us</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a
                href="mailto:bookings@velvetgirlentertainment.com"
                className="text-[#740107] font-bold underline"
              >
                bookings@velvetgirlentertainment.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

