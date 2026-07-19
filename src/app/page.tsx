import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Barbell,
  HandHeart,
  PersonSimpleTaiChi,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/Testimonials";
import { services } from "@/lib/site";
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
    title: "Evidence-Based Assessment",
    body: "Targeted protocols based on functional movement analysis.",
  },
  {
    title: "Integrated Recovery",
    body: "Combining manual therapy with active lifestyle coaching.",
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
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-xl">
            <h1 className="t-headline-xl text-espresso">
              Clinical Excellence in Therapeutic{" "}
              <em className="italic text-copper">Motion</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Specialized massage therapy and wellness coaching to restore
              function and vitality. Experience a tailored approach to recovery
              and chronic pain management.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/booking">
                Book a Session
                <ArrowRight size={18} weight="bold" />
              </Button>
              <Button href="/services" variant="outline">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PHILOSOPHY: 5/7 split, text + image mosaic ---------- */}
      <section className="texture-linen bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="t-headline-lg text-espresso">
                Our Philosophy
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[52ch] leading-relaxed text-muted">
                At Functional Massage Therapy, we move beyond relaxation to
                address the underlying mechanics of your body. Our
                &ldquo;Functional&rdquo; approach combines anatomical precision
                with therapeutic intuition to bridge the gap between medical
                expertise and holistic wellness.
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
                  <blockquote className="t-headline-md italic">
                    &ldquo;Movement is the song of the body.&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-bone/55">
                    Functional Philosophy
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED SERVICES: centered heading, 3 cards ---------- */}
      <section className="surface-inset">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="t-headline-lg text-espresso">
                Featured Services
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Clinical grade treatments designed for restoration, pain
                management, and athletic optimization.
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
                    <h3 className="mt-2 t-headline-md text-espresso">
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

      {/* ---------- COACHING SPOTLIGHT: half text, half image ---------- */}
      <section className="overflow-hidden bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
          <Reveal>
            <div className="shadow-lifted flex flex-col overflow-hidden rounded-[2rem] bg-graphite lg:flex-row">
              <div className="flex flex-col justify-center p-10 sm:p-14 lg:w-1/2 lg:p-16">
                <Eyebrow onDark>Coaching program</Eyebrow>
                <h2 className="mt-6 t-headline-lg text-bone">
                  Beyond the Table: Integrated Wellness
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/70">
                  Our coaching program provides the tools you need to maintain
                  progress between sessions. We focus on ergonomic correction,
                  stress management, and functional movement habits tailored to
                  your unique lifestyle.
                </p>
                <div className="mt-9">
                  <Button href="/coaching" variant="light">
                    Learn More About Coaching
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

      <CtaBand />
    </>
  );
}
