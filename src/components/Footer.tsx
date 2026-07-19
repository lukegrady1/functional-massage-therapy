import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { nav, site, hours } from "@/lib/site";
import { asset } from "@/lib/asset";
import { LocationMap } from "@/components/LocationMap";

// Merge consecutive days that share the same hours, e.g. "Mon - Tue".
function groupedHours() {
  const groups: { open: string; days: string[] }[] = [];
  for (const h of hours) {
    const last = groups[groups.length - 1];
    if (last && last.open === h.open) last.days.push(h.day);
    else groups.push({ open: h.open, days: [h.day] });
  }
  return groups.map((g) => ({
    open: g.open,
    label:
      g.days.length > 1
        ? `${g.days[0].slice(0, 3)} - ${g.days[g.days.length - 1].slice(0, 3)}`
        : g.days[0],
  }));
}

const columnHeading =
  "text-xs font-semibold uppercase tracking-[0.18em] text-bone/50";
const linkStyle =
  "text-[0.95rem] text-bone/80 transition-colors duration-200 hover:text-copper-light";

export function Footer() {
  const schedule = groupedHours();

  return (
    <footer className="border-t border-bone/10 bg-espresso-deep text-bone">
      {/*
        Extra bottom padding on phones so the fixed booking FAB (bottom-6 plus
        a 56px button) does not sit on top of the last row of links.
      */}
      <div className="mx-auto max-w-7xl px-5 pt-10 pb-24 sm:px-8 sm:py-16 lg:py-20">
        {/*
          Two blocks rather than four equal columns. Previously the map sat as
          a fourth column, which left a dead gap through the middle of the row
          and made it ragged — the map is roughly twice the height of a link
          list, so nothing lined up.

          Now the text content nests its own three columns inside the wider
          block, and the map takes the narrow one. The stacked left side is
          about as tall as the square, so the two read as a balanced pair.
        */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.75fr_1fr] lg:gap-16">
          <div>
            <div className="inline-flex rounded-xl bg-bone p-2.5 sm:p-3">
              <Image
                src={asset("/logo.webp")}
                alt="Functional Massage Therapy"
                width={360}
                height={257}
                className="h-12 w-auto sm:h-16"
              />
            </div>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-bone/70 sm:mt-5">
              Professional manual therapy and movement coaching dedicated to
              restoring your body&rsquo;s natural state of vitality.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-10 sm:grid-cols-3 sm:gap-6">
              <div>
                <h3 className={columnHeading}>Explore</h3>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5 sm:flex-col sm:gap-2.5">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={linkStyle}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className={columnHeading}>Visit</h3>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 flex w-fit items-start gap-2 ${linkStyle}`}
                >
                  <MapPin
                    size={18}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-copper-light"
                  />
                  <span>
                    {site.address.line1}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </a>
                <a
                  href={site.phoneHref}
                  className={`mt-3 flex w-fit items-center gap-2 ${linkStyle}`}
                >
                  <Phone
                    size={18}
                    weight="fill"
                    className="shrink-0 text-copper-light"
                  />
                  {site.phone}
                </a>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className={columnHeading}>Hours</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {schedule.map((h) => {
                    const closed = h.open === "Closed";
                    return (
                      <li
                        key={h.label}
                        className="flex items-baseline justify-between gap-3 text-[0.9rem] leading-snug sm:block"
                      >
                        {/* sm:block so the day sits above the time again in
                            the narrow desktop column — inline there ran them
                            together as "Mon - TueClosed". */}
                        <span className="text-bone/55 sm:block">{h.label}</span>
                        <span
                          className={
                            closed
                              ? "text-bone/40"
                              : "font-semibold tabular-nums text-bone"
                          }
                        >
                          {h.open}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/*
            Business Profile map. Lives in the footer rather than on the
            homepage so the page keeps the Stitch section list exactly, while
            address, hours and map still sit together.
          */}
          {/* Uncapped: the wider it is on a phone, the closer it gets to the
              ~400px where Google restores the business info card. */}
          <LocationMap className="aspect-[4/3] w-full sm:aspect-square lg:self-start" />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-bone/15 pt-6 sm:mt-12 sm:pt-7 sm:flex-row sm:items-center sm:justify-between">
          {/*
            Credit line inherits the copyright's colour so the row reads as one
            block of fine print; only the studio name lifts on hover.
          */}
          <div className="flex flex-col gap-1 text-sm text-bone/55">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights
              reserved.
            </p>
            <p>
              Designed by{" "}
              <a
                href="https://gradydigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-copper-light"
              >
                Grady Digital
              </a>
            </p>
          </div>
          <Link
            href="/booking"
            className="press inline-flex items-center gap-1.5 text-sm font-semibold text-bone hover:text-copper-light"
          >
            Book your appointment
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
