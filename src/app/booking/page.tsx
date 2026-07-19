import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { LocationMap } from "@/components/LocationMap";
import { bookingHref, hours, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book your massage therapy appointment at Functional Massage Therapy in Sturbridge, MA. Online scheduling and booking by phone.",
};

export default function BookingPage() {
  return (
    <>
      {/* Header. Above the fold, so no Reveal. */}
      <section className="bloom-warm">
        <div className="mx-auto max-w-7xl px-5 pt-10 pb-12 sm:px-8 lg:pt-14 lg:pb-14">
          <Eyebrow>Booking</Eyebrow>
          <h1 className="mt-6 max-w-3xl t-headline-xl text-espresso">
            Book your appointment
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Choose a session and length below, then pick a time that works for
            you. Prefer to talk first? Call me at{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-espresso underline decoration-copper/40 underline-offset-4 transition-colors duration-200 hover:text-copper hover:decoration-copper"
            >
              {site.phone}
            </a>{" "}
            and we’ll find the right session together.
          </p>
        </div>
      </section>

      {/* Service picker + sidebar */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/*
            Replaces the GoHighLevel group widget, which listed all eleven
            calendars as flat, unordered tiles — so "Functional Massage – 60"
            and "– 90" read as two unrelated products and the flagship service
            sat seventh. Here duration is a choice *within* a service, and each
            button goes straight to that tier's calendar.
          */}
          <Reveal>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <div key={s.slug} className="surface-raised rounded-3xl p-5 sm:p-7">
                  <h2 className="t-headline-md text-espresso">{s.name}</h2>
                  {/*
                    Dropped on phones. Anyone on this page has already decided
                    to book — what they need is to find their service and pick
                    a length, and the description is on the services page for
                    the deciding. Keeping it cost 60px per card across seven
                    cards and pushed the prices, which are the actual targets,
                    off the screen.
                  */}
                  <p className="mt-2 hidden leading-relaxed text-muted sm:block">
                    {s.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5">
                    {s.tiers.map((tier) => (
                      <Link
                        key={tier.minutes}
                        href={bookingHref(s, tier)}
                        className="rounded-full border border-line bg-surface px-5 py-2.5 text-[0.95rem] font-semibold text-espresso transition-colors duration-200 hover:border-copper hover:text-copper"
                      >
                        {tier.duration}
                        <span className="ml-2 tabular-nums text-muted">
                          {tier.price}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="flex flex-col gap-4">
              <div className="surface-raised rounded-3xl p-7">
                <h2 className="t-headline-md text-espresso">
                  Hours
                </h2>
                <ul className="mt-4 flex flex-col">
                  {hours.map((h) => {
                    const closed = h.open === "Closed";
                    return (
                      <li
                        key={h.day}
                        className="flex items-baseline justify-between py-2.5 text-[0.95rem]"
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

              {/*
                Address stays as text — it is what someone copies into a
                phone or reads aloud — with the map beneath it for orientation.
                4:3 rather than square so the panel keeps the map above the
                ~400px width Google needs to show its business info card.
              */}
              <div className="surface-raised rounded-3xl p-7">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <MapPin
                    size={22}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-copper"
                  />
                  <span className="text-[0.95rem] leading-relaxed text-muted">
                    <span className="font-semibold text-espresso transition-colors duration-200 group-hover:text-copper">
                      Find me here
                    </span>
                    <br />
                    {site.address.line1}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </a>

                <LocationMap className="mt-5 aspect-[4/3] w-full" />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

    </>
  );
}
