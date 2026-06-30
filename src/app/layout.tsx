import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Functional Massage Therapy | Sturbridge, MA",
    template: "%s | Functional Massage Therapy",
  },
  description:
    "Results-driven massage therapy for athletes, weekend warriors, and anyone living with chronic pain. A functional, whole-body approach in Sturbridge, MA with Lauren.",
  metadataBase: new URL("https://functionalmassagetherapy.com"),
  openGraph: {
    title: "Functional Massage Therapy | Sturbridge, MA",
    description:
      "Results-driven, functional massage therapy for athletes and chronic pain. Book with Lauren in Sturbridge, MA.",
    type: "website",
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
