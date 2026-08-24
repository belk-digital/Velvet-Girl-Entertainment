import type { Faq } from "@/data/faqs";

export interface ServiceContent {
  intro: string;
  whyChooseUs: string;
  whatToExpect: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  whatsIncluded: string[];
  bookingSteps: string[];
  content: ServiceContent;
  faqs: Faq[];
}

export const services: Service[] = [
  {
    slug: "bachelor-parties",
    title: "Bachelor Parties",
    shortDescription:
      "Create a memorable send-off with professional entertainers for the groom's last night out.",
    heroDescription:
      "Professional entertainers booked for bachelor parties at hotels, vacation rentals, private locations, party buses, and yachts. Real, unedited photos of every performer, and a deposit that confirms your date.",
    whatsIncluded: [
      "Professional entertainers",
      "Flexible scheduling",
      "Private locations",
      "Hotel visits",
      "Vacation rentals",
      "Party buses",
      "Yachts",
      "VIP events",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
    content: {
      intro:
        "Bachelor party entertainment means booking professional entertainers to come to your event rather than moving the group to a venue. The party stays where you have planned it — a hotel suite, a rented house, a party bus, a boat — and the entertainment comes to you. Velvet Girl Entertainment handles the booking side of that arrangement. You choose your city and your party theme, review the performers available in that market, and tell us about your event. A booking specialist confirms availability, walks through pricing, and secures the date and the specific entertainer against a deposit. We work with whoever is organizing the party — the best man, the maid of honor, or the groom himself. Every service we offer is available in each of our active cities, so the process described on this page applies wherever the party is being held. Planning is a separate exercise from booking. If the date, city, and venue are not settled yet, our step-by-step bachelor party checklist covers the wider weekend, and our Charleston bachelor party guide works through one market in detail.",
      whyChooseUs:
        "Real, unedited photos of every performer. No stock photos and no bait-and-switch. Current performers are published on each city page and across our full roster. We have explained the reasoning behind this policy in more detail here. A deposit secures your booking and your confirmed entertainer. The remaining balance is handled with your booking specialist ahead of the event. The booking process is simple, transparent, and discreet. Submit your inquiry online, by phone, or by text, and a booking specialist takes it from there.",
      whatToExpect:
        "You choose your city and party theme, review real photos of available performers, and submit your event details — date, location, guest count, and any theme preferences. A booking specialist follows up to confirm availability and walk through pricing. A deposit then secures your booking and your confirmed entertainer, and the remaining balance is handled with your booking specialist ahead of the event. If plans change, contact your booking specialist as soon as possible. Timing, location, and headcount can often be adjusted with more than twenty-four hours' notice. For same-day changes, call or text directly.",
    },
    faqs: [
      {
        question: "How do I book bachelor party entertainment?",
        answer:
          "Choose your city and party theme, review the performers available on that city's roster, and submit your event details online, by phone at (843) 938-7377, or by text. A booking specialist confirms availability and walks through pricing. A deposit then secures your booking and your confirmed entertainer.",
      },
      {
        question: "How much does bachelor party entertainment cost?",
        answer:
          "Contact the booking team with your date, city, and group details for a personalized quote. Your booking specialist walks through pricing once availability is confirmed. Every package is fully customizable, and theme, costume, dancer count, and upgrades are selected through the package builder.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend at least one to two weeks in advance for the best availability, especially on weekends. Same-day requests are welcome — call or text directly rather than booking online.",
      },
      {
        question: "Can we book a bachelor party at a hotel, vacation rental, or short-term rental home?",
        answer:
          "Yes, hotels, vacation rentals, and short-term rental homes are bachelor party booking options. Confirm that the property allows guests.",
      },
      {
        question: "Do you book party bus and multi-stop bachelor parties?",
        answer:
          "We book entertainers for party bus routes and multi-stop bachelor party itineraries. Share your route and timing with us so performer arrival can be planned around your stops.",
      },
      {
        question: "Can I request a specific performer?",
        answer:
          "Yes. Review performer profiles on your city page and request specific dancers when you inquire. Requests are subject to availability on your date. Your deposit confirms your booking and your entertainer.",
      },
      {
        question: "What cities does Velvet Girl Entertainment serve?",
        answer:
          "We currently book in: Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis. New markets are onboarded regularly.",
      },
      {
        question: "What if our plans change last minute?",
        answer:
          "Contact your booking specialist as soon as possible. Timing, location, and headcount can often be adjusted with more than twenty-four hours' notice. For same-day changes, call or text directly.",
      },
      {
        question: "What information do you need to make a booking?",
        answer:
          "Submit your inquiry online, by phone, or by text with four details ready: your event date, location, guest count, and theme preferences.",
      },
    ],
  },
  {
    slug: "birthday-parties",
    title: "Birthday Parties",
    shortDescription:
      "Turn a birthday celebration into an unforgettable night with entertainment tailored to the occasion.",
    heroDescription:
      "Celebrate another year with professional entertainers available for private birthday bookings across our active markets.",
    whatsIncluded: [
      "Female entertainers",
      "Private residences",
      "Hotel suites and condos",
      "Vacation rentals",
      "Themes and costumes",
      "Custom music and entrance",
      "Flexible performer count",
      "Surprise arrival timing",
    ],
    bookingSteps: [
      "Choose city",
      "Choose performers",
      "Confirm booking",
      "Enjoy the night",
    ],
    content: {
      intro:
        "Some birthdays are a bar tab and a group chat. Others are worth building an actual event around. Adult birthday party entertainment means booking one or more entertainers to perform at a private celebration instead of taking everyone out to a venue. The party stays where you are and the entertainment comes to you. Velvet Girl Entertainment books female exotic dancers for private adult birthdays — 21sts, 30ths, 40ths, surprises put together by a partner or a group of friends, and smaller nights that happen in a living room with eight people and a good speaker. You give us the date, the city, the venue, and roughly what you're picturing. A booking specialist checks availability and comes back with options. Everything on this page is 18+.",
      whyChooseUs:
        "One concern people have when booking adult entertainment is that the woman who turns up isn't the woman in the photo. Every performer photo on this site is real and unedited — no stock images, no filters. Birthdays also carry something a standard group booking doesn't. There's one person the night is built around, and often a surprise that has to land at a particular moment. Our booking specialists ask about that early — who the birthday is for, what they'd actually enjoy, how much they already know, and when you want the entertainer through the door. Our performers are selected for private bookings based on availability and the details of your event, bookings are confirmed in writing, and arrival and departure are handled with discretion.",
      whatToExpect:
        "Once your details are in, a booking specialist checks availability for your date and area, then comes back with performers who suit the night you've described. If it's a surprise, say so in the first message. Surprise birthdays require specific arrival timing, because the arrival is usually planned around a specific moment: after dinner, before the cake, once a particular person has left. Give us that moment and a window either side of it. A contact number for someone other than the birthday person helps too, so timing can be confirmed on the day without giving it away. A deposit confirms the date and the specific performers. The balance is settled with your specialist ahead of the event.",
    },
    faqs: [
      {
        question: "What is adult birthday party entertainment?",
        answer:
          "It's booking one or more adult entertainers to perform at a private birthday celebration instead of taking the group out to a venue. For Velvet Girl Entertainment that means female exotic dancers, booked at a home, hotel suite, or rental, and matched to your date and area. All bookings are 18+.",
      },
      {
        question: "Can I book entertainment for a surprise birthday party?",
        answer:
          "Yes. Tell your booking specialist it's a surprise in your first message, then give them the moment you want the arrival to land on — after dinner, before the cake, once a particular guest has gone. A contact number for someone other than the birthday person helps, so timing can be confirmed on the day without giving it away.",
      },
      {
        question: "Where can the entertainer perform?",
        answer:
          "Private homes, hotel suites and condos, and vacation rentals are all standard. Hotels and condo buildings need the room number and the guest access process. Vacation rentals need your check-in time confirmed and the listing's quiet-hours rules checked. Private homes just need parking and entry instructions. Anywhere else, describe it and we'll tell you whether it works.",
      },
      {
        question: "How much does birthday party entertainment cost?",
        answer:
          "There's no flat rate. Cost depends on your city, your date, how many performers you book, how long the booking runs, and any upgrades. Your specialist quotes the full figure before you pay anything. A deposit secures the date and your confirmed performers, and the balance is settled ahead of the event.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 1 to 2 weeks in advance for the best availability, especially for weekend dates. Destination bookings, custom themes, and larger group packages need closer to two to four weeks. Booking earlier gives you more choice of available performers and costumes.",
      },
      {
        question: "Can I request a specific performer?",
        answer:
          "Yes. Browse the roster and name the performers you want when you send your request. Requests are subject to availability on your date, which the booking team confirms before anything is finalized. The \"Available Tonight\" badge reflects general short-notice availability rather than a confirmed open slot.",
      },
      {
        question: "Is there a minimum group size?",
        answer:
          "No. Birthday bookings run from a few people in a living room to large group parties. Rather than setting a minimum, we'll suggest a performer count based on your headcount and your venue.",
      },
      {
        question: "Can I choose a theme or costume?",
        answer:
          "Yes. Pick a theme and costume during booking, or use the package builder to set them yourself. Availability varies by performer and market, so name your preferred theme early rather than close to the date — particularly if it's tied to a specific character or look.",
      },
      {
        question: "Can I make a last-minute birthday booking?",
        answer:
          "Sometimes, depending on who's free in your area that night. Online deposit payment is only available for bookings made 24 or more hours ahead. For same-day requests, submit the form and then call or text (843) 938-7377 directly so a specialist can look at it in real time.",
      },
      {
        question: "What information do you need from me?",
        answer:
          "Five things: your city, the date and rough timing, the venue type and address, your guest count, and whether it's a surprise. Anything you already know about themes, costumes, or specific performers speeds things up, but a specialist can work through those with you.",
      },
      {
        question: "What happens if my plans change or a performer becomes unavailable?",
        answer:
          "Contact your specialist as soon as you know. If your timing shifts on the day of the event, call or text your booking specialist directly to check availability. Cancellation terms depend on how close to the event you cancel, and your specialist goes through those at the point of booking. If a confirmed performer can't make your date, our booking team works quickly to offer a comparable replacement.",
      },
    ],
  },
  {
    slug: "private-events",
    title: "Private Events",
    shortDescription:
      "Professional entertainers booked for private celebrations that don't fit a standard category — discreetly coordinated, with real photos of everyone on the roster.",
    heroDescription:
      "Professional entertainers booked for private celebrations that don't fit a standard category — discreetly coordinated, with real photos of everyone on the roster.",
    whatsIncluded: [
      "Verified professional entertainers",
      "Real, unedited performer photos to choose from",
      "Flexible performer count for your group size",
      "Private residence bookings",
      "Hotel suite bookings",
      "Vacation rental and rented venue bookings",
      "Flexible scheduling, daytime through late night",
      "Discreet communication and arrival coordination",
      "A dedicated booking specialist from inquiry to event night",
      "Itemised fees confirmed before you commit",
    ],
    bookingSteps: [
      "Choose city",
      "Select performers",
      "Confirm booking",
      "Enjoy your event",
    ],
    content: {
      intro:
        "Private event entertainment covers any adult celebration that doesn't fit a named booking category: a divorce party, a promotion, a reunion, a homecoming, an anniversary, or a group of friends who want a night that feels different from the usual. Velvet Girl Entertainment books professional entertainers for private residences, hotel suites, vacation rentals and rented venues, so the setting can suit the occasion rather than the other way round. If your event does fit a category, there's a page for it — bachelor parties, birthday parties and girls' night out are all handled separately. Private Events is for everything else, and for occasions that sit somewhere between two of them.",
      whyChooseUs:
        "Private events span too wide a range for a fixed package to be the right starting point. Booking begins with a conversation instead: your specialist asks about the setting, the group size and the tone you're after, then recommends a performer count and timing that fits the event you're actually planning. Two things distinguish the roster. Every performer is verified before joining it, and every photo published on the site is real and unedited. No stock imagery, no bait-and-switch — you know who you're booking before you commit. Discretion isn't an add-on. How the booking team communicates, how performers arrive and depart, and how bookings are confirmed are all built around it from your first message.",
      whatToExpect:
        "Tell us the occasion, the city, the date and roughly how many guests you're expecting. That's enough for a booking specialist to check availability and come back with a quote, along with a recommendation on performer count and timing. Pricing depends on your city, date, performer count and how long you'd like entertainers on site, which is why quotes are prepared per event rather than published as a flat rate. All fees are itemised and confirmed before your booking is finalised, including any travel costs for events well outside our home market. A non-refundable deposit confirms the booking and secures your entertainers; the balance is settled before the performance begins. Two practical notes for private settings. Because private residences, rentals and hotel suites all differ on access, tell your specialist the venue type early so arrival can be planned around it. And as the host, you're responsible for confirming that entertainment of this kind is permitted at your venue — worth a quick check with a building manager or rental host before you book. Plans shift, particularly on private events where the guest list is still forming. Your specialist stays reachable between confirmation and the event date to adjust details as things settle.",
    },
    faqs: [
      {
        question: "What kinds of events qualify as a private event booking?",
        answer:
          "Any adult celebration that doesn't fit one of our named categories — divorce parties, promotions, reunions, homecomings, anniversaries, going-away parties, and unstructured group nights. If your event does fit a category, such as a bachelor party, birthday or girls' night out, that service page will serve you better. Not sure which applies? Submit a Private Events inquiry and a booking specialist will point you to the right one.",
      },
      {
        question: "Can I book entertainers for a private residence?",
        answer:
          "Yes. Private residences are among the most common settings for these bookings. Share the city, the date and your expected guest count when you inquire, and your specialist will confirm availability and coordinate arrival details. As the host, you're responsible for confirming that this type of entertainment is permitted at your address.",
      },
      {
        question: "Do you book hotel suites and vacation rentals?",
        answer:
          "Yes. Hotel suites, vacation rentals and rented venues are all supported alongside private residences. Access and arrival differ at each, so mention the venue type in your inquiry — for hotels, have the room number and any guest access details ready.",
      },
      {
        question: "Which cities do you cover for private events?",
        answer:
          "We book in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach and Indianapolis, and we onboard new markets regularly. Every service, including Private Events, is available in every active city.",
      },
      {
        question: "Can you cover a city that isn't on the list?",
        answer:
          "Often, yes. We regularly send performers to events beyond our primary cities for destination celebrations and group weekends. Send your dates, location and headcount and we'll confirm availability and travel logistics. Allow two to four weeks for destination bookings, and note that travel costs may apply for events well outside our home market — these are itemised in your booking confirmation.",
      },
      {
        question: "How many entertainers can I book for one private event?",
        answer:
          "Performer count is flexible and set by your group size and the format you want. Tell your specialist your guest count and they'll recommend a number. You can also set the dancer count yourself, along with theme, costume and upgrades, through the package builder.",
      },
      {
        question: "How do I choose who performs, and are the photos real?",
        answer:
          "Browse performer profiles on your city page and request specific entertainers, subject to availability on your date. Every photo published on the site is real and unedited — no stock images. What you see is who shows up, and your confirmed performers are named in writing before the event.",
      },
      {
        question: "How much does private event entertainment cost?",
        answer:
          "There's no flat rate. Pricing depends on your city, date, performer count, booking length and any upgrades you add, so quotes are prepared per event. Travel costs may apply for events well outside our home market. Every fee is itemised and communicated to you before your booking is confirmed — nothing is added afterwards.",
      },
      {
        question: "Is a deposit required, and when is the balance due?",
        answer:
          "Yes. A booking is confirmed once we receive a deposit, which is non-refundable, and availability is confirmed to you in writing. The balance is settled before the performance begins. Online deposit payment is available for bookings made 24 or more hours ahead; inside that window, submit the form and then call or text the booking line directly.",
      },
      {
        question: "How far in advance should I book a private event?",
        answer:
          "One to two weeks is the general recommendation, and longer for weekend dates, when availability moves fastest. Same-day and last-minute requests are still welcome — call or text (843) 938-7377 rather than booking online. Destination bookings outside our active cities need two to four weeks so travel can be arranged.",
      },
      {
        question: "How private is the booking process?",
        answer:
          "Discretion is built into how the booking team communicates and how entertainers arrive and depart. Velvet Girl Entertainment does not sell your personal information. Your details are used to coordinate your booking and shared only where fulfilling it requires — with the entertainers assigned to your event, and with the service providers who handle things like payment processing. The Privacy Policy sets out the full picture.",
      },
      {
        question: "What if I need to cancel, reschedule, or my entertainer becomes unavailable?",
        answer:
          "Tell your specialist as soon as you know. Cancellations are made in writing: cancel at least two days before the event and nothing is owed beyond the non-refundable deposit; inside two days, a cancellation fee of 50% of the total booking applies. Rescheduling also needs at least two days' written notice and depends on availability. In the rare case a confirmed entertainer becomes unavailable, the booking team moves quickly to offer a comparable replacement so your event isn't affected. Full terms are on the Terms of Service page.",
      },
    ],
  },
  {
    slug: "vip-experiences",
    title: "VIP Experiences",
    shortDescription:
      "Velvet Girl Entertainment's top tier of VIP entertainment experiences, with a dedicated concierge from first call to showtime.",
    heroDescription:
      "Velvet Girl Entertainment's top tier of VIP entertainment experiences, with a dedicated concierge from first call to showtime.",
    whatsIncluded: [
      "Top-Tier Performers",
      "Dedicated Booking Concierge",
      "Private Location Entertainment",
      "Hotel Suite Entertainment",
      "Vacation Rental Entertainment",
      "Party Bus Entertainment",
      "Yacht Party Entertainment",
      "Custom VIP Add-Ons",
    ],
    bookingSteps: [
      "Choose Your City",
      "Select Performers",
      "Confirm Your Booking",
      "Enjoy Your Event",
    ],
    content: {
      intro:
        "VIP Experiences is Velvet Girl Entertainment's top booking tier, built for private event entertainment that needs real coordination rather than a confirmation email. A dedicated booking concierge takes the event from the first phone call through the last hour of the night, pairing available performers with the venue you've chosen — a luxury hotel suite, a private estate, a vacation rental, a chartered yacht, or a party bus. Multi-performer lineups, custom VIP add-ons, and venue-specific timing or access requirements are handled as part of the service rather than treated as exceptions. Destination bookings may also be available outside Velvet Girl Entertainment's regular city markets, subject to performer availability and travel logistics.",
      whyChooseUs:
        "A standard booking with Velvet Girl Entertainment is handled by the general booking team. VIP Experiences adds dedicated entertainment coordination: one point of contact who knows your date, guest count, venue, performer preferences, and timing. That coordination can include custom add-ons, multi-performer lineups, venue access requirements, and day-of timing details. The goal is simple: you make the decisions, while the booking team handles the entertainment coordination around them.",
      whatToExpect:
        "Every VIP Experience begins with a conversation about the event: the venue, access rules, guest count, timing, performer preferences, and any custom requests. From there, the booking team confirms performer availability and pricing and coordinates the entertainment around the event schedule. The proposal is built around the specific booking rather than forcing every event into the same package. If something changes before or during the event, the client has a direct point of contact for booking coordination.",
    },
    faqs: [
      {
        question: "What makes VIP Experiences different from a standard booking?",
        answer:
          "A standard booking is handled by Velvet Girl Entertainment's general booking team. VIP Experiences assigns a dedicated booking concierge who stays with the event from first inquiry through the night itself, and covers coordination that standard bookings don't: multi-performer lineups, custom add-ons, and venue-specific access or timing requirements. The proposal is built around your event rather than selected from a fixed package.",
      },
      {
        question: "Do I still have to organize everything myself?",
        answer:
          "No. After the first conversation, the booking team confirms performers, works out arrival timing against your schedule, and handles the venue and day-of details, then reports back rather than asking you to chase anyone. You make the decisions. If something changes before or during the event, you have one point of contact for booking coordination instead of calling around.",
      },
      {
        question: "Is a VIP booking private or discreet?",
        answer:
          "Yes. Discretion is part of how Velvet Girl Entertainment operates, from how the booking team communicates with you through to how performers arrive at and leave your venue. Personal information isn't shared beyond what's needed to fulfil the booking. For hotels, private residences, and rentals, arrival can be planned around the venue's layout and access points.",
      },
      {
        question: "Can you work with my hotel, rental, or venue's rules?",
        answer:
          "Yes. Hotel suites, private residences, vacation rentals, yachts, and party buses each come with their own access points, timing windows, and house rules, and those are covered in the first conversation rather than discovered on the night. Share what your venue requires and the booking team plans arrival, timing, and departure around it.",
      },
      {
        question: "How many guests can a VIP Experience accommodate?",
        answer:
          "There's no fixed group size. Because the proposal is built around your event rather than a set package, the lineup is sized to the booking: a single performer for a smaller private celebration, or a multi-performer lineup for a larger party or corporate event. Give the booking team your headcount and venue and they'll recommend a lineup that suits both.",
      },
      {
        question: "How far in advance should I book a VIP Experience?",
        answer:
          "Two to three weeks ahead where possible. VIP bookings involve custom coordination and the performers most in demand, so earlier requests get more options. That's a guideline rather than a cutoff — call or text (843) 938-7377 with your date and the booking team will tell you what's realistic. Online deposit payment is available for bookings made 24 or more hours in advance.",
      },
      {
        question: "Are VIP Experiences available for multi-day events?",
        answer:
          "Yes. Multi-day bachelor and bachelorette weekends, destination celebrations, and events running across more than one night suit the VIP tier, because a single point of contact holds the whole schedule instead of handing off between nights. Different themes, venues, and lineups can be planned for each day and confirmed as one booking.",
      },
      {
        question: "Can I request something custom?",
        answer:
          "Yes. Specific performers can be requested subject to availability on your date, and bookings can be customized by theme, costume, performer count, and upgrades. Timing built around a dinner, a game, or a move between venues is a coordination question rather than an obstacle. Raise it during the first conversation — if something isn't workable, the booking team will say so.",
      },
      {
        question: "Can you book a VIP Experience outside your listed cities?",
        answer:
          "Often, yes. Velvet Girl Entertainment has active rosters in its listed cities and regularly arranges performers for events elsewhere, including destination bachelor parties and beach-house weekends. Share your dates, headcount, and location, and the booking team will confirm availability and travel logistics before anything is locked in. Destination events benefit most from early inquiries.",
      },
      {
        question: "Are the performer photos real?",
        answer:
          "Yes. Velvet Girl Entertainment posts real, unedited photos of every performer on the roster, with no stock images and no bait-and-switch. In the rare case a confirmed performer becomes unavailable, the booking team works to offer a comparable replacement so the event isn't affected, and you'll be told before the date rather than on the night.",
      },
      {
        question: "How does payment and confirmation work?",
        answer:
          "A deposit secures your booking and your confirmed performers, and the remaining balance is handled with your booking specialist ahead of the event. Online deposit payment is available for bookings made 24 or more hours in advance; for shorter notice, submit the form and then call or text. Cancellation terms depend on how close to the event you cancel, and your booking specialist walks through them when you book.",
      },
      {
        question: "What are the boundaries during a VIP event?",
        answer:
          "Every booking is professional entertainment, and performers work to the scope agreed in advance. Velvet Girl Entertainment is an 18+ service, and guests are expected to respect the agreed boundaries — the same standards apply at a private residence or on a boat as anywhere else. Expectations are set with both sides before the event so nothing needs renegotiating on the night.",
      },
    ],
  },
  {
    slug: "corporate-entertainment",
    title: "Corporate Entertainment",
    shortDescription:
      "Professional entertainers booked for corporate retreats, client events and private company celebrations, arranged through a booking process built for planners as well as hosts.",
    heroDescription:
      "Professional entertainers booked for corporate retreats, client events and private company celebrations, arranged through a booking process built for planners as well as hosts.",
    whatsIncluded: [
      "Verified entertainers",
      "Real, unedited photos",
      "Flexible scheduling",
      "Discreet booking process",
      "Hotel and venue visits",
      "Corporate retreat coordination",
      "NDA availability on request",
      "Custom event coordination",
    ],
    bookingSteps: [
      "Choose your city",
      "Select performers",
      "Confirm the booking",
      "Run your event",
    ],
    content: {
      intro:
        "Velvet Girl Entertainment specialises in adult entertainment bookings for private, adults-only corporate events. We are a booking agency: we represent a verified roster of independent professional exotic dancers, and we coordinate the booking from first enquiry through to arrival on the night. For corporate clients that covers retreats and off-sites, incentive trips, client appreciation evenings, executive and VIP gatherings, holiday parties, and after-hours celebrations that continue once the formal part of the evening has closed. A corporate booking carries expectations a private party doesn't. Colleagues are in the room, sometimes clients. Timing is tighter, the venue is often someone else's property, and the person organising it is frequently doing so for a host who won't be handling any of the details. The booking process is built around that. Performer selection, arrival window, venue access and the conduct rules that apply on site are all settled in advance and confirmed in writing.",
      whyChooseUs:
        "The booking team works with event planners and executive assistants as well as individual hosts. If you're coordinating on someone else's behalf, you can act as the primary point of contact for the booking, with company and event details handled according to the booking process and our Privacy Policy. Availability is confirmed in writing before a booking becomes firm. Every performer is verified before joining the roster, and the profiles you're selecting from use real, unedited photographs rather than stock imagery — which matters when you'll be accounting for the choice to colleagues. Specific performers can be requested subject to availability on your date, and if a confirmed performer becomes unavailable, the booking team works to offer a comparable replacement. The booking process also covers venue requirements, conduct rules and payment terms before the event. On a corporate booking those are usually the first questions asked, and it's better to have the answers in hand than to go looking for them mid-approval. Where a booking calls for confidentiality documentation, NDA availability can be requested when you arrange the booking, and the booking team can confirm what documentation is available for your specific event.",
      whatToExpect:
        "Providing the date, location, guest count and preferred timing helps the booking team check availability and recommend suitable options. A company name isn't required at the enquiry stage — a name and a callback number is enough to get an answer. A booking specialist responds with available performers for that date and the booking cost, which is confirmed before you commit. A booking is confirmed once the required non-refundable deposit is received and the Terms are accepted, with availability confirmed in writing. If confidentiality documentation is part of your requirement, raise it at this stage rather than after confirmation. Arrival timing, venue access and the on-site point of contact are then coordinated in advance — often the planner rather than the host. The remaining balance is due on the entertainer's arrival, before the performance begins. One item is worth settling early, because it is the most common reason a corporate booking runs into difficulty late. Before booking, confirm that the venue permits adult entertainment and that the planned performance is permitted under the applicable local requirements. Hotels, resorts, event spaces and rental properties each set their own policies, and local ordinances vary on what a performance may involve. Under our Terms of Service, that verification is the customer's responsibility.",
    },
    faqs: [
      {
        question: "What does Velvet Girl Entertainment provide for corporate events?",
        answer:
          "Velvet Girl Entertainment books professional exotic dancers for private, adults-only corporate events. We operate as a booking agency: we represent a verified roster of independent entertainers and coordinate scheduling, venue logistics, confirmation and any documentation the booking requires.",
      },
      {
        question: "What kinds of corporate events is this suitable for?",
        answer:
          "Private, adults-only gatherings where every attendee knows in advance what has been arranged. In practice that means corporate retreats and off-sites, incentive trips, client appreciation evenings, executive and VIP gatherings, holiday parties, and after-hours celebrations following a formal event. It is not suitable for a conference session, a trade show floor, a company-wide function with mandatory attendance, or any event where a minor could be present.",
      },
      {
        question: "Is adult entertainment appropriate for a corporate event?",
        answer:
          "It depends on the event, and the decision sits with the organiser. Before booking, it's worth confirming that the event is genuinely suitable for the intended attendees, that those attending know what is planned, that participation is voluntary where applicable, that the setting is private and appropriate, and that the venue permits the entertainment. In practice this tends to work best as a separate after-hours segment rather than part of a main function. If you're unsure whether your event fits, raise it when you enquire.",
      },
      {
        question: "Can an event planner or executive assistant book on behalf of a company?",
        answer:
          "Yes. The booking team works with event planners and executive assistants as well as individual hosts, and you can act as the primary point of contact throughout. Company and event details are handled according to the booking process and our Privacy Policy. If you're working to an internal approval sequence, say so at the enquiry stage so availability can be confirmed in a form you can take back to the approver.",
      },
      {
        question: "Can a corporate booking be arranged under an NDA?",
        answer:
          "NDA availability can be requested when arranging a corporate booking, and the booking team can confirm what documentation is available for your specific event. Raise it at the enquiry stage rather than after a booking is confirmed, so it forms part of the confirmation rather than a separate step.",
      },
      {
        question: "How discreet is the booking process for a company event?",
        answer:
          "Details you provide are used to coordinate the booking and are shared only with those who need them to deliver it — the entertainer assigned to your event, and service providers such as our payment processor. Personal information is never sold and is not used for marketing without express consent. Government-issued ID collected for age verification is treated as sensitive, access-restricted, and destroyed once no longer needed. Full detail is in our Privacy Policy.",
      },
      {
        question: "Can entertainers come to a hotel, resort or private venue?",
        answer:
          "Yes. Hotel suites, resorts, private event spaces and rented properties are all standard, with arrival and venue access coordinated in advance. Two things to settle first: confirm the venue permits adult entertainment, since properties set their own policies; and tell us about anything affecting access, such as a keyed elevator, a security desk or a gated entrance.",
      },
      {
        question: "Do you travel to corporate retreats outside your listed cities?",
        answer:
          "Often, yes. We hold active performer rosters in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach and Indianapolis, and travel for events elsewhere can frequently be arranged — which suits retreats and incentive trips held at resorts and rented properties away from a major metro. Send the dates, location and headcount to have it confirmed. Additional travel costs may apply and are disclosed in your booking confirmation.",
      },
      {
        question: "How far in advance should we book corporate entertainment?",
        answer:
          "One to two weeks covers most bookings in our active cities, and weekend dates go first. Allow two to three weeks where the event involves multiple performers or custom coordination, and two to four weeks for a retreat or a location outside our active markets, since travel is arranged around performer availability. For shorter-notice requests, contact the booking team directly by phone or text to check current availability.",
      },
      {
        question: "How does payment work?",
        answer:
          "A non-refundable deposit confirms the booking, and the remaining balance is due on the entertainer's arrival, before the performance begins. The booking cost is confirmed before you commit. Online deposit payment is available for bookings made at least 24 hours ahead; for anything shorter, submit the form and then call or text directly. Travel costs for locations outside our standard radius are disclosed in the confirmation.",
      },
      {
        question: "What rules apply to performers and guests during a booking?",
        answer:
          "A minimum six-foot distance is maintained between the entertainer and everyone present, and there is no physical contact at any point. All attendees must be 18 or over, and performances must comply with state and local law at the venue, which in some jurisdictions sets minimum attire requirements. The entertainer may end a performance and leave if those conditions are not met. Full detail is in our Terms of Service.",
      },
      {
        question: "What happens if we need to cancel or move the date?",
        answer:
          "Cancellations must be submitted in writing. Cancelled at least two days before the event, nothing further is owed beyond the non-refundable deposit; cancelled inside two days, a fee of 50% of the total booking applies. Rescheduling is subject to performer availability and a rescheduling fee, requested in writing at least two days before the original date. If a confirmed performer becomes unavailable, the booking team works to offer a comparable replacement.",
      },
    ],
  },
  {
    slug: "couples-entertainment",
    title: "Couples Entertainment",
    shortDescription:
      "Verified professional entertainers, booked privately for two, at your home, hotel suite, or vacation rental across our eight active cities.",
    heroDescription:
      "Verified professional entertainers, booked privately for two, at your home, hotel suite, or vacation rental across our eight active cities.",
    whatsIncluded: [
      "Verified professional entertainers",
      "Real, unedited performer photos",
      "Private residence bookings",
      "Hotel suite and hotel room bookings",
      "Vacation rental bookings",
      "Custom celebration themes & upgrades",
      "Itemized costs confirmed in writing",
      "Discreet booking process & arrival",
    ],
    bookingSteps: [
      "Choose your city",
      "Select performer",
      "Confirm booking",
      "Your evening",
    ],
    content: {
      intro:
        "Couples entertainment is a private booking made by two people rather than a group. You choose the setting, the date, and the entertainer you would like to request, and the booking is arranged around those details. It suits anniversaries, birthdays, Valentine's Day, and other private celebrations, and it works equally well when there is no particular occasion attached. What separates it from our group services is scale and coordination: the booking is built for two, and the conversation with your specialist covers your preferences directly rather than headcount and logistics. If you are planning something for a larger group instead, our private group events service is the better fit.",
      whyChooseUs:
        "Performer photos are real and unedited. The photos on our roster are the entertainers themselves, not stock imagery. You can browse the roster on your city page and request the entertainer you would like, subject to her availability on your date. If a confirmed entertainer becomes unavailable, our booking team will work to offer a comparable replacement. Entertainers are verified before joining our roster. Verification is completed before an entertainer is listed, not after a booking. Discretion is built into how we operate. Your information is used to coordinate your booking and is not sold. It is shared only where fulfilling the booking requires it, such as with your assigned entertainer, or where the law requires it. We do not use your details for marketing without your prior consent. Discretion also extends to how our booking team communicates and to how entertainers arrive and depart. Full detail is in our Privacy Policy. Costs are agreed before you commit. Fees are itemized and confirmed in writing before a booking is confirmed, so the cost and the scope are settled in advance rather than on the night.",
      whatToExpect:
        "When you inquire, have your city, date, venue, and a rough idea of what you are celebrating ready. If you already know which entertainer you would like to request, or which theme or upgrades you want, mention those too. A booking specialist follows up within a few hours to go over availability, pricing, and any specific requests. Our booking concierge is reachable 24/7 by phone or text. Pricing is quoted per booking rather than published, because it depends on the details: your city and venue, your date, the entertainer you request, dancer count, and any theme or upgrade options you add. Travel expenses may apply for locations outside a thirty-mile radius of Charleston, South Carolina, and any such fees are disclosed in your booking confirmation. Fees are itemized before anything is confirmed. A non-refundable deposit confirms the booking and, together with your acceptance of our Terms of Service, is what secures the date. The remaining balance is due on your entertainer's arrival, before the performance begins. Online deposit payment is available for bookings made at least 24 hours in advance; for anything closer, submit the inquiry and then call or text. All bookings are subject to our published eligibility, safety, and venue requirements, which are set out in our Terms of Service and summarized in the FAQ below.",
    },
    faqs: [
      {
        question: "What is couples entertainment?",
        answer:
          "It is a private entertainment booking made by two people rather than a group. A verified professional entertainer is booked to your home, a hotel suite, or a vacation rental, and the booking is arranged around the date, setting, and preferences you provide when you inquire.",
      },
      {
        question: "Is couples entertainment private?",
        answer:
          "Yes. The booking is arranged for the two of you. Your information is used to coordinate it and is not sold, and it is shared only where fulfilling the booking requires it, such as with your assigned entertainer, or where the law requires it. We do not use your details for marketing without your prior consent. Full detail is in our Privacy Policy.",
      },
      {
        question: "Can couples entertainment be booked at a hotel?",
        answer:
          "Yes. Hotel suites and hotel rooms are supported settings. Check your hotel's policy before you confirm, since responsibility for making sure the venue permits the booking sits with the customer.",
      },
      {
        question: "Can couples entertainment be booked at home?",
        answer:
          "Yes. Private residences are a supported setting. If rules apply to your building or residential community, it is worth checking those before you confirm.",
      },
      {
        question: "Can couples entertainment be booked at a vacation rental?",
        answer:
          "Yes. Vacation rentals are a supported setting. Check the property's house rules first, for the same reason as a hotel booking.",
      },
      {
        question: "Can couples entertainment be customized for an anniversary or other occasion?",
        answer:
          "Yes. Theme, costume, dancer count, and upgrades such as extra time can be set when you build your package, and your booking specialist can help match them to what you are celebrating. Allow two to four weeks if you want a custom theme.",
      },
      {
        question: "How does pricing work?",
        answer:
          "Pricing is quoted per booking rather than published, because it depends on your city and venue, your date, the entertainer you request, dancer count, and any theme or upgrade options. Travel expenses may apply for locations outside a thirty-mile radius of Charleston, South Carolina. Fees are itemized and confirmed in writing before the booking is confirmed.",
      },
      {
        question: "Is a deposit required, and when is the balance due?",
        answer:
          "Yes. A non-refundable deposit, together with your acceptance of our Terms of Service, is what confirms the booking and secures your date. The remaining balance is due on your entertainer's arrival, before the performance begins. Online deposit payment is available for bookings made at least 24 hours in advance.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "One to two weeks works for most dates, and further ahead for weekends and holidays such as Valentine's Day. Allow two to four weeks for a custom theme or a booking that involves travel. Same-day inquiries are welcome by phone or text and remain subject to entertainer availability.",
      },
      {
        question: "Can we request a specific entertainer?",
        answer:
          "Yes. Browse the entertainers on your city page and name the one you would like. Requests are subject to her availability on your date. Photos on the roster are real and unedited. If a confirmed entertainer becomes unavailable, our booking team will work to offer a comparable replacement.",
      },
      {
        question: "Who can attend, and what requirements apply to the booking?",
        answer:
          "All attendees must be 18 or over. Customers and entertainers each provide valid government-issued photo ID before a booking is confirmed, which is how age and identity are verified. A six-foot distance is maintained between the entertainer and attendees, and this no-contact rule is a condition of performance. Local ordinances may set minimum attire requirements. Confirming that your venue may lawfully host the entertainment you have booked is the customer's responsibility. Full detail is in our Terms of Service.",
      },
      {
        question: "What if we need to cancel or reschedule?",
        answer:
          "Cancellations must be submitted in writing. If you cancel at least two days before the event, nothing further is owed beyond the non-refundable deposit. Cancelling less than two days ahead incurs a fee of 50% of the total booking fee. Rescheduling also needs at least two days' written notice, is subject to availability, and incurs a rescheduling fee.",
      },
    ],
  },
  {
    slug: "girls-night-out",
    title: "Girls Night Out",
    shortDescription:
      "Book a verified entertainer for your group's celebration — at a private residence, hotel suite, or rented space in the markets we serve.",
    heroDescription:
      "Book a verified entertainer for your group's celebration — at a private residence, hotel suite, or rented space in the markets we serve.",
    whatsIncluded: [
      "Verified professional entertainers",
      "Flexible group sizes",
      "Flexible scheduling",
      "Private residences",
      "Hotel suites",
      "Vacation rentals and rented spaces",
      "Custom celebration themes and costume selection",
      "Booking upgrades, including additional time and additional performers",
    ],
    bookingSteps: [
      "Choose City",
      "Select Performers",
      "Confirm Booking",
      "Enjoy Your Event",
    ],
    content: {
      intro:
        "Girls Night Out is a private booking. Instead of your group going out to a venue, a professional entertainer comes to the place you've already chosen — a friend's house, a hotel suite, or a vacation rental in one of the markets we book. Velvet Girl Entertainment arranges the entertainment itself: confirming which performers are available on your date, working through theme and costume with you, and coordinating arrival. You choose the location, the entertainer, and the format. We handle the rest of it. Group size is flexible, and so is the occasion. Birthdays, promotions, girls' weekends, bachelorette celebrations, or a night that doesn't need a reason all book the same way. What stays consistent is the format: your space, your group, and a verified entertainer booked for an agreed window of time. Every booking is strictly 18+.",
      whyChooseUs:
        "Girls' nights come together faster than most events we book, and the process is set up for that. You can reach a booking specialist by phone, text, or the online form, and availability is often confirmed within hours rather than over several days of email. Every performer on our roster is verified before they're listed, and every photo on the site is real and unedited. You can browse performers by market, request the ones your group wants, and the person you booked is the person who arrives. If a confirmed entertainer becomes unavailable, our team works to offer a comparable replacement so your plans hold. Discretion is built into the process rather than added on request — it covers how our team communicates with you, how your details are handled, and how entertainers arrive at and leave your event.",
      whatToExpect:
        "Start with three details: your market, your date, and roughly how many people will be there. A booking specialist confirms which entertainers are available, walks you through theme and costume options, and quotes the booking based on your group size, location, and how long you'd like the entertainment to run. A deposit confirms the booking and holds your entertainer for that date. Your specialist will also confirm the payment schedule and any remaining balance requirements before you commit — the full terms are set out in our Terms of Service. Between confirmation and the event, your specialist stays reachable if the details shift. A few conditions apply to every booking, and it's better to know them at the planning stage than on the night. All attendees must be 18 or over, and valid government-issued photo ID is required to verify age and identity before a booking is confirmed. Performances are no-contact, with a six-foot buffer maintained between the entertainer and guests at all times. And the venue you choose has to permit the entertainment you're booking — that part is the customer's responsibility, which is why it's worth telling your specialist the venue type early.",
    },
    faqs: [
      {
        question: "What is Girls Night Out entertainment?",
        answer:
          "It's a private booking in which a professional entertainer performs at a location your group chooses, rather than your group going out to a venue. Velvet Girl Entertainment books verified performers for girls' night celebrations at private residences, hotel suites, and rented spaces across the markets we serve. You select the location, the entertainer, and the theme; we confirm availability, coordinate the details, and manage the booking. All events are 18+ and no-contact.",
      },
      {
        question: "Can we book a girls' night on short notice?",
        answer:
          "Often, yes. Girls' night bookings tend to move faster than larger events, and we take same-day requests. One practical detail worth knowing: online deposit payment is only available for bookings made 24 or more hours in advance. If your event is sooner than that, submit the form and then call or text (843) 938-7377 so a specialist can confirm availability and arrange the deposit directly. Our booking concierge is reachable 24/7.",
      },
      {
        question: "Is this only for bachelorette parties?",
        answer:
          "No. Girls Night Out covers any group celebration — birthdays, promotions, girls' weekends, or no particular occasion. Bachelorette celebrations are a common reason people book it, and a single evening within a bachelorette weekend fits this service well. If your celebration spans multiple days or needs coordination across more than one night, VIP Experiences is the better fit — it includes a dedicated concierge who manages events of that scale.",
      },
      {
        question: "Where can the entertainment take place?",
        answer:
          "Private residences, hotel suites, and vacation rentals or other rented spaces are the standard settings. What matters more than the venue type is whether that specific venue permits the entertainment you're booking. Hotels, HOAs, and short-term rental hosts all set their own rules, and confirming that is the customer's responsibility under our Terms of Service. Tell your booking specialist the venue type early and they can flag anything worth checking before you commit to a date.",
      },
      {
        question: "How much does a girls' night booking cost?",
        answer:
          "Velvet Girl Entertainment quotes each booking individually rather than publishing fixed rates. Cost depends on your market, group size, the number of entertainers, how long the entertainment runs, the theme and costume you select, and any upgrades you add. Travel fees may apply for locations outside a 30-mile radius of Charleston, South Carolina. Your booking specialist provides a quote before anything is confirmed, and a non-refundable deposit secures the date once you accept it.",
      },
      {
        question: "Can we choose the theme, costume, and number of entertainers?",
        answer:
          "Yes — that's most of what the booking conversation covers. You select a theme and costume, set how many entertainers you'd like, and add upgrades such as extra time, additional dances, or party games. You can build the booking yourself through our Packages page, or describe what you're planning to a specialist and let them put options in front of you.",
      },
      {
        question: "Can we request specific entertainers?",
        answer:
          "Yes. Browse performer profiles for your market and request the entertainers your group wants, subject to their availability on your date. Every photo on the site is real and unedited — no stock images, and the performer you book is the performer who arrives. In the rare case a confirmed entertainer becomes unavailable, our team works quickly to offer a comparable replacement so your event isn't affected.",
      },
      {
        question: "What are the age requirements and conduct rules?",
        answer:
          "Every event is strictly 18+, and no minors may be present at any booking. Velvet Girl Entertainment requires valid, unexpired government-issued photo identification to verify age and identity before a booking is confirmed, and customers are responsible for ensuring all attendees are of legal age. Performances are no-contact: a six-foot buffer is maintained between the entertainer and everyone present, and unsolicited or inappropriate contact is prohibited. Both the entertainer and the company may end a performance over safety concerns. Full details are in our Terms of Service.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "For our active markets, one to two weeks ahead gives you the widest choice of entertainers, particularly for weekend dates. Allow two to four weeks if you're booking a custom theme, a larger group package, or an event outside our active markets, since those involve additional coordination. Short-notice bookings are genuinely part of what we do, so a tight timeline is worth a call rather than an assumption that it's too late.",
      },
      {
        question: "What happens if we need to cancel or reschedule?",
        answer:
          "Cancellations must be submitted in writing. If you cancel at least two days before your event date, nothing further is owed beyond the non-refundable deposit. Within two days of the event, a cancellation fee equal to 50% of the total booking fee applies. Rescheduling also requires at least two days' notice, is subject to entertainer availability, and carries a rescheduling fee. Your booking specialist will confirm the terms that apply to your booking before you pay a deposit.",
      },
      {
        question: "How private is the booking?",
        answer:
          "Discretion runs through the whole process — how our team communicates with you, how your information is handled, and how entertainers arrive at and leave your event. Your personal details are used to coordinate the booking and are not shared or sold beyond what's required to fulfil it. Age and identity verification is a legal requirement rather than an optional step; our Privacy Policy explains exactly what's collected and why.",
      },
      {
        question: "Which markets can we book Girls Night Out in?",
        answer:
          "We currently book in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando / Daytona Beach, and Indianapolis, and we onboard new markets regularly. If your event is outside those areas, it's still worth asking — we regularly arrange destination bookings for group celebrations elsewhere. Share your dates, headcount, and location and we'll confirm whether we can cover it. The current list is always on our Areas We Serve page.",
      },
    ],
  },
  {
    slug: "pool-parties",
    title: "Pool Parties",
    shortDescription:
      "Book verified entertainers for private homes, vacation rentals, and resort or hotel pools across our eight cities — daytime or evening slots.",
    heroDescription:
      "Book verified entertainers for private homes, vacation rentals, and resort or hotel pools across our eight cities — daytime or evening slots.",
    whatsIncluded: [
      "Verified professional entertainers",
      "Flexible scheduling (daytime & evening slots)",
      "Private residence & backyard pool bookings",
      "Vacation rental pool bookings",
      "Resort & hotel pool bookings",
      "Cabana & daybed coordination",
      "Custom celebration themes & costume options",
      "Itemized costs confirmed in writing",
    ],
    bookingSteps: [
      "Choose your city",
      "Select performers",
      "Confirm booking",
      "Enjoy your party",
    ],
    content: {
      intro:
        "Pool parties bring their own logistics — daytime sun, resort pool schedules, and a different energy than an evening indoor event — and Velvet Girl Entertainment books entertainers who are used to working in that setting. Whether it's a private residence pool, a vacation rental, or a resort pool day, we coordinate around daytime and evening availability depending on when your group is celebrating.",
      whyChooseUs:
        "Every entertainer on our roster is verified before joining, and the photos you browse are real, unedited photographs of the performer herself. You can browse performer profiles for your city and request the entertainer you'd like for your pool party, subject to availability on your date. Discretion is built into how our team communicates and how entertainers arrive and depart. All pricing and terms are itemized and confirmed in writing before your deposit is paid, so there are no surprises on your party date.",
      whatToExpect:
        "Provide your city, event date, preferred time window, and venue type when you inquire. A booking specialist confirms available entertainers for your schedule, provides an itemized quote, and confirms details in writing. A non-refundable deposit confirms your booking. Under our Terms of Service, confirming that your venue permits the booked entertainment is the customer's responsibility. All attendees must be 18 or older with valid government photo ID, and a six-foot no-contact buffer is maintained during performances.",
    },
    faqs: [
      {
        question: "Do you book pool parties at resorts, or only private residences?",
        answer:
          "Both. We book pool party entertainment at private residences, vacation rentals, and resort or hotel pools. Resort and hotel bookings just need a bit more detail up front — note your cabana or pool area, any guest-access rules, and the time window you've reserved, and your booking specialist will build the arrival around it.",
      },
      {
        question: "Are pool party bookings available during the day?",
        answer:
          "Yes — daytime and evening slots are both available. Pool celebrations often start in the early afternoon, and we keep performers available across both windows for exactly that reason. Tell us your preferred time when you book and we'll confirm what's open on your date.",
      },
      {
        question: "Can I book pool party entertainment at an Airbnb or vacation rental?",
        answer:
          "Yes. Vacation rentals are one of the most common venues we book poolside entertainment for, particularly for bachelor weekends and group trips. Check your rental agreement first — some listings limit guest counts, events, or noise after a certain hour — because confirming that the venue permits your booking is the host's responsibility, not ours.",
      },
      {
        question: "Do I need permission from the venue?",
        answer:
          "Yes, and it's on you to get it. Under our terms, the customer is responsible for confirming that the venue is legally permitted to host the entertainment being booked. For a private home you own, that's usually straightforward. For a resort pool, an HOA or community pool, or a rental property, check with management or your host before the deposit — it's a five-minute conversation that prevents a very awkward one later.",
      },
      {
        question: "How far in advance should I book a pool party?",
        answer:
          "One to two weeks is the sweet spot, especially for weekend dates in summer. Shorter notice is often workable in our active cities — call or text rather than booking online, since online deposit payment is only available for bookings made 24 or more hours ahead. Destination bookings, custom themes, and larger groups need more runway: plan on two to four weeks.",
      },
      {
        question: "Can I request a specific performer for my pool party?",
        answer:
          "Yes, subject to her availability on your date. Browse performer profiles on your city page and name who you'd like when you inquire. The photos are real and unedited, so the person you select is the person who shows up.",
      },
      {
        question: "How much does pool party entertainment cost?",
        answer:
          "Pricing depends on your city, date, time window, how many entertainers you book, and any upgrades you add, so we quote per booking rather than publishing a flat rate. Every fee is itemized and confirmed in writing before you pay anything. Call or text (843) 938-7377 with your date and group size for a quote.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes. A non-refundable deposit confirms your booking and locks in your entertainer. The remaining balance is due on arrival, before the performance begins. Bookings are only confirmed once the deposit is received and availability is confirmed in writing.",
      },
      {
        question: "What happens if it rains on my pool party date?",
        answer:
          "Reach out to your booking specialist as early as you can. Rescheduling is subject to performer availability and a rescheduling fee, and requests need to be in writing at least two days before the original date. If you cancel instead, cancelling two or more days out costs only the deposit; inside two days, a fee equal to 50% of the booking applies. Weather is unpredictable — an early call gives us more room to work with.",
      },
      {
        question: "Which cities do you book pool parties in?",
        answer:
          "We currently book in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis, and we onboard new markets regularly. For events outside those cities — a beach house down the coast, a destination bachelor weekend — send us your dates and location and we'll confirm whether we can arrange travel.",
      },
      {
        question: "Can I book pool party entertainment for a bachelor party or birthday?",
        answer:
          "Yes — those are two of the most common reasons people book poolside. Group celebrations, birthdays, and bachelor weekends all work well in a pool setting, and you can pick a theme, costumes, and dancer count when you build your package. See our bachelor party and birthday party services for occasion-specific details.",
      },
      {
        question: "What are the rules at a Velvet Girl pool party?",
        answer:
          "Every event is adults-only and every attendee must be 18 or older with valid government-issued ID available. A six-foot buffer is maintained between the performer and guests at all times — it's a no-contact booking. Performances comply with local attire and conduct ordinances for your area, and both the performer and our team reserve the right to end a booking if those rules aren't respected. Full details are in our Terms of Service.",
      },
    ],
  },
  {
    slug: "yacht-parties",
    title: "Yacht Parties",
    shortDescription:
      "Professional entertainers booked around your charter — marina arrival, departure time, and time on the water coordinated with your booking specialist.",
    heroDescription:
      "Professional entertainers booked around your charter — marina arrival, departure time, and time on the water coordinated with your booking specialist.",
    whatsIncluded: [
      "Verified professional entertainers",
      "Marina and dock arrival coordination",
      "Scheduling built around your charter time",
      "Multi-hour charter availability",
      "Sunset and evening bookings",
      "Custom themes and costumes",
      "Private and VIP charters",
      "Full privacy protocols",
    ],
    bookingSteps: [
      "Choose your city",
      "Select performers",
      "Confirm your booking",
      "Enjoy your charter",
    ],
    content: {
      intro:
        "Velvet Girl Entertainment books verified professional entertainers for yacht parties, boat charters, and sunset cruises. Every performer on the roster is verified before we book them, and bookings are handled by a booking specialist rather than an automated queue — which matters more on the water than it does anywhere else, because of the timing. A boat booking has a hard edge that a hotel suite or rental home does not. The charter leaves at a set time whether or not everyone is aboard, and once it does, there is no catching up. That single constraint shapes how we take yacht bookings: we ask for the marina, the departure time, and the charter length before anything else, and the arrival window is built backwards from there. Most yacht bookings are private celebrations rather than public events — bachelor parties, birthdays, group weekends, and VIP charters where the guest list is closed and discretion matters. As with our other private events, this is adult entertainment for guests 18 and over, and the dancers you book perform within the scope confirmed with your specialist.",
      whyChooseUs:
        "We treat dockside arrival as the deliverable, not a detail. Your booking specialist works from your departure time rather than your start time, so your entertainer is at the marina and aboard before the boat pulls away — not somewhere in the parking lot while the captain is waiting. Where arrival needs to go through a third party, we can coordinate with your charter company or captain directly if you share their contact details. Access arrangements differ from one marina and operator to the next, so the more you can tell us about where and how your group boards, the tighter the arrival plan. Two things carry over from every other booking we handle. Every performer is verified before joining the roster, and every photo on this site is real and unedited — who you see on the profile is who meets you at the dock. Discretion is built into how we operate, from how the booking team communicates to how entertainers arrive and depart.",
      whatToExpect:
        "Booking starts with four pieces of information: your city, your marina, your departure and return time, and your group size. Add the charter company name if arrival has to be cleared through them, and tell us if there is a specific dancer you want from your city's roster. From there, a booking specialist confirms who is available on your date, goes over pricing and any upgrades, and takes a deposit to secure your booking and your confirmed entertainer. Your specialist then sets the dockside arrival window against your departure time and confirms it with you ahead of the event. On the day, your entertainer arrives at the marina before departure, boards with your group, and stays for the portion of the charter you have booked — a sunset cruise or a longer stretch on the water. If your charter time shifts, tell your specialist as early as you can so the arrival window can be re-worked against the new schedule.",
    },
    faqs: [
      {
        question: "Do I need to provide the marina and departure time when booking?",
        answer:
          "Yes. Charters run on a fixed schedule, so we need your marina location, departure time, and charter length before we can confirm anything. Your booking specialist uses those three details to set an arrival window that gets your entertainer to the dock with time to spare. Without them we can discuss a date but not a workable arrival plan.",
      },
      {
        question: "Can you coordinate directly with our charter company or captain?",
        answer:
          "In many cases, yes. If arrival needs to be cleared through the charter company rather than your group, share their contact details when you book and your specialist can work with them on timing and dock access. Boarding arrangements vary from one operator and marina to the next, so telling us early how your group gets aboard gives us more room to plan around it.",
      },
      {
        question: "How far in advance should I book yacht party entertainment?",
        answer:
          "We recommend at least one to two weeks ahead, and earlier for weekends, which book out fastest. For destination events or larger group packages, two to four weeks gives us room to lock in availability and travel logistics. Yacht bookings benefit from lead time because the arrival window is tied to a departure you cannot move. Same-day and short-notice requests are welcome — call or text directly rather than booking online, and we will tell you honestly what is open.",
      },
      {
        question: "Can I request a specific entertainer for my charter?",
        answer:
          "Yes. Browse the profiles for your city and tell your specialist who you want. Requests are subject to that performer's availability on your date. Every photo on the site is real and unedited, so the dancer you select from a profile is the one who meets you at the dock. If your first choice is unavailable, your booking specialist can go through the alternatives open on your date.",
      },
      {
        question: "How many entertainers should I book for a yacht party?",
        answer:
          "It depends on your group size and how much of the charter you want the entertainment to cover — a small bachelor group on a shorter sunset cruise is a different booking from a large group on a longer charter. Dancer count is one of the things you set when you build your package, and your booking specialist will give you a straight recommendation once they know your headcount and charter length.",
      },
      {
        question: "How does pricing work?",
        answer:
          "Pricing is quoted per event rather than published as a flat rate, because it moves with your city, date, number of dancers, charter length, and any upgrades you add. Send your charter details and our booking team will come back with a personalised quote. A deposit secures your booking and your confirmed entertainer, with the remaining balance handled through your specialist ahead of the event.",
      },
      {
        question: "Can you arrange entertainment for a yacht bachelor party?",
        answer:
          "Yes — bachelor charters are one of the most common yacht bookings we handle. The structure is the same as any other private booking: pick your dancers, set your theme and dancer count, and give us the marina and departure time. If you want the send-off built out further, our Bachelor Party package covers multiple dancer options, themed entrances, and group-friendly games you can apply to a boat event.",
      },
      {
        question: "Can I book entertainment for a birthday or a private celebration on the water?",
        answer:
          "Yes. Birthdays, group weekends, and closed private charters are all bookable, and the guest list stays yours — these are private bookings, not public events. Tell your specialist the occasion when you inquire so the theme, costume, and package can be set up to match rather than defaulting to a generic booking.",
      },
      {
        question: "What happens if my charter time changes?",
        answer:
          "Tell your booking specialist as soon as you know. Departure delays and schedule changes are a normal part of being on the water, and the arrival window can usually be re-worked around a new time. The earlier the notice, the more room there is to adjust. If a change means moving the date entirely, your specialist will walk you through what applies — cancellation and rescheduling terms depend on how close to the event the change happens.",
      },
      {
        question: "Can I book entertainment for a boat rather than a yacht?",
        answer:
          "Yes. Pontoons, cruisers, party boats, and private charters are all handled the same way. What matters is not the size of the vessel but whether there is a fixed departure time and a marina we need to reach. Our Boat/Pool Party package is built for exactly this kind of on-the-water event and can be customised before you book.",
      },
      {
        question: "What should I confirm with my yacht or charter company before booking?",
        answer:
          "Rules vary by vessel and operator, so this one is worth handling on your side first. Confirm with your yacht or charter company that outside entertainment is permitted aboard, and ask about their guest-count, boarding, and dock access requirements. We cannot speak for what any individual captain or operator allows. Getting a clear answer from them before you book means the arrival plan we build with you is one that will actually work on the day.",
      },
      {
        question: "Is yacht party entertainment available in my area?",
        answer:
          "Yacht and boat bookings are handled through our established service markets — Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, and Miami are linked on this page. If your marina sits outside those cities, reach out anyway. We do send performers to destination events, and requests are reviewed based on performer availability and travel logistics rather than assumed either way.",
      },
    ],
  },
  {
    slug: "special-requests",
    title: "Special Requests",
    shortDescription:
      "Custom entertainment built around your specific request — themes, venues, and lineups that don't fit a standard package.",
    heroDescription:
      "Custom entertainment built around your specific request — themes, venues, and lineups that don't fit a standard package.",
    whatsIncluded: [
      "Dedicated booking concierge",
      "Fully custom scheduling",
      "Private locations",
      "Themed experiences",
      "Multi-performer bookings",
      "Custom add-ons",
      "Full privacy protocols",
      "VIP events",
    ],
    bookingSteps: [
      "Tell us your vision",
      "Get a custom proposal",
      "Confirm booking",
      "Enjoy your event",
    ],
    content: {
      intro:
        "Special Requests is for the idea that doesn't have a button on our site. Most bookings run through our package builder — pick a theme, a costume, a dancer count, add your upgrades, done. Some requests don't fit in a form, and those come to us here. That usually means one of a few things: a theme or costume that isn't on our list, a venue we don't have a category for, a multi-performer lineup with a particular structure in mind, a schedule that runs across a weekend rather than an evening, or two ideas combined into one event. Rather than reshaping it to fit an existing service, a booking specialist works from your description and puts together a proposal around it.",
      whyChooseUs:
        "Plenty of agencies handle an off-menu request by steering you back toward a standard package. We start from your description instead and work through what it would actually take — performer count for your group and space, venue requirements, timing, and what all of that costs. Everything else about the booking works the way it does anywhere else on the site. Every photo on our city pages is real and unedited, so there's no guesswork about who's on the roster. Discretion is built into how we communicate rather than added on request. A deposit secures the date, exactly as it would on any other booking. The request is custom; the standards behind it aren't.",
      whatToExpect:
        "Send three things and the team can move quickly: your event date, the city or venue, and a short description of what you have in mind. Guest count helps too. A couple of sentences is enough to start — nothing needs to be finalised before you reach out. From there a booking specialist follows up with the questions your particular request raises: whether the venue can provide a private area, what performer count suits the space and the group, how long you want entertainment running. You'll get back a proposal built for your request, with performer options and pricing, rather than a package rate. Once you confirm, a deposit locks in the date, and the same booking team stays involved through the event — with a custom request, the details are the whole point, so the people who worked them out stay with the booking.",
    },
    faqs: [
      {
        question: "What counts as a special request?",
        answer:
          "Anything that doesn't fit one of our standard packages: a theme or costume that isn't on our list, a venue we don't have a category for, a specific multi-performer lineup, an unusual schedule, or two services combined into one event. If you're not sure whether something fits, describe it and the booking team will tell you.",
      },
      {
        question: "When should I use Special Requests instead of the package builder?",
        answer:
          "Use the builder when the theme you want is already there. Our packages page covers eight themes with costume, dancer count, and upgrade options built in, and going that route is quicker. Special Requests is for when you get to the form and realise it can't hold what you're actually asking for.",
      },
      {
        question: "How is this different from a Private Event booking?",
        answer:
          "Private Events is for occasions that don't have a tidy label — a divorce party, a promotion, a reunion — where the booking itself is still a fairly standard one. Special Requests is the other way around: the occasion may be ordinary, but the entertainment setup you're asking for isn't. If you want a premium service tier rather than a non-standard setup, that's VIP Experiences.",
      },
      {
        question: "Can I request a specific performer?",
        answer:
          "Yes, subject to availability on your date. Each city page shows the performers booking in that market with real, unedited photos, so you can name who you'd like when you send your request. Availability is confirmed by the booking team before anything is finalised.",
      },
      {
        question: "Can I request a custom theme?",
        answer:
          "Yes — custom themes are one of the more common special requests. Start with the packages page if something on the list is close to what you want. If nothing matches, describe what you're picturing and the booking team will come back on what's workable for your date and market.",
      },
      {
        question: "Can I request a specific costume or other customization?",
        answer:
          "Costume selection is part of the standard booking flow, alongside theme, dancer count, and upgrades such as extra time. For anything beyond those options, include the detail in your request and the team will confirm what can be arranged before you commit.",
      },
      {
        question: "Can I book multiple performers?",
        answer:
          "Yes. Multi-performer bookings are supported, and performer count is one of the things a custom proposal is built around. Share your guest count and the format you have in mind so the team can recommend a lineup that suits the group and the space.",
      },
      {
        question: "Can you accommodate an unusual venue?",
        answer:
          "Often. Beyond private residences and hotel suites, we book vacation rentals, poolside events at homes, rentals, and resort pools, and yacht and boat charters. For anything outside those, the main question is whether the venue can provide a private area — send the venue details and any access rules and the team will confirm before you book.",
      },
      {
        question: "How is pricing determined for a custom request?",
        answer:
          "Pricing is built around your specific request rather than a fixed package rate, because performer count, timing, and venue all affect it. A booking specialist puts together a proposal with pricing once the scope is clear. A deposit secures the booking; the balance is arranged with your specialist ahead of the event.",
      },
      {
        question: "How much information should I provide?",
        answer:
          "Your date, the city or venue, and a short description of what you're planning is enough for a useful first response. Guest count and a rough time window help the team quote accurately on the first pass rather than the third. The follow-up conversation exists to fill in the rest.",
      },
      {
        question: "How far ahead should I make a custom request?",
        answer:
          "One to two weeks is a reasonable target for our listed cities, and more for weekends. For custom themes, larger group lineups, or events outside our listed markets, allow two to four weeks so there's room to confirm availability and any travel involved. The more specific the request, the more it depends on the right people being free, so earlier is better.",
      },
      {
        question: "What if my event is on short notice?",
        answer:
          "Contact the booking team directly by phone or text at (843) 938-7377 rather than booking online — online deposit payment is only available for bookings made 24 or more hours in advance. The team can check what's possible for your date. For general questions about deposits, cancellations, and privacy that aren't specific to custom requests, see our booking FAQ.",
      },
    ],
  },
];

export const homepageServiceSlugs = [
  "bachelor-parties",
  "birthday-parties",
  "private-events",
  "vip-experiences",
  "corporate-entertainment",
  "girls-night-out",
  "couples-entertainment",
  "pool-parties",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
