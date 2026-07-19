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
      {/* Header: split. Above the fold, so no Reveal (see note in page.tsx). */}
      <section className="bloom-warm">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14 lg:pb-20">
          <div>
            <Eyebrow>About the practice</Eyebrow>
            <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight text-espresso sm:text-6xl">
              Small but mighty,
              <br />
              and built for <em className="pb-1 leading-[1.15] text-copper">results</em>.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              I’m Lauren, owner and therapist of this practice. I’m
              passionate about whole-body wellness and bringing a comprehensive,
              functional approach to your therapeutic needs.
            </p>
          </div>

          {/* Wrapper is sized to the photo so the offset plate tracks it. */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              aria-hidden
              className="edge-petal absolute -left-4 -top-4 hidden h-full w-full bg-tan sm:block"
            />
            {/*
              The source photo is landscape (1206x918). A tall 4:5 frame with
              object-top crops to the wall above her head, so the frame is kept
              square and the focal point pulled slightly above center.
            */}
            <div className="edge-petal relative aspect-square w-full overflow-hidden shadow-[0_24px_60px_-24px_rgb(20_19_18_/_0.4)]">
              <Image
                src={asset("/lauren-portrait.webp")}
                alt="Lauren, owner and licensed massage therapist"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story: single-column prose on a raised, textured surface */}
      <section className="texture-linen bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-[2.6rem]">
              My journey to this work
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted">
            <Reveal delay={0.06} as="span">
              With a background in fitness, competitive powerlifting, and a
              passion for healthy living, I’ve combined my expertise to
              create a unique practice. My journey began in personal training
              and nutrition, and I furthered my education in massage therapy in
              2020.
            </Reveal>
            <Reveal delay={0.1} as="span">
              At Boston College, I had the amazing opportunity to work with
              their D1 football team, providing pre-season sports massage and
              recovery. Now I’m excited to bring that expertise to my own
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

      {/* Background: 2-col grid of raised panels */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-[2.6rem]">
            The experience behind the hands
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {background.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="surface-raised flex h-full gap-5 rounded-3xl p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tan text-espresso">
                  <item.icon size={24} weight="bold" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy: full-width statement on off-black */}
      <section className="bg-espresso">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-bone sm:text-[2.1rem]">
              &ldquo;Let’s work together to achieve your health goals. Book
              your appointment today, and let’s get started on your wellness
              journey.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-copper-light">
              In good health, Lauren
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
