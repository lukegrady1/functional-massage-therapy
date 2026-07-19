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
    city: "Sturbridge",
    state: "MA",
    zip: "01566",
  },
  /*
    Searches the business by name alongside the address so the link lands on
    the Business Profile rather than a bare pin. The zip here previously read
    01506 while the address above reads 01566 — a different town, so every
    "Get directions" sent people to the wrong place.
  */
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Functional+Massage+Therapy+48+Main+St+Sturbridge+MA+01566",
} as const;

/*
  Order matches the Stitch nav: Home, Services, Coaching, About. Booking sits
  last and is filtered out of the desktop bar, where the Book Now button is
  the booking entry point; it still appears in the mobile menu and the footer.
*/
export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coaching", href: "/coaching" },
  { label: "About", href: "/about" },
  { label: "Booking", href: "/booking" },
] as const;

export const hours = [
  { day: "Monday", open: "Closed" },
  { day: "Tuesday", open: "Closed" },
  { day: "Wednesday", open: "11:00 AM - 5:30 PM" },
  { day: "Thursday", open: "11:00 AM - 5:30 PM" },
  { day: "Friday", open: "11:00 AM - 5:30 PM" },
  { day: "Saturday", open: "8:30 AM - 2:30 PM" },
  { day: "Sunday", open: "Closed" },
] as const;

/* ------------------------------------------------------------------------
   TESTIMONIALS
   ------------------------------------------------------------------------
   Entries with `draft: true` are UNFILLED SLOTS. They render on the site as
   visibly empty outlined cards reading "Awaiting client feedback" so the
   section cannot be mistaken for finished copy.

   Fill each one in with a real, permissioned quote and delete the `draft`
   flag. Do not invent quotes to fill the grid: publishing fabricated
   testimonials is deceptive and, in the US, violates the FTC endorsement
   rules (16 CFR 255). If real feedback is not available for a slot, delete
   the entry instead — the grid reflows to however many are present.

   `context` is what the person came in for ("Masters powerlifter",
   "Chronic low back pain"), not a job title. It is what makes a quote
   useful to the next reader.
   ------------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  draft?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lauren actually listens, finds the problem, and fixes it. My squat depth came back after one session.",
    name: "Mike Sartori",
    context: "Masters powerlifter, Worcester",
  },
  { quote: "", name: "", context: "", draft: true },
  { quote: "", name: "", context: "", draft: true },
];

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
  /* Illustrative imagery. Atmosphere and technique only — never presented as
     a photograph of this studio or of an identifiable client. */
  image: string;
  imageAlt: string;
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
    image: "/athlete-stretch.webp",
    imageAlt: "An athlete mid-stretch in a darkened gym",
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
    image: "/hands-detail.webp",
    imageAlt: "Hands working slowly into the deep tissue of a back",
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
    image: "/mobility-back.webp",
    imageAlt: "A seated figure rotating through the thoracic spine",
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
    image: "/cupping-still-life.webp",
    imageAlt: "Cups and a warm stone laid out on folded linen",
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
