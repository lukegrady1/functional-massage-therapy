import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  LegalHeader,
  LegalList,
  Section,
  Unconfirmed,
} from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to booking and receiving massage therapy from Functional Massage Therapy in Sturbridge, MA.",
};

/*
  Every commercial term here — cancellation window, deposits, gift certificate
  expiry, late arrivals — is marked <Unconfirmed> rather than filled with a
  plausible default. These are the terms a client is held to and the ones
  Lauren has to be able to enforce; a 24-hour window invented here because it
  is the industry norm is worse than a visible blank, because it looks settled
  and nobody thinks to check it.

  The conduct section is not marked, and should not be softened. A massage
  practice needs an unambiguous public statement that the work is therapeutic
  and that soliciting anything else ends the session. That protects Lauren.
*/

export default function TermsPage() {
  return (
    <section className="bloom-warm">
      <LegalHeader
        title="Terms of Service"
        updated="19 July 2026"
        intro={`These terms apply when you book or receive a session with ${site.name}. Booking an appointment means you accept them.`}
      />

      <div className="mx-auto max-w-3xl px-5 pb-14 sm:px-8 sm:pb-20 lg:pb-28">
        <Section title="Who you are dealing with">
          <p>
            {site.name}, {site.address.line1}, {site.address.city},{" "}
            {site.address.state} {site.address.zip}, a licensed massage therapy
            practice operated by {site.therapist}.{" "}
            <Unconfirmed>
              the registered business name and entity type, and the Massachusetts
              massage therapy license number, which is usually worth displaying
            </Unconfirmed>
          </p>
        </Section>

        <Section title="What this is, and what it is not">
          <p>
            Massage therapy and movement coaching are complementary to medical
            care, not a substitute for it. Nothing on this website or said during
            a session is a medical diagnosis, treatment, or prescription, and no
            outcome is guaranteed.
          </p>
          <p>
            If you have a medical condition, are pregnant, or are being treated
            for an injury, speak to your doctor about whether massage is
            appropriate for you. If something is acutely wrong, seek medical
            care — do not book a massage instead.
          </p>
        </Section>

        <Section title="Booking and payment">
          <p>
            Appointments are booked through this site or by phone at{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-espresso underline decoration-copper/40 underline-offset-4 transition-colors duration-200 hover:text-copper"
            >
              {site.phone}
            </a>
            . Prices for each session are shown on the services page and are
            confirmed when you book. Prices may change, but never for an
            appointment already booked.
          </p>
          <p>
            <Unconfirmed>
              when payment is taken — at the session or on booking — which
              methods are accepted, and whether a deposit is required for longer
              sessions such as Massage for Two
            </Unconfirmed>
          </p>
        </Section>

        <Section title="Cancellations and missed appointments">
          <p>
            Please give as much notice as you can if you need to move or cancel,
            so the time can go to someone else.
          </p>
          <p>
            <Unconfirmed>
              the notice required to cancel without charge, what is charged for
              late cancellation, what is charged for a no-show, and how late
              arrivals are handled — whether the session is shortened or
              rescheduled
            </Unconfirmed>
          </p>
        </Section>

        <Section title="What is expected of you">
          <LegalList
            items={[
              <>
                Tell {site.therapist} about injuries, medical conditions,
                medications, allergies, and pregnancy before the session, and
                about anything that changes between visits. Work is adjusted
                around what you disclose, so an omission can make a session
                unsafe.
              </>,
              <>
                Say so during the session if pressure is too much, too little,
                or if anything hurts. The work is adjusted on the spot.
              </>,
              <>
                You may end a session at any time, for any reason, without
                explanation.{" "}
                <Unconfirmed>
                  whether a session ended early by the client is charged in full
                </Unconfirmed>
              </>,
              <>
                Please do not attend under the influence of alcohol or
                recreational drugs, or with a contagious illness.
              </>,
            ]}
          />
        </Section>

        <Section title="Conduct">
          <p>
            This is a professional therapeutic practice. Any sexual advance,
            request, or comment ends the session immediately, is charged in full,
            and refuses all future booking. Where appropriate it will be reported
            to the police and to the licensing board.
          </p>
          <p>
            {site.therapist} may likewise decline or end a session where it
            would be unsafe, where a contraindication makes treatment
            inadvisable, or where behaviour is abusive or threatening.
          </p>
        </Section>

        <Section title="Gift certificates">
          <p>
            <Unconfirmed>
              whether gift certificates are sold, whether they expire, and
              whether they are refundable or transferable — Massachusetts
              regulates gift certificate expiry, so this needs checking rather
              than deciding
            </Unconfirmed>
          </p>
        </Section>

        <Section title="This website">
          <p>
            The text, photographs, and design on this site belong to{" "}
            {site.name} and may not be copied or reused without permission.
          </p>
          <p>
            Booking and enquiry forms are provided through GoHighLevel and the
            map through Google. Those services have their own terms, and their
            availability is not something this practice controls. The site is
            offered as it is; every effort is made to keep prices, hours, and
            availability accurate, but if something here conflicts with what you
            are told directly, what you are told directly governs.
          </p>
        </Section>

        <Section title="Liability">
          <p>
            Nothing in these terms limits liability for death or personal injury
            caused by negligence, or for anything else that cannot lawfully be
            limited. Subject to that,{" "}
            <Unconfirmed>
              the limitation of liability wording, which should be written to
              match what Lauren&rsquo;s professional insurance actually covers
              rather than copied from a template
            </Unconfirmed>
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by the laws of the Commonwealth of
            Massachusetts, and any dispute falls to the courts of Massachusetts.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            These terms may be updated; the date at the top shows when. The
            version in force is the one published when you booked.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            {site.name}
            <br />
            {site.address.line1}, {site.address.city}, {site.address.state}{" "}
            {site.address.zip}
            <br />
            <a
              href={site.phoneHref}
              className="font-semibold text-espresso underline decoration-copper/40 underline-offset-4 transition-colors duration-200 hover:text-copper"
            >
              {site.phone}
            </a>
          </p>
          <p className="pt-2">
            <Link
              href="/privacy/"
              className="font-semibold text-espresso underline decoration-copper/40 underline-offset-4 transition-colors duration-200 hover:text-copper"
            >
              Privacy Policy
            </Link>
          </p>
        </Section>
      </div>
    </section>
  );
}
