export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How does booking work?",
    answer:
      "Choose your city and party theme, tell us a bit about your celebration, and one of our booking specialists will reach out to confirm dancer availability and finalize the details.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 1–2 weeks in advance for the best availability, especially on weekends. Same-day requests are also welcome — just call or text us directly instead of booking online.",
  },
  {
    question: "What cities do you serve?",
    answer:
      "We're currently booking in Charleston, Myrtle Beach, Charlotte, Savannah, Atlanta, Miami, Orlando/Daytona Beach, and Indianapolis, with new cities being onboarded regularly.",
  },
  {
    question: "Are the photos on your site actually the dancers I'll be getting?",
    answer:
      "Yes — always. We're one of the only booking agencies that posts real, unedited photos of our dancers. No bait-and-switch, no stock photos. You know exactly who's showing up.",
  },
  {
    question: "Can I request specific performers?",
    answer:
      "Absolutely. You can browse performer profiles on your city page and request specific dancers, subject to availability on your date.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes. A deposit secures your booking and confirmed dancer(s). The remaining balance is handled with your booking specialist ahead of the event.",
  },
  {
    question: "What if I need to book within 24 hours?",
    answer:
      "Online deposit payment is only available for bookings made 24+ hours in advance. For same-day or last-minute requests, submit the form and then call or text us directly — we'll do our best to accommodate you.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Yes. Pick a theme, choose a costume, set your dancer count, and add any upgrades you'd like (extra time, extra games, additional dances, and more) — all on our Packages page.",
  },
  {
    question: "Is my booking private?",
    answer:
      "Yes. Discretion is a core part of how we operate, from how we communicate to how dancers arrive and depart your event.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Cancellation policies vary depending on how close to the event date you cancel. Your booking specialist will walk you through the specifics when you book.",
  },
  {
    question: "What happens if my performer becomes unavailable?",
    answer:
      "In the rare case a confirmed dancer becomes unavailable, our booking team will work quickly to offer a comparable replacement so your event isn't affected.",
  },
  {
    question: "Do you travel outside your listed cities?",
    answer:
      "We're focused on our current 8 cities while we onboard new markets. If your event is nearby one of our cities, reach out — we may still be able to help.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can text or call our booking concierge directly at (843) 938-7737, or use the contact form on our Contact page. We're available 24/7.",
  },
];

export const homepageFaqs = faqs.slice(0, 6);
