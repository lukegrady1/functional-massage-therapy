import type { NextConfig } from "next";

// On GitHub Pages this site is served from a subpath:
//   https://lukegrady1.github.io/functional-massage-therapy/
// The deploy workflow sets PAGES_BASE_PATH so every route and asset
// (including next/image local sources like /logo.png) is prefixed
// correctly. Locally the var is unset, so dev/build run at the root.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export — GitHub Pages has no Node server.
  output: "export",
  basePath,
  // Exposed to the client so local <Image> sources can be prefixed manually:
  // next/image does NOT apply basePath to `unoptimized` local sources.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Each route exports as a folder/index.html, which Pages serves cleanly.
  trailingSlash: true,
  images: {
    // Required for `output: export` (no on-demand optimizer at runtime).
    // All imagery is local to /public, so no remotePatterns are needed.
    unoptimized: true,
  },
};

export default nextConfig;
