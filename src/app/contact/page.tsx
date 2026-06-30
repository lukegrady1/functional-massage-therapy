import type { Metadata } from "next";
import { Phone, EnvelopeSimple, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site, hours } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Functional Massage Therapy in Sturbridge, MA. Call, email, or send a message. Located inside Historic Yoga at 48 Main St.",
};

const openDays = hours.filter((h) => h.open !== "Closed");

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8 lg:pt-24 lg:pb-14">
        <Reveal>
          <Eyebrow>Get in touch</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-espresso sm:text-6xl">
            Questions before you book? Let&apos;s talk.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Reach out by phone, email, or the form below. The fastest way to
            lock in a time is to book online.
          </p>
        </Reveal>
      </section>

      {/* Info + form */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* Info column */}
          <div className="flex flex-col gap-7">
            <Reveal>
              <a
                href={site.phoneHref}
                className="flex items-start gap-4 transition-colors hover:text-copper"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-espresso/5 text-copper">
                  <Phone size={20} weight="fill" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                    Call
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-espresso">
                    {site.phone}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 transition-colors hover:text-copper"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-espresso/5 text-copper">
                  <EnvelopeSimple size={20} weight="fill" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                    Email
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-espresso">
                    {site.email}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 transition-colors hover:text-copper"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-espresso/5 text-copper">
                  <MapPin size={20} weight="fill" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                    Visit
                  </span>
                  <span className="mt-1 block text-lg font-semibold leading-snug text-espresso">
                    {site.address.line1}, {site.address.note}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-espresso/5 text-copper">
                  <Clock size={20} weight="fill" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                    Open
                  </span>
                  <span className="mt-1 block leading-snug text-espresso">
                    {openDays[0].day} to {openDays[openDays.length - 1].day}
                    <br />
                    <span className="text-muted">
                      Closed Monday &amp; Tuesday
                    </span>
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Functional Massage Therapy location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.9312793331314!2d-72.06048369999999!3d42.087521900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6a7e25853e50b%3A0x725b4f148e17210d!2sFunctional%20Massage%20Therapy!5e0!3m2!1sen!2sus!4v1782846626095!5m2!1sen!2sus"
              className="h-[420px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
