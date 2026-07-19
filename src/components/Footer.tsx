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
