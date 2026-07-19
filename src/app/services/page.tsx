import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";
import { toneStyles } from "@/lib/tones";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sports and recovery massage, targeted deep tissue, functional therapeutic bodywork, cupping, and assisted stretch in Sturbridge, MA.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header. Above the fold, so no Reveal. */}
      <section className="bloom-warm">
        <div className="mx-auto max-w-7xl px-5 pt-10 pb-14 sm:px-8 lg:pt-14 lg:pb-16">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 max-w-3xl t-headline-xl text-espresso">
            Every session is tailored to{" "}
            <em className="pb-1 leading-[1.15] text-copper">you</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            No two bodies carry tension the same way. Choose a starting point
            below, and we’ll shape the work around what you need on the day.
          </p>
        </div>
      </section>

      {/*
        Full-width tonal rows rather than a grid of identical photo cards. Each
        service keeps its own surface treatment, and the paired image alternates
        sides so the page reads as a rhythm rather than a list.
      */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="flex flex-col gap-4">
          {services.map((s, i) => {
            const t = toneStyles[s.tone];
            return (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <article
                  id={s.slug}
                  className={`${t.cell} scroll-mt-24 overflow-hidden rounded-3xl p-7 sm:p-10`}
                >
                  <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-14">
                    {/* Odd rows put the image first on desktop. */}
                    <div
                      className={`reveal-image relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-[5/4] ${
                        i % 2 === 1 ? "lg:order-first" : "lg:order-last"
                      }`}
                    >
                      <Image
                        src={asset(s.image)}
                        alt={s.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 38vw"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <span className={`${t.rule} mb-6 block h-px w-10`} />
                      <span
                        className={`${t.meta} text-xs font-semibold uppercase tracking-[0.16em]`}
                      >
                        {s.durations}
                      </span>
                      <h2 className="mt-2 t-headline-lg">
                        {s.name}
                      </h2>
                      <p className={`${t.body} mt-5 text-lg leading-relaxed`}>
                        {s.detail}
                      </p>

                      <ul className="mt-7 flex flex-wrap gap-2">
                        {s.bestFor.map((b) => (
                          <li
                            key={b}
                            className={`${t.chip} inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium`}
                          >
                            <Check size={14} weight="bold" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <Button
                          href="/booking"
                          variant={s.tone === "tan" || s.tone === "paper" ? "outline" : "light"}
                        >
                          Book {s.name}
                          <ArrowRight size={16} weight="bold" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
            Session rates and exact durations are shown when you book online. Not
            sure which service fits? Give me a call and we’ll figure it out
            together.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Ready to feel the difference?"
        primaryLabel="Book Now"
        secondary={false}
      />
    </>
  );
}
