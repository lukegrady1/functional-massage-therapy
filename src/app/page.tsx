import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Barbell,
  HandHeart,
  PersonSimpleTaiChi,
  MapPin,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/Testimonials";
import { services, hours, site } from "@/lib/site";
import { asset } from "@/lib/asset";

/*
  Page composition follows the Stitch mockup section for section — hero over a
  scrim, philosophy bento, three featured service cards, coaching spotlight,
  testimonials, closing CTA — on this site's espresso/copper palette rather
  than Stitch's forest green.

  Two sections have no Stitch equivalent and are kept because a local practice
  cannot do without them: the numbered approach, and location + hours.
*/

const serviceIcons: Record<string, Icon> = {
  "sports-recovery": Barbell,
  "deep-tissue": HandHeart,
  "functional-therapeutic": PersonSimpleTaiChi,
};

// Stitch features three services and sends the rest to the services page.
const featured = services.filter((s) => s.slug in serviceIcons);

const principles = [
  {
    title: "Evidence-based assessment",
    body: "Every session starts with how you actually move, not a fixed routine.",
  },
  {
    title: "Integrated recovery",
    body: "Hands-on work paired with the self-care that holds it between visits.",
  },
];

const approach = [
  {
    n: "01",
    title: "Assess",
    body: "We start with how you actually move. The session is built around your body, your goals, and the pattern behind the pain.",
  },
  {
    n: "02",
    title: "Treat",
    body: "Focused, hands-on work into the tissue that needs it. We address the root of the restriction, not just the spot that hurts.",
  },
  {
    n: "03",
    title: "Empower",
    body: "You leave with the tools to hold your progress between visits. Real healing, not a temporary fix.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate flex min-h-[clamp(560px,78vh,760px)] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={asset("/treatment-room.webp")}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/85 to-bone/20 sm:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bone to-transparent" />
        </div>

        {/*
          Deliberately NOT wrapped in <Reveal>. Reveal serializes opacity:0
          into the SSR markup, so anything above the fold stays invisible
          until hydration. The hero renders immediately and static.
        */}
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <div className="max-w-xl">
            {/* Stitch marks the hero with a filled pill, not a rule. */}
            <span className="inline-block rounded-full bg-tan px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-espresso">
              Sturbridge, MA
            </span>
            <h1 className="mt-6 font-display text-[2.9rem] font-semibold leading-[1.04] tracking-[-0.02em] text-espresso sm:text-6xl lg:text-[4.1rem]">
              Tailored massage that helps you{" "}
              <em className="italic text-copper">heal</em>.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Whole-body bodywork for athletes, weekend warriors, and chronic
              pain. Built around you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/booking">
                Book a Session
                <ArrowRight size={18} weight="bold" />
              </Button>
              <Button href="/coaching" variant="outline">
                Explore Coaching
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PHILOSOPHY: 5/7 split, text + image mosaic ---------- */}
      <section className="texture-linen bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-espresso sm:text-[2.6rem]">
                Our philosophy
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[52ch] leading-relaxed text-muted">
                We move past relaxation to address the mechanics underneath.
                The functional approach pairs anatomical precision with years
                on the platform and on the sidelines, so the work targets the
                pattern behind the pain rather than the spot that hurts.
              </p>
            </Reveal>

            <ul className="mt-8 flex flex-col gap-5">
              {principles.map((p, i) => (
                <Reveal as="li" key={p.title} delay={0.12 + i * 0.06}>
                  <div className="flex items-start gap-4">
                    <CheckCircle
                      size={22}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-copper"
                    />
                    <div>
                      <h3 className="font-semibold text-espresso">{p.title}</h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.26}>
              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-2 font-semibold text-espresso transition-colors duration-200 hover:text-copper"
              >
                Meet Lauren
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          {/* Tall image beside a stacked pair, per Stitch. */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:h-[31rem]">
            <Reveal className="h-full">
              <div className="reveal-image shadow-ambient relative h-64 w-full overflow-hidden rounded-2xl sm:h-full">
                <Image
                  src={asset("/hands-detail.webp")}
                  alt="Close detail of hands working into the muscles of a back"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-rows-2">
              <Reveal delay={0.08} className="h-full">
                <div className="reveal-image shadow-ambient relative h-48 w-full overflow-hidden rounded-2xl sm:h-full">
                  <Image
                    src={asset("/eucalyptus-still-life.webp")}
                    alt="Eucalyptus, a warm stone and treatment oil on a wood surface"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.16} className="h-full">
                <figure className="flex h-full flex-col justify-end rounded-2xl bg-espresso p-8 text-bone">
                  <blockquote className="font-display text-2xl font-semibold italic leading-snug">
                    &ldquo;Expect to heal.&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-bone/55">
                    The functional approach
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED SERVICES: centered heading, 3 cards ---------- */}
      <section className="surface-inset">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-espresso sm:text-[2.6rem]">
                Featured services
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Treatments built for restoration, pain management, and athletic
                maintenance.
              </p>
            </div>
          </Reveal>

          {/*
            Uniform paper cards rather than the tone-per-service treatment.
            Stitch's grid reads as one menu of equals; the tonal system still
            differentiates the rows on the services page itself.
          */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {featured.map((s, i) => {
              const Icon = serviceIcons[s.slug];
              return (
                <Reveal key={s.slug} delay={i * 0.06} className="group h-full">
                  <Link
                    href={`/services#${s.slug}`}
                    className="lift shadow-ambient flex h-full flex-col rounded-3xl border border-line/60 bg-surface p-8 sm:p-10"
                  >
                    <Icon size={34} className="text-copper" />
                    <span className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      {s.durations}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.01em] text-espresso">
                      {s.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {s.summary}
                    </p>

                    <ul className="mt-6 mb-8 flex flex-col gap-2.5">
                      {s.bestFor.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2.5 text-sm text-muted"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-espresso">
                      Learn more
                      <ArrowRight
                        size={16}
                        weight="bold"
                        className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              <Button href="/services" variant="outline">
                View all services
                <ArrowRight size={18} weight="bold" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- APPROACH: sticky heading + step list ---------- */}
      <section className="bg-espresso text-bone">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-28">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <Eyebrow onDark>The functional approach</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[2.6rem]">
                Healing that lasts past the table
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-bone/70">
                The goal is to send you home with the tools for continued
                self-care, so the progress holds.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="reveal-image relative mt-10 hidden aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl lg:block">
                <Image
                  src={asset("/treatment-in-progress.webp")}
                  alt="A treatment session in progress"
                  fill
                  sizes="34vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <ul className="flex flex-col">
            {approach.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 0.08}
                className="flex gap-6 border-t border-bone/15 py-8 first:border-t-0 first:pt-0"
              >
                <span className="font-display text-4xl font-semibold leading-none text-copper-light">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">
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

      {/* ---------- COACHING SPOTLIGHT: half text, half image ---------- */}
      <section className="overflow-hidden bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <div className="shadow-ambient flex flex-col overflow-hidden rounded-[2rem] bg-graphite lg:flex-row">
              <div className="flex flex-col justify-center p-10 sm:p-14 lg:w-1/2 lg:p-16">
                <Eyebrow onDark>Coaching program</Eyebrow>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-bone sm:text-[2.6rem]">
                  Beyond the table: integrated wellness
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/70">
                  The table is where we find the pattern. Coaching is where it
                  gets rebuilt — movement, load, and recovery habits shaped
                  around the life you actually live.
                </p>
                <div className="mt-9">
                  <Button href="/coaching" variant="light">
                    Learn about coaching
                    <ArrowRight size={18} weight="bold" />
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-[480px] lg:w-1/2">
                <Image
                  src={asset("/athlete-stretch.webp")}
                  alt="An athlete moving through a mobility routine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* ---------- LOCATION & HOURS ---------- */}
      <section className="bloom-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <Reveal>
              <Eyebrow>Visit the studio</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-espresso sm:text-[2.6rem]">
                Find me inside Historic Yoga in Sturbridge
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-start gap-3 text-lg text-muted transition-colors duration-200 hover:text-copper"
              >
                <MapPin
                  size={24}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-copper"
                />
                <span>
                  {site.address.line1}, {site.address.note}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8">
                {/* Straight to Maps now that there is no contact page. */}
                <Button href={site.mapsHref} variant="outline" external>
                  Get directions
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="reveal-image shadow-ambient relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src={asset("/oils-still-life.webp")}
                  alt="Massage oil and warm stones resting on folded linen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="surface-raised rounded-3xl p-7 sm:p-9">
              <h3 className="font-display text-xl font-semibold text-espresso">
                Hours
              </h3>
              <ul className="mt-5 flex flex-col">
                {hours.map((h) => {
                  const closed = h.open === "Closed";
                  return (
                    <li
                      key={h.day}
                      className="flex items-baseline justify-between py-3 text-[0.95rem]"
                    >
                      <span
                        className={
                          closed ? "text-muted/70" : "font-medium text-ink"
                        }
                      >
                        {h.day}
                      </span>
                      <span
                        className={
                          closed
                            ? "text-muted/70"
                            : "font-semibold tabular-nums text-espresso"
                        }
                      >
                        {h.open}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
