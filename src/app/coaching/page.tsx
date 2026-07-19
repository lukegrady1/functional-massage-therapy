import type { Metadata } from "next";
import { ArrowRight, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { toneStyles } from "@/lib/tones";
import {
  coachingPillars,
  coachingSteps,
  coachingResults,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "One-to-one coaching with Lauren at Functional Massage Therapy in Sturbridge, MA. Strength, nutrition, and recovery support built on a background in powerlifting and D1 sports recovery.",
};

export default function CoachingPage() {
  /*
    Results are only rendered once real, permissioned client feedback exists.
    Until then the section shows labelled empty slots so the page is honest
    about being unfinished rather than shipping invented testimonials.
  */
  const filledResults = coachingResults.filter((r) => r.quote.trim() !== "");
  const hasResults = filledResults.length > 0;

  return (
    <>
      {/* Header. Above the fold, so no Reveal. */}
      <section className="bloom-warm">
        {/*
          Everything below tightens at the base size only, with sm: restoring
          the original step. Phones were running this page to six and a half
          screens on generous desktop spacing that had simply been inherited;
          nothing at sm and above moves.
        */}
        <div className="mx-auto max-w-7xl px-5 pt-8 pb-9 sm:px-8 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-16">
          <Eyebrow>Coaching</Eyebrow>
          <h1 className="mt-5 max-w-3xl t-headline-xl text-espresso sm:mt-6">
            Coaching that works on the{" "}
            <em className="pb-1 leading-[1.15] text-copper">whole athlete</em>.
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted sm:mt-6 sm:text-lg">
            For people who train hard and keep hitting the same wall. Strength,
            nutrition, and recovery handled as one thing rather than three.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button href="#enquire">
              Enquire about coaching
              <ArrowRight size={18} weight="bold" />
            </Button>
            <Button href="/about" variant="outline">
              Meet Lauren
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars: tonal panels, one per coaching area */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-20 lg:pb-24">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
          {coachingPillars.map((p, i) => {
            const t = toneStyles[p.tone];
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div
                  className={`${t.cell} flex h-full flex-col rounded-3xl p-5 sm:p-8`}
                >
                  <span className={`${t.rule} mb-4 block h-px w-10 sm:mb-6`} />
                  <h2 className="t-headline-md">
                    {p.title}
                  </h2>
                  <p className={`${t.body} mt-3 leading-relaxed`}>{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How it works: sticky heading + numbered steps */}
      <section className="bg-espresso text-bone">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:gap-12 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-28">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <h2 className="t-headline-lg">
                How coaching works
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-md leading-relaxed text-bone/70 sm:mt-5 sm:text-lg">
                This is a working relationship, not a plan you download and
                never hear about again. It suits people who want someone
                accountable on the other end and are willing to change course
                when the training says so. If you would rather be handed a
                program and left alone, I am not the right coach for you.
              </p>
            </Reveal>
          </div>

          <ul className="flex flex-col">
            {coachingSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 0.08}
                className="flex gap-4 border-t border-bone/15 py-5 first:border-t-0 first:pt-0 sm:gap-6 sm:py-8"
              >
                <span className="font-display text-3xl font-bold leading-none text-copper-light sm:text-4xl">
                  {step.n}
                </span>
                <div>
                  <h3 className="t-headline-md">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-bone/70">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Client results */}
      <section className="surface-inset">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-20 lg:py-24">
          <Reveal>
            <h2 className="max-w-xl t-headline-lg text-espresso">
              Client results
            </h2>
          </Reveal>

          {hasResults ? (
            <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {filledResults.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.06}>
                  <figure className="surface-raised flex h-full flex-col rounded-3xl p-5 sm:p-7">
                    <Quotes size={28} weight="fill" className="text-copper" />
                    <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                      {r.quote}
                    </blockquote>
                    <figcaption className="mt-6 text-sm">
                      <span className="font-semibold text-espresso">
                        {r.name}
                      </span>
                      <br />
                      <span className="text-muted">{r.detail}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            /*
              Empty state. Deliberately reads as an unfilled slot so the page
              is never published with invented testimonials in place.
            */
            <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {coachingResults.map((_, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  {/*
                    Shorter on phones than the sm slot. These hold no content
                    yet, and three 210px dashed boxes were spending most of a
                    screen saying nothing — the label still reads clearly at
                    150px, which is all an unfilled slot has to do.
                  */}
                  <div className="flex h-full min-h-[150px] flex-col justify-center rounded-3xl border border-dashed border-espresso/25 p-5 text-center sm:min-h-[210px] sm:p-7">
                    <p className="t-headline-md text-espresso">
                      Client result slot
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Add a real, permissioned client quote with their name and
                      what they were working on.
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enquiry: routes to a separate coaching pipeline in the CRM */}
      <section id="enquire" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.25fr] lg:gap-16 lg:py-24">
          <div>
            <Reveal>
              <h2 className="t-headline-lg text-espresso">
                Start the conversation
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-md leading-relaxed text-muted sm:mt-5 sm:text-lg">
                Tell me what you’re training for and where you keep getting
                stuck. I’ll come back to you within one business day.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-espresso transition-colors hover:text-copper"
              >
                Or call {site.phone}
                <ArrowRight size={18} weight="bold" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ContactForm
              source="coaching"
              heading="Coaching enquiry"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
