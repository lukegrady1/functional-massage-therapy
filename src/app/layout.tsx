import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// An editorial serif for headlines. Manual therapy is a craft with a long
// literature behind it, and the serif carries that authority in a way a
// grotesque cannot. Variable optical size so large headlines tighten and
// small ones stay open.
const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  // No `weight`: this loads the full variable range, which is also the only
  // form that accepts a custom axis. `opsz` lets the large display sizes
  // tighten their spacing while small headings stay open.
  axes: ["opsz"],
  style: ["normal", "italic"],
});

// Inter handles everything clinical: durations, prices, hours, form labels.
const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

// Deployed site origin + repo subpath (set in CI). OG images must be
// absolute URLs that crawlers can fetch, so build the full path here.
const siteOrigin = "https://lukegrady1.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const ogImageUrl = `${siteOrigin}${basePath}/og-image.png`;

const description =
  "Results-driven massage therapy for athletes, weekend warriors, and anyone living with chronic pain. A functional, whole-body approach in Sturbridge, MA with Lauren.";

export const metadata: Metadata = {
  title: {
    default: "Functional Massage Therapy | Sturbridge, MA",
    template: "%s | Functional Massage Therapy",
  },
  description,
  metadataBase: new URL(`${siteOrigin}${basePath}`),
  openGraph: {
    title: "Functional Massage Therapy | Sturbridge, MA",
    description:
      "Results-driven, functional massage therapy for athletes and chronic pain. Book with Lauren in Sturbridge, MA.",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Functional Massage Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Functional Massage Therapy | Sturbridge, MA",
    description,
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-bone text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
