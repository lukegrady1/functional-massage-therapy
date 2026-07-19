import Script from "next/script";

/*
  GoHighLevel booking widget for a SINGLE calendar (white-labelled on
  api.gradydigital.com).

  This used to embed the group widget (/widget/group/<id>), which rendered GHL's
  own menu of all eleven calendars — unordered, GHL-styled, descriptions cut
  mid-sentence. The service menu now lives in our own markup and each tier links
  straight to its calendar, so this component only ever shows a date/time
  picker for one already-chosen session.

  Availability is not our concern: GHL computes free slots when the widget loads
  and re-checks the slot on submit. The calendars share conflict detection, so a
  booking on any one of them blocks the overlapping slots on the rest.

  form_embed.js is what makes this usable: the widget posts its content height
  back to the parent and the script resizes the iframe to match, so the page
  scrolls rather than the calendar scrolling inside a box.

  Do NOT add `scrolling="no"` or `overflow: hidden` here. Both are dead once the
  script runs — form_embed.js overwrites scrolling to "yes" and overflow to
  "auto" itself — but they matter in the failure case: if the script is blocked
  or never runs, they leave the iframe stuck at the 760px starting height with
  its internal scrolling suppressed, i.e. a clipped box you cannot scroll.
  Without them that same failure degrades to a 760px box that scrolls
  internally, which is usable. The inner scrollbar is the fallback, not a
  competing one. (GHL's own copy-paste snippet includes scrolling="no" — it is
  wrong for exactly this reason.)

  The `height` below is only the pre-resize starting point; form_embed.js
  overwrites it once the widget reports a height.
*/

export function BookingEmbed({
  calendarId,
  title,
}: {
  calendarId: string;
  title: string;
}) {
  return (
    <div className="surface-raised overflow-hidden rounded-3xl">
      <iframe
        /*
          The id changes with the calendar so that navigating between tiers
          gives React a distinct element rather than reusing the previous
          calendar's iframe.
        */
        id={`booking-widget-${calendarId}`}
        key={calendarId}
        src={`https://api.gradydigital.com/widget/booking/${calendarId}`}
        title={title}
        className="w-full"
        style={{ border: "none", height: 760 }}
      />
      <Script
        src="https://api.gradydigital.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
