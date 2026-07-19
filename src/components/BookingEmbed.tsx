import Script from "next/script";

/*
  GoHighLevel booking widget (white-labelled on api.gradydigital.com).

  form_embed.js is what makes this usable: the widget posts its content height
  back to the parent and the script resizes the iframe to match, so the page
  scrolls rather than the calendar scrolling inside a box.

  Do NOT re-add `scrolling="no"` or `overflow: hidden` here. Both were dead when
  the script runs — form_embed.js overwrites scrolling to "yes" and overflow to
  "auto" itself — but they mattered in the failure case: if the script is blocked
  or never runs, they left the iframe stuck at the 760px starting height with its
  internal scrolling suppressed, i.e. a clipped box you cannot scroll. Without
  them that same failure degrades to a 760px box that scrolls internally, which
  is usable. The inner scrollbar is the fallback, not a competing one.

  The `height` below is only the pre-resize starting point; form_embed.js
  overwrites it once the widget reports a height.
*/
const WIDGET_SRC =
  "https://api.gradydigital.com/widget/group/GiiHCBEOiYVllB0rLIGx";

export function BookingEmbed() {
  return (
    <div className="surface-raised overflow-hidden rounded-3xl">
      <iframe
        id="book-a-massage-widget"
        src={WIDGET_SRC}
        title="Book an appointment"
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
