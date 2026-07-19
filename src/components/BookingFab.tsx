"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarBlank } from "@phosphor-icons/react";

/*
  Quick-booking FAB from the Stitch mockup.

  It arrives as a plain calendar circle, widens to read "Book Now" a couple of
  seconds in, then settles back to the circle. The delay is deliberate: firing
  on load would land while the page is still painting and be missed, and a
  label that never retracts sits on the content for the whole visit.

  Because the button is pinned by its right edge, growing the label pushes the
  left edge outward and the tap target never moves — so the expansion cannot
  cause a mis-tap.

  Hidden at `lg` rather than Stitch's `md` because that is where this site's
  nav switches to the desktop bar with its own Book Now button; matching the
  breakpoint literally would leave tablet widths with no visible booking CTA.
*/

const EXPAND_AT = 2500;
const COLLAPSE_AT = 6500;

export function BookingFab() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Reduced motion means no unprompted movement; the circle just stays put.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const open = window.setTimeout(() => setExpanded(true), EXPAND_AT);
    const close = window.setTimeout(() => setExpanded(false), COLLAPSE_AT);
    return () => {
      window.clearTimeout(open);
      window.clearTimeout(close);
    };
  }, []);

  return (
    <Link
      href="/booking"
      aria-label="Book Now"
      className="press fixed bottom-6 right-6 z-50 flex h-14 items-center rounded-full bg-espresso px-4 text-bone shadow-lifted lg:hidden"
    >
      <CalendarBlank size={24} weight="bold" className="shrink-0" />
      {/*
        max-width rather than width so the label can size to its own text, and
        aria-hidden because the link's aria-label already announces it — without
        this it would be read twice once expanded.
      */}
      <span
        aria-hidden
        className={`overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 ease-out ${
          expanded ? "max-w-[8rem] pl-2 opacity-100" : "max-w-0 pl-0 opacity-0"
        }`}
      >
        Book Now
      </span>
    </Link>
  );
}
