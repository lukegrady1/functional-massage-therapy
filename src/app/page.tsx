import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Barbell,
  PersonSimpleRun,
  HeartHalf,
  MapPin,
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
      {/* ---------- HERO: asymmetric split, organic asset ---------- */}
      <section className="bloom-warm relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-14 lg:pb-20">
          {/*
            Deliberately NOT wrapped in <Reveal>. Reveal serializes opacity:0
            into the SSR markup, so anything above the fold stays invisible
            until hydration. The hero renders immediately and static.
          */}
          <div>
            <Eyebrow>Sturbridge, MA</Eyebrow>
            <h1 className="mt-6 font-display text-[2.8rem] font-bold leading-[1.08] tracking-tight text-espresso sm:text-6xl lg:text-[4.2rem]">
              Tailored massage
              <br />
              that helps you{" "}
              <em className="pb-1 leading-[1.15] text-copper">heal</em>.
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
              <Button href="/about" variant="outline">
                Meet Lauren
              </Button>
            </div>
          </div>

          {/*
            The one hero image, held in an organic petal shape rather than a
            rectangle, with an offset tan plate behind it for depth.
          */}
          {/* Wrapper is sized to the photo so the offset plate tracks it. */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              aria-hidden
              className="edge-petal absolute -right-4 -top-4 hidden h-full w-full bg-tan sm:block"
            />
            <div className="edge-petal relative aspect-[4/5] w-full overflow-hidden shadow-[0_24px_60px_-24px_rgb(20_19_18_/_0.4)]">
              <Image
                src={asset("/treatment-room.webp")}
                alt="The Functional Massage Therapy treatment room in Sturbridge"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LAUREN: split, small portrait ---------- */}
      <section className="texture-linen bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-28">
          <Reveal className="order-2 lg:order-1">
            <div className="edge-organic relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden shadow-[0_18px_44px_-18px_rgb(46_38_32_/_0.35)] lg:max-w-none">
              <Image
                src={asset("/lauren-portrait.webp")}
                alt="Lauren, owner and licensed massage therapist"
                fill
                sizes="(max-width: 1024px) 280px, 28vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-[2.6rem]">
                Hi, I&apos;m Lauren. This is a small but mighty practice.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
                My background is in fitness, competitive powerlifting, and
                healthy living. I furthered my education in massage therapy in
                2020, and at Boston College I worked with their D1 football team
                on pre-season sports massage and recovery.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-espresso transition-colors hover:text-copper"
              >
                Read Lauren&apos;s full story
                <ArrowRight size={18} weight="bold" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES: bento, tone-differentiated ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-[2.6rem]">
              Bodywork built around results
            </h2>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-espresso transition-colors hover:text-copper"
            >
              View all services
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        </Reveal>

        {/* 4 services, 4 cells, asymmetric rhythm: 4/2 then 2/4 */}
        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {services.map((s, i) => {
            const t = toneStyles[s.tone];
            const span = i === 0 || i === 3 ? "lg:col-span-4" : "lg:col-span-2";
            return (
              <Reveal key={s.slug} delay={i * 0.06} className={`${span} group`}>
                <Link
                  href="/services"
                  className={`${t.cell} relative flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8`}
                >
                  <span
                    className={`${t.rule} mb-6 block h-px w-10 origin-left transition-transform duration-300 group-hover:scale-x-[2.4]`}
                  />
                  <span
                    className={`${t.meta} text-xs font-semibold uppercase tracking-[0.16em]`}
                  >
                    {s.durations}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold">
                    {s.name}
                  </h3>
                  <p
                    className={`${t.body} mt-2 max-w-md text-[0.95rem] leading-relaxed`}
                  >
                    {s.summary}
                  </p>
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
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-[2.6rem]">
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
                <span className="font-display text-4xl font-bold leading-none text-copper-light">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold">
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

      {/* ---------- TESTIMONIAL: full-width quote on a sunk surface ---------- */}
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
            <figure className="mx-auto mt-14 max-w-3xl text-center">
              <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight text-espresso sm:text-[2rem]">
                &ldquo;Lauren actually listens, finds the problem, and fixes it.
                My squat depth came back after one session.&rdquo;
              </blockquote>
              <figcaption className="mt-7 text-sm text-muted">
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
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-[2.6rem]">
                Find me inside Historic Yoga in Sturbridge
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-start gap-3 text-lg text-muted transition-colors hover:text-copper"
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
              <h3 className="font-display text-xl font-bold text-espresso">
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
