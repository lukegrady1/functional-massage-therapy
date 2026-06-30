import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight whitespace-nowrap transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-bone";

const sizes = "px-7 py-3.5 text-[0.95rem]";

const variants: Record<Variant, string> = {
  // espresso on bone — high contrast, the brand primary
  primary: "bg-espresso text-bone hover:bg-espresso-deep shadow-sm shadow-espresso/20",
  // outline for secondary actions on light surfaces
  outline:
    "border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso/5",
  // for use on dark espresso sections
  light: "bg-bone text-espresso hover:bg-white",
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
