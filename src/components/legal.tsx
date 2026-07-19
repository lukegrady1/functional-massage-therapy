import type { ReactNode } from "react";

/* ------------------------------------------------------------------------
   LEGAL PAGE BUILDING BLOCKS
   ------------------------------------------------------------------------
   These pages are DRAFTS written from what this codebase actually does —
   which third parties receive data, what the forms collect, what the site
   stores. That part is accurate and checkable.

   What they are not is legal advice, and they are not finished. A massage
   practice handles health information about identifiable people, in
   Massachusetts, which has its own data security regulation (201 CMR 17.00)
   on top of the federal picture. Whether HIPAA applies at all turns on facts
   only Lauren knows — chiefly whether she bills insurance electronically.
   A lawyer needs to read both pages before they are relied on.

   Anything that is a BUSINESS DECISION rather than a fact about the code is
   marked with <Unconfirmed>. Those render visibly on the page, deliberately,
   following the same convention as the draft testimonials in site.ts: an
   invented cancellation window or refund term is not a harmless placeholder.
   A client can hold Lauren to a policy she never agreed to, and she cannot
   enforce one that contradicts what is published here. Better the page looks
   unfinished than quietly states terms nobody chose.
   ------------------------------------------------------------------------ */

export function Unconfirmed({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-copper/15 px-1.5 py-0.5 text-[0.95em] font-semibold text-copper decoration-copper/40">
      [To confirm: {children}]
    </mark>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-9 first:mt-0 lg:mt-12">
      <h2 className="t-headline-md text-espresso">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 leading-relaxed text-muted lg:mt-4 lg:gap-4">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-copper">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalHeader({
  title,
  updated,
  intro,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-8 pb-9 sm:px-8 sm:pt-10 sm:pb-12 lg:pt-14">
      <h1 className="t-headline-xl text-espresso">{title}</h1>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Last updated {updated}
      </p>
      <p className="mt-5 leading-relaxed text-muted lg:text-lg">{intro}</p>
      {/*
        Stated on the page, not just in a code comment. Someone reading this
        in a browser deserves to know it has not been through a lawyer yet,
        and it should be deleted the moment that stops being true.
      */}
      <p className="mt-6 rounded-2xl border border-copper/30 bg-copper/5 p-4 text-sm leading-relaxed text-espresso">
        <strong className="font-semibold">Draft — not yet reviewed.</strong>{" "}
        This page is a working draft and has not been reviewed by a lawyer.
        Highlighted items still need confirming. Remove this notice once it
        has been reviewed and the highlights are resolved.
      </p>
    </div>
  );
}
