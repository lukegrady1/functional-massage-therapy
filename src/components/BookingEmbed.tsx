import Script from "next/script";

/*
  GoHighLevel booking widget (white-labelled on api.gradydigital.com).

  form_embed.js is what makes this usable: the widget posts its content height
  back to the parent and the script resizes the iframe to match. Without it the
  iframe stays at whatever height we set and the calendar scrolls inside a box.
  That is also why `scrolling="no"` is on the iframe — the script owns the
  height, so an inner scrollbar would just be a second, competing one.

  The `height` below is only the pre-resize starting point; form_embed.js
  overwrites it once the widget reports its real height.
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
        scrolling="no"
        className="w-full"
        style={{ border: "none", overflow: "hidden", height: 760 }}
      />
      <Script
        src="https://api.gradydigital.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
