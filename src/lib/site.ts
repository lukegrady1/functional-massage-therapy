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

export type Service = {
  slug: string;
  name: string;
  durations: string;
  summary: string;
  detail: string;
  bestFor: string[];
  image: string; // local image in /public
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
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1745327883389-17150e99dcf7?q=80&w=1200&auto=format&fit=crop",
  },
];
