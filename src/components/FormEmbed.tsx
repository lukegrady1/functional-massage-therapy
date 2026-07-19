import Script from "next/script";

/*
  GoHighLevel form embed (white-labelled on api.gradydigital.com).

  Sibling of BookingEmbed and shares its constraints — see that file for the
  full reasoning. In short:

  - form_embed.js is what makes this usable: the widget posts its content
    height back to the parent and the script resizes the iframe to match, so
    the page scrolls rather than the form scrolling inside a box.
  - Do NOT add `scrolling="no"` or `overflow: hidden`. Both are dead once the
    script runs, but if it is blocked they leave the iframe pinned at its
    starting height with internal scrolling suppressed — a clipped box you
    cannot scroll. Without them the same failure degrades to a box that
    scrolls internally, which is usable.

  Two deliberate changes from the snippet GoHighLevel hands you:

  1. `height: 100%` becomes a pixel starting height. Percentage height only
     resolves against a parent with a definite height; in normal page flow it
     computes to auto and the iframe collapses to nothing before the resize
     script has run. The form's own data-height is the right starting value.
  2. `data-layout="{'id':'INLINE'}"` is single-quoted in the snippet, which is
     not JSON. It is passed through verbatim because form_embed.js is what
     parses it, and it is what the script expects.
*/

export function FormEmbed({
  formId,
  title,
  /* GHL reports the form's designed height; used only until the script resizes. */
  initialHeight = 674,
}: {
  formId: string;
  title: string;
  initialHeight?: number;
}) {
  return (
    <div className="surface-raised overflow-hidden rounded-3xl">
      <iframe
        src={`https://api.gradydigital.com/widget/form/${formId}`}
        id={`inline-${formId}`}
        title={title}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={title}
        data-height={initialHeight}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        className="w-full"
        style={{ border: "none", height: initialHeight }}
      />
      {/*
        Same src as the booking widget's script, so next/script loads it once
        per page even where both embeds appear.
      */}
      <Script
        src="https://api.gradydigital.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
