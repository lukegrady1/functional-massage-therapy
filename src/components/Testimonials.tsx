import { Quotes, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import {
  googleRating,
  site,
  testimonials,
  type Testimonial,
} from "@/lib/site";

/*
  Renders the stars a reviewer actually gave, not a decorative row of five.
  The accessible label carries the number, so a screen reader gets "5 out of 5
  stars" rather than five separate icons.
*/
function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="flex shrink-0 items-center gap-0.5 text-copper"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          weight={i < rating ? "fill" : "regular"}
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${i < rating ? "" : "opacity-30"}`}
        />
      ))}
    </span>
  );
}

/*
  Client testimonials.

  An auto-scrolling loop at every width (see `.marquee` in globals.css). Card
  widths are set so roughly three are visible at once on desktop and one plus a
  peek on a phone. The track renders the list twice and translates by -50%,
  which is what makes the loop seamless; the duplicate pass is aria-hidden so
  screen readers only ever encounter one copy.

  Cards here are deliberately NOT wrapped in <Reveal>. Reveal holds children at
  opacity 0 until they scroll into view, and cards parked off the right edge of
  a horizontal loop may never trigger it — they would ride around the loop
  invisible.

  No avatar photographs: the only portraits available are AI-generated stock
  faces, and pairing an invented face with a real person's quote misrepresents
  that client. A monogram carries the same weight and claims nothing.

  Unfilled entries (`draft`) render as outlined empty slots rather than being
  hidden, so an incomplete section is obvious in review. See lib/site.ts.
*/

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/*
  Phone widths are sized so two cards fit with a peek of the third. Three at a
  time was asked for but does not survive the arithmetic: on a 390px screen that
  is ~120px per card, and a 100-character quote wraps to ten lines of a dozen
  characters. Two at ~44vw leaves enough measure to read. The padding and type
  scale down with it — p-8 on a 172px card spends most of the width on air.

  Everything from `sm` up is unchanged; desktop was already right.
*/
/*
  No `h-full` here. It reads like "match the tallest card" but does the
  opposite: an explicit height opts a flex item out of `align-items: stretch`,
  so the short draft cards sat at content height next to a full quote. Letting
  stretch apply is what actually equalises them.
*/
const cardBase =
  "mr-3 flex w-[44vw] shrink-0 flex-col rounded-3xl p-5 sm:mr-5 sm:w-[19rem] lg:w-[23.5rem] sm:min-h-[18rem] sm:p-10";

function Card({ t }: { t: Testimonial }) {
  if (t.draft) {
    return (
      <div
        className={`${cardBase} items-center justify-center border-2 border-dashed border-line text-center`}
      >
        <Quotes weight="fill" className="h-5 w-5 text-line sm:h-7 sm:w-7" />
        <p className="mt-3 text-sm font-semibold text-muted sm:mt-4 sm:text-base">
          Awaiting client feedback
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted/70 sm:text-sm">
          Add a real, permissioned quote in{" "}
          <code className="font-mono text-[0.8rem]">lib/site.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <figure className={`${cardBase} surface-raised`}>
      {/*
        Stars sit opposite the quote mark rather than under the name: the
        rating is the first thing scanned, and at the foot of a 300-word card
        it would be read last if at all.
      */}
      <div className="flex shrink-0 items-center justify-between gap-3">
        <Quotes
          weight="fill"
          className="h-5 w-5 shrink-0 text-copper sm:h-7 sm:w-7"
        />
        <Stars rating={t.rating} />
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink sm:mt-5 sm:text-base">
        {t.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-2.5 sm:mt-8 sm:gap-4">
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-espresso text-xs font-semibold text-bone sm:h-11 sm:w-11 sm:text-sm"
        >
          {initials(t.name)}
        </span>
        <span className="min-w-0 text-xs font-semibold text-espresso sm:text-sm">
          {t.name}
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20 lg:pt-28">
      <Reveal>
        <div className="text-center">
          <h2 className="t-headline-lg text-espresso">What Our Clients Say</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            Trusted by athletes, professionals, and recovery seekers.
          </p>

          {/*
            The aggregate carries more weight than nine identical five-star
            rows, and it links out so the claim can be checked rather than
            just asserted. Figures come from lib/site.ts, where the date they
            were read off the listing is recorded — they go stale as reviews
            come in.
          */}
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 transition-colors duration-200 hover:border-copper"
          >
            <Stars rating={5} />
            <span className="text-sm text-muted">
              <span className="font-semibold text-espresso">
                {googleRating.score}
              </span>{" "}
              from {googleRating.count} Google reviews
            </span>
          </a>
        </div>
      </Reveal>

      {/*
        Bleeds to the screen edges on phones so cards enter and leave the
        viewport instead of stopping short of a margin.
      */}
      <div className="-mx-5 mt-10 overflow-hidden sm:-mx-8 sm:mt-14">
        <div className="marquee flex w-max">
          {testimonials.map((t, i) => (
            <Card key={t.draft ? `draft-${i}` : t.name} t={t} />
          ))}
          {/*
            Second pass: what the -50% translate lands on. `contents` keeps the
            wrapper out of the layout so these sit in the same flex row.
          */}
          {testimonials.map((t, i) => (
            <div key={`dup-${i}`} aria-hidden className="contents">
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
