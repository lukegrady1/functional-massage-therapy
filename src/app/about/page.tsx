import type { Metadata } from "next";
import Image from "next/image";
import {
  Barbell,
  FootballHelmet,
  Certificate,
  ForkKnife,
} from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About Lauren",
  description:
    "Meet Lauren, owner and licensed massage therapist at Functional Massage Therapy. A background in fitness, competitive powerlifting, and D1 sports recovery.",
};

const background = [
  {
    icon: Barbell,
    title: "Competitive powerlifting",
    body: "Years under the bar mean I understand load, fatigue, and how strength athletes break down and rebuild.",
  },
  {
    icon: ForkKnife,
    title: "Personal training & nutrition",
    body: "My journey began in personal training and nutrition, the foundation of a whole-body view of wellness.",
  },
  {
    icon: Certificate,
    title: "Licensed in 2020",
    body: "I furthered my education in massage therapy in 2020, combining clinical skill with athletic experience.",
  },
  {
    icon: FootballHelmet,
    title: "D1 sports recovery",
    body: "At Boston College I worked with their D1 football team on pre-season sports massage and recovery.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header (split) */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-16 pb-16 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-24 lg:pb-20">
        <div>
          <Reveal>
            <Eyebrow>About the practice</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-espresso sm:text-6xl">
              Small but mighty,
              <br />
              and built for{" "}
              <span className="italic text-copper">results</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              I&apos;m Lauren, owner and therapist of this practice. I&apos;m
              passionate about whole-body wellness and bringing a comprehensive,
              functional approach to your therapeutic needs.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-[2rem] bg-line shadow-xl shadow-espresso/10 sm:max-w-lg sm:aspect-[4/5] lg:aspect-[5/6] lg:max-w-none">
            <Image
              src={asset("/lauren-portrait.webp")}
              alt="Lauren, owner and licensed massage therapist"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </section>

      {/* Story (single-column prose) */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-4xl">
              My journey to this work
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted">
            <Reveal delay={0.06} as="span">
              With a background in fitness, competitive powerlifting, and a
              passion for healthy living, I&apos;ve combined my expertise to
              create a unique practice. My journey began in personal training
              and nutrition, and I furthered my education in massage therapy in
              2020.
            </Reveal>
            <Reveal delay={0.1} as="span">
              At Boston College, I had the amazing opportunity to work with
              their D1 football team, providing pre-season sports massage and
              recovery. Now I&apos;m excited to bring that expertise to my own
              practice, focusing on results-driven care for athletes, weekend
              warriors, and those experiencing chronic pain.
            </Reveal>
            <Reveal delay={0.14} as="span">
              My massages are tailored to fit you, the individual. My goal is to
              empower you with the knowledge and tools for continued self-care
              outside of our sessions, ensuring true healing and lasting
              wellness.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Background highlights (2-col icon grid) */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-4xl">
            The experience behind the hands
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {background.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="flex gap-5 border-t border-line pt-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-espresso/5 text-copper">
                <item.icon size={24} weight="bold" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-espresso">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy (full-width quote on brand) */}
      <section className="bg-espresso">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-bone sm:text-[2.1rem]">
              &ldquo;Let&apos;s work together to achieve your health goals. Book
              your appointment today, and let&apos;s get started on your wellness
              journey.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-bone/85">
              In good health, Lauren
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
