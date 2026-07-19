import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import Link from "next/link";
import { services, priceLabel, bookingHref } from "@/lib/site";
import { toneStyles } from "@/lib/tones";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Functional massage, deep tissue, Swedish massage, TMJ therapy, chair massage, student rates, and massage for two in Sturbridge, MA. Session durations and prices listed.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header. Above the fold, so no Reveal. */}
      <section className="bloom-warm">
        <div className="mx-auto max-w-7xl px-5 pt-8 pb-9 sm:px-8 lg:pt-14 lg:pb-16">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-5 max-w-3xl t-headline-xl text-espresso lg:mt-6">
            Every session is tailored to{" "}
            <em className="pb-1 leading-[1.15] text-copper">you</em>.
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted lg:mt-6 lg:text-lg">
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
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-3 lg:gap-4">
          {services.map((s, i) => {
            const t = toneStyles[s.tone];
            return (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <article
                  id={s.slug}
                  className={`${t.cell} scroll-mt-24 overflow-hidden rounded-3xl p-5 sm:p-7 lg:p-10`}
                >
                  <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-14">
                    {/*
                      Odd rows put the image first on desktop.

                      Below lg the 4:3 crop was 303px of a ~900px row, which
                      pushed the service name off the first screen — you met
                      seven photographs before you met the seventh service. A
                      2:1 band keeps the photograph without letting it lead.
                    */}
                    <div
                      className={`reveal-image relative aspect-[2/1] w-full overflow-hidden rounded-2xl lg:aspect-[5/4] ${
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
                      <span className={`${t.rule} mb-4 block h-px w-10 lg:mb-6`} />
                      <span
                        className={`${t.meta} text-xs font-semibold uppercase tracking-[0.16em]`}
                      >
                        {priceLabel(s)}
                      </span>
                      <h2 className="mt-2 t-headline-lg">
                        {s.name}
                      </h2>
                      {/*
                        Steps down to base on phones. At text-lg the detail set
                        six lines to a ~294px column; this is the longest block
                        in the row and the one that decides its height.
                      */}
                      <p className={`${t.body} mt-4 leading-relaxed lg:mt-5 lg:text-lg`}>
                        {s.detail}
                      </p>

                      {/*
                        Every tier is priced explicitly rather than left to the
                        booking flow, and each row IS the booking link — it goes
                        straight to that tier's calendar, so choosing a length
                        and booking it is one click rather than a service menu
                        you have to re-navigate on the far side.
                      */}
                      <ul className="mt-5 flex flex-col gap-1 lg:mt-7">
                        {s.tiers.map((tier) => (
                          <li key={tier.minutes}>
                            <Link
                              href={bookingHref(s, tier)}
                              className={`${t.body} group/tier -mx-2 flex items-baseline gap-3 rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-current/5`}
                            >
                              <span className="text-[0.95rem]">
                                {tier.duration}
                              </span>
                              <span
                                className={`${t.rule} h-px flex-1 translate-y-[-0.15em] opacity-50`}
                              />
                              <span className="text-[0.95rem] font-semibold tabular-nums">
                                {tier.price}
                              </span>
                              <ArrowRight
                                size={14}
                                weight="bold"
                                className="shrink-0 opacity-0 transition-opacity duration-200 group-hover/tier:opacity-70"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/*
                        Kept on phones rather than dropped the way the home
                        cards' bullets were: there these restated the summary
                        sitting directly above them, but this page has no
                        summary and they are the only place the specific
                        complaints each service treats are named. Tightened
                        instead, so three still fit on two lines.
                      */}
                      <ul className="mt-5 flex flex-wrap gap-1.5 lg:mt-7 lg:gap-2">
                        {s.bestFor.map((b) => (
                          <li
                            key={b}
                            className={`${t.chip} inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium lg:px-3.5 lg:py-1.5 lg:text-sm`}
                          >
                            <Check size={13} weight="bold" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 lg:mt-8">
                        {/*
                          Defaults to the shortest tier; the booking page's own
                          duration switcher covers changing it. Multi-tier
                          services already have a per-tier link in the price
                          list above, so this is the "just book the standard
                          one" path.
                        */}
                        <Button
                          href={bookingHref(s, s.tiers[0])}
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
            Prices shown are per session. Not sure which service fits? Give me a
            call and we’ll figure it out together.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Ready to feel the difference?"
        secondary={false}
      />
    </>
  );
}
