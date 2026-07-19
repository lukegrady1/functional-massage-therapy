import Link from "next/link";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

/*
  Quick-booking FAB from the Stitch mockup.

  Hidden at `lg` rather than Stitch's `md` because that is where this site's
  nav switches to the desktop bar with its own Book Now button — matching
  Stitch's breakpoint literally would leave tablet widths with no visible
  booking CTA at all, which is the opposite of what the FAB is for.

  Icon-only, so it carries an explicit label for screen readers.
*/
export function BookingFab() {
  return (
    <Link
      href="/booking"
      aria-label="Book a session"
      className="press fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-bone shadow-lifted lg:hidden"
    >
      <CalendarBlank size={24} weight="bold" />
    </Link>
  );
}
