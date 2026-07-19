import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { testimonials, type Testimonial } from "@/lib/site";

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

const cardBase =
  "mr-4 flex h-full w-[78vw] max-w-sm shrink-0 flex-col rounded-3xl p-8 sm:mr-5 sm:w-[19rem] sm:max-w-none lg:w-[23.5rem] sm:min-h-[18rem] sm:p-10";

function Card({ t }: { t: Testimonial }) {
  if (t.draft) {
    return (
      <div
        className={`${cardBase} items-center justify-center border-2 border-dashed border-line text-center`}
      >
        <Quotes size={28} weight="fill" className="text-line" />
        <p className="mt-4 font-semibold text-muted">Awaiting client feedback</p>
        <p className="mt-2 text-sm leading-relaxed text-muted/70">
          Add a real, permissioned quote in{" "}
          <code className="font-mono text-[0.8rem]">lib/site.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <figure className={`${cardBase} surface-raised`}>
      <Quotes size={28} weight="fill" className="text-copper" />
      <blockquote className="mt-5 flex-1 leading-relaxed text-ink">
        {t.quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-espresso text-sm font-semibold text-bone"
        >
          {initials(t.name)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-espresso">{t.name}</span>
          <span className="block text-muted">{t.context}</span>
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
