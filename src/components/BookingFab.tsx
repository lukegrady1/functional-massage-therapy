"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

/*
  Quick-booking FAB from the Stitch mockup: calendar icon plus a permanent
  "Book Now" label, pinned bottom-right on phones.

  Hidden across the whole /booking section — the service picker and every
  per-tier calendar page (/booking/deep-tissue/90/) are already the booking
  flow, so the FAB just floats over the calendar it would send you to.

  Match the prefix, not the exact path: when this only tested for "/booking"
  the FAB reappeared on all eleven tier pages and sat on top of the widget.

  That check is why this is a client component: it reads the current route.
  It renders no state or timers otherwise, so the hook is the only JS here.
  `usePathname` strips basePath, so this still matches under the GitHub Pages
  subpath, but `trailingSlash: true` means it returns "/booking/" — hence the
  trailing slash is trimmed before comparing.

  Hidden at `lg` rather than Stitch's `md` because that is where this site's
  nav switches to the desktop bar with its own Book Now button; matching the
  breakpoint literally would leave tablet widths with no visible booking CTA.
*/
export function BookingFab() {
  const pathname = usePathname();

  const path = pathname.replace(/\/+$/, "");
  if (path === "/booking" || path.startsWith("/booking/")) return null;

  return (
    <Link
      href="/booking"
      className="press fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2 rounded-full bg-espresso px-5 font-semibold text-bone shadow-lifted lg:hidden"
    >
      <CalendarBlank size={24} weight="bold" className="shrink-0" />
      Book Now
    </Link>
  );
}
