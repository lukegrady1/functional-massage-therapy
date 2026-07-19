import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/site";

/*
  Client testimonials, 3-up.

  Deliberately no avatar photographs. The only portraits available are
  AI-generated stock faces, and pairing an invented face with a real person's
  quote misrepresents that client. A monogram carries the same visual weight
  and claims nothing.

  Unfilled entries (`draft`) render as outlined empty slots rather than being
  hidden, so an incomplete section is obvious in review instead of silently
  shipping a grid that looks finished. See lib/site.ts.
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

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20 lg:pt-28">
      <Reveal>
        <div className="text-center">
          <h2 className="t-headline-lg text-espresso">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            Trusted by athletes, professionals, and recovery seekers.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) =>
          t.draft ? (
            <Reveal key={`draft-${i}`} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-line p-8 text-center sm:min-h-[18rem] sm:p-10">
                <Quotes size={28} weight="fill" className="text-line" />
                <p className="mt-4 font-semibold text-muted">
                  Awaiting client feedback
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted/70">
                  Add a real, permissioned quote in{" "}
                  <code className="font-mono text-[0.8rem]">lib/site.ts</code>,
                  or remove this slot.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="surface-raised flex h-full flex-col rounded-3xl p-8 sm:min-h-[18rem] sm:p-10">
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
                    <span className="block font-semibold text-espresso">
                      {t.name}
                    </span>
                    <span className="block text-muted">{t.context}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}
