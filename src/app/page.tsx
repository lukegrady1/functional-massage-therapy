import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Barbell,
  PersonSimpleRun,
  HeartHalf,
  MapPin,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services, hours, site } from "@/lib/site";
import { toneStyles } from "@/lib/tones";
import { asset } from "@/lib/asset";

const audiences = [
  { icon: Barbell, label: "Lifters & powerlifters" },
  { icon: PersonSimpleRun, label: "Runners & field athletes" },
  { icon: HeartHalf, label: "Living with chronic pain" },
];

const credentials = [
  "Licensed massage therapist since 2020",
  "Pre-season sports massage, Boston College D1 football",
  "Competitive powerlifting background",
  "Cupping & assisted stretch certified",
];

const principles = [
  {
    title: "Assessment first",
    body: "Every session starts with how you actually move, not a fixed routine.",
  },
  {
    title: "Integrated recovery",
    body: "Hands-on work paired with the self-care that holds it between visits.",
  },
];

const coachingPoints = [
  {
    title: "Movement audit",
    body: "We map the patterns loading the tissue we keep having to treat.",
  },
  {
    title: "Load & recovery plan",
    body: "Training, sleep, and desk setup adjusted around what your body tolerates.",
  },
  {
    title: "Between-session work",
    body: "A short, specific routine you will actually do, reviewed as you progress.",
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
      {/*
        ---------- HERO: full-bleed room, text held on a scrim ----------
        The photograph carries the atmosphere, so it runs edge to edge rather
        than sitting in a shaped frame. A directional scrim keeps the left
        column opaque enough for AA text contrast while the right side of the
        room stays legible.
      */}
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
          {/* Two scrims: one horizontal for the text column, one to seat the
              photo into the page background at the bottom edge. */}
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
            <Eyebrow>Sturbridge, MA</Eyebrow>
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

      {/* ---------- PHILOSOPHY: text column + image mosaic ---------- */}
      <section className="texture-linen bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>The practice</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-espresso sm:text-[2.6rem]">
                Hi, I’m Lauren. This is a small but mighty practice.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[52ch] leading-relaxed text-muted">
                My background is in fitness, competitive powerlifting, and
                healthy living. I furthered my education in massage therapy in
                2020, and at Boston College I worked with their D1 football team
                on pre-season sports massage and recovery.
              </p>
            </Reveal>

            <ul className="mt-8 flex flex-col gap-5">
              {principles.map((p, i) => (
                <Reveal as="li" key={p.title} delay={0.18 + i * 0.06}>
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

            <Reveal delay={0.32}>
              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-2 font-semibold text-espresso transition-colors duration-200 hover:text-copper"
              >
                Read Lauren’s full story
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          {/*
            Mosaic: one tall portrait beside a stacked pair. The quote tile
            fills the fourth slot so the grid resolves without needing a
            photograph the practice does not have.
          */}
          {/*
            Portrait takes the wider 3/5 column. A narrower one forces
            object-cover to crop into the face far harder than reads well.
          */}
          <div className="grid gap-4 sm:grid-cols-5 lg:col-span-7 lg:h-[30rem]">
            <Reveal className="h-full sm:col-span-3">
              <div className="reveal-image shadow-ambient relative h-72 w-full overflow-hidden rounded-2xl sm:h-full">
                <Image
                  src={asset("/lauren-portrait.webp")}
                  alt="Lauren, owner and licensed massage therapist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:col-span-2 sm:grid-rows-2">
              {/*
                A credential tile rather than a second photograph. The
                practice's remaining images are dim phone snaps that fight the
                palette; type on a tan ground says more and stays on-brand.
              */}
              <Reveal delay={0.08} className="h-full">
                <ul className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-tan p-8">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-baseline gap-3">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-espresso/45" />
                      <span className="text-[0.95rem] font-medium text-espresso">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
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

      {/* ---------- SERVICES: tone-differentiated cards ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-espresso sm:text-[2.6rem]">
              Bodywork built around results
            </h2>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 font-semibold text-espresso transition-colors duration-200 hover:text-copper"
            >
              View all services
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((s, i) => {
            const t = toneStyles[s.tone];
            return (
              <Reveal key={s.slug} delay={i * 0.06} className="group">
                <Link
                  href="/services"
                  className={`${t.cell} lift shadow-ambient flex h-full flex-col rounded-3xl p-8 sm:p-10`}
                >
                  <span
                    className={`${t.rule} mb-6 block h-px w-10 origin-left transition-transform duration-300 ease-out group-hover:scale-x-[2.4]`}
                  />
                  <span
                    className={`${t.meta} text-xs font-semibold uppercase tracking-[0.16em]`}
                  >
                    {s.durations}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.01em]">
                    {s.name}
                  </h3>
                  <p className={`${t.body} mt-3 max-w-md leading-relaxed`}>
                    {s.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.bestFor.map((b) => (
                      <li
                        key={b}
                        className={`${t.chip} rounded-full px-3 py-1.5 text-xs font-medium`}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Inherits the cell's full-contrast text color rather than
                      the muted `meta` tone: this is the card's call to action. */}
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
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

      {/* ---------- COACHING SPOTLIGHT: inset panel, split ---------- */}
      <section className="overflow-hidden bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <div className="shadow-ambient flex flex-col overflow-hidden rounded-[2rem] bg-graphite lg:flex-row">
              <div className="flex flex-col justify-center p-10 sm:p-14 lg:w-1/2 lg:p-16">
                <Eyebrow onDark>Coaching program</Eyebrow>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-bone sm:text-[2.6rem]">
                  Beyond the table
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

              {/*
                Numbered panel instead of a photograph: the coaching offer is
                a process, and showing the steps sells it better than a stock
                shot of two people with a tablet.
              */}
              <div className="bloom-warm flex flex-col justify-center gap-px bg-espresso p-10 sm:p-14 lg:w-1/2 lg:p-16">
                {coachingPoints.map((c, i) => (
                  <div
                    key={c.title}
                    className="border-t border-bone/12 py-6 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <span className="font-display text-sm font-semibold text-copper-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-bone">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-bone/65">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIAL: audience chips + one real quote ---------- */}
      <section className="surface-inset">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span
                key={a.label}
                className="surface-raised inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-espresso"
              >
                <a.icon size={18} weight="bold" className="text-copper" />
                {a.label}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="surface-raised mx-auto mt-14 max-w-3xl rounded-3xl p-10 text-center sm:p-14">
              <blockquote className="font-display text-2xl font-semibold italic leading-snug tracking-[-0.01em] text-espresso sm:text-[2rem]">
                &ldquo;Lauren actually listens, finds the problem, and fixes it.
                My squat depth came back after one session.&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted">
                <span className="font-semibold text-espresso">Mike Sartori</span>
                <br />
                Masters powerlifter, Worcester
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- LOCATION & HOURS: split, raised hours panel ---------- */}
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
                <Button href="/contact" variant="outline">
                  Get directions
                </Button>
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
