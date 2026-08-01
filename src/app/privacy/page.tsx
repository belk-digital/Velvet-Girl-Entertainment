import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Velvet Girl Entertainment",
  description: "How Velvet Girl Entertainment collects, uses, and protects your information.",
};

const h2 = "font-display text-2xl font-bold text-black";
const h3 = "font-display text-lg font-bold text-black";

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" />
      <div className="px-6 py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-3xl space-y-8 font-body text-base leading-relaxed text-black/80 font-normal">
          <p className="text-black/40 text-sm font-semibold">
            Velvet Girl Entertainment LLC d/b/a Velvet Girl Entertainment
            <br />
            velvetgirlentertainment@gmail.com
            <br />
            Effective Date: March 19, 2026
          </p>

          <p>
            This Privacy Policy explains how Velvet Girl Entertainment
            (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            collects, uses, discloses, and protects information in connection with your use of
            our website, booking platform, and related services (collectively, the
            &ldquo;Services&rdquo;). This Policy is incorporated by reference into, and should be
            read together with, our{" "}
            <a href="/terms" className="text-[#740107] font-bold underline">
              Terms of Service
            </a>
            . By using the Services, you acknowledge and agree to the practices described below.
          </p>

          <section className="space-y-3">
            <h2 className={h2}>Information We Collect</h2>
            <p>We collect the following categories of information in connection with the Services:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Contact and identity information:</strong> your name, phone number,
                email address, and mailing or event address.
              </li>
              <li>
                <strong>Event and booking details:</strong> event type, date, time, city or
                venue, guest count, theme, performer selections, upgrades, and any notes or
                messages you submit.
              </li>
              <li>
                <strong>Age and identity verification:</strong> a copy of a valid,
                government-issued photographic identification (e.g., driver&rsquo;s license,
                passport, or state ID), collected from Customers and Entertainers to confirm that
                all parties are at least eighteen (18) years of age, consistent with our{" "}
                <a href="/terms" className="text-[#740107] font-bold underline">
                  Terms of Service
                </a>
                .
              </li>
              <li>
                <strong>Payment information:</strong> billing details necessary to process
                deposits and remaining balances. Payments are processed by third-party payment
                processors; we do not store full payment card numbers on our own servers.
              </li>
              <li>
                <strong>Entertainer application information:</strong> if you apply to perform
                with us, we collect details such as age, physical description, availability,
                social media handles, and photographs (including headshots and full-body photos)
                submitted with your application.
              </li>
              <li>
                <strong>Technical and usage information:</strong> standard information such as
                browser type, device type, IP address, and general usage data collected when you
                visit the Website.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>How We Use Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to booking, contact, and performer application requests;</li>
              <li>To confirm Bookings and coordinate Entertainer availability and scheduling;</li>
              <li>To process payments for Services rendered;</li>
              <li>
                To verify the age and identity of Customers, Entertainers, and Event attendees,
                and to help ensure no minors are involved in any Event;
              </li>
              <li>To communicate with you about your booking, application, or inquiry;</li>
              <li>
                To promote a safe, professional, and legally compliant environment for all
                parties, including investigating reported violations of our Terms of Service;
              </li>
              <li>To comply with legal obligations, respond to lawful requests from law enforcement, and enforce our Terms of Service; and</li>
              <li>To maintain, secure, and improve our Services and this Website.</li>
            </ul>
            <p>
              We will not use your personal information for marketing purposes without your
              express prior consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Government-Issued ID and Sensitive Information</h2>
            <p>
              Copies of government-issued identification are treated as sensitive information.
              We collect this information solely to verify age and identity prior to confirming a
              Booking or performance, in furtherance of our zero-tolerance policy toward the
              involvement of minors in our Services. Access to identification records is limited
              to personnel who need it for verification, safety, or legal compliance purposes. We
              retain identification records only for as long as reasonably necessary to fulfill
              these purposes and to comply with applicable legal or recordkeeping obligations,
              after which such records are securely deleted or destroyed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={h2}>How We Share Information</h2>
            <p>We do not sell your personal information. We may share information in the following limited circumstances:</p>

            <div className="space-y-2">
              <h3 className={h3}>Service Providers</h3>
              <p>
                We share information with third-party vendors who perform services on our
                behalf, such as payment processing and email delivery, solely to the extent
                necessary for them to perform those services.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Entertainers and Booking Coordination</h3>
              <p>
                Relevant Event and contact details are shared with the Entertainer(s) assigned to
                a Booking so that the Booking can be fulfilled, and, where a Customer requests a
                specific Entertainer, limited contact information may be shared with that
                Entertainer to coordinate logistics.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Legal and Safety Reasons</h3>
              <p>
                We may disclose information where we believe in good faith that disclosure is
                necessary to (i) comply with a subpoena, court order, or other valid legal
                process; (ii) enforce our Terms of Service; (iii) protect the safety of any
                person; or (iv) investigate or respond to suspected illegal activity, including
                suspected violations of laws prohibiting human trafficking or the exploitation of
                minors. As described in our Terms of Service, we will cooperate fully with law
                enforcement in any such investigation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Business Transfers</h3>
              <p>
                If the Company is involved in a merger, acquisition, financing, or sale of
                assets, personal information may be transferred as part of that transaction,
                subject to the terms of this Policy.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>How We Protect Your Information</h2>
            <p>
              We employ reasonable administrative, technical, and physical security measures
              designed to protect your personal information from unauthorized access, use,
              alteration, or disclosure. We limit access to client and applicant information to
              personnel who need it to fulfill your request or as otherwise described in this
              Policy. No method of transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Data Retention</h2>
            <p>
              We retain personal information for as long as reasonably necessary to fulfill the
              purposes described in this Policy, including to complete a Booking or application,
              maintain business and legal records, resolve disputes, and comply with our legal
              obligations. Identification and other sensitive records are retained only for as
              long as necessary for verification and legal compliance purposes, as described
              above.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Your Choices and Rights</h2>
            <p>
              You may contact us at any time to ask about the personal information we hold about
              you, to request that we correct inaccurate information, or to request deletion of
              your information, subject to our legitimate business and legal recordkeeping needs
              (for example, we may need to retain certain booking or identification records to
              comply with law or to defend against legal claims). Depending on your state of
              residence, you may have additional rights under applicable privacy law; we will
              honor valid requests to the extent required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Cookies and Similar Technologies</h2>
            <p>
              This site may use basic cookies or local storage — for example, to remember that
              you have confirmed you are 18 or older, or to support core site functionality and
              basic analytics. These technologies do not collect sensitive information and are
              used to support and improve your experience on the Website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Children&rsquo;s Privacy</h2>
            <p>
              Our Services are intended solely for Adults (18 years of age or older) and are not
              directed to children. We do not knowingly collect personal information from anyone
              under the age of 18. If we become aware that we have inadvertently collected
              information from a minor, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time by posting the revised version
              on this page, with the effective date updated accordingly. Your continued use of
              the Services after any such change constitutes your acceptance of the revised
              Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Contact Us</h2>
            <p>
              Questions, requests, or concerns about this Privacy Policy or our data practices
              can be sent to{" "}
              <a
                href="mailto:velvetgirlentertainment@gmail.com"
                className="text-[#740107] font-bold underline"
              >
                velvetgirlentertainment@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
