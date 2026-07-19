import { CalendarCheck, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

/*
  GoHighLevel calendar embed slot.
  ------------------------------------------------------------------
  To go live, paste your GHL calendar embed URL below. It looks like:
    https://api.leadconnectorhq.com/widget/booking/XXXXXXXXXXXX

  GHL also provides a one-time script tag for auto-resizing. Add it to
  src/app/layout.tsx <body> (or here) once:
    <Script src="https://link.msgsndr.com/js/form_embed.js" />
  (import Script from "next/script")
  ------------------------------------------------------------------
*/
const CALENDAR_EMBED_URL = ""; // <-- paste GHL booking widget URL here

export function BookingEmbed() {
  if (CALENDAR_EMBED_URL) {
    return (
      <div className="surface-raised overflow-hidden rounded-3xl">
        <iframe
          src={CALENDAR_EMBED_URL}
          title="Book an appointment"
          className="h-[760px] w-full"
          style={{ border: "none" }}
        />
      </div>
    );
  }

  // Placeholder shown until the GHL URL is wired in.
  return (
    <div className="surface-inset flex flex-col items-center justify-center rounded-3xl border border-dashed border-espresso/25 px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tan text-espresso">
        <CalendarCheck size={28} weight="bold" />
      </span>
      <h3 className="mt-5 t-headline-md text-espresso">
        Online booking calendar
      </h3>
      <p className="mt-3 max-w-md leading-relaxed text-muted">
        The live scheduling calendar drops in here once the GoHighLevel widget
        is connected. Until then, you can book by phone.
      </p>
      <a
        href={site.phoneHref}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-[0.95rem] font-semibold text-bone transition-colors hover:bg-espresso-deep"
      >
        <Phone size={18} weight="fill" />
        Call to book · {site.phone}
      </a>
      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
        {/* Dev note */}Developer: add the GHL URL in BookingEmbed.tsx
      </p>
    </div>
  );
}
