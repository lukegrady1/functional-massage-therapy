import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CtaBand({
  title = "Ready to Restore Your Motion?",
  body = "Join us for a session and discover the difference a clinical, functional approach can make in your life.",
  primaryLabel = "Book Now",
  /*
    The services page already *is* the service menu, so a "View Service Menu"
    button there points back at the page you are on. It opts out and runs a
    single centred booking CTA instead.
  */
  secondary = true,
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondary?: boolean;
}) {
  return (
    // The band sits as a shaped panel inset from the page edge rather than a
    // full-bleed stripe, so the closing note reads as an invitation rather
    // than a footer wall.
    <section className="px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="bloom-warm shadow-ambient overflow-hidden rounded-[1.75rem] bg-espresso px-5 py-12 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:py-24">
          <Reveal>
            {/* t-cta-title holds this to one line on phones — see globals.css.
                Keep titles near 12.59em or shorter, or they will be clipped. */}
            <h2 className="mx-auto max-w-2xl t-headline-xl text-bone t-cta-title">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-bone/75 sm:mt-5 sm:text-lg">
              {body}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            {/*
              A 2-up grid rather than a flex row: grid columns are equal by
              definition, so both buttons match width at every breakpoint
              without hard-coding one. `secondary=false` collapses it to a
              single centred column.
            */}
            <div
              className={`mx-auto mt-8 grid gap-3 sm:mt-9 ${
                secondary ? "max-w-sm grid-cols-2" : "max-w-xs grid-cols-1"
              }`}
            >
              <Button href="/booking" variant="light" className="w-full">
                {primaryLabel}
                <ArrowRight size={18} weight="bold" />
              </Button>
              {secondary && (
                <Button href="/services" variant="outlineLight" className="w-full">
                  View Services
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
