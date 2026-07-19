import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outlineLight" | "light";

// `press` (globals.css) carries the scale-on-active and the scoped transition.
// Deliberately not `transition-all`: that animates properties we never intend
// to move and costs a frame budget for nothing.
const base =
  "press btn-arrow inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-bone";

const sizes = "px-4 py-3.5 text-[0.95rem] sm:px-7";

// The hover lift itself lives in `.press`; these add the matching change in
// elevation so the button reads as rising off the page rather than sliding up it.
const variants: Record<Variant, string> = {
  // espresso on bone — high contrast, the brand primary
  primary:
    "bg-espresso text-bone hover:bg-espresso-deep shadow-sm shadow-espresso/20 hover:shadow-lg hover:shadow-espresso/25",
  // outline for secondary actions on light surfaces
  outline:
    "border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso/5",
  /*
    Outline for dark surfaces. Exists as a real variant because passing colour
    overrides through `className` does not work here: Tailwind resolves
    conflicting utilities by stylesheet order, not by the order they appear in
    the class string, so `text-espresso` from the light outline variant beats
    an appended `text-bone` and renders the button dark-on-dark — invisible.
    Reach for this instead of overriding `outline`.
  */
  outlineLight:
    "border border-bone/30 text-bone hover:border-bone hover:bg-bone/10",
  // for use on dark espresso sections
  light: "bg-bone text-espresso hover:bg-white hover:shadow-lg hover:shadow-black/15",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={cls}>
      {children}
    </Link>
  );
}
