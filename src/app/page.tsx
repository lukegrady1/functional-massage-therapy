import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Barbell,
  PersonSimpleRun,
  HeartHalf,
  MapPin,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services, hours, site } from "@/lib/site";
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
    body: "You leave with the knowledge and self-care tools to hold your progress between visits. Real healing, not a temporary fix.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO (asymmetric split) ---------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-16 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24 lg:pb-28">
          <div>
            <Reveal>
              <Eyebrow>Sturbridge, MA · Sports &amp; therapeutic massage</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display text-[2.7rem] font-bold leading-[1.04] tracking-tight text-espresso sm:text-6xl lg:text-[4.1rem]">
                Tailored massage that helps you{" "}
                <span className="italic text-copper">heal</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                A comprehensive, whole-body approach for athletes, weekend
                warriors, and chronic pain. Tailored to you, the individual.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/booking">
                  Book a Session
                  <ArrowRight size={18} weight="bold" />
                </Button>
                <Button href="/about" variant="outline">
                  Meet Lauren
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-line shadow-xl shadow-espresso/10 sm:aspect-[4/5] lg:aspect-[5/6]">
              <Image
                src={asset("/treatment-room.png")}
                alt="Inside the Functional Massage Therapy treatment room in Sturbridge"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-espresso px-6 py-5 text-bone shadow-lg sm:block">
              <p className="font-display text-3xl font-bold leading-none">2021</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-bone/70">
                Established
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- INTRO / LAUREN (image + text split) ---------- */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-[2rem] bg-line sm:max-w-lg lg:aspect-[5/6] lg:max-w-none">
              <Image
                src={asset("/lauren-portrait.png")}
                alt="Lauren, owner and licensed massage therapist"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-4xl">
                Hi, I&apos;m Lauren. This is a small but mighty practice.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                My background is in fitness, competitive powerlifting, and
                healthy living. I furthered my education in massage therapy in
                2020, and at Boston College I worked with their D1 football team
                on pre-season sports massage and recovery.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Now I bring that results-driven care to athletes, weekend
                warriors, and anyone working through chronic pain.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
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

      {/* ---------- SERVICES (bento grid) ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-4xl">
              Bodywork built around results
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-espresso transition-colors hover:text-copper"
            >
              View all services
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-6">
          {services.map((s, i) => {
            // 4 cells with rhythm: 4/2 then 2/4
            const span =
              i === 0 || i === 3 ? "lg:col-span-4" : "lg:col-span-2";
            return (
              <Reveal
                key={s.slug}
                delay={i * 0.06}
                className={`${span} group`}
              >
                <Link
                  href="/services"
                  className="relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-3xl sm:min-h-[300px]"
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/90 via-espresso-deep/35 to-transparent" />
                  <div className="relative p-6 sm:p-7">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-bone/75">
                      {s.durations}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-bone">
                      {s.name}
                    </h3>
                    <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-bone/80">
                      {s.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- APPROACH (asymmetric: sticky heading + step list) ---------- */}
      <section className="bg-espresso text-bone">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow onDark>The functional approach</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Healing that lasts past the table
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-bone/75">
                My goal is to empower you with the tools for continued self-care
                outside of our sessions, so the progress holds.
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
                <span className="font-display text-4xl font-bold leading-none text-copper">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-bone/75">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- AUDIENCE strip + TESTIMONIAL (full-width quote) ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="flex flex-wrap justify-center gap-3">
          {audiences.map((a) => (
            <span
              key={a.label}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-espresso"
            >
              <a.icon size={18} weight="bold" className="text-copper" />
              {a.label}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mx-auto mt-14 max-w-3xl text-center">
            <Quotes size={44} weight="fill" className="mx-auto text-copper" />
            <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-espresso sm:text-[2rem]">
              Lauren actually listens, finds the problem, and fixes it. My
              squat depth came back after one session and the low-back pain
              hasn&apos;t returned.
            </blockquote>
            <figcaption className="mt-7 text-sm text-muted">
              <span className="font-semibold text-espresso">Mike Sartori</span>
              {" · "}Masters powerlifter, Worcester
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ---------- LOCATION & HOURS (info + card split) ---------- */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <Reveal>
              <Eyebrow>Visit the studio</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-4xl">
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
                <MapPin size={24} weight="fill" className="mt-0.5 shrink-0 text-copper" />
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
                  Get directions &amp; contact
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-bone p-7 sm:p-9">
              <h3 className="font-display text-xl font-bold text-espresso">
                Hours
              </h3>
              <ul className="mt-5 flex flex-col">
                {hours.map((h) => {
                  const closed = h.open === "Closed";
                  return (
                    <li
                      key={h.day}
                      className="flex items-baseline justify-between border-b border-line py-3 last:border-b-0"
                    >
                      <span className="font-medium text-ink">{h.day}</span>
                      <span
                        className={
                          closed
                            ? "text-muted"
                            : "font-semibold text-espresso tabular-nums"
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

      {/* ---------- CTA band ---------- */}
      <CtaBand />
    </>
  );
}
