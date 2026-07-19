import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { nav, site, hours } from "@/lib/site";
import { asset } from "@/lib/asset";

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

export function Footer() {
  const schedule = groupedHours();

  return (
    <footer className="border-t border-bone/10 bg-espresso-deep text-bone">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand + address */}
          <div>
            <div className="inline-flex rounded-2xl bg-bone p-4 sm:p-5">
              <Image
                src={asset("/logo.webp")}
                alt="Functional Massage Therapy"
                width={360}
                height={257}
                className="h-20 w-auto sm:h-24"
              />
            </div>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-bone/70">
              Professional manual therapy and movement coaching dedicated to
              restoring your body&rsquo;s natural state of vitality.
            </p>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-fit items-start gap-2 text-[0.95rem] text-bone/80 transition-colors hover:text-copper-light"
            >
              <MapPin size={18} weight="fill" className="mt-0.5 shrink-0 text-copper-light" />
              <span>
                {site.address.line1} ({site.address.note})
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </a>
            <a
              href={site.phoneHref}
              className="mt-3 flex w-fit items-center gap-2 text-[0.95rem] text-bone/80 transition-colors hover:text-copper-light"
            >
              <Phone size={18} weight="fill" className="shrink-0 text-copper-light" />
              {site.phone}
            </a>
          </div>

          {/* Nav — links wrap horizontally on mobile, stack into a column on desktop */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/50">
              Explore
            </h3>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5 lg:flex-col lg:gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] text-bone/80 transition-colors hover:text-copper-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours (grouped) */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/50">
              Hours
            </h3>
            <ul className="mt-5 flex max-w-sm flex-col gap-2.5">
              {schedule.map((h) => {
                const closed = h.open === "Closed";
                return (
                  <li
                    key={h.label}
                    className="flex items-baseline justify-between gap-3 text-[0.9rem]"
                  >
                    <span className="text-bone/80">{h.label}</span>
                    <span
                      className={
                        closed
                          ? "text-bone/40"
                          : "font-semibold text-bone tabular-nums"
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

        {/*
          Business Profile map. Lives here rather than on the homepage so the
          page keeps the Stitch section list exactly, while the address, hours
          and map still sit together where someone looks for them.
        */}
        <div className="mt-12 h-56 w-full overflow-hidden rounded-2xl sm:h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.9312793331314!2d-72.06048369999999!3d42.087521900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6a7e25853e50b%3A0x725b4f148e17210d!2sFunctional%20Massage%20Therapy!5e0!3m2!1sen!2sus!4v1784424956324!5m2!1sen!2sus"
            title="Map showing Functional Massage Therapy at 48 Main St, Sturbridge, MA"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full border-0"
          />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-bone/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-bone/55">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bone transition-colors hover:text-copper-light"
          >
            Book your appointment
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
