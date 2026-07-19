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

function Wordmark() {
  return (
    <Link href="/" className="flex items-center" aria-label="Functional Massage Therapy home">
      <Image
        src={asset("/logo.webp")}
        alt="Functional Massage Therapy"
        width={220}
        height={157}
        priority
        className="h-14 w-auto mix-blend-multiply"
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bone/95 backdrop-blur-md"
          : "border-b border-transparent bg-bone/0"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "text-espresso"
                    : "text-muted hover:text-espresso"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-copper" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-espresso transition-colors hover:text-copper"
          >
            <Phone size={16} weight="fill" />
            {site.phone}
          </a>
          <Button href="/booking">Book a Session</Button>
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
            className="overflow-hidden border-t border-line bg-bone lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
              <ul className="flex flex-col">
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className={`flex items-center justify-between border-b border-line py-3.5 text-lg font-semibold ${
                          active ? "text-copper" : "text-espresso"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
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
