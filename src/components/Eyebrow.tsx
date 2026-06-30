import type { ReactNode } from "react";

// Small section label. Clay is used only as the graphic rule (non-text),
// the label text itself is cocoa green to stay WCAG AA on bone.
export function Eyebrow({
  children,
  className = "",
  onDark = false,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        onDark ? "text-bone/70" : "text-cocoa"
      } ${className}`}
    >
      <span className="h-px w-7 bg-copper" />
      {children}
    </span>
  );
}
