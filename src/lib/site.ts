// Single source of truth for business info used across the site.
// Update these and every page reflects the change.

export const site = {
  name: "Functional Massage Therapy",
  shortName: "Functional Massage",
  therapist: "Lauren",
  phone: "(774) 276-2318",
  phoneHref: "tel:+17742762318",
  email: "hello@functionalmassagetherapy.com", // TODO: confirm real address
  address: {
    line1: "48 Main St",
    note: "Inside Historic Yoga",
    city: "Sturbridge",
    state: "MA",
    zip: "01566",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=48+Main+St+Sturbridge+MA+01506",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Coaching", href: "/coaching" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
] as const;

export const hours = [
  { day: "Monday", open: "Closed" },
  { day: "Tuesday", open: "Closed" },
  { day: "Wednesday", open: "10:00 AM - 5:30 PM" },
  { day: "Thursday", open: "10:00 AM - 5:30 PM" },
  { day: "Friday", open: "10:00 AM - 4:00 PM" },
  { day: "Saturday", open: "9:00 AM - 3:00 PM" },
  { day: "Sunday", open: "12:30 PM - 5:30 PM" },
] as const;

/* ------------------------------------------------------------------------
   COACHING
   ------------------------------------------------------------------------
   PLACEHOLDER CONTENT. Everything below is scaffolding so the page can be
   built and reviewed. Replace with Lauren's real coaching offer, real
   pricing, and real client results before this page goes live.

   The testimonial entries are intentionally written as visible empty slots
   rather than realistic invented quotes. Publishing fabricated testimonials
   would be deceptive to clients and, in the US, is an FTC endorsement-rule
   violation. They must be filled with real, permissioned client feedback or
   the section should be removed.
   ------------------------------------------------------------------------ */

export type CoachingPillar = {
  title: string;
  body: string;
  tone: "espresso" | "tan" | "graphite" | "paper";
};

export const coachingPillars: CoachingPillar[] = [
  {
    title: "Strength & programming",
    body: "PLACEHOLDER: describe the training side of the coaching. What kind of programming, for whom, and how it is delivered.",
    tone: "espresso",
  },
  {
    title: "Nutrition & recovery",
    body: "PLACEHOLDER: describe the nutrition and recovery support included, and how hands-on it is.",
    tone: "tan",
  },
  {
    title: "Movement & mobility",
    body: "PLACEHOLDER: describe how the bodywork practice feeds into coaching, and what makes this different from a standard online coach.",
    tone: "graphite",
  },
];

export const coachingSteps = [
  {
    n: "01",
    title: "Intake call",
    body: "PLACEHOLDER: what happens on the first call, how long it takes, and what the client should bring to it.",
  },
  {
    n: "02",
    title: "Your plan",
    body: "PLACEHOLDER: what the client actually receives, in what format, and how quickly after the call.",
  },
  {
    n: "03",
    title: "Ongoing check-ins",
    body: "PLACEHOLDER: cadence of check-ins, how progress is tracked, and what adjustments look like over time.",
  },
];

export type CoachingResult = {
  /* Leave `quote` empty to render an unfilled slot rather than fake copy. */
  quote: string;
  name: string;
  detail: string;
};

export const coachingResults: CoachingResult[] = [
  { quote: "", name: "", detail: "" },
  { quote: "", name: "", detail: "" },
  { quote: "", name: "", detail: "" },
];

export type Service = {
  slug: string;
  name: string;
  durations: string;
  summary: string;
  detail: string;
  bestFor: string[];
  /*
    Surface treatment for the services grid. The site is deliberately light on
    photography, so each service is distinguished by material and tone rather
    than by a stock photo.
  */
  tone: "espresso" | "tan" | "graphite" | "paper";
};

export const services: Service[] = [
  {
    slug: "sports-recovery",
    name: "Sports & Recovery",
    durations: "60 / 90 min",
    summary:
      "Targeted work for athletes and lifters. Pre-event prep, post-training recovery, and keeping the engine running.",
    detail:
      "Built from years on the platform and on the sidelines with a D1 football program. We work the tissue you actually train, restore range of motion, and flush the fatigue so you can get back to it sooner.",
    bestFor: ["Lifters & powerlifters", "Runners & field athletes", "Post-event recovery"],
    tone: "espresso",
  },
  {
    slug: "deep-tissue",
    name: "Targeted Deep Tissue",
    durations: "60 / 90 min",
    summary:
      "Firm, specific pressure for the knots that have overstayed their welcome. Relief that holds.",
    detail:
      "Slow, deliberate work into the deeper layers of muscle and fascia. We find the root of the restriction instead of chasing the symptom, so the change lasts past the parking lot.",
    bestFor: ["Chronic tension", "Stubborn knots", "Limited mobility"],
    tone: "tan",
  },
  {
    slug: "functional-therapeutic",
    name: "Functional Therapeutic",
    durations: "60 / 90 min",
    summary:
      "A whole-body, problem-solving session tailored to what your body is dealing with today.",
    detail:
      "This is the comprehensive, functional approach the practice is named for. We assess how you move, address the pattern behind the pain, and send you home with tools to keep the progress going between visits.",
    bestFor: ["Chronic pain", "Desk-bound tension", "Whole-body reset"],
    tone: "graphite",
  },
  {
    slug: "cupping-stretch",
    name: "Cupping & Assisted Stretch",
    durations: "Add-on or 30 min",
    summary:
      "Decompression cupping and guided stretching to open up tight, overworked areas.",
    detail:
      "Add it to a session or book it on its own. Cupping lifts and decompresses tissue while assisted stretching restores length to the muscles that have forgotten how to lengthen.",
    bestFor: ["Tight hips & shoulders", "Recovery days", "Mobility work"],
    tone: "paper",
  },
];
