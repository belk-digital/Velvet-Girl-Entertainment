import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | Velvet Girl Entertainment",
  description: "The terms that govern use of this website and bookings made through Velvet Girl Entertainment.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Terms of Service" />
      <div className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-8 font-body text-sm leading-relaxed text-white/65">
          <p className="text-white/40">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <p>
            These Terms of Service are a placeholder template and should be
            reviewed by a qualified attorney before publishing. By using this
            website or booking services through Velvet Girl Entertainment,
            you agree to the terms below.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-white">
              Eligibility
            </h2>
            <p>
              This website and its services are intended only for adults 18
              years of age or older. By using this site, you confirm you meet
              this requirement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-white">
              Booking Terms
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Submitting a booking request does not guarantee performer
                availability until confirmed by our booking team.
              </li>
              <li>
                Cancellation policies will be provided at the time of
                booking confirmation.
              </li>
              <li>
                Clients are responsible for providing a safe, appropriate
                venue and accurate event details.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-white">
              Conduct
            </h2>
            <p>
              All bookings are expected to maintain a respectful, safe
              environment for performers. We reserve the right to end a
              booking early if that expectation is not met.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-white">
              Limitation of Liability
            </h2>
            <p>
              Velvet Girl Entertainment acts as a booking intermediary
              between clients and independent performers. We are not liable
              for events outside our reasonable control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-white">Contact Us</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a
                href="mailto:bookings@velvetgirlentertainment.com"
                className="text-velvet-pink hover:underline"
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
