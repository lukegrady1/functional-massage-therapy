import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CtaBand({
  title = "Let's get started on your wellness journey",
  body = "Book your appointment today. Expect to heal.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-bone sm:text-[2.75rem]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-bone/75">
            {body}
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-9 flex justify-center">
            <Button href="/booking" variant="light">
              Book a Session
              <ArrowRight size={18} weight="bold" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
