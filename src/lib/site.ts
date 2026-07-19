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
  /*
    Verbatim. Not tidied, not shortened, not corrected — several of these have
    a dropped word or an odd bit of punctuation, and they stay in. Editing what
    someone actually wrote and still presenting it as their quote misrepresents
    them, and under the FTC endorsement rules a testimonial has to reflect the
    endorser's honest words.
  */
  quote: string;
  /*
    First name and last initial — reviewers posted these publicly under their
    full names on Google, but there is no reason to widen that audience here.
  */
  name: string;
  draft?: boolean;
};

/*
  Real Google reviews of the practice, selected from the public listing and
  reproduced word for word.

  Chosen for what they tell the next reader rather than for enthusiasm: a
  named complaint and what happened to it beats "amazing experience". Between
  them these cover a specific pain outcome, a fellow therapist's assessment,
  atmosphere, and being listened to. The one-liners were left out — "great
  place and massage" fills a card without earning it.

  Nothing here is edited. Where a review has a missing word or unusual
  punctuation it is kept as written.
*/
export const testimonials: Testimonial[] = [
  {
    quote:
      "I booked a massage to help with my sciatica. Lauren listened to my concerns and communicated clearly during each step. She checked in multiple times as to my comfort and I left nearly pain free. Great massage, lovely room and atmosphere, very professional.",
    name: "Tina H.",
  },
  {
    quote:
      "I am fellow massage therapist and had a meniscus tear injury. I needed someone to help release the fascia on my left hip and leg. Lauren did just that and released other parts I needed work in, like my neck and shoulders. Her work made a huge difference in the functioning of the knee no more clicking when I twist and turn.",
    name: "Julia S.",
  },
  {
    quote:
      "Lauren does an excellent deep massage. My neck was so sore I could barely look to the left. Now I'm pain free and have full range of motion!",
    name: "Denise F.",
  },
  {
    quote:
      "10/10 recommend. Lauren knows what she is doing. If you have an issue you need worked on or simply want better health and flexibility, this woman takes feedback and delivers. If you have been thinking about Functional Massage but haven't take the leap, give Lauren a call today!",
    name: "Kristen L.",
  },
  {
    quote:
      "What a wonderful woman Lauren is. A champion for all around health and doesn't hesitate to share her expertise in her field. I'm pretty sure me and my whole family will be on Lauren's table. I initially brought my son to her. I can not wait to book for myself. We were very satisfied with the experience and results.",
    name: "Gina T.",
  },
  {
    quote:
      "Lauren was wonderful! The deep massage was just what I needed relieving tension / pain in my neck/ shoulder area. She is professional & extremely knowledgeable x highly recommend!",
    name: "Leah C.",
  },
  {
    quote:
      "Such a great experience. Lauren really is the best ! She strives to make you feel better and takes the time to understand the problem and fixes it. I would highly recommend Lauren !!",
    name: "Eleanor C.",
  },
  {
    quote:
      "Relaxing atmosphere, warm, nice people, and a fluffy puppy to really set the mood. Lauren really knows what she's doing. Highly recommend to everyone",
    name: "Jon J.",
  },
  {
    quote:
      "Lauren is an exceptional massage therapist. She knows the body and is able to go deep. I absolutely will go back.",
    name: "Alleah F.",
  },
];

/* ------------------------------------------------------------------------
   COACHING
   ------------------------------------------------------------------------
   DRAFT COPY, NOT CONFIRMED FACT. The prose below was written to replace
   scaffolding placeholders and is consistent with Lauren's background as
   stated on the About page — personal training and nutrition first, then
   competitive powerlifting, massage qualification in 2020, pre-season
   recovery work with the D1 football program at Boston College.

   What it does NOT come from is Lauren. The mechanics it describes — that
   there is an intake call, that the plan arrives days later, that check-ins
   can be video, phone, or in person — are plausible defaults, not her stated
   offer. She has to confirm or correct each one before this is public,
   because a client will read it as a promise about what they are buying.

   No prices are quoted here on purpose. Unlike the massage tiers, the
   coaching offer has no agreed rate to state.

   The testimonial entries below stay as visible empty slots. Publishing
   invented client quotes would be deceptive and, in the US, violates the FTC
   endorsement rules (16 CFR 255) — that holds however plausible the quote
   sounds, so they cannot be drafted "for now" the way the prose above can.
   They get filled with real, permissioned feedback or the section goes.
   ------------------------------------------------------------------------ */

export type CoachingPillar = {
  title: string;
  body: string;
  tone: "espresso" | "tan" | "graphite" | "paper";
};

