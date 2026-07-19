import type { Service } from "@/lib/site";

/*
  Surface treatments for the black-and-tan system.

  The site is deliberately light on photography, so services are distinguished
  by material and tone rather than by stock imagery. Each tone bundles the
  surface, its text colors, and the accent rule, so contrast pairings stay
  correct wherever a tone is used. Shared by the homepage grid and the services
  page so the two never drift apart.
*/
export type ToneStyle = {
  cell: string;
  meta: string;
  body: string;
  rule: string;
  /* Chip styling for lists sitting on this tone. */
  chip: string;
};

export const toneStyles: Record<Service["tone"], ToneStyle> = {
  espresso: {
    cell: "bg-espresso text-bone",
    meta: "text-bone/55",
    body: "text-bone/75",
    rule: "bg-copper-light",
    chip: "bg-bone/10 text-bone",
  },
  tan: {
    cell: "bg-tan text-espresso",
    meta: "text-espresso/60",
    body: "text-espresso/75",
    rule: "bg-espresso/45",
    chip: "bg-espresso/10 text-espresso",
  },
  graphite: {
    cell: "bg-graphite text-bone",
    meta: "text-bone/55",
    body: "text-bone/75",
    rule: "bg-copper-light",
    chip: "bg-bone/10 text-bone",
  },
  paper: {
    cell: "surface-raised texture-linen text-espresso",
    meta: "text-muted",
    body: "text-muted",
    rule: "bg-copper",
    chip: "bg-espresso/8 text-espresso",
  },
};
