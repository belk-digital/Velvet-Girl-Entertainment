import type { Faq } from "@/data/faqs";

export interface CityContent {
  intro: string;
  whyChooseUs: string;
  localScene: string;
  h1Title?: string;
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  heroSubtitle?: string;
  introParagraphs?: string[];
  whyChooseUsParagraphs?: string[];
  localSceneParagraphs?: string[];
  serviceDescriptions?: Record<string, string>;
  servicesSubheading?: string;
  servicesFooterText?: string;
  areasSupportingText?: string;
  dancersSupportingParagraphs?: string[];
  ctaParagraphs?: string[];
}

export interface City {
  slug: string;
  name: string;
  stateSlug: string;
  stateName: string;
  popularAreas: string[];
  content: CityContent;
  faqs: Faq[];
}

export interface StateGroup {
  slug: string;
  name: string;
  cities: City[];
}

interface RawCity {
  name: string;
  slug: string;
  areas: string[];
  content: CityContent;
  faqs: Faq[];
}

// Only markets with an active, onboarded performer roster are published.
// More cities are being onboarded — add a new entry here once dancers are
// confirmed in that market, and the city/state pages generate automatically.
const raw: { state: string; stateSlug: string; cities: RawCity[] }[] = [
  {
    state: "South Carolina",
    stateSlug: "south-carolina",
    cities: [
      {
        name: "Charleston",
        slug: "charleston",
        areas: [
          "Downtown",
          "Mount Pleasant",
          "North Charleston",
          "Isle of Palms",
          "West Ashley",
          "Folly Beach",
        ],
        content: {
          metaTitle:
            "Charleston Strippers & Exotic Dancers | Velvet Girl Entertainment",
          metaDescription:
            "Book verified exotic dancers and strippers in Charleston, SC — downtown, Mount Pleasant, West Ashley, Isle of Palms and Folly Beach. Call or text (843) 938-7377.",
          heroSubtitle:
            "Verified exotic dancers and strippers booked for private events across Charleston — downtown rentals, Mount Pleasant, North Charleston, West Ashley, and the beaches. Real photos, written confirmation, 18+.",
          intro:
            "Velvet Girl Entertainment books exotic dancers and strippers for private events throughout the Charleston area — hotel suites, vacation rentals, and private residences included. Bookings are handled properly rather than negotiated over a string of unanswered texts.",
          introParagraphs: [
            "Velvet Girl Entertainment books exotic dancers and strippers for private events throughout the Charleston area — hotel suites, vacation rentals, and private residences included. Bookings are handled properly rather than negotiated over a string of unanswered texts.",
            "The booking route is the same wherever you're staying, but the details aren't. Building and gate access, travel time, and whether your venue sits inside the standard Charleston radius all depend on the address, so send those specifics when you book. You choose Charleston, review the performers listed further down this page, and a specialist confirms availability for your date. The booking is confirmed once availability is agreed, the non-refundable deposit is received, and you've accepted our Terms — arrival timing, access, and the scope of the performance settled before the night rather than at the door.",
            "We operate as a booking agency. The entertainers we work with are independent contractors who are verified before joining the roster, and every performer photo shown on this page is real and unedited. Bookings are 18+ only, and valid government-issued photo ID is required from the person booking before a date is confirmed.",
          ],
          whyChooseUs:
            "Booking entertainment sight-unseen carries obvious risks — a performer who looks nothing like the advertised photo, or terms that were never written down anywhere.",
          whyChooseUsParagraphs: [
            "Booking entertainment sight-unseen carries obvious risks — a performer who looks nothing like the advertised photo, or terms that were never written down anywhere.",
            "Every performer shown on this page is verified and photographed as-is. No filters, no stock images. Request someone specific, and if they're available on your date, that's who arrives.",
            "The commercial terms are published rather than improvised. A non-refundable deposit confirms your date. The balance is due when the entertainer arrives, before the performance begins. The cancellation and rescheduling policy is written out in full in our Terms, so you can read it before you commit rather than after. A six-foot buffer and a no-touch rule apply at every event — we say that up front, because a host who knows the rules in advance can brief their group.",
            "Our booking concierge is reachable 24/7 by call or text at (843) 938-7377.",
          ],
          localScene:
            "We book across Downtown Charleston, Mount Pleasant, North Charleston, West Ashley, Isle of Palms, and Folly Beach.",
          localSceneParagraphs: [
            "We book across Downtown Charleston, Mount Pleasant, North Charleston, West Ashley, Isle of Palms, and Folly Beach.",
            "The settings vary — historic downtown rental homes, hotel suites, vacation rentals, and private residences all come up regularly here. What changes with the address is the practical detail: how the entertainer gets in, how much notice the date needs, and whether the venue falls inside the standard Charleston radius. Send building or gate access instructions when you book so arrival can be planned around them. On spring and summer weekends, when Charleston bachelor-party traffic is at its highest, extra notice helps.",
            "Travel fees may apply for locations outside a thirty-mile radius of Charleston. If your venue sits anywhere near that line, ask when you enquire and we'll confirm the position before you place a deposit.",
          ],
          serviceDescriptions: {
            "bachelor-parties":
              "Send-offs at downtown rentals, beach houses, and hotel suites — with performers chosen in advance rather than assigned on the night.",
            "birthday-parties":
              "Private birthday celebrations at a residence, rental, or suite, sized to the group and the space you're working with.",
            "private-events":
              "Celebrations that don't fit a standard category, coordinated discreetly, with real photos of everyone on the roster before you commit.",
            "vip-experiences":
              "Velvet Girl Entertainment's top tier, with a dedicated concierge from the first call through to showtime.",
            "corporate-entertainment":
              "Retreats, client events, and private company celebrations — booked through a process that works for planners as well as hosts.",
            "girls-night-out":
              "A verified entertainer booked for your group at a private residence, hotel suite, or rented space in the markets we serve.",
          },
          areasSupportingText:
            "These are the Charleston-area locations we book across. Venues beyond a thirty-mile radius of Charleston may carry a travel fee — check with the booking team before placing a deposit and we'll confirm it in writing.",
          dancersSupportingParagraphs: [
            "Every performer photo below is real and unedited — no filters, no stock images, no bait-and-switch. If a confirmed performer becomes unavailable before your date, we'll tell you and offer a comparable replacement.",
            "You can request a specific performer when you book. The roster here shows who works the Charleston market, and availability changes by date — call or text before you plan the night around one name and we'll confirm what's open.",
          ],
          ctaParagraphs: [
            "Tell us the date, the part of Charleston you're in, and roughly how many people. We'll come back with who's available and what it costs before anything is committed.",
            "Book online for events 24 hours out or more — that's how the deposit is taken. For same-day Charleston requests, submit the form and then call or text (843) 938-7377. Our booking concierge is reachable 24/7.",
          ],
        },
        faqs: [
          {
            question: "How do I book strippers in Charleston?",
            answer:
              "Choose Charleston, select the performer or performers you'd like from the roster on this page, and submit your booking. A specialist confirms availability for your date and finalises the details. The booking is confirmed once availability is confirmed, we've received the non-refundable deposit, and you've accepted our Terms.",
          },
          {
            question: "How far in advance should I book?",
            answer:
              "One to two weeks gives you the best selection, particularly on spring and summer weekends, when Charleston bachelor-party traffic is at its highest. Shorter notice is still worth asking about — call or text and we'll tell you honestly what's open.",
          },
          {
            question: "Can I request a specific dancer?",
            answer:
              "Yes. Browse the profiles on this page and name who you'd like. Requests are subject to that performer's availability on your date, which is why we confirm before you pay anything. If a confirmed performer later becomes unavailable, our team will offer a comparable replacement rather than leaving you short.",
          },
          {
            question: "Can an entertainer come to a hotel or an Airbnb?",
            answer:
              "Yes — hotel suites, historic downtown rentals, vacation rentals, and private residences are all standard for us in Charleston. Send the address and any building or gate access details when you book so arrival can be planned properly. One thing to know: confirming that your venue is permitted to host this kind of entertainment is the customer's responsibility. If you're in a managed building, an HOA community, or a rental with restrictive house rules, check before you book.",
          },
          {
            question:
              "Which areas around Charleston do you cover, and are there travel fees?",
            answer:
              "Downtown Charleston, Mount Pleasant, North Charleston, West Ashley, Isle of Palms, and Folly Beach. Locations outside a thirty-mile radius of Charleston may carry a travel fee. Any applicable travel fee is disclosed in the booking confirmation.",
          },
          {
            question: "What do you need from me before a booking is confirmed?",
            answer:
              "Three things: valid, unexpired government-issued photo ID from the person booking, acceptance of our Terms, and the non-refundable deposit. The ID requirement is not optional and applies to every booking. It exists so that age and identity are verified on both sides before anyone travels to an address.",
          },
          {
            question: "Is there an age requirement?",
            answer:
              "Yes — 18+, with no exceptions. That covers you, every guest at the event, and the entertainer. Nobody under 18 may be present at a booking, and as the host you're responsible for your guest list. Misrepresenting age or identity voids the booking with no refund.",
          },
          {
            question: "How does the deposit and the remaining balance work?",
            answer:
              "A non-refundable deposit secures your date and your confirmed performer. Under our Terms, the balance is due on the entertainer's arrival, before the performance begins. All fees are itemised and communicated to you before you confirm.",
          },
          {
            question: "What happens if I need to cancel or move the date?",
            answer:
              "Cancellations must be submitted in writing — the current address is published on our Terms page. Cancel at least two days before the event and nothing is owed beyond the non-refundable deposit. Cancel inside two days and a fee of 50% of the total booking applies. Rescheduling is possible subject to availability, requires written notice at least two days ahead, and carries a rescheduling fee.",
          },
          {
            question: "Can I book same-day in Charleston?",
            answer:
              "Sometimes, and it's always worth asking — but the route is different. Online deposit payment is only available for bookings made 24 or more hours ahead. For same-day requests, submit the booking form and then call or text (843) 938-7377 directly so we can check the live schedule with you. We won't promise a performer we haven't confirmed.",
          },
          {
            question: "What are the rules during the performance?",
            answer:
              "A minimum six-foot distance must be maintained at all times between the entertainer and everyone present. It's a no-touch rule and a strict condition of every booking. Performances must comply with South Carolina state law and any local ordinance covering the venue, and both the entertainer and Velvet Girl Entertainment can end a booking on the spot if anyone is behaving in a way that's unsafe or unlawful — with no refund. Brief your group before the night and none of this comes up.",
          },
        ],
      },
      {
        name: "Myrtle Beach",
        slug: "myrtle-beach",
        areas: [
          "North Myrtle Beach",
          "Surfside Beach",
          "Murrells Inlet",
          "Market Common",
          "Broadway at the Beach",
        ],
        content: {
          h1Title: "Book Strippers and Exotic Dancers in Myrtle Beach",
          metaTitle:
            "Book Myrtle Beach Strippers & Exotic Dancers | Velvet Girl Entertainment",
          metaDescription:
            "Velvet Girl Entertainment books verified exotic dancers across Myrtle Beach and the Grand Strand — vacation rentals, condos, hotels and private events. Call or text (843) 938-7377.",
          ogTitle:
            "Book Myrtle Beach Strippers & Exotic Dancers | Velvet Girl Entertainment",
          ogDescription:
            "Verified entertainers booked to your rental, condo or hotel suite across the Grand Strand.",
          twitterTitle: "Book Myrtle Beach Strippers & Exotic Dancers",
          twitterDescription:
            "Verified entertainers booked to your rental, condo or hotel suite across the Grand Strand.",
          heroSubtitle:
            "Verified entertainers booked to your rental, condo or hotel suite across the Grand Strand.",
          intro:
            "Velvet Girl Entertainment is a booking agency, not a club. There's no venue to visit and no tickets to buy. You give us the date, the location and the size of your group, a booking specialist confirms who's available, and the entertainer travels to you.",
          introParagraphs: [
            "Velvet Girl Entertainment is a booking agency, not a club. There's no venue to visit and no tickets to buy. You give us the date, the location and the size of your group, a booking specialist confirms who's available, and the entertainer travels to you.",
            "Whether you're hiring one entertainer for a birthday or arranging something for a larger group, the process is the same. The entertainers we work with are independent professionals, verified before joining the roster.",
            "Bachelor parties, birthdays, guys' nights and private celebrations in Myrtle Beach all run through the same booking process, and all of them happen at your location rather than ours.",
          ],
          whyChooseUs:
            "Bookings are handled by a specialist rather than an automated form. You submit your event details, and availability is confirmed with you in writing before anything proceeds.",
          whyChooseUsParagraphs: [
            "Bookings are handled by a specialist rather than an automated form. You submit your event details, and availability is confirmed with you in writing before anything proceeds.",
            "A booking is confirmed once the deposit has been received and the Terms accepted. Valid government-issued photo ID is required before confirmation. The conduct rules that apply during a booking, including the six-foot no-contact requirement, are set out in the Terms and apply to every event.",
            "The booking concierge is reachable by phone or text 24/7 at (843) 938-7377, which matters most for short-notice requests.",
          ],
          localScene:
            "Coverage runs across the Grand Strand. That includes North Myrtle Beach, Surfside Beach and Murrells Inlet, along with inland areas like Market Common and Broadway at the Beach.",
          localSceneParagraphs: [
            "Coverage runs across the Grand Strand. That includes North Myrtle Beach, Surfside Beach and Murrells Inlet, along with inland areas like Market Common and Broadway at the Beach.",
            "Entertainers travel to the address you provide, which is usually wherever your group is already staying — an oceanfront condo, a resort suite, a rented house. For units inside larger buildings, have your unit number and building entry details ready when you speak to your booking specialist.",
            "One responsibility sits with you rather than with us: confirming that your accommodation permits it. Hotels, resorts, condo associations and short-term rental hosts each set their own rules about private events and guests, and those rules are separate from anything local law allows.",
          ],
          servicesFooterText:
            "Theme, costume, entertainer count and upgrades are all chosen during booking — the [package builder](https://velvetgirlentertainment.com/packages) covers the options.",
        },
        faqs: [
          {
            question: "How do I hire an entertainer in Myrtle Beach?",
            answer:
              "Submit the [booking form](https://velvetgirlentertainment.com/book-now), then a booking specialist contacts you to confirm availability and finalise details. The form covers theme, costume, entertainer count and upgrades. Your booking is confirmed once the deposit has been received and the Terms accepted.",
          },
          {
            question: "What information do you need from me?",
            answer:
              "The date and start time, the full address including unit number, your group size, and any building access details. Valid government-issued photo ID is required before your booking is confirmed.",
          },
          {
            question: "How far in advance should I book?",
            answer:
              "One to two weeks ahead is the general recommendation. VIP bookings need roughly two to three weeks, and destination or custom-theme bookings roughly two to four. Weekends from late spring through early fall fill quickly along the Grand Strand. Same-day requests are welcome — call or text rather than booking online.",
          },
          {
            question: "Can I book for tonight or within the next 24 hours?",
            answer:
              "Yes, but not entirely through the website. Online deposit payment is only available for bookings made 24 or more hours ahead. For same-day requests, submit the form and then call or text (843) 938-7377 directly. The concierge line is staffed 24/7.",
          },
          {
            question:
              "Can an entertainer come to my hotel, resort suite or condo?",
            answer:
              "Yes. Entertainers travel to the address you provide, including hotel suites, resort accommodation and oceanfront condos across the Grand Strand. Have your unit number and building entry details ready when you book.",
          },
          {
            question: "What about an Airbnb or other short-term rental?",
            answer:
              "Yes, with one caveat that sits with you. Short-term rental hosts set their own rules about private events and guest numbers, independent of local law. Check your rental agreement before booking — the deposit is non-refundable, so a booking cancelled because a property didn't permit it still forfeits it.",
          },
          {
            question:
              "Do you cover Murrells Inlet and Surfside Beach, or only Myrtle Beach itself?",
            answer:
              "The Grand Strand generally, including North Myrtle Beach to the north and Surfside Beach and Murrells Inlet to the south, plus Market Common and Broadway at the Beach inland. If you're staying somewhere further out, call or text before booking.",
          },
          {
            question: "Is a deposit required, and when is the balance due?",
            answer:
              "A non-refundable deposit is required to confirm a booking. The remaining balance is due when the entertainer arrives, before the performance begins. Payments run through third-party payment processors, and any additional fees that apply are itemised and disclosed in your booking confirmation.",
          },
          {
            question: "What happens if I cancel or need to reschedule?",
            answer:
              "Cancellations must be submitted in writing. Cancel at least two days before the event and nothing further is owed beyond the non-refundable deposit; inside two days, a cancellation fee equal to 50% of the total booking fee applies. Rescheduling also requires written notice at least two days out, is subject to availability, and carries a rescheduling fee.",
          },
          {
            question: "What are the age and ID requirements?",
            answer:
              "Everyone must be 18 or older — the person booking, every guest present, and the entertainer. Valid, unexpired government-issued photo ID is required from customers before a booking is confirmed, and entertainers carry ID to every event. No one under 18 may be present. As the host you're responsible for ensuring every attendee meets that requirement.",
          },
          {
            question: "What rules apply during the performance?",
            answer:
              "A minimum six-foot distance is maintained between the entertainer and everyone present at all times. It's a no-contact booking and a condition of performance. Local ordinances may also require minimum attire, and performances must comply with South Carolina law and your municipality's rules. An entertainer may end a booking and leave if they feel unsafe or witness prohibited conduct, and no refund is issued in that case.",
          },
          {
            question: "Can I request a specific entertainer?",
            answer:
              "Yes, subject to availability on your date. Every entertainer is verified before joining the roster, and the photos published on this site are real and unedited. If a confirmed entertainer becomes unavailable, the booking team works to offer a comparable replacement.",
          },
        ],
      },
    ],
  },
  {
    state: "North Carolina",
    stateSlug: "north-carolina",
    cities: [
      {
        name: "Charlotte",
        slug: "charlotte",
        areas: ["Uptown", "South End", "NoDa", "Ballantyne", "University City"],
        content: {
          h1Title: "Charlotte Stripper & Exotic Dancer Booking",
          metaTitle:
            "Charlotte Stripper & Exotic Dancer Booking | Velvet Girl Entertainment",
          metaDescription:
            "Book verified exotic dancers in Charlotte for bachelor parties, birthdays and private events. Real profile photos, written confirmation, and a booking specialist from first call to showtime. 18+.",
          ogTitle: "Hire an Exotic Dancer in Charlotte, NC",
          ogDescription:
            "Private events, bachelor parties and birthdays across Charlotte — verified performers, real photos, and bookings confirmed in writing. Call or text (843) 938-7377.",
          twitterTitle: "Charlotte Entertainment Booking | Velvet Girl Entertainment",
          twitterDescription:
            "Verified entertainers for private events in Charlotte. Real profile photos, clear booking process, 18+ only.",
          heroSubtitle:
            "Verified exotic dancers booked for private events across Charlotte — real profile photos, and every booking confirmed in writing.",
          intro:
            "Velvet Girl Entertainment is a booking agency. If you're looking to hire a stripper in Charlotte, you aren't calling a club or arranging things with a performer directly — you're working with a booking specialist who checks who's available for your date, walks you through the cost, and confirms the reservation in writing once a deposit is received.",
          introParagraphs: [
            "Velvet Girl Entertainment is a booking agency. If you're looking to hire a stripper in Charlotte, you aren't calling a club or arranging things with a performer directly — you're working with a booking specialist who checks who's available for your date, walks you through the cost, and confirms the reservation in writing once a deposit is received.",
            "We book exotic dancers in Charlotte for bachelor parties, birthdays, [corporate celebrations](/services/corporate-entertainment) and other [private events](/services/private-events), at private residences, hotel suites and rented spaces. Performers are verified before they're listed on the roster, and profiles use real, unedited photos rather than stock images, so you can review an entertainer before requesting a booking. Everyone involved — the customer, every guest at the event, and the entertainer — must be 18 or over.",
          ],
          whyChooseUs:
            "Most of what goes wrong when people book adult entertainers has little to do with the entertainment itself. It's a photo that doesn't match the profile, a booking nobody actually confirmed, or a policy that surfaces for the first time at the door.",
          whyChooseUsParagraphs: [
            "Most of what goes wrong when people book adult entertainers has little to do with the entertainment itself. It's a photo that doesn't match the profile, a booking nobody actually confirmed, or a policy that surfaces for the first time at the door.",
            "Here's how a Charlotte booking works instead. Profile photos are real and unedited, with no stock images. Performers are verified before joining the roster. You can request someone specific, subject to their availability on your date. A booking isn't held on a phone call alone — it's confirmed in writing once a deposit is received, and every fee is itemized before you commit to anything. Charlotte bookings follow Velvet Girl Entertainment's stated performance and conduct requirements, including the six-foot no-touch rule, and you'll know those requirements before you pay.",
            "The booking line is answered around the clock at (843) 938-7377, by call or text.",
          ],
          localScene:
            "The venue usually shapes the logistics of a Charlotte booking more than the neighborhood does, so it's worth having a few details ready when you call.",
          localSceneParagraphs: [
            "The venue usually shapes the logistics of a Charlotte booking more than the neighborhood does, so it's worth having a few details ready when you call.",
            "If your event is at an Uptown or South End hotel, apartment building or private venue, confirm the guest check-in procedure, any elevator or fob access requirements, and where a car can pull in — then pass those to your booking specialist so the arrival can be planned rather than improvised in the lobby.",
            "Short-term rentals come with a separate consideration. Guest limits and house rules are set by the property owner, and confirming that the event is permitted at the property is the host's responsibility.",
            "For private residences in areas such as Ballantyne, University City or NoDa, provide the correct event address and confirm any property-specific access requirements during booking. Allow a slightly longer travel window when you're setting a start time further from the center of the city.",
          ],
          servicesSubheading:
            "A [bachelor party](/services/bachelor-parties) in an Uptown hotel suite and a [birthday](/services/birthday-parties) at a private residence in Ballantyne run through the same booking process — what changes is the timing and the arrival plan.",
        },
        faqs: [
          {
            question: "How do I book a stripper in Charlotte?",
            answer:
              "Start online through the [booking form](/book-now), or call or text (843) 938-7377. Tell us your date, your venue in Charlotte, roughly how many guests, and the kind of event — bachelor party, birthday, or something else. A booking specialist confirms who's available for that date, walks you through the cost, and your reservation is confirmed in writing once a deposit is received.",
          },
          {
            question:
              "How far in advance should I book an exotic dancer in Charlotte?",
            answer:
              "We recommend at least one to two weeks ahead, and more if your date falls on a weekend. Weekend availability is the first thing to go. If you already know the date, there's no cost to sending the request early.",
          },
          {
            question: "Are same-day bookings available in Charlotte?",
            answer:
              "Yes, same-day requests are welcome — but they're handled by phone rather than online. Online deposit payment is only available for bookings made 24 or more hours in advance. For anything sooner, submit the form and then call or text (843) 938-7377 directly so a specialist can check live availability.",
          },
          {
            question: "Do you require a deposit?",
            answer:
              "Yes. A non-refundable deposit secures your booking and confirms your entertainer, and a booking isn't considered confirmed until that deposit is received and the booking terms are accepted. All fees are itemized and provided to you before you confirm anything, and your booking specialist will go through the payment details with you at that point.",
          },
          {
            question:
              "Can I hire a stripper for a private party at a house or rental in Charlotte?",
            answer:
              "Yes. Private residences and vacation rentals are standard bookings for a private stripper show in Charlotte. Two things sit with you as the host: confirming the venue's own rules — a rental owner's house rules and guest limits, or a building's policies — and making sure the event as booked is lawful at that address. Everyone present must be 18 or over.",
          },
          {
            question:
              "Do you book entertainers for Uptown Charlotte high-rise apartments?",
            answer:
              "Yes. Have your building's guest check-in process ready when you book — front desk procedure, elevator or fob access, and the unit number — so your booking specialist can plan the arrival in advance.",
          },
          {
            question: "Can I book an entertainer for a hotel in Charlotte?",
            answer:
              "Yes. Hotel suite bookings work like any other venue, with one caveat: hotels set their own guest-count and visitor policies, and confirming that your suite can host the event is the host's responsibility. Share the hotel and suite number when you book so the arrival can be coordinated discreetly.",
          },
          {
            question: "Do you book outside the Uptown and South End area?",
            answer:
              "Yes. Charlotte bookings aren't limited to the Uptown and South End core — NoDa, Ballantyne and University City are all covered. If your event is somewhere else in the Charlotte area, give your booking specialist the address when you call and they'll confirm what's possible for your date before anything is booked.",
          },
          {
            question: "What are the age and ID requirements?",
            answer:
              "Everyone must be 18 or over — the customer, every guest at the event, and the entertainer. Minors are prohibited from being present at any event, without exception. Valid, unexpired government-issued photo ID is required to verify age and identity before a booking is confirmed, and entertainers carry ID at every event. As host, you're responsible for making sure everyone at your event meets the age requirement and can show proof if asked.",
          },
          {
            question: "What rules apply during the performance?",
            answer:
              "A minimum six-foot distance is required between the entertainer and everyone present, at all times. It's a no-touch performance and a strict condition of every booking — non-consensual or inappropriate contact ends it. Illegal activity of any kind, including solicitation, is prohibited and ends the booking with no refund. Both the entertainer and Velvet Girl Entertainment can end a performance and leave if anyone feels unsafe or the terms are breached.",
          },
          {
            question:
              "Can I request a specific entertainer for my Charlotte date?",
            answer:
              "Yes. Browse the [performer profiles](/girls) and tell your specialist who you'd like — requests are subject to that entertainer's availability on your date, which is confirmed by the booking team rather than assumed. In the rare case a confirmed entertainer becomes unavailable, the team works to offer a comparable replacement so your event isn't affected.",
          },
          {
            question: "What's the cancellation and rescheduling policy?",
            answer:
              "Cancellations must be submitted in writing. Cancel at least two days before the event and nothing further is owed beyond the non-refundable deposit; cancel less than two days out and a cancellation fee of 50% of the total booking fee applies. Rescheduling also requires written notice at least two days before the original date, is subject to availability, and carries a rescheduling fee. Your booking specialist will confirm the details when you book.",
          },
        ],
      },
    ],
  },
  {
    state: "Georgia",
    stateSlug: "georgia",
    cities: [
      {
        name: "Savannah",
        slug: "savannah",
        areas: ["Historic District", "Tybee Island", "Southside", "Pooler"],
        content: {
          h1Title: "Book Strippers & Exotic Dancers in Savannah, GA",
          metaTitle:
            "Strippers in Savannah, GA | Book Exotic Dancers | Velvet Girl Entertainment",
          metaDescription:
            "Book professional strippers and exotic dancers in Savannah, GA for private events. Serving Downtown, the Historic District, Tybee Island, Southside and Pooler.",
          heroSubtitle:
            "Professional exotic dancers and strippers booked for private events across Savannah, Georgia — Downtown, the Historic District, Tybee Island, Southside and Pooler.",
          intro:
            "Velvet Girl Entertainment books professional strippers and exotic dancers for private events in Savannah, Georgia. We work as a booking agency: you tell us the date, the venue address and what you have in mind, we confirm which verified entertainers are available for that date, and availability is confirmed in writing.",
          introParagraphs: [
            "Velvet Girl Entertainment books professional strippers and exotic dancers for private events in Savannah, Georgia. We work as a [booking agency](/about): you tell us the date, the venue address and what you have in mind, we confirm which verified entertainers are available for that date, and availability is confirmed in writing.",
            "Savannah bookings run across the downtown area and the Historic District, out to Tybee Island, and through Southside and Pooler. Locations differ, and so do the details that matter — building access, entry instructions, parking arrangements, gate codes. Giving us the full event address and any access information when you submit the request helps the booking team coordinate it accurately.",
            "Entertainers booked through Velvet Girl Entertainment are independent contractors, and every performer is verified before joining the roster.",
          ],
          whyChooseUs:
            "Booking an entertainer you haven't met comes down to a few practical questions: who is available, how the booking actually works, and whether you can reach someone when you need help.",
          whyChooseUsParagraphs: [
            "Booking an entertainer you haven't met comes down to a few practical questions: who is available, how the booking actually works, and whether you can reach someone when you need help.",
            "Every performer is verified before joining the roster, and the photos published by Velvet Girl Entertainment are real and unedited rather than stock images. Availability is confirmed in writing, and applicable fees, including any travel charge, are itemized in the booking confirmation. Support is available by call or text at (843) 938-7377, around the clock.",
            "One thing worth knowing up front: venue rules vary, and the customer is responsible for confirming that the location permits the entertainment being booked. Short-term rentals, hotels and event spaces each set their own policies, so it's worth checking before the date rather than on the night — [the Terms](/terms) explain what applies.",
          ],
          localScene:
            "Velvet Girl Entertainment serves customers booking private events in Downtown Savannah and the Historic District, on Tybee Island, and in Southside and Pooler.",
          localSceneParagraphs: [
            "Velvet Girl Entertainment serves customers booking private events in Downtown Savannah and the Historic District, on Tybee Island, and in Southside and Pooler.",
            "For any of these areas, the booking team works from the details you provide — the full event address, the start time, group size and any access instructions for the property. For Tybee Island and other locations outside the downtown area, submitting those details early gives the team the most room to confirm availability for your date.",
            "If your address falls elsewhere in the Savannah area, ask and we'll confirm whether we can cover it. Any applicable travel charge is itemized in the booking confirmation.",
          ],
        },
        faqs: [
          {
            question: "How do I book an exotic dancer in Savannah, GA?",
            answer:
              "Submit a request through [the booking page](/book-now) with Savannah selected, including your date, the event address, your group size and what you have in mind. A booking specialist will confirm which entertainers are available and go over the details with you. Availability is confirmed in writing, and the booking is confirmed once the required deposit is paid and the Terms are accepted. You can also call or text (843) 938-7377 to start the process.",
          },
          {
            question: "What information do you need to book a Savannah event?",
            answer:
              "The date and start time, the full event address including any unit or building number, the number of guests, and any access details for the property — entry instructions, gate codes or parking arrangements. Government-issued photo identification is also required before a booking is confirmed.",
          },
          {
            question: "How far in advance should I book in Savannah?",
            answer:
              "One to two weeks is the general recommendation, particularly for weekend dates. Destination bookings and custom themes are better arranged two to four weeks ahead. Submitting your request earlier gives the booking team more room to confirm availability for your date.",
          },
          {
            question: "Can I book same-day in Savannah?",
            answer:
              "Same-day requests are welcome, but they don't go through the online deposit flow — online deposit payment is available for bookings made 24 or more hours in advance. For same-day requests, submit the form and then call or text (843) 938-7377 directly so availability can be checked with you.",
          },
          {
            question: "Do you cover Tybee Island?",
            answer:
              "Yes. Tybee Island is one of the areas we cover around Savannah, along with Downtown Savannah and the Historic District, Southside and Pooler. For a Tybee booking, include the full property address and any access details with your request.",
          },
          {
            question: "What areas around Savannah do you serve?",
            answer:
              "Downtown Savannah and the Historic District, Tybee Island, Southside and Pooler. If your event is elsewhere in the Savannah area, submit a request or call and we'll confirm whether we can cover it. Any applicable travel charge is itemized in the booking confirmation.",
          },
          {
            question: "What happens after I submit a booking request?",
            answer:
              "A booking specialist contacts you to confirm entertainer availability for your date and go over the details of the event. Availability is confirmed in writing, and applicable fees are itemized in the booking confirmation. The booking is confirmed once the required deposit is paid and the Terms are accepted.",
          },
          {
            question:
              "Is a deposit required, and when is the remaining balance due?",
            answer:
              "Yes. A non-refundable deposit is required to confirm the booking. The remaining balance is due when the entertainer arrives, before the performance begins. Applicable fees, including any travel charge, are itemized in the booking confirmation.",
          },
          {
            question: "Can I request specific entertainers?",
            answer:
              "Yes, subject to availability on your date. Photos published by Velvet Girl Entertainment are real and unedited rather than stock images, and every performer is [verified before joining the roster](/girls).",
          },
          {
            question: "What are the age and identification requirements?",
            answer:
              "Everyone must be 18 or older — the customer, every attendee at the event, and the entertainer. Valid, unexpired government-issued photo identification is required from customers and entertainers before a booking is confirmed, and entertainers carry identification at events. The customer is responsible for ensuring all attendees are of legal age.",
          },
          {
            question: "What are the rules about contact during a performance?",
            answer:
              "A minimum distance of six feet is maintained between the entertainer and everyone present at all times. This no-touch rule is a strict condition of performance. Performances must comply with applicable state and local law, and the entertainer or the company may end a performance and leave if the rules are breached or if anyone feels unsafe. It's worth making sure your group knows this before the event.",
          },
          {
            question: "What if I need to cancel or reschedule?",
            answer:
              "Cancellations must be submitted in writing. For cancellations made at least two days before the event, no further payment beyond the non-refundable deposit is due. For cancellations made less than two days before, a fee equal to 50% of the total booking fee applies. Rescheduling requests must also be submitted in writing at least two days before the original date, are subject to availability, and are subject to a rescheduling fee.",
          },
        ],
      },
      {
        name: "Atlanta",
        slug: "atlanta",
        areas: ["Midtown", "Buckhead", "Downtown", "Decatur", "Sandy Springs"],
        content: {
          h1Title: "Exotic Dancer & Stripper Booking in Atlanta, GA",
          metaTitle: "Book Exotic Dancers & Strippers in Atlanta, GA | Velvet Girl Entertainment",
          metaDescription:
            "Book professional exotic dancers and strippers in Atlanta, GA — Midtown, Buckhead, Downtown, Decatur and Sandy Springs. Call or text to check availability.",
          ogTitle: "Book Exotic Dancers & Strippers in Atlanta, GA | Velvet Girl Entertainment",
          ogDescription:
            "Book professional exotic dancers and strippers in Atlanta, GA — Midtown, Buckhead, Downtown, Decatur and Sandy Springs. Call or text to check availability.",
          twitterTitle: "Book Exotic Dancers & Strippers in Atlanta, GA | Velvet Girl Entertainment",
          twitterDescription:
            "Book professional exotic dancers and strippers in Atlanta, GA — Midtown, Buckhead, Downtown, Decatur and Sandy Springs. Call or text to check availability.",
          heroSubtitle:
            "Professional exotic dancers and strippers booked across Midtown, Buckhead, Downtown Atlanta, Decatur and Sandy Springs, with availability confirmed in writing.",
          intro:
            "Velvet Girl Entertainment books professional exotic dancers and strippers throughout Atlanta, Georgia. Atlanta is an active market with an onboarded local roster, and bookings here follow the same process as [every market we operate in](/cities): you tell us the date, the area and the kind of event, we confirm entertainer availability in writing, and the booking is confirmed once the required deposit is received and the Terms are accepted.",
          introParagraphs: [
            "Velvet Girl Entertainment books professional exotic dancers and strippers throughout Atlanta, Georgia. Atlanta is an active market with an onboarded local roster, and bookings here follow the same process as [every market we operate in](/cities): you tell us the date, the area and the kind of event, we confirm entertainer availability in writing, and the booking is confirmed once the required deposit is received and the Terms are accepted.",
            "We work as a booking agency. The entertainers we book are independent professionals who are verified before joining the [roster](/girls), and the photos we publish are real and unedited rather than stock images. Bookings are available across the metro for bachelor parties, birthdays, private events, corporate gatherings and other celebrations, at private residences, hotel suites, high-rise condos and rented venues.",
          ],
          whyChooseUs:
            "Most of the friction in booking entertainment comes from not knowing what you're actually getting. We publish real, unedited photos of every entertainer on the roster, and you can request a specific performer subject to her availability on your date. Availability for your date is confirmed in writing, and the booking is confirmed once the required deposit is received and the Terms are accepted.",
          whyChooseUsParagraphs: [
            "Most of the friction in booking entertainment comes from not knowing what you're actually getting. We publish real, unedited photos of every entertainer on the roster, and you can request a specific performer subject to her availability on your date. Availability for your date is confirmed in writing, and the booking is confirmed once the required deposit is received and the Terms are accepted.",
            "The rest is deliberately unambiguous. The deposit is non-refundable. The remaining balance is due when your entertainer arrives, before the performance begins. Applicable fees are itemized and communicated before the booking is confirmed. Everyone involved must be 18 or older, valid government-issued photo ID is required before we confirm, and a strict no-touch rule with a six-foot minimum distance applies at every event. If a confirmed entertainer becomes unavailable, our booking team works to offer a comparable replacement.",
          ],
          localScene:
            "Our Atlanta coverage runs across Midtown, Buckhead and Downtown Atlanta, extending out to Decatur and Sandy Springs. Midtown, Buckhead and Downtown bookings tend to be hotel suites, high-rise condos and rented event space, which usually means building access details matter — parking, elevator or fob access, front-desk policy and where your entertainer should arrive. Decatur and Sandy Springs requests are more often private residences.",
          localSceneParagraphs: [
            "Our Atlanta coverage runs across Midtown, Buckhead and Downtown Atlanta, extending out to Decatur and Sandy Springs. Midtown, Buckhead and Downtown bookings tend to be hotel suites, high-rise condos and rented event space, which usually means building access details matter — parking, elevator or fob access, front-desk policy and where your entertainer should arrive. Decatur and Sandy Springs requests are more often private residences.",
            "Whatever the address, give your booking specialist the exact location and any access notes when you request a date. One thing worth settling early: confirming that your venue permits the entertainment you're booking is [your responsibility](/terms), not ours. Hotels, short-term rentals, condo boards and commercial spaces all set their own rules, and it's better to check before the deposit than after.",
          ],
        },
        faqs: [
          {
            question: "How do I book exotic dancers in Atlanta?",
            answer:
              "Start a request through our booking form, or call or text (843) 938-7377. Tell us your date, your Atlanta area or exact address, your group size and the type of event. A booking specialist confirms entertainer availability in writing, and the booking is confirmed once the required deposit is received and the Terms are accepted.",
          },
          {
            question: "How far in advance should I book strippers in Atlanta?",
            answer:
              "One to two weeks ahead is our general recommendation, especially for weekend dates. Availability depends on which entertainers are free on the specific date you're asking about, so it's worth submitting your request as early as you can, particularly if you want to request a specific entertainer.",
          },
          {
            question: "Can I book same-day in Atlanta?",
            answer:
              "Same-day requests are welcome, but they're handled differently. Online deposit payment is only available for bookings made 24 or more hours in advance. For same-day or last-minute Atlanta requests, submit the booking form and then call or text (843) 938-7377 directly so we can check availability for your date.",
          },
          {
            question: "What areas of Atlanta does Velvet Girl Entertainment cover?",
            answer:
              "Midtown, Buckhead, Downtown Atlanta, Decatur and Sandy Springs. If your event is elsewhere in the metro, send us the address with your request and we'll confirm whether we can cover it for your date.",
          },
          {
            question: "What happens after I submit a booking request?",
            answer:
              "A booking specialist reviews your request and confirms entertainer availability for your date in writing. Applicable fees are itemized and communicated to you before the booking is confirmed. The booking is confirmed once the required deposit is received and the Terms are accepted.",
          },
          {
            question: "Is a deposit required to book in Atlanta?",
            answer:
              "Yes. A non-refundable deposit is required to confirm the booking. A booking is confirmed once the required deposit is received and the Terms are accepted. The deposit amount is included in the itemized fees you receive before confirming.",
          },
          {
            question: "When is the remaining balance due?",
            answer:
              "On arrival. The remaining balance is due when your entertainer arrives at your Atlanta venue, before the performance begins. Applicable fees are itemized and communicated before the booking is confirmed, and any additional fees are disclosed in the booking confirmation.",
          },
          {
            question: "Can I request a specific entertainer for my Atlanta booking?",
            answer:
              "Yes, subject to her availability on your date. You can browse real, unedited photos of the roster and name who you'd like when you submit your request. If a confirmed entertainer later becomes unavailable, our booking team works to offer a comparable replacement.",
          },
          {
            question: "Are the performer photos real?",
            answer:
              "Yes. The photos published by Velvet Girl Entertainment are real and unedited rather than stock images. You can request a specific performer subject to availability on your date, and if a confirmed performer becomes unavailable, our booking team works to offer a comparable replacement.",
          },
          {
            question: "What are the age and ID requirements?",
            answer:
              "Everyone must be 18 or older — customers, entertainers and every guest at the event. Valid, unexpired government-issued photo ID is required before a booking is confirmed, and entertainers carry ID at every event. As the host, you're responsible for making sure everyone attending is of legal age. Minors are prohibited at any event, without exception.",
          },
          {
            question: "What are the contact rules during a performance?",
            answer:
              "Strictly no touching. A minimum distance of six feet must be maintained at all times between the entertainer and everyone present. This is a non-negotiable condition of every booking, and the entertainer or the company may end a performance if that rule or another applicable Term is breached.",
          },
          {
            question: "What is the cancellation or rescheduling policy?",
            answer:
              "Cancellations must be submitted in writing. If you cancel at least two days before your event date, nothing further is owed beyond the non-refundable deposit. If you cancel less than two days out, a cancellation fee of 50% of the total booking fee applies. Rescheduling requests must also be made in writing at least two days ahead, are subject to entertainer availability, and carry a rescheduling fee. Full details are in [our Terms](/terms).",
          },
        ],
      },
    ],
  },
  {
    state: "Florida",
    stateSlug: "florida",
    cities: [
      {
        name: "Miami",
        slug: "miami",
        areas: ["South Beach", "Brickell", "Wynwood", "Coral Gables", "Downtown Miami"],
        content: {
          h1Title: "Miami Exotic Dancer & Stripper Booking",
          metaTitle: "Exotic Dancers & Strippers in Miami, FL | Velvet Girl Entertainment",
          metaDescription:
            "Book professional exotic dancers and strippers in Miami, FL. Velvet Girl Entertainment covers Brickell, South Beach, Downtown, Wynwood and Coral Gables. 18+.",
          ogTitle: "Exotic Dancers & Strippers in Miami, FL | Velvet Girl Entertainment",
          ogDescription:
            "Book professional exotic dancers and strippers in Miami, FL. Velvet Girl Entertainment covers Brickell, South Beach, Downtown, Wynwood and Coral Gables. 18+.",
          twitterTitle: "Exotic Dancers & Strippers in Miami, FL | Velvet Girl Entertainment",
          twitterDescription:
            "Book professional exotic dancers and strippers in Miami, FL. Velvet Girl Entertainment covers Brickell, South Beach, Downtown, Wynwood and Coral Gables. 18+.",
          heroSubtitle:
            "Professional exotic dancers and strippers for hire in Miami, Florida — booked through a verified roster, with real photos.",
          intro:
            "Velvet Girl Entertainment books professional exotic dancers and strippers throughout Miami, Florida. Miami is [one of our active markets](/cities), which means there's an onboarded local roster here — you choose from real, unedited photos, we confirm who's available on your date, and a booking specialist handles the details from there.",
          introParagraphs: [
            "Velvet Girl Entertainment books professional exotic dancers and strippers throughout Miami, Florida. Miami is [one of our active markets](/cities), which means there's an onboarded local roster here — you choose from real, unedited photos, we confirm who's available on your date, and a booking specialist handles the details from there.",
            "We work as a [booking agency](/about). The entertainers we represent are independent professionals; our role is to connect you with them, put the details in writing, and make sure everyone understands the rules before the night starts. Bookings across the city cover the range you'd expect — bachelor parties, birthdays, private celebrations, corporate events — at private residences, hotel suites and short-term rentals, subject to what each venue allows.",
            "All customers, attendees and entertainers must be 18 or older.",
          ],
          whyChooseUs:
            "Two things matter most when you're hiring exotic dancers in Miami: knowing who you're actually booking, and knowing what the booking commits you to.",
          whyChooseUsParagraphs: [
            "Two things matter most when you're hiring exotic dancers in Miami: knowing who you're actually booking, and knowing what the booking commits you to.",
            "The photos we publish are [real and unedited](/girls) rather than stock images, which is why we put profiles out in the open instead of asking you to book blind. You can request a specific entertainer, subject to their availability on your date. If a confirmed entertainer becomes unavailable, our booking team works to offer a comparable replacement.",
            "The second part is process. A booking is confirmed once the required non-refundable deposit is received and our terms are accepted. The remaining balance is due when the entertainer arrives, before the performance begins. Custom details — themes, costumes, dancer count, [available upgrades](/packages) — can be discussed with your booking specialist, and applicable fees are itemized and communicated during the booking process.",
            "For the best availability, book one to two weeks out, especially for a Friday or Saturday. Same-day requests are welcome as well — for those, call or text us directly rather than using the online form.",
          ],
          localScene:
            "Our Miami coverage includes South Beach, Brickell, Downtown Miami, Wynwood and Coral Gables. Whether the event is at a private residence, a hotel suite, a condo tower or a rented space, the booking process is the same — what changes is the access information we may need from you.",
          localSceneParagraphs: [
            "Our Miami coverage includes South Beach, Brickell, Downtown Miami, Wynwood and Coral Gables. Whether the event is at a private residence, a hotel suite, a condo tower or a rented space, the booking process is the same — what changes is the access information we may need from you.",
            "When you request a booking, give us the full event address along with any parking, front-desk, gate-code or guest-access instructions relevant to the property. Supplying those details up front helps us coordinate the booking without a round of questions later.",
            "The host is responsible for [confirming that the venue permits](/terms) the entertainment being booked. Hotels, condo associations, HOAs and short-term rental platforms each set their own policies, and we can't obtain that permission on your behalf.",
          ],
        },
        faqs: [
          {
            question: "How do I book exotic dancers in Miami?",
            answer:
              "Start with the online booking form or call or text (843) 938-7377. You'll choose your city and theme, tell us about the event, and a booking specialist will confirm entertainer availability for your date. The booking is confirmed once the required deposit is received and our terms are accepted.",
          },
          {
            question: "Can I book strippers in Miami on the same day?",
            answer:
              "Same-day requests are welcome, but they're handled differently. Online deposit payment is only available for bookings made 24 or more hours in advance, so for a same-day event, submit the form and then call or text us directly at (843) 938-7377. Availability depends on who is free that day.",
          },
          {
            question: "How far in advance should I book?",
            answer:
              "One to two weeks is the recommendation, especially for Friday and Saturday nights. Custom themes are better arranged further in advance where applicable. Same-day and shorter-notice requests may still be possible, subject to availability.",
          },
          {
            question: "What areas of Miami do you serve?",
            answer:
              "We cover South Beach, Brickell, Downtown Miami, Wynwood and Coral Gables. If your address is close to those areas but not listed, contact us and we'll confirm whether we can cover it.",
          },
          {
            question: "Do you cover Brickell?",
            answer:
              "Yes — Brickell is one of our Miami coverage areas. When you book, include the full address and any building or guest-access instructions that may be relevant to the property.",
          },
          {
            question: "Can I request a specific entertainer?",
            answer:
              "Yes. You can browse the [available performer profiles](/girls) and request a specific entertainer, subject to their availability on your date. If a confirmed entertainer becomes unavailable, our booking team works to offer a comparable replacement.",
          },
          {
            question: "Are the photos on your site real?",
            answer:
              "Yes. The photos we publish are real and unedited rather than stock images. You can request a specific entertainer, subject to availability on your date, and if a confirmed entertainer becomes unavailable, our booking team works to offer a comparable replacement.",
          },
          {
            question: "Is a deposit required to book?",
            answer:
              "Yes. A non-refundable deposit is required to confirm the booking. The booking is confirmed once the required deposit is received and the terms are accepted. Applicable fees are itemized and communicated during the booking process.",
          },
          {
            question: "When is the remaining balance due?",
            answer:
              "The remaining balance is due when the entertainer arrives, before the performance begins. Applicable fees are communicated during the booking process, and any additional fees are disclosed in the booking confirmation.",
          },
          {
            question: "What are the age and ID requirements?",
            answer:
              "All customers, attendees and entertainers must be 18 or older. Valid, unexpired government-issued photo identification is required to verify age and identity before a booking is confirmed, entertainers carry identification at events, and the host is responsible for ensuring all attendees are of legal age. No one under 18 may be present at an event.",
          },
          {
            question: "What are the no-touch rules?",
            answer:
              "A minimum distance of six feet must be maintained between the entertainer and everyone at the event at all times. This is a strict condition of every booking, not a guideline. The entertainer or Velvet Girl Entertainment may end a performance if the rule is broken or if anyone feels unsafe.",
          },
          {
            question: "What is the cancellation and rescheduling policy?",
            answer:
              "Cancellations must be submitted in writing. Cancel at least two days before the event and nothing further is owed beyond the non-refundable deposit; cancel less than two days out and a fee equal to 50% of the total booking fee applies. Rescheduling must also be requested in writing at least two days ahead, is subject to entertainer availability, and carries a rescheduling fee.",
          },
        ],
      },
      {
        name: "Orlando / Daytona Beach",
        slug: "orlando-daytona-beach",
        areas: [
          "International Drive",
          "Downtown Orlando",
          "Daytona Beach Boardwalk",
          "Winter Park",
        ],
        content: {
          h1Title: "Book Exotic Dancers in Orlando, FL & Daytona Beach",
          metaTitle:
            "Exotic Dancers in Orlando, FL & Daytona Beach | Velvet Girl Entertainment",
          metaDescription:
            "Book professional exotic dancers in Orlando, FL and Daytona Beach — International Drive, Downtown Orlando, Winter Park and the Boardwalk. Call or text.",
          ogTitle:
            "Exotic Dancers in Orlando, FL & Daytona Beach | Velvet Girl Entertainment",
          ogDescription:
            "Book professional exotic dancers in Orlando, FL and Daytona Beach — International Drive, Downtown Orlando, Winter Park and the Boardwalk. Call or text.",
          twitterTitle:
            "Exotic Dancers in Orlando, FL & Daytona Beach | Velvet Girl Entertainment",
          twitterDescription:
            "Book professional exotic dancers in Orlando, FL and Daytona Beach — International Drive, Downtown Orlando, Winter Park and the Boardwalk. Call or text.",
          heroSubtitle:
            "Professional exotic dancers and strippers booked across Orlando and Daytona Beach — including International Drive, Downtown Orlando, Winter Park and the Daytona Beach Boardwalk, with availability confirmed in writing.",
          intro:
            "Velvet Girl Entertainment books professional exotic dancers and strippers for private events in Orlando, Florida, and Daytona Beach. We work as a [booking agency](/about) rather than a club: you provide the date, the event address and the details of what you're planning, and a booking specialist confirms entertainer availability in writing.",
          introParagraphs: [
            "Velvet Girl Entertainment books professional exotic dancers and strippers for private events in Orlando, Florida, and Daytona Beach. We work as a [booking agency](/about) rather than a club: you provide the date, the event address and the details of what you're planning, and a booking specialist confirms entertainer availability in writing.",
            "Our published coverage for this market includes International Drive, Downtown Orlando, Winter Park and the Daytona Beach Boardwalk. Bookings across Orlando and Daytona Beach can cover bachelor parties, birthdays, private celebrations, corporate gatherings and other private events.",
          ],
          whyChooseUs:
            "Because this page covers both Orlando and Daytona Beach, the exact event address matters when we review a booking request. Providing the full address, along with any parking, building or guest-access information, helps the booking team review the request accurately.",
          whyChooseUsParagraphs: [
            "Because this page covers both Orlando and Daytona Beach, the exact event address matters when we review a booking request. Providing the full address, along with any parking, building or guest-access information, helps the booking team review the request accurately.",
            "Every performer photo on this page is real and unedited rather than stock imagery. You can request a specific entertainer, subject to availability on your date. If a confirmed entertainer becomes unavailable, our booking team works to offer a comparable replacement.",
            "Your booking is confirmed once the required non-refundable deposit is received and the [Terms of Service](/terms) are accepted. Applicable fees are itemized and communicated before the booking is confirmed, and the remaining balance is due when the entertainer arrives, before the performance begins.",
          ],
          localScene:
            "Our published coverage for this market includes International Drive, Downtown Orlando, Winter Park and the Daytona Beach Boardwalk.",
          localSceneParagraphs: [
            "Our published coverage for this market includes International Drive, Downtown Orlando, Winter Park and the Daytona Beach Boardwalk.",
            "When you request a booking, provide the full event address along with any parking, building, front-desk or guest-access information relevant to the property. Supplying those details in advance helps the booking team coordinate the request accurately.",
            "For an address outside the listed areas, contact us with the location and the date so we can confirm whether we can cover the booking.",
            "The host is responsible for [confirming that the venue permits](/terms) the entertainment being booked. Hotels, short-term rentals, condo associations, HOAs and other properties may set their own policies.",
          ],
          areasSupportingText:
            "Need entertainment somewhere else in Central Florida? Send us the address and date so we can confirm whether the booking is within our service coverage.",
          dancersSupportingParagraphs: [
            "Every photo below is real and unedited rather than stock imagery. You can request a specific entertainer, subject to availability on your date, and the booking team will confirm availability before the booking is finalized.",
          ],
        },
        faqs: [
          {
            question: "How do I book exotic dancers in Orlando?",
            answer:
              "Choose your city and party theme on the booking form, tell us about your event, and a booking specialist will contact you to confirm entertainer availability and review the booking details. Your booking is confirmed once the required non-refundable deposit is received and the Terms of Service are accepted. Availability is confirmed to you in writing.",
          },
          {
            question: "Do you cover Daytona Beach as well as Orlando?",
            answer:
              "Yes. Orlando and Daytona Beach are both part of this market, with published coverage including International Drive, Downtown Orlando, Winter Park and the Daytona Beach Boardwalk. When you submit a request, provide the exact event address so the booking team can confirm availability for your date.",
          },
          {
            question: "Can I book same-day in Orlando or Daytona Beach?",
            answer:
              "Same-day requests are welcome, but they follow a different booking process. Online deposit payment is available only for bookings made 24 or more hours in advance. For a same-day or last-minute booking, submit the form and then call or text (843) 938-7377 directly so the team can check availability for your date.",
          },
          {
            question: "How far in advance should I book?",
            answer:
              "We recommend 1–2 weeks, especially for weekends. Custom themes may require additional planning, and shorter-notice requests remain subject to availability.",
          },
          {
            question: "Which areas around Orlando do you cover?",
            answer:
              "Our published Orlando coverage includes International Drive, Downtown Orlando and Winter Park. For another Orlando-area address, send us the location and the date so we can confirm whether we can cover the booking.",
          },
          {
            question: "Which areas around Daytona Beach do you cover?",
            answer:
              "Daytona Beach coverage on this page includes the Daytona Beach Boardwalk area. For an address outside the listed area, contact us with the location and the date so we can confirm whether we can cover the booking.",
          },
          {
            question: "Can I book an entertainer at a vacation rental or private property?",
            answer:
              "Private-address bookings can be considered, including vacation rentals and other private properties, subject to the property's rules. The host is responsible for confirming that the venue permits the entertainment being booked. Short-term rental platforms, HOAs, condo associations and property owners may set their own policies.",
          },
          {
            question: "Can I book at a hotel or resort?",
            answer:
              "Hotel and resort bookings can be requested, subject to the property's rules. The person booking the room is responsible for confirming that the property permits this type of entertainment.",
          },
          {
            question: "Are the performer photos on this page real?",
            answer:
              "Yes. The performer photos published on this page are real and unedited rather than stock imagery. Specific performer requests are subject to availability on your date.",
          },
          {
            question: "What are the deposit and payment rules?",
            answer:
              "A non-refundable deposit is required to confirm the booking. The booking is confirmed once the required deposit is received and the Terms of Service are accepted. The remaining balance is due when the entertainer arrives, before the performance begins. Applicable fees are itemized and communicated before confirmation, and any additional fees are disclosed in the booking confirmation.",
          },
          {
            question: "What are the age, ID and conduct rules?",
            answer:
              "All events are strictly 18+, and no one under 18 may be present. Valid, unexpired government-issued photo ID is required from customers and entertainers before booking confirmation, and entertainers carry identification at events. A minimum six-foot no-touch buffer between the entertainer and everyone present is a strict condition of performance.",
          },
          {
            question: "What if I need to cancel or reschedule?",
            answer:
              "Cancellations must be submitted in writing. Cancel at least two days before the event and nothing further is owed beyond the non-refundable deposit; cancel less than two days before the event and a cancellation fee equal to 50% of the total booking fee applies. Rescheduling requests must also be submitted in writing at least two days ahead, are subject to entertainer availability, and carry a rescheduling fee. Full detail is in the [Terms of Service](/terms).",
          },
        ],
      },
    ],
  },
  {
    state: "Indiana",
    stateSlug: "indiana",
    cities: [
      {
        name: "Indianapolis",
        slug: "indianapolis",
        areas: ["Downtown / Mass Ave", "Broad Ripple", "Fountain Square", "Carmel"],
        content: {
          h1Title: "Indianapolis Exotic Dancer & Stripper Booking",
          metaTitle:
            "Indianapolis Exotic Dancers & Stripper Booking | Velvet Girl Entertainment",
          metaDescription:
            "Book verified exotic dancers and strippers across the Indianapolis metro — downtown, Broad Ripple, Fountain Square, and Carmel. Real photos, written confirmation, 24/7 booking line.",
          ogTitle:
            "Indianapolis Exotic Dancers & Stripper Booking | Velvet Girl Entertainment",
          ogDescription:
            "Book verified exotic dancers and strippers across the Indianapolis metro — downtown, Broad Ripple, Fountain Square, and Carmel. Real photos, written confirmation, 24/7 booking line.",
          twitterTitle:
            "Indianapolis Exotic Dancers & Stripper Booking | Velvet Girl Entertainment",
          twitterDescription:
            "Book verified exotic dancers and strippers across the Indianapolis metro — downtown, Broad Ripple, Fountain Square, and Carmel. Real photos, written confirmation, 24/7 booking line.",
          heroSubtitle:
            "Professional exotic dancers and strippers booked across the Indianapolis metro — including downtown, Broad Ripple, Fountain Square, and Carmel, with availability confirmed in writing.",
          intro:
            "Velvet Girl Entertainment books professional exotic dancers and strippers for private events across Indianapolis and the surrounding metro. We're a [booking agency](/about), not a venue. The entertainer comes to the address you're already at, whether that's a hotel suite downtown, a rented house in Broad Ripple, or a private home up in Carmel.",
          introParagraphs: [
            "Velvet Girl Entertainment books professional exotic dancers and strippers for private events across Indianapolis and the surrounding metro. We're a [booking agency](/about), not a venue. The entertainer comes to the address you're already at, whether that's a hotel suite downtown, a rented house in Broad Ripple, or a private home up in Carmel.",
            "Booking works in four steps. You send us your date, location, and group size. A booking specialist confirms who's available and quotes your package in writing. A deposit secures the date and the confirmed entertainer. Then everything else — arrival window, parking, theme, costume — gets settled with your specialist before the night.",
            "Common reasons people hire exotic entertainment in Indianapolis are the ones you'd expect: bachelor parties, birthdays, guys' nights, and private celebrations that don't need a label. The occasion mostly changes the package, not the process.",
            "One scheduling note. If your event falls in May, when the Speedway runs its month-long build-up to the 500, or over Brickyard weekend in late July, book earlier than you otherwise would. Those are the weekends when hotel rooms and short-term rentals go first across the city, and they're the ones worth locking down well ahead.",
          ],
          whyChooseUs:
            "Booking adult entertainment usually means wiring a deposit to a website you've never heard of and hoping the person in the photo is the person who knocks. A few things are meant to make that less of a leap.",
          whyChooseUsParagraphs: [
            "Booking adult entertainment usually means wiring a deposit to a website you've never heard of and hoping the person in the photo is the person who knocks. A few things are meant to make that less of a leap.",
            "Every photo we publish is real and unedited. No stock images, no filters, no substituting someone else on the night.",
            "Every entertainer is verified before joining the roster, and availability is confirmed to you in writing before your deposit secures anything. You'll have the package, the entertainer, and the terms in front of you first.",
            "If a confirmed entertainer becomes unavailable through no fault of yours, our booking team works to put a comparable replacement in place rather than leaving you to solve it an hour before guests show up.",
            "And there's a person on the other end. Call or text (843) 938-7377 — the booking line runs 24/7, which matters more in this category than most.",
          ],
          localScene:
            "We book across the greater Indianapolis metro, not just the downtown core. What changes by neighborhood isn't the service, it's the logistics — and the more you tell us up front, the smoother arrival goes.",
          localSceneParagraphs: [
            "We book across the greater Indianapolis metro, not just the downtown core. What changes by neighborhood isn't the service, it's the logistics — and the more you tell us up front, the smoother arrival goes.",
            "Downtown and Mass Ave events are usually hotel suites or short-term rentals inside the walkable bar district. Hotels here vary a lot on elevator access, front-desk policy, and parking, so flag those details when you book.",
            "Broad Ripple sits about six miles north along the canal, and events there are typically rental houses within walking distance of the village strip. Street address plus any gate or driveway detail is normally all we need.",
            "Fountain Square, just southeast of downtown, runs a quieter arts-and-nightlife scene, and bookings there tend to be smaller residential gatherings.",
            "Carmel and the northern suburbs are roughly twenty to thirty minutes from downtown depending on traffic on US-31 and Keystone. We cover them. Because they're further out, allow a little extra notice, and be aware that travel costs can apply to locations outside the core — if they do, they're itemized in your booking confirmation before you pay anything.",
          ],
        },
        faqs: [
          {
            question: "Does Velvet Girl Entertainment provide strippers in Indianapolis?",
            answer:
              "Yes. Velvet Girl Entertainment is a professional exotic dancer and stripper booking agency serving Indianapolis and the surrounding metro. We're an intermediary: we connect you with verified entertainers who work as independent contractors, and we handle the booking, confirmation, and coordination around your event.",
          },
          {
            question: "How do I book an exotic dancer in Indianapolis?",
            answer:
              "Submit a booking request online, or call or text (843) 938-7377. You'll tell us your date, address, group size, and the kind of event you're planning. A booking specialist confirms availability in writing and sends you a quote. A non-refundable deposit then secures your date and your confirmed entertainer, and your specialist finalizes arrival time and details with you before the event.",
          },
          {
            question: "How much does it cost to hire an entertainer in Indianapolis?",
            answer:
              "We don't publish fixed rates, because the total depends on your booking. Pricing is quoted per event based on the package or theme you choose, how many entertainers you book, how long you want them there, costume and upgrade selections, and your date and location. Travel costs can apply for locations outside the core service area. Everything is itemized and communicated to you before your booking is confirmed — you'll never be quoted a number after the fact.",
          },
          {
            question: "Is a deposit required to reserve a booking?",
            answer:
              "Yes. A booking is only confirmed once we've received a non-refundable deposit and you've accepted our Terms of Service. The deposit secures both your date and your specific confirmed entertainer. Your booking specialist will confirm the remaining balance and how it's settled when you book. Online deposit payment is available for bookings made 24 or more hours in advance.",
          },
          {
            question: "How far in advance should I book in Indianapolis?",
            answer:
              "One to two weeks is the general recommendation, and more for weekends. Book earlier than that if your event lands on a race weekend in May, over Brickyard weekend in July, or on a major event weekend downtown — those dates get requested first across the city.",
          },
          {
            question: "Can I book same-day or last-minute in Indianapolis?",
            answer:
              "Often, yes, but not through the online deposit flow. Online deposit payment is only available for bookings made 24 or more hours ahead. For same-day and last-minute requests, submit the form and then call or text (843) 938-7377 directly so we can check live availability. The booking line is staffed 24/7.",
          },
          {
            question: "Can I request a specific entertainer?",
            answer:
              "Yes, subject to her availability on your date. You can browse performer profiles by city and request someone specific when you book. Availability shown on the site reflects general short-notice availability — final confirmation always comes from our booking team, since schedules change day to day.",
          },
          {
            question: "Can an entertainer come to a hotel, short-term rental, or private home in Indianapolis?",
            answer:
              "Yes — private residences, hotel suites, and rented spaces are the standard settings for our bookings. One important caveat: verifying that your venue actually permits this type of entertainment is your responsibility as the customer, not ours. Hotels, HOAs, and some rental agreements have their own rules. Check before you book, and tell us about building access, parking, and front-desk procedure so arrival goes cleanly.",
          },
          {
            question: "Do you cover Carmel and the rest of the Indianapolis metro?",
            answer:
              "Yes. We book across the greater Indianapolis metro, including Carmel and the northern suburbs, not just downtown and Broad Ripple. Locations further from the core may carry a travel cost, which is disclosed in your booking confirmation before payment.",
          },
          {
            question: "Do you book around Indianapolis race weekends?",
            answer:
              "Yes, and those are the dates to plan furthest ahead for. The month of May at the Speedway and Brickyard weekend in July put the heaviest pressure on lodging and scheduling across Indianapolis. If your event falls on or near one, send your request as early as you can rather than assuming short-notice availability.",
          },
          {
            question: "Who can attend, and what do you need before confirming a booking?",
            answer:
              "Everyone at the event must be 18 or older. Valid, unexpired government-issued photo ID is required to verify age and identity before a booking is confirmed, and entertainers carry ID at every event. Minors are strictly prohibited from any event, and as the host you're responsible for making sure every attendee is of legal age. A minimum six-foot distance between the entertainer and all attendees applies at all times — it's a strict condition of performance, not a guideline. Entertainers and the company both retain the right to end a performance and leave if these rules are broken, without refund.",
          },
          {
            question: "What happens if I need to cancel or reschedule?",
            answer:
              "Cancellations must be submitted in writing to the address listed in our Terms of Service. If you cancel at least two days before your event, nothing further is owed beyond the non-refundable deposit. Inside two days, a cancellation fee equal to 50% of the total booking fee applies. Rescheduling requests also need to be made in writing at least two days ahead, are subject to entertainer availability, and carry a rescheduling fee.",
          },
        ],
      },
    ],
  },
  {
    state: "Washington DC",
    stateSlug: "washington-dc",
    cities: [
      {
        name: "Washington DC",
        slug: "washington-dc",
        areas: [
          "Downtown DC",
          "Georgetown",
          "Dupont Circle",
          "Navy Yard",
          "Capitol Hill",
          "Adams Morgan",
        ],
        content: {
          h1Title: "Washington DC Exotic Dancers & Stripper Booking",
          metaTitle:
            "Washington DC Exotic Dancers & Stripper Booking | Velvet Girl Entertainment",
          metaDescription:
            "Request Washington, DC exotic dancers for a private event through Velvet Girl Entertainment. See how availability is confirmed and what a booking requires.",
          ogTitle:
            "Washington DC Exotic Dancers & Stripper Booking | Velvet Girl Entertainment",
          ogDescription:
            "Request Washington, DC exotic dancers for a private event. Availability is confirmed for your date before anything is booked.",
          twitterTitle:
            "Washington DC Exotic Dancers & Stripper Booking | Velvet Girl Entertainment",
          twitterDescription:
            "Request Washington, DC exotic dancers for a private event. Availability is confirmed for your date before anything is booked.",
          heroSubtitle:
            "Verified exotic dancers for private events in Washington, DC — availability confirmed for your date before anything is booked.",
          intro:
            "Velvet Girl Entertainment is a booking agency. We connect people planning private events in Washington, DC with verified, independent exotic dancers, and we handle the coordination in between — checking who is available, agreeing the scope, and settling the arrangements in writing before the night arrives.",
          introParagraphs: [
            "Velvet Girl Entertainment is a booking agency. We connect people planning private events in Washington, DC with verified, independent exotic dancers, and we handle the coordination in between — checking who is available, agreeing the scope, and settling the arrangements in writing before the night arrives.",
            "Washington, DC bookings are handled based on your requested date, your event details, and entertainer availability, which is confirmed individually for each request. Tell us when and where, how many people, and what you have in mind, and we come back with what is possible and what it costs.",
            "Private-event bookings may be arranged at hotels, residences and other permitted venues in Washington, DC, subject to entertainer availability and venue requirements.",
          ],
          whyChooseUs:
            "We are straightforward about what we are: an intermediary. The entertainers we book are independent contractors, not employees, and we say so on our [terms page](/terms) rather than leaving you to work it out. That distinction determines what we can commit to and what has to be confirmed with the performer first.",
          whyChooseUsParagraphs: [
            "We are straightforward about what we are: an intermediary. The entertainers we book are independent contractors, not employees, and we say so on our [terms page](/terms) rather than leaving you to work it out. That distinction determines what we can commit to and what has to be confirmed with the performer first.",
            "What we do commit to is that nothing is presented as booked until it is. A booking is confirmed only once we have your deposit and you have accepted our terms, and entertainer availability is confirmed to you in writing before that point. If you have ever had an agency take a card and then start looking for someone, you will understand why we run it in that order.",
            "Every performer we work with is verified before joining the roster, and the photos we publish are real and unedited — no stock images, no filters. For a Washington, DC request, your booking specialist will confirm which entertainers are available for your date and provide the relevant booking details before you commit.",
          ],
          localScene:
            "The practical issue in the District is access, not distance. A great deal of Washington's hotel and housing stock sits behind a front desk, a callbox or a building app — that is true of the newer buildings around Downtown DC and Navy Yard, and of the townhomes and short-term rentals common in Georgetown, Capitol Hill, Dupont Circle and Adams Morgan alike.",
          localSceneParagraphs: [
            "The practical issue in the District is access, not distance. A great deal of Washington's hotel and housing stock sits behind a front desk, a callbox or a building app — that is true of the newer buildings around Downtown DC and Navy Yard, and of the townhomes and short-term rentals common in Georgetown, Capitol Hill, Dupont Circle and Adams Morgan alike.",
            "So when you book, give us the full address, the unit or room number, and however entry actually works: desk check-in, entry code, key fob, or meeting someone in the lobby. That one detail is the difference between an entertainer arriving on time and an entertainer standing outside a locked door.",
            "Worth settling early: under [our terms](/terms), the customer is responsible for confirming that the venue permits the entertainment being booked. Hotels, apartment buildings, HOAs and short-term rental hosts each set their own guest-access and event rules, and we are not in a position to check them on your behalf. If you are unsure, ask before you book rather than after.",
            "If your event sits just outside the District, ask us — coverage there is confirmed on a per-request basis.",
          ],
          servicesSubheading:
            "These are the event formats Velvet Girl Entertainment offers; Washington, DC availability is confirmed based on your date and booking details.",
        },
        faqs: [
          {
            question: "How do I book an exotic dancer in Washington, DC?",
            answer:
              "Send your date, location, group size and what you have in mind — through the booking form, or by calling or texting (843) 938-7377. A booking specialist confirms which entertainers are available and itemises the fees in writing. The booking is confirmed once you pay a non-refundable deposit and accept our terms.",
          },
          {
            question: "How is availability confirmed?",
            answer:
              "Individually, for each request. We check entertainer availability against your specific date, location and event details, then confirm in writing what is possible before you pay anything. Nothing is described as booked until that written confirmation and your deposit are both in place.",
          },
          {
            question: "How far in advance should I book?",
            answer:
              "At least one to two weeks is the general recommendation, and more for weekend dates. For larger groups, custom themes or events with more complex logistics, two to four weeks gives you a better range of options. Shorter notice is sometimes workable — call or text and we will tell you honestly whether your date is possible.",
          },
          {
            question: "What is required to confirm a booking?",
            answer:
              "Three things: written confirmation of entertainer availability from us, your acceptance of our terms, and a non-refundable deposit. All customers must also be 18 or older and provide valid government-issued photo ID before the booking is confirmed. Until the deposit is received, nothing is held.",
          },
          {
            question: "Is a deposit required?",
            answer:
              "Yes. A non-refundable deposit secures the booking and the confirmed entertainer. The amount depends on the booking and is quoted to you before you pay, alongside every other fee. Online deposit payment is available for bookings made 24 or more hours ahead.",
          },
          {
            question: "When is the remaining balance due?",
            answer:
              "When the entertainer arrives, before the performance begins. All fees are itemised and sent to you in advance, so the balance is a figure you have already seen and agreed — nothing new is quoted on the night.",
          },
          {
            question: "Can I book an entertainer for a hotel or private residence?",
            answer:
              "Yes. Private-event bookings may be arranged at hotels, residences and other permitted venues, subject to availability and the venue's own requirements. Give us the full address, the room or unit number, and how entry works, including any front-desk check-in, entry code or key fob.",
          },
          {
            question: "Who is responsible for venue permission?",
            answer:
              "You are. Under our terms, the customer is solely responsible for confirming that the venue permits the entertainment being booked — hotel policy, apartment and HOA rules, short-term rental host rules, and local ordinances all count. We are not able to verify those on your behalf, so check before you book.",
          },
          {
            question: "Do travel costs apply?",
            answer:
              "They may. Additional travel expenses may apply for locations outside the radius specified in our terms. Any applicable travel cost is itemised in your booking confirmation before you pay anything, so it is settled as part of the quote rather than added later.",
          },
          {
            question: "Does everyone need to be 18 or older, and what ID is required?",
            answer:
              "Yes — every customer, attendee and entertainer must be 18 or older, with no exceptions, and minors are strictly prohibited at any event. Valid, unexpired government-issued photo ID is required from customers before a booking is confirmed, and entertainers carry ID at every event. As host, you are responsible for the ages of everyone present.",
          },
          {
            question: "Can I make a same-day request?",
            answer:
              "Yes, last-minute requests are welcome, though shorter notice narrows what is available. Online deposit payment is only available for bookings made 24 or more hours ahead. For anything sooner, submit the form and then call or text (843) 938-7377 directly.",
          },
          {
            question: "What happens if an entertainer becomes unavailable, and how do cancellations work?",
            answer:
              "If a confirmed entertainer can no longer attend, the booking team works to offer a comparable replacement. If we or the entertainer cancel for reasons unrelated to anything on your side, you receive a full refund including the deposit. Customer cancellations must be in writing: at least two days out, nothing further is owed beyond the deposit; inside two days, a fee of 50% of the total booking applies. Rescheduling requires two days' notice and is subject to availability and a rescheduling fee.",
          },
        ],
      },
    ],
  },
];

export const stateGroups: StateGroup[] = raw.map(({ state, stateSlug, cities }) => ({
  slug: stateSlug,
  name: state,
  cities: cities.map(({ name, slug, areas, content, faqs }) => ({
    slug,
    name,
    stateSlug,
    stateName: state,
    popularAreas: areas,
    content,
    faqs,
  })),
}));

export const cities: City[] = stateGroups.flatMap((g) => g.cities);

// All 8 currently live cities are "featured" — there aren't enough yet to
// need a curated subset like there will be once more markets go live.
export const featuredCitySlugs = cities.map((c) => c.slug);

export function getCityBySlug(
  stateSlug: string,
  citySlug: string
): City | undefined {
  return cities.find(
    (c) => c.stateSlug === stateSlug && c.slug === citySlug
  );
}
