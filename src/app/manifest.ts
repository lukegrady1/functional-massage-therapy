import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

/*
  Web app manifest, generated rather than shipped as a static
  public/site.webmanifest.

  Two reasons it is code:

  1. basePath. This deploys to a GitHub Pages subpath, and the icon `src`
     values here are plain strings that Next does not rewrite — a literal
     "/android-chrome-192x192.png" resolves against the domain root, where
     nothing of ours lives, and every icon 404s. `asset()` prefixes them the
     same way it does for <Image> sources.
  2. The generated site.webmanifest from favicon.io ships with `"name": ""`
     and `"short_name": ""`. Installed to a phone's home screen that gives an
     unlabelled icon. These come from lib/site.ts instead, so they cannot
     drift from the rest of the site.

  Colours are the site's own rather than favicon.io's #ffffff default:
  `background_color` is what fills the splash screen before the page paints,
  so bone matches the page rather than flashing white first.
*/

/*
  Required by `output: export`. A manifest route is a route handler, and the
  export build refuses to emit one that has not declared itself static — it
  has no server to generate it on request. Without this the build fails
  outright rather than degrading, so it is not optional.
*/
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Results-driven, functional massage therapy for athletes and chronic pain in Sturbridge, MA.",
    start_url: asset("/"),
    scope: asset("/"),
    display: "standalone",
    background_color: "#e9e4da",
    theme_color: "#e9e4da",
    icons: [
      {
        src: asset("/android-chrome-192x192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: asset("/android-chrome-512x512.png"),
        sizes: "512x512",
        type: "image/png",
      },
      /*
        `maskable` lets Android crop to its own shape without clipping the
        mark. Declared on the 512 as a second entry rather than replacing the
        `any` purpose, so a launcher that does not do maskable icons still has
        a plain one to fall back to.
      */
      {
        src: asset("/android-chrome-512x512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
