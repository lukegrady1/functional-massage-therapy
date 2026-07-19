import Link from "next/link";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

/*
  Quick-booking FAB from the Stitch mockup: calendar icon plus a permanent
  "Book Now" label, pinned bottom-right on phones.

  No longer a client component — with the label always shown there is no state
  or timer, so this renders on the server and ships no JavaScript. The visible
  text is also the accessible name, so no aria-label is needed.

  Hidden at `lg` rather than Stitch's `md` because that is where this site's
  nav switches to the desktop bar with its own Book Now button; matching the
  breakpoint literally would leave tablet widths with no visible booking CTA.
*/
export function BookingFab() {
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
