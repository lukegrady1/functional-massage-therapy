import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { LocationMap } from "@/components/LocationMap";
import { BookingEmbed } from "@/components/BookingEmbed";
import {
  bookingHref,
  findServiceTier,
  hours,
  serviceTierPairs,
  site,
} from "@/lib/site";

/*
  One prerendered page per service/tier — /booking/deep-tissue/90/ — rather than
  a single page reading `?service=`. The site is a static export (GitHub Pages,
  no Node server), so `searchParams` is not available at request time; each
  bookable session has to exist as its own built route. It also means every tier
  has a real URL that Lauren can send to a client directly.
*/
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceTierPairs.map(({ service, tier }) => ({
    service: service.slug,
    duration: String(tier.minutes),
  }));
}

type Params = { params: Promise<{ service: string; duration: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service, duration } = await params;
  const found = findServiceTier(service, duration);
  if (!found) return { title: "Book a Session" };

  return {
    title: `Book ${found.service.name} — ${found.tier.duration}`,
    description: `Book a ${found.tier.duration} ${found.service.name} session (${found.tier.price}) at Functional Massage Therapy in Sturbridge, MA.`,
  };
}

export default async function BookingTierPage({ params }: Params) {
  const { service: slug, duration } = await params;
  const found = findServiceTier(slug, duration);
  if (!found) notFound();
  const { service, tier } = found;

  return (
    <>
      {/* Header. Above the fold, so no Reveal. */}
      <section className="bloom-warm">
        <div className="mx-auto max-w-7xl px-5 pt-10 pb-12 sm:px-8 lg:pt-14 lg:pb-14">
          {/*
            This slot holds a plain "Booking" eyebrow on the other pages, but
            here it is the way back to the full menu — landing on a single
            service otherwise leaves the nav's "Book Now" as the only route
            back, which returns you to the picker without looking like a way
            back. It keeps the eyebrow's type treatment so the header still
            reads as one, with the rule swapped for an arrow to show it acts.
          */}
          <Link
            href="/booking/"
            className="group/back -mx-2 inline-flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cocoa transition-colors duration-200 hover:text-copper"
          >
            <ArrowLeft
              size={14}
              weight="bold"
              className="text-copper transition-transform duration-200 ease-out group-hover/back:-translate-x-0.5"
            />
            Back to all services
          </Link>
          <h1 className="mt-6 max-w-3xl t-headline-xl text-espresso">
            {service.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {service.summary}
          </p>

          {/*
            The duration switcher is plain links, not client-side state — each
            tier is already its own page, so switching is a navigation and the
            choice survives a refresh or a shared link. Single-tier services
            still render their one option, so the price is always visible next
            to the calendar rather than only back on the services page.
          */}
          <div className="mt-8 flex flex-wrap gap-3">
            {service.tiers.map((t) => {
              const active = t.minutes === tier.minutes;
              return (
                <Link
                  key={t.minutes}
                  href={bookingHref(service, t)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-5 py-3 text-[0.95rem] font-semibold transition-colors duration-200 ${
                    active
                      ? "bg-espresso text-bone"
                      : "border border-line bg-surface text-espresso hover:border-copper hover:text-copper"
                  }`}
                >
                  {t.duration}
                  <span
                    className={`ml-2 tabular-nums ${active ? "text-bone/70" : "text-muted"}`}
                  >
                    {t.price}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calendar + sidebar */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <BookingEmbed
              calendarId={tier.calendarId}
              title={`Book ${service.name} — ${tier.duration}`}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="flex flex-col gap-4">
              <div className="surface-raised rounded-3xl p-7">
                <h2 className="t-headline-md text-espresso">Hours</h2>
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

              <p className="px-1 text-[0.95rem] leading-relaxed text-muted">
                Not the right session? Call me at {site.phone} and we’ll figure
                it out together.
              </p>
            </aside>
          </Reveal>
        </div>

        {/*
          Repeated at the foot because the widget is tall — by the time you
          have scrolled through a month of slots the header link is well off
          screen, and this is exactly where someone decides the session is
          wrong and wants the menu again.
        */}
        <Reveal delay={0.1}>
          <Link
            href="/booking/"
            className="group/back mt-10 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-espresso transition-colors duration-200 hover:text-copper"
          >
            <ArrowLeft
              size={16}
              weight="bold"
              className="transition-transform duration-200 ease-out group-hover/back:-translate-x-0.5"
            />
            Back to all services
          </Link>
        </Reveal>
      </section>
    </>
  );
}
