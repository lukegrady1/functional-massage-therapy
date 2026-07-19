"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

/*
  Google Business Profile map embed.

  Shared so the URL lives in one place — it appears in the footer of every page
  and on each booking page.

  Sizing note worth keeping: Google collapses the business info card (name,
  address, star rating) into a bare "Open in Maps" chip once the iframe drops
  below roughly 400px wide. Give this at least that much room wherever it is
  used, or the rating quietly disappears.

  ---------------------------------------------------------------------------
  Why this is not just an <iframe loading="lazy">

  It was, and it produced the complaint that the map "sometimes just is not
  there" at the foot of the page. Two separate causes, both fixed here:

  1. Native lazy loading starts the fetch only once the frame is within a
     short, browser-chosen distance of the viewport. Scroll to the footer with
     any speed and you arrive before the request has even gone out, then wait
     on Google's cold connection. An IntersectionObserver with a deliberately
     large rootMargin starts it roughly a screen earlier instead, so the load
     overlaps the scroll rather than following it.

  2. While it loaded there was nothing to look at — the iframe is blank until
     Google paints. That blank is what reads as broken. A placeholder now sits
     underneath permanently and the map fades in over it, so the space is
     always occupied by something deliberate.

  Local development hides both problems: the embed is warm in cache and the
  connection is not real, so it appears instantly. Judge this on the deployed
  site, throttled, with an empty cache.

  Deliberately NOT a click-to-load facade. That is the fastest option and the
  usual advice, but this map's whole job is answering "where are you" for
  someone deciding whether to drive here — making them click first to see it
  trades a real answer for a metric.
*/
const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.9312793331314!2d-72.06048369999999!3d42.087521900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6a7e25853e50b%3A0x725b4f148e17210d!2sFunctional%20Massage%20Therapy!5e0!3m2!1sen!2sus!4v1784424956324!5m2!1sen!2sus";

/*
  Start loading about a screen before the map is reached. Generous enough that
  the request is usually finished by the time it scrolls into view, but not so
  generous that every visitor who never reaches the footer pays for Google's
  embed anyway.
*/
const PRELOAD_MARGIN = "800px 0px";

export function LocationMap({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  /* Has the map come near enough to start fetching? */
  const [near, setNear] = useState(false);
  /* Has Google actually painted, i.e. can the placeholder go? */
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (near) return;
    const el = ref.current;
    if (!el) return;

    /*
      No observer (old browser): just load it rather than never showing a map.
      Deferred a frame rather than set inline — the initial state has to match
      the prerendered HTML, where `near` is always false, so this cannot be a
      lazy useState initialiser, and setting it synchronously here would
      cascade an extra render pass.
    */
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setNear(true));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: PRELOAD_MARGIN },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl bg-tan ${className}`}
    >
      {/*
        Placeholder. Light tan rather than matching either surface, because it
        stands in for a light Google map and the same component sits on the
        dark footer and the light booking sidebar — a tone that split the
        difference would flash on one of them when the map paints.
      */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <MapPin
          size={26}
          weight="fill"
          className={`text-espresso/40 ${near && !loaded ? "animate-pulse" : ""}`}
        />
        <span className="text-sm font-semibold text-espresso/70">
          {site.address.line1}
        </span>
        <span className="text-xs text-espresso/50">
          {site.address.city}, {site.address.state} {site.address.zip}
        </span>
      </div>

      {near && (
        <>
          {/*
            React hoists these into <head>. Rendered with the iframe rather
            than on mount so the sockets are only opened for visitors who
            actually get near the footer. The iframe document is the request
            that follows immediately; gstatic serves the tiles behind it, which
            is the part that benefits from a warm connection.
          */}
          <link rel="preconnect" href="https://maps.gstatic.com" />
          <link rel="preconnect" href="https://maps.googleapis.com" />
          <iframe
            src={EMBED_SRC}
            title="Map showing Functional Massage Therapy at 48 Main St, Sturbridge, MA"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => setLoaded(true)}
            className={`relative h-full w-full border-0 transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </>
      )}
    </div>
  );
}
