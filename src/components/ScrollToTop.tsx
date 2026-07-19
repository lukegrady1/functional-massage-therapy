"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
  Resets scroll to the top on every route change.

  Next's App Router already tries to do this, but `html { scroll-behavior:
  smooth }` turns its jump into an animation, and the new page's images
  finishing their layout mid-animation strands it partway down. Navigating
  from halfway down the homepage to /services reliably landed at 97px rather
  than 0, and stayed there.

  `behavior: "instant"` is the fix: it opts this one call out of the inherited
  smooth behaviour, so the reset happens in a single frame and nothing can
  interrupt it. The CSS stays smooth for the in-page anchor link on the
  coaching page.

  Hash navigations are skipped so `/services#deep-tissue` still lands on its
  section instead of being yanked to the top.
*/
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
