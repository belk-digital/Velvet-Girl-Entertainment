// Layout + copy for the "Velvet Girl Difference" scroll/refraction section,
// adapted from the-substance demo's store. Coordinate conventions match the
// demo: orthographic camera, 1 world unit == `zoom` pixels.

export const config = {
  sections: 6,
  pages: 5,
  zoom: 75,
  background: "#050506", // near-black field
  stripeColor: "#ff007f", // hot-pink zig-zag bands
  headlineColor: "#ffffff",
  headerColor: "#ff007f",
  numberColor: "#1b1b22",
};

export const intro = {
  eyebrow: "The Velvet Girl Difference",
  headline: ["NO", "BAIT", "NO", "SWITCH", "JUST", "REAL"],
  text:
    "You've seen it before — you book from an agency, they show you photos of gorgeous women online, and then someone completely different shows up at your door. That's the industry standard. It's not ours.",
};

export const paragraphs = [
  {
    id: "real-photos",
    offset: 1,
    factor: 1.75,
    header: "Real Photos",
    number: "01",
    image: "/velvet-difference/real-photos.jpg",
    aspect: 1.3333,
    text:
      "Every performer photo is current, verified, and actually available for booking. No catfishing. No surprises. The girl in the photo is the girl at your door.",
  },
  {
    id: "real-people",
    offset: 2,
    factor: 2.0,
    header: "Real People",
    number: "02",
    image: "/velvet-difference/real-people.jpg",
    aspect: 0.8081,
    text:
      "You speak directly with our booking agents — real humans who know our roster personally and match you with exactly the right performer for your event.",
  },
  {
    id: "real-results",
    offset: 3,
    factor: 1.75,
    header: "Real Results",
    number: "03",
    image: "/velvet-difference/real-results.jpg",
    aspect: 1.4963,
    text:
      "500+ events booked. Repeat clients across 50+ cities. Our track record speaks louder than any promise we could make — and we back it up every single booking.",
  },
];

export const outro = {
  id: "outro",
  offset: 4,
  text: "Book With Confidence.",
};

// Slim hot-pink diagonal accent bands on the black field.
export const stripes = [
  { offset: 0, height: 4, color: "#ff007f" }, // small pink (intro)
  { offset: 3.5, height: 4, color: "#ff007f" }, // small pink (end)
];

export const diamonds = [
  { x: 0, offset: 0.2, scale: 0.6, factor: 1.8 },
  { x: 2, offset: 1.1, scale: 0.8, factor: 2.1 },
  { x: -5, offset: 2, scale: 0.8, factor: 2.5 },
  { x: 0, offset: 3.2, scale: 0.8, factor: 1.75 },
  { x: 2, offset: 4, scale: 1.25, factor: 0.85 },
  { x: 0, offset: 4.6, scale: 1.5, factor: 6 },
];
