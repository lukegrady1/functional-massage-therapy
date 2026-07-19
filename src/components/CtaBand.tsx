import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CtaBand({
  title = "Ready to Restore Your Motion?",
  body = "Join us for a session and discover the difference a clinical, functional approach can make in your life.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    // The band sits as a shaped panel inset from the page edge rather than a
    // full-bleed stripe, so the closing note reads as an invitation rather
    // than a footer wall.
    <section className="px-5 pb-20 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="bloom-warm shadow-ambient rounded-[2.5rem] bg-espresso px-6 py-20 text-center sm:px-12 lg:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl t-headline-xl text-bone">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-bone/75">
              {body}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/booking" variant="light">
                Book Your Initial Consultation
                <ArrowRight size={18} weight="bold" />
              </Button>
              <Button
                href="/services"
                variant="outline"
                className="border-bone/30 text-bone hover:border-bone hover:bg-bone/10"
              >
                View Service Menu
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
