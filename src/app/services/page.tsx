import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sports and recovery massage, targeted deep tissue, functional therapeutic bodywork, cupping, and assisted stretch in Sturbridge, MA.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-14 sm:px-8 lg:pt-24 lg:pb-16">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-espresso sm:text-6xl">
            Every session is tailored to{" "}
            <span className="italic text-copper">you</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            No two bodies carry tension the same way. Choose a starting point
            below, and we&apos;ll shape the work around what you need on the day.
          </p>
        </Reveal>
      </section>

      {/* Service detail cards (2-col grid) */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <article
                id={s.slug}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface scroll-mt-28"
              >
                <div className="relative aspect-[16/10] bg-line">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-2xl font-bold text-espresso">
                      {s.name}
                    </h2>
                    <span className="shrink-0 text-sm font-semibold text-cocoa">
                      {s.durations}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted">{s.detail}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.bestFor.map((b) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-1.5 rounded-full bg-espresso/5 px-3.5 py-1.5 text-sm font-medium text-espresso"
                      >
                        <Check size={14} weight="bold" className="text-copper" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-2">
                    <Button href="/booking" variant="outline">
                      Book {s.name}
                      <ArrowRight size={16} weight="bold" />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
            Session rates and exact durations are shown when you book online. Not
            sure which service fits? Give me a call and we&apos;ll figure it out
            together.
          </p>
        </Reveal>
      </section>

      <CtaBand title="Ready to feel the difference?" />
    </>
  );
}