export const coachingPillars: CoachingPillar[] = [
  {
    title: "Strength & programming",
    body: "Training built around your lifts, your week, and the equipment you actually have — not a template with your name at the top. Years under the bar mean I know what load feels like when it is working and when it is quietly breaking you down.",
    tone: "espresso",
  },
  {
    title: "Nutrition & recovery",
    body: "Nutrition that works with how you already eat instead of replacing it, and recovery treated as part of the training rather than what happens if there is time left over. Sleep, fuel, and stress all pull on the same rope.",
    tone: "tan",
  },
  {
    title: "Movement & mobility",
    body: "This is where the table work feeds in. Spending my days with my hands on tissue means I can usually find the restriction sitting behind a stalled lift, then work on it directly and program around it while it clears.",
    tone: "graphite",
  },
];

export const coachingSteps = [
  {
    n: "01",
    title: "Intake call",
    body: "We go through your training history, what you are working toward, what hurts, and what your week realistically allows. Bring your current program if you have one and be honest about the parts you skip — that is usually where the useful information is.",
  },
  {
    n: "02",
    title: "Your plan",
    body: "You get your programming written up alongside the nutrition and recovery targets we agreed on, in a format you can actually follow in the gym. Then you train on it, and we adjust once it has met reality.",
  },
  {
    n: "03",
    title: "Ongoing check-ins",
    body: "We stay in contact — video, phone, or in person if you are local to Sturbridge. You tell me how the sessions went, I adjust the load and the plan around it. Progress gets judged over months, not single weeks.",
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

/*
  A service is offered at one or more duration/price tiers. Tiers are listed
  shortest first; `priceLabel` renders them as the meta line on both the home
  cards and the services rows, so the menu and the prices can never drift
  apart.
*/
export type ServiceTier = {
  /* Display label, e.g. "60 min". */
  duration: string;
  /* Used in the booking URL: /booking/<slug>/<minutes>/ */
  minutes: number;
  price: string;
  /*
    The GoHighLevel calendar this tier books. Every tier is a separate GHL
    calendar, and they share conflict detection, so booking one blocks the
    overlapping slots on all the others. Availability is never computed here —
    the widget asks GHL at load and GHL re-checks on submit.

    Verified 2026-07-19: each id below resolves to a widget whose title and
    price match the tier it sits on. Re-check with the same method if these
    are ever edited, because a transposed id books the wrong session at the
    wrong price and nothing on this site would catch it.
  */
  calendarId: string;
};

export type Service = {
  slug: string;
  name: string;
  tiers: ServiceTier[];
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
    slug: "functional-massage",
    image: "/mobility-back.webp",
    imageAlt: "A seated figure rotating through the thoracic spine",
    name: "Functional Massage",
    tiers: [
      { duration: "60 min", minutes: 60, price: "$130", calendarId: "lAVYs2s9Wi9BowYFUYh9" },
      { duration: "90 min", minutes: 90, price: "$160", calendarId: "ZRS7G6nHeU3H5jBaV6gu" },
    ],
    summary:
      "Combines joint motion with massage to address painful conditions and impairments.",
    detail:
      "The approach the practice is named for. Joint movement is worked alongside the soft tissue, so the session addresses the painful condition or impairment itself rather than only the muscle around it. The 90-minute session covers more ground in a single visit.",
    bestFor: ["Painful conditions", "Movement impairments", "Whole-body reset"],
    tone: "espresso",
  },
  {
    slug: "deep-tissue",
    image: "/hands-detail.webp",
    imageAlt: "Hands working slowly into the deep tissue of a back",
    name: "Deep Tissue",
    tiers: [
      { duration: "60 min", minutes: 60, price: "$110", calendarId: "zXJ840hlQLmv1a5NzBtp" },
      { duration: "90 min", minutes: 90, price: "$130", calendarId: "uUmyx53dVE5dwrNMnrMl" },
    ],
    summary:
      "Removes severe tension by relieving muscles and connective tissue below the surface.",
    detail:
      "Firm, deliberate work into the muscle and connective tissue below the surface, where severe tension actually sits. Book the 90-minute session if you want the same work over a wider area or at a slower pace.",
    bestFor: ["Severe tension", "Stubborn knots", "Deep muscle work"],
    tone: "tan",
  },
  {
    slug: "swedish-massage",
    image: "/oils-still-life.webp",
    imageAlt: "Massage oils and folded linen in warm light",
    name: "Swedish Massage",
    tiers: [
      { duration: "60 min", minutes: 60, price: "$110", calendarId: "aLi6s2s3xQBeEutT16sV" },
      { duration: "90 min", minutes: 90, price: "$130", calendarId: "rw0KhOuqyGDeCTiEPHv3" },
    ],
    summary:
      "Firm but gentle pressure to promote relaxation and ease muscle tension.",
    detail:
      "Firm but gentle pressure across the body to promote relaxation and ease muscle tension. A good starting point if you are new to massage or want recovery without deep pressure.",
    bestFor: ["Relaxation", "Everyday tension", "First-time clients"],
    tone: "graphite",
  },
  {
    slug: "tmj-therapy",
    image: "/treatment-in-progress.webp",
    imageAlt: "Focused hands-on work during a treatment session",
    name: "Functional TMJ Therapy",
    tiers: [
      { duration: "45 min", minutes: 45, price: "$75", calendarId: "WdeevbEKv2DhWv4gH4xP" },
    ],
    summary:
      "Infrared treatment for TMJ syndrome, providing significant relief.",
    detail:
      "A focused session for TMJ syndrome using infrared treatment, which clients report gives significant relief to the jaw, face, and surrounding muscles.",
    bestFor: ["TMJ syndrome", "Jaw tension", "Focused session"],
    tone: "paper",
  },
  {
    slug: "chair-massage",
    image: "/studio-interior.webp",
    imageAlt: "The studio interior, quiet and warmly lit",
    name: "Chair Massage",
    tiers: [
      { duration: "30 min", minutes: 30, price: "$60", calendarId: "YLg5KgLS39HScX9VMMsn" },
    ],
    summary:
      "Performed in a specially designed chair, clothes on, for relaxation.",
    detail:
      "Performed in a specially designed massage chair with your clothes on — no table, no oils. A short, easy way to unwind when you are short on time.",
    bestFor: ["Clothes on", "Short on time", "Relaxation"],
    tone: "espresso",
  },
  {
    slug: "student-rate",
    image: "/athlete-stretch.webp",
    imageAlt: "An athlete mid-stretch in a darkened gym",
    name: "Student Rate",
    tiers: [
      { duration: "60 min", minutes: 60, price: "$85", calendarId: "mEKtSl5Qt335gPQRDuwV" },
    ],
    summary:
      "For student-athletes — speeds recovery, improves circulation, and enhances sleep.",
    detail:
      "A reduced rate for student-athletes. The session is built around what a training season demands: speeding recovery, improving circulation, and helping you sleep better between sessions.",
    bestFor: ["Student-athletes", "In-season recovery", "Better sleep"],
    tone: "tan",
  },
  {
    slug: "massage-for-two",
    image: "/eucalyptus-still-life.webp",
    imageAlt: "Eucalyptus and warm stones arranged on linen",
    name: "Massage for Two",
    tiers: [
      { duration: "90 min", minutes: 90, price: "$350", calendarId: "4hA3JKItP5oqrzJCjuZo" },
      { duration: "120 min", minutes: 120, price: "$400", calendarId: "eJaNTDDq4krKozr4W5OA" },
    ],
    summary:
      "A dual relaxation session with aromatherapy, hot stones, and customizable pressure.",
    detail:
      "A session for two, side by side, with aromatherapy and hot stones included and the pressure customized for each of you. Choose the 120-minute session for a longer, unhurried version of the same treatment.",
    bestFor: ["Two people", "Aromatherapy & hot stones", "Pressure to suit each of you"],
    tone: "graphite",
  },
];

/* The booking route for one tier: /booking/deep-tissue/90/ */
export function bookingHref(s: Service, tier: ServiceTier): string {
  return `/booking/${s.slug}/${tier.minutes}/`;
}

/*
  Every service/tier pair, used to prerender one booking page each. The site is
  a static export, so there is no server to read a `?service=` query at request
  time — each tier has to exist as its own built route.
*/
export const serviceTierPairs = services.flatMap((s) =>
  s.tiers.map((tier) => ({ service: s, tier })),
);

export function findServiceTier(slug: string, minutes: string) {
  const service = services.find((s) => s.slug === slug);
  const tier = service?.tiers.find((t) => String(t.minutes) === minutes);
  return service && tier ? { service, tier } : null;
}

/* "60 / 90 min · from $110", or "45 min · $75" for a single-tier service. */
export function priceLabel(s: Service): string {
  const durations = s.tiers.map((t) => t.duration.replace(" min", "")).join(" / ");
  const price =
    s.tiers.length > 1 ? `from ${s.tiers[0].price}` : s.tiers[0].price;
  return `${durations} min · ${price}`;
}
