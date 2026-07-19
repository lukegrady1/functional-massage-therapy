"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { Button } from "@/components/Button";

/*
  Header follows the Stitch layout: brand hard left, then the navigation and
  the booking CTA grouped together hard right, over a blurred surface bar.

  Two deliberate departures:

  - The brand is the logo mark, not a text wordmark. It carries the hand
    illustration and the espresso/copper the whole palette derives from.
  - "Booking" is dropped from the desktop link row because the Book a Session
    button is the booking entry point, and listing both is redundant. It stays
    in `nav` for the mobile menu and the footer.
*/

function Wordmark({ scrolled }: { scrolled: boolean }) {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="Functional Massage Therapy home"
    >
      <Image
        src={asset("/logo.webp")}
        alt="Functional Massage Therapy"
        width={220}
        height={157}
        priority
        /*
          Scaled rather than resized on scroll: transform runs on the
          compositor, so the shrink costs no layout pass and the header height
          stays put instead of reflowing the page under the reader.
        */
        className={`h-[72px] w-auto origin-left mix-blend-multiply transition-transform duration-300 ease-out ${
          scrolled ? "scale-90" : "scale-100"
        }`}
      />
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const close = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const deskLinks = nav.filter((item) => item.href !== "/booking");

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-bone/0"
      }`}
    >
      <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Wordmark scrolled={scrolled} />

        {/* Links and the CTA travel together on the right, per Stitch. */}
        <div className="hidden items-center gap-7 lg:flex">
          <nav className="flex items-center gap-7">
            {deskLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-2 pb-1 text-sm transition-colors duration-200 ${
                    active
                      ? "border-copper font-bold text-espresso"
                      : "border-transparent font-semibold text-muted hover:text-espresso"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button href="/booking" className="px-6 py-2.5">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="press flex h-11 w-11 items-center justify-center rounded-full border border-line text-espresso lg:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-line py-3.5 text-lg font-semibold ${
                        isActive(item.href) ? "text-copper" : "text-espresso"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3">
                <Button href="/booking" className="w-full" onClick={close}>
                  Book a Session
                </Button>
                <a
                  href={site.phoneHref}
                  onClick={close}
                  className="flex items-center justify-center gap-2 text-base font-semibold text-espresso"
                >
                  <Phone size={18} weight="fill" />
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
