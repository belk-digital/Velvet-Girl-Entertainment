import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | Velvet Girl Entertainment",
  description:
    "The terms that govern use of this website and bookings made through Velvet Girl Entertainment.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Velvet Girl Entertainment",
    description:
      "The terms that govern use of this website and bookings made through Velvet Girl Entertainment.",
    url: "/terms",
  },
};

const h2 = "font-display text-2xl font-bold text-white";
const h3 = "font-display text-lg font-bold text-white";

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Terms of Service" />
      <div className="px-6 py-20 sm:py-28 bg-black">
        <div className="mx-auto max-w-3xl space-y-8 font-body text-base leading-relaxed text-stone-300 font-normal">
          <p className="text-stone-400 text-sm font-semibold">
            Velvet Girl Entertainment LLC d/b/a Velvet Girl Entertainment
            <br />
            inquiries@velvetgirlentertainment.com
            <br />
            Effective Date: March 19, 2026
          </p>

          <section className="space-y-3">
            <h2 className={h2}>Acceptance of Terms; Scope</h2>
            <p>
              These Terms of Service and Legal Notice (&ldquo;Terms&rdquo;) constitute a
              legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;Customer,&rdquo;
              &ldquo;Entertainer&rdquo;) and Velvet Girl Entertainment (&ldquo;Company,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By accessing or using our
              website, including any content, functionality, and services offered on or through
              it (the &ldquo;Website&rdquo;), or by booking or performing in an entertainment
              event facilitated by us, you acknowledge that you have read, understood, and agree
              to be bound by these Terms.
            </p>
            <p>
              These Terms apply to all users of the Website, including without limitation users
              who are browsers, vendors, customers, merchants, and/or contributors of content.
              The scope of these Terms extends to all interactions with the Company, including
              the use of our online booking platform, communication with our representatives,
              and the provision or receipt of entertainment services at any event (&ldquo;Event&rdquo;).
              If you do not agree to all the terms and conditions of this agreement, then you may
              not access the Website or use any services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Definitions</h2>
            <p>As used in these Terms, the following terms shall have the meanings set forth below:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>&ldquo;Adult&rdquo;</strong> means an individual who is eighteen (18)
                years of age or older, or such higher age of majority as may be applicable in a
                specific jurisdiction for adult entertainment, particularly where alcohol is
                served.
              </li>
              <li>
                <strong>&ldquo;Booking&rdquo;</strong> means a confirmed reservation for an
                Entertainer&rsquo;s performance at an Event, made through the Company&rsquo;s
                platform.
              </li>
              <li>
                <strong>&ldquo;Company&rdquo;</strong> refers to Velvet Girl Entertainment LLC,
                its affiliates, officers, directors, employees, and agents.
              </li>
              <li>
                <strong>&ldquo;Covered Jurisdiction&rdquo;</strong> refers to the United States
                of America, with specific attention to the laws of the State of South Carolina.
              </li>
              <li>
                <strong>&ldquo;Customer&rdquo;</strong> means any individual or entity that
                books or seeks to book an Entertainer for an Event through the Company&rsquo;s
                Services.
              </li>
              <li>
                <strong>&ldquo;Entertainer&rdquo;</strong> refers to an individual performer who
                has registered with the Company to be considered for Bookings at Events.
                Entertainers are engaged as independent contractors unless a separate written
                agreement specifies otherwise.
              </li>
              <li>
                <strong>&ldquo;Event&rdquo;</strong> means any private party, gathering, or
                function at which an Entertainer is booked to perform.
              </li>
              <li>
                <strong>&ldquo;Minor&rdquo;</strong> means any individual who is not an Adult.
              </li>
              <li>
                <strong>&ldquo;Services&rdquo;</strong> refers collectively to the
                Company&rsquo;s Website, booking platform, customer support, and facilitation of
                entertainment performances.
              </li>
              <li>
                <strong>&ldquo;User&rdquo;</strong> means any person who accesses or uses the
                Website for any purpose.
              </li>
              <li>
                <strong>&ldquo;Venue&rdquo;</strong> means the physical location where an Event
                is held.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Eligibility; Age and Identification Requirements</h2>
            <p>
              The use of our Services is strictly limited to Adults. By using the Services, you
              represent and warrant that you are at least eighteen (18) years of age and of
              legal age to form a binding contract.
            </p>
            <p>
              All Customers, Event attendees, and Entertainers must be Adults. The presence or
              participation of Minors at any Event featuring an Entertainer booked through the
              Company is strictly and expressly prohibited.
            </p>
            <p>
              The Company requires all Customers and Entertainers to provide valid, unexpired,
              government-issued photographic identification (e.g., driver&rsquo;s license,
              passport, or state identification card) to verify age and identity prior to any
              Booking confirmation or performance. Entertainers are required to carry such
              identification at all Events. Customers are responsible for ensuring all Event
              attendees are of legal age and must be prepared to present proof upon request.
            </p>
            <p>
              Any misrepresentation of age or identity is a material breach of these Terms and
              may result in immediate cancellation of Services without a refund, permanent
              suspension from using our Services, and referral to law enforcement authorities.
              These requirements are in place to ensure strict compliance with federal and state
              laws, including those designed to prevent human trafficking and the exploitation
              of minors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={h2}>Booking, Payment, Cancellation and Refund Policy</h2>

            <div className="space-y-2">
              <h3 className={h3}>Booking Process</h3>
              <p>
                A Booking is considered confirmed only upon the Company&rsquo;s receipt of a
                non-refundable deposit and the Customer&rsquo;s acceptance of these Terms. All
                Bookings are subject to Entertainer availability, which will be confirmed by the
                Company in writing. By completing a Booking, the Customer represents and
                warrants that all information provided is accurate and that the Event will be
                conducted in full compliance with these Terms.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Fees and Payment</h3>
              <p>
                All fees for Services will be clearly itemized and communicated to the Customer
                prior to confirming a Booking. A non-refundable deposit is required to secure a
                Booking. The remaining balance is due upon the Entertainer&rsquo;s arrival before
                the performance begins. The Company utilizes third-party payment processors to
                handle transactions. Your use of such services is subject to the terms and
                conditions of the respective processor, and the Company disclaims all liability
                for their performance. Additional fees, including but not limited to travel
                expenses for locations outside a thirty-mile radius of Charleston, South
                Carolina, may apply and will be disclosed in the Booking confirmation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Cancellation, Rescheduling, and Refund Policy</h3>
              <p>
                Cancellations by the Customer must be submitted in writing to{" "}
                <a
                  href="mailto:velvetgirlentertainment@gmail.com"
                  className="text-[#4C0C0A] font-bold underline"
                >
                  velvetgirlentertainment@gmail.com
                </a>
                . For cancellations made at least two days prior to the scheduled Event date, no
                further payment beyond the non-refundable deposit will be due. For cancellations
                made less than two days before the Event, the Customer will be responsible for a
                cancellation fee equal to 50% of the total Booking fee.
              </p>
              <p>
                The Company or the Entertainer reserves the right to cancel any Booking at any
                time due to safety concerns, a material breach of these Terms by the Customer, or
                other unforeseen circumstances. If a cancellation is initiated by the Company or
                Entertainer for reasons not attributable to the Customer&rsquo;s actions or
                breach, the Customer will receive a full refund, including the deposit. If the
                cancellation is a result of the Customer&rsquo;s breach, no refund will be issued.
              </p>
              <p>
                Rescheduling requests are subject to Entertainer availability and a Rescheduling
                Fee. Such requests must be made in writing at least two days prior to the
                original Event date.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={h2}>Service Rules, Acceptable Use and Prohibited Conduct</h2>
            <p>
              The Company is committed to providing a safe, legal, and professional environment
              for all parties. All Users, Customers, and Entertainers must adhere to the
              following rules of conduct. Failure to comply is a material breach of these Terms
              and will result in immediate termination of Services without refund and may lead
              to legal action and/or referral to law enforcement.
            </p>

            <div className="space-y-2">
              <h3 className={h3}>Prohibited Conduct</h3>
              <p>
                All parties are strictly prohibited from engaging in, promoting, or facilitating
                any of the following activities in connection with the Services or at any Event:
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <strong>Illegal Acts:</strong> Any and all illegal activity is forbidden. This
                  includes, without limitation, engaging in or soliciting prostitution or any
                  commercial sex act, which is a violation of federal and state law. See, e.g.,
                  18 U.S.C. §§ 1591, 2421.
                </li>
                <li>
                  <strong>Involvement of Minors:</strong> The presence or participation of any
                  individual under the age of eighteen (18) is strictly prohibited at any Event.
                </li>
                <li>
                  <strong>Illicit Substances:</strong> The use, possession, sale, or distribution
                  of any illegal drugs or controlled substances is strictly prohibited.
                </li>
                <li>
                  <strong>Force, Coercion, or Trafficking:</strong> Any form of force, fraud,
                  coercion, or threat used to compel any person to act against their will is
                  forbidden. The Company maintains a zero-tolerance policy towards human
                  trafficking and any related activities. All Entertainers perform voluntarily.
                </li>
                <li>
                  <strong>Unlawful Nudity and Indecent Exposure:</strong> While dance is a form
                  of protected expressive conduct, performances must comply with all applicable
                  state and local laws regarding public nudity and indecent exposure. In South
                  Carolina, wilful and indecent exposure is a criminal offense. See S.C. Code
                  Ann. § 16-15-130. Local ordinances, enacted to combat the negative secondary
                  effects of adult entertainment, may require performers to wear minimum
                  coverings such as pasties and G-strings. The Customer is solely responsible for
                  ensuring that the performance, as booked, is lawful at the specific Venue.
                </li>
                <li>
                  <strong>Inappropriate Contact:</strong> Unsolicited, non-consensual, or
                  inappropriate physical contact with an Entertainer is strictly prohibited.
                  Local regulations or Company policy may require a mandatory buffer zone (e.g.,
                  a six-foot rule) between performers and patrons, and all parties must adhere to
                  such rules.
                </li>
              </ol>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Reservation of Rights</h3>
              <p>
                The Entertainer and the Company each retain the absolute and unconditional right
                to refuse service or immediately terminate a performance and leave the premises
                if they, in their sole discretion, feel unsafe, witness any prohibited conduct,
                or observe a breach of these Terms. In such an event, no refund will be provided.
                The Customer is responsible for ensuring the compliant and respectful behavior of
                all Event attendees.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={h2}>
              Compliance with Federal and South Carolina Law; Criminal-Activity Prohibitions
            </h2>
            <p>
              All Services offered by the Company are intended to be conducted in strict
              compliance with all applicable federal, state, and local laws. The Company
              maintains a zero-tolerance policy for any use of its Services to facilitate
              criminal activity. By using these Services, you agree not to engage in, solicit, or
              facilitate any conduct that would violate the laws of the United States or the
              State of South Carolina.
            </p>

            <div className="space-y-2">
              <h3 className={h3}>Federal Law Prohibitions</h3>
              <p>
                All Users, Customers, and Entertainers are expressly forbidden from engaging in
                any activity that violates federal law. This includes, but is not limited to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Sex Trafficking:</strong> Any act that could be construed as
                  recruiting, harboring, transporting, providing, obtaining, or soliciting a
                  person for the purpose of a commercial sex act by means of force, fraud, or
                  coercion, or involving a minor, is strictly prohibited under federal law. See
                  18 U.S.C. § 1591.
                </li>
                <li>
                  <strong>Transportation for Prostitution:</strong> Knowingly transporting any
                  individual in interstate commerce with the intent that such individual engage
                  in prostitution or any illegal sexual activity is a federal crime and is
                  strictly forbidden. See 18 U.S.C. § 2421.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>South Carolina Law Prohibitions</h3>
              <p>
                All parties must comply with all state and local laws, including but not limited
                to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Prostitution and Solicitation:</strong> Engaging in or soliciting
                  prostitution or any other commercial sex act is illegal and strictly
                  prohibited.
                </li>
                <li>
                  <strong>Indecent Exposure:</strong> The law prohibits wilful, malicious, and
                  indecent exposure of one&rsquo;s person in a public place. See S.C. Code Ann. §
                  16-15-130. While nude dancing is recognized as expressive conduct, it exists on
                  the outer perimeters of First Amendment protection and is subject to
                  significant regulation. See Barnes v. Glen Theatre, Inc., 501 U.S. 560, 566
                  (1991). Local ordinances enacted to combat the negative secondary effects of
                  adult entertainment may impose further restrictions, such as minimum attire
                  requirements.
                </li>
                <li>
                  <strong>Local Ordinances:</strong> Municipalities in South Carolina are
                  empowered to enact ordinances regulating the conduct and operation of
                  establishments for the public health, comfort, and convenience. See S.C. Code
                  Ann. § 45-3-10.
                </li>
              </ul>
              <p>
                The Customer and Entertainer are independently and solely responsible for
                ensuring their own conduct and the nature of the performance comply with all such
                laws. The Company will cooperate fully with law enforcement in any investigation
                of alleged criminal activity arising from the use of its Services.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={h2}>Health, Safety, Venue and Licensing Requirements</h2>
            <p>
              The Company&rsquo;s provision of Services is contingent upon the Customer&rsquo;s
              and Entertainer&rsquo;s adherence to all applicable health, safety, and licensing
              requirements. These measures are intended to mitigate risks and prevent the adverse
              secondary effects—such as crime and public health concerns—that governments often
              seek to regulate in the context of adult entertainment.
            </p>

            <div className="space-y-2">
              <h3 className={h3}>Venue and Licensing Compliance</h3>
              <p>
                The Customer is solely responsible for verifying and ensuring that the selected
                Venue is legally permitted to host the type of entertainment booked. This
                includes compliance with any local zoning ordinances, business license
                requirements, or rules specific to a commercial establishment or residential
                community. Cities and towns in South Carolina have broad authority to regulate
                businesses within their jurisdiction. See S.C. Code Ann. § 45-3-10. The Company
                makes no representation as to the legal status of any specific Venue.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Safety Protocols</h3>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Buffer Zone:</strong> A minimum distance of six feet must be maintained
                  at all times between the Entertainer and all patrons, employees, or other
                  individuals at the Event. This &ldquo;no-touch&rdquo; rule is a strict
                  condition of performance. Courts have consistently upheld such rules as
                  constitutional measures to prevent crime and disease. See DLS, Inc. v. City of
                  Chattanooga, 107 F.3d 403 (6th Cir. 1997); Fantasy Ranch Inc. v. City of
                  Arlington, 459 F.3d 546 (5th Cir. 2006).
                </li>
                <li>
                  <strong>Hygiene and Cleanliness:</strong> The Entertainer and the Customer
                  share responsibility for ensuring the performance area is clean and hygienic.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>Health Advisories</h3>
              <p>
                All parties are expected to follow prevailing public health guidelines and
                advisories regarding communicable diseases to ensure a safe environment for
                everyone involved. The Company reserves the right to require additional health
                and safety measures as it deems necessary.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Representations and Warranties; Independent Contractor Status</h2>
            <p>
              By using the Services, you represent and warrant that: (i) you have the full legal
              right, power, and authority to enter into and be bound by these Terms; (ii) your
              use of the Services will be for lawful purposes only and in strict compliance with
              these Terms and all applicable laws; and (iii) all information you provide to the
              Company is true, accurate, and complete.
            </p>
            <p>
              It is expressly understood and agreed that all Entertainers are independent
              contractors and are not employees, partners, agents, or joint venturers of the
              Company. The Company&rsquo;s role is strictly limited to that of a booking agency
              and intermediary platform connecting Customers with Entertainers. The Company does
              not direct, control, or supervise the manner, means, or details of an
              Entertainer&rsquo;s performance, beyond the enforcement of the rules and
              prohibitions set forth in these Terms.
            </p>
            <p>
              Each Entertainer is solely responsible for their own taxes, insurance, licensing,
              and other legal and financial obligations. Nothing in these Terms shall be
              construed as creating an employment relationship.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={h2}>Content, Advertising and Intellectual Property</h2>

            <div className="space-y-2">
              <h3 className={h3}>Ownership and Use</h3>
              <p>
                All content on the Website, including but not limited to text, graphics, logos,
                images, audio clips, and software (&ldquo;Website Content&rdquo;), is the
                property of the Company or its content suppliers and is protected by United
                States and international copyright, trademark, and other intellectual property
                laws. You are granted a limited, non-exclusive license to access and use the
                Website Content for personal, non-commercial purposes in connection with the
                Services.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>User-Generated Content and Advertising</h3>
              <p>
                If the Website permits the submission of content by Users, such as Entertainer
                profiles or reviews (&ldquo;User Content&rdquo;), you grant the Company a
                non-exclusive, royalty-free, perpetual, and irrevocable right to use, reproduce,
                modify, and display such User Content in connection with the Services. You
                represent and warrant that you own or otherwise control all rights to your User
                Content and that it does not violate these Terms or any applicable law.
              </p>
              <p>
                All advertising and content must comply with local, state, and federal
                regulations, which may include significant restrictions on signs and
                advertisements for sexually oriented businesses. See, e.g., S.C. Code Ann. §
                57-25-145; N.C. Gen. Stat. § 160D-902. The posting of any content that is obscene,
                defamatory, illegal, or that depicts or suggests sexual activity involving minors
                is strictly prohibited.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className={h3}>DMCA Notice and Takedown</h3>
              <p>
                The Company respects the intellectual property rights of others. If you believe
                that your copyrighted work has been copied in a way that constitutes copyright
                infringement, please provide our designated copyright agent with the written
                information specified below:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  An electronic or physical signature of the person authorized to act on behalf
                  of the owner of the copyright interest;
                </li>
                <li>A description of the copyrighted work that you claim has been infringed;</li>
                <li>
                  A description of where the material that you claim is infringing is located on
                  the Website;
                </li>
                <li>Your address, telephone number, and email address;</li>
                <li>
                  A statement by you that you have a good faith belief that the disputed use is
                  not authorized by the copyright owner, its agent, or the law;
                </li>
                <li>
                  A statement by you, made under penalty of perjury, that the above information
                  in your notice is accurate and that you are the copyright owner or authorized
                  to act on the copyright owner&rsquo;s behalf.
                </li>
              </ul>
              <p>
                Our Copyright Agent for notice of claims of copyright infringement can be reached
                as follows:{" "}
                <a
                  href="mailto:velvetgirlentertainment@gmail.com"
                  className="text-[#4C0C0A] font-bold underline"
                >
                  velvetgirlentertainment@gmail.com
                </a>
                .
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Privacy; Data Collection and Age Verification</h2>
            <p>
              The Company is committed to protecting your privacy. Our collection and use of
              personal information in connection with your access to and use of the Services is
              described in our Privacy Policy.
            </p>
            <p>We collect personal data, including your name, contact information, payment details, and a copy of your government-issued photographic identification, for the primary purposes of:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Facilitating and confirming Bookings;</li>
              <li>Processing payments for Services rendered;</li>
              <li>
                Verifying the age and identity of all Customers, Entertainers, and Event
                attendees to ensure no Minors are involved; and
              </li>
              <li>Promoting a safe and legally compliant environment for all parties.</li>
            </ol>
            <p>
              This information is considered sensitive, and we employ reasonable security
              measures to protect it. We will not use your personal information for marketing
              purposes without your express prior consent.
            </p>
            <p>
              For a comprehensive explanation of our data practices, including how we collect,
              use, store, and share your personal data, and your rights with respect to your
              data, please review our full{" "}
              <a href="/privacy" className="text-[#4C0C0A] font-bold underline">
                Privacy Policy
              </a>
              .
            </p>
            <p>
              The Privacy Policy is incorporated by reference into these Terms. Your use of the
              Services constitutes your acknowledgment of and agreement to our Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Warnings, Disclaimers and Assumption of Risk</h2>
            <p className="uppercase text-sm font-semibold tracking-wide text-stone-300">
              The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              basis, without any warranties of any kind, either express or implied. The Company
              does not warrant that the Services will be error-free or uninterrupted, nor does it
              make any warranty as to the results that may be obtained from use of the Services,
              or as to the accuracy, reliability, or legality of any information or performance
              obtained through the Services.
            </p>
            <p className="uppercase text-sm font-semibold tracking-wide text-stone-300">
              You expressly agree that your use of the Services is at your sole risk. You
              voluntarily assume all risks associated with your participation in or hosting of
              any Event, including but not limited to risks of property damage, personal injury,
              or exposure to legal liability. The Company is not responsible for the conduct,
              whether online or offline, of any User, Customer, or Entertainer. The Company
              expressly disclaims all liability for the acts or omissions of third parties,
              including venue owners and event guests. This disclaimer does not limit liability
              for the Company&rsquo;s own gross negligence or willful misconduct.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Limitation of Liability and Indemnification</h2>
            <p className="uppercase text-sm font-semibold tracking-wide text-stone-300">
              To the fullest extent permitted by law, in no event shall the Company, its
              affiliates, officers, directors, employees, or agents be liable for any indirect,
              incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses,
              resulting from (i) your access to or use of or inability to access or use the
              Services; (ii) any conduct or content of any third party; or (iii) unauthorized
              access, use, or alteration of your transmissions or content.
            </p>
            <p className="uppercase text-sm font-semibold tracking-wide text-stone-300">
              In no event shall the Company&rsquo;s aggregate liability for all claims relating
              to the Services exceed the greater of one hundred U.S. dollars (USD $100.00) or the
              amount you paid the Company, if any, in the last six months for the Services giving
              rise to the claim.
            </p>
            <p>
              You agree to defend, indemnify, and hold harmless the Company and its affiliates,
              officers, directors, employees, and agents from and against any and all claims,
              damages, obligations, losses, liabilities, costs or debt, and expenses (including
              but not limited to attorney&rsquo;s fees) arising from: (i) your use of and access
              to the Services; (ii) your violation of any term of these Terms; (iii) your
              violation of any third-party right, including without limitation any copyright,
              property, or privacy right; or (iv) any claim that your conduct or the conduct of
              your guests at an Event caused damage to a third party. This indemnification
              obligation will survive these Terms and your use of the Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Law Enforcement and Mandatory Reporting; Cooperation Clause</h2>
            <p>
              The Company maintains a strict zero-tolerance policy for any and all illegal
              activities, particularly those related to human trafficking, prostitution, and the
              exploitation of minors. The Company is committed to upholding the law and promoting
              public safety.
            </p>
            <p>
              In furtherance of this policy, the Company will report any credible information or
              reasonable suspicion of criminal activity to the appropriate federal, state, or
              local law enforcement agencies. This includes, without limitation, any suspected
              violations of federal laws prohibiting sex trafficking, such as 18 U.S.C. § 1591, or
              state laws prohibiting solicitation or indecent exposure, such as S.C. Code Ann. §
              16-15-130.
            </p>
            <p>
              By using the Services, you acknowledge and agree that the Company will cooperate
              fully with law enforcement in any investigation related to your use of the
              Services. Such cooperation may include, but is not limited to, providing user
              information, booking details, and other relevant records in response to a valid
              legal process such as a subpoena, court order, or search warrant. The Company
              reserves the right to preserve records related to any such investigation. This
              policy is not intended as legal advice concerning compelled disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Dispute Resolution; Governing Law; Venue</h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them,
              their subject matter, or their formation (including non-contractual disputes or
              claims) shall be governed by and construed in accordance with the laws of the State
              of South Carolina, without giving effect to any choice or conflict of law provision
              or rule.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or
              the Services shall be instituted exclusively in the federal courts of the United
              States for the District of South Carolina or the courts of the State of South
              Carolina located in the County of Charleston. You waive any and all objections to
              the exercise of jurisdiction over you by such courts and to venue in such court.
            </p>
            <p>
              <strong>Arbitration Clause:</strong> At the Company&rsquo;s sole discretion, it may
              require You to submit any disputes arising from these Terms or use of the Services,
              including disputes arising from or concerning their interpretation, violation,
              invalidity, non-performance, or termination, to final and binding arbitration under
              the Rules of Arbitration of the American Arbitration Association applying South
              Carolina law. By agreeing to these Terms, you waive your right to a trial by jury
              and to participate in a class action lawsuit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Modifications; Notice; Severability</h2>
            <p>
              The Company reserves the right, in our sole discretion, to update, change or
              replace any part of these Terms by posting updates and changes to our Website. It
              is your responsibility to check our Website periodically for changes. The date of
              the last revision will be indicated at the top of this document. Your continued use
              of or access to our Website or the Services following the posting of any changes to
              these Terms constitutes acceptance of those changes.
            </p>
            <p>
              If any provision of these Terms is determined to be unlawful, void, or
              unenforceable, such provision shall nonetheless be enforceable to the fullest
              extent permitted by applicable law, and the unenforceable portion shall be deemed
              to be severed from these Terms. Such determination shall not affect the validity
              and enforceability of any other remaining provisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className={h2}>Complaints, Reporting and Safety Escalation Procedures</h2>
            <p>
              The safety and well-being of all parties is of paramount importance. Any User,
              Customer, or Entertainer who witnesses or experiences any conduct that violates
              these Terms, poses a safety risk, or is suspected to be illegal must report it
              immediately.
            </p>
            <p>
              Reports should be made to the Company by contacting our safety and compliance team
              at{" "}
              <a
                href="mailto:inquiries@velvetgirlentertainment.com"
                className="text-[#4C0C0A] font-bold underline"
              >
                inquiries@velvetgirlentertainment.com
              </a>
              . Please provide as much detail as possible, including the date, time, location,
              and individuals involved.
            </p>
            <p>
              The Company will promptly investigate all credible reports. If the Company
              determines that a material breach or illegal act has occurred, it will take
              appropriate action, which may include terminating the service, suspending
              accounts, and/or reporting the incident to appropriate law enforcement authorities.
              In an emergency, please contact local law enforcement directly by dialing 911
              before notifying the Company.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
