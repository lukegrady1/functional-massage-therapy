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
  - "Booking" is dropped from the link row because the Book a Session button is
    the booking entry point, and listing both is redundant. That applies to the
    mobile menu too, which carries the same button. It stays in `nav` for the
    footer.

  The mobile menu is a full-screen overlay rather than a dropdown. It sits at
  z-40, one below the header, and the header goes transparent while it is open
  — so the overlay's own background shows through behind the bar and the logo
  and X stay live on top of it. That is what lets the logo both close the menu
  and take you home.
*/

function Wordmark({
  scrolled,
  onClick,
}: {
  scrolled: boolean;
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
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

  // Shared by the desktop row and the mobile overlay — see the note above.
  const links = nav.filter((item) => item.href !== "/booking");

  /*
    A full-screen menu covers the page but does not stop it scrolling
    underneath, which on a phone means the overlay's own content can be
    dragged around against a moving background. Freeze the body while it is
    open, and restore whatever was there rather than assuming "visible".
  */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape is the expected way out of anything covering the whole screen.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /*
    On any other page the logo is an ordinary link home. On the home page
    itself it would otherwise do nothing — the route does not change, so
    neither Next nor <ScrollToTop> reacts — leaving you stranded wherever you
    had scrolled to. Scroll to the top by hand instead, and honour reduced
    motion, since the page-wide `scroll-behavior: smooth` would animate it.
  */
  const onWordmarkClick = (e: React.MouseEvent) => {
    close();
    if (pathname.replace(/\/+$/, "") !== "") return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? "instant" : "smooth" });
  };

  return (
    <header
      /*
        z-60 rather than z-50 so the whole header — overlay included — clears
        the booking FAB, which is itself fixed at z-50 and otherwise floats on
        top of the open menu.
      */
      className={`sticky top-0 z-[60] transition-colors duration-300 ${
        open
          ? // Let the overlay behind the bar supply the background.
            "border-b border-transparent bg-transparent"
          : scrolled
            ? "border-b border-line bg-surface/90 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-bone/0"
      }`}
    >
      {/*
        `relative z-50` keeps the logo and the X above the overlay below. The
        header's own z-index orders it against the page, not against its own
        children — without this the overlay covers the bar and there is no way
        to close the menu.
      */}
      <div className="relative z-50 mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Wordmark scrolled={scrolled} onClick={onWordmarkClick} />

        {/* Links and the CTA travel together on the right, per Stitch. */}
        <div className="hidden items-center gap-7 lg:flex">
          <nav className="flex items-center gap-7">
            {links.map((item) => {
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
          aria-controls="mobile-menu"
          className="press flex h-11 w-11 items-center justify-center rounded-full border border-line text-espresso lg:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-surface lg:hidden"
          >
            {/*
              pt clears the 96px header bar, whose logo and X sit above this.
              The links take the free space and centre in it; the CTA and phone
              stay pinned to the bottom, within thumb reach.
            */}
            <div className="flex h-full flex-col overflow-y-auto px-5 pt-[96px] pb-10 sm:px-8">
              <nav className="flex flex-1 flex-col justify-center">
                <ul className="flex flex-col gap-2">
                  {links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={close}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={`block py-2 t-headline-md transition-colors duration-200 ${
                          isActive(item.href) ? "text-copper" : "text-espresso"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-4">
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
