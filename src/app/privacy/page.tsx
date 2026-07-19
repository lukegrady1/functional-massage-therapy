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
  title: "Privacy Policy",
  description:
    "How Functional Massage Therapy in Sturbridge, MA collects, uses, and shares personal information through this website.",
};

/*
  The third parties named below were taken from the code, not from a template:
  GoHighLevel (white-labelled on api.gradydigital.com) serves the booking
  widget and the coaching form; Google serves the map embed; GitHub Pages
  hosts the static site. There is no analytics, no advertising pixel, and no
  tracking script of any kind — verified by grep, and worth keeping true,
  because this page now says so.

  Fonts are self-hosted by next/font at build time, so loading a page makes no
  request to Google Fonts. That is why Google appears here only in connection
  with the map.
*/

export default function PrivacyPage() {
  return (
    <section className="bloom-warm">
      <LegalHeader
        title="Privacy Policy"
        updated="19 July 2026"
        intro={`This policy explains what ${site.name} collects through this website, why, and who else sees it.`}
      />

      <div className="mx-auto max-w-3xl px-5 pb-14 sm:px-8 sm:pb-20 lg:pb-28">
        <Section title="Who this covers">
          <p>
            This website is operated by {site.name}, {site.address.line1},{" "}
            {site.address.city}, {site.address.state} {site.address.zip}. It
            covers the website only. Information you give during an appointment
            — intake forms, health history, treatment notes — is handled under
            the practice&rsquo;s clinical record-keeping obligations, which are
            separate from this policy and stricter.
          </p>
        </Section>

        <Section title="What is collected">
          <p>
            The site collects nothing on its own. There is no analytics, no
            advertising pixel, and no tracking script anywhere on it. Pages do
            not set cookies. Information reaches us only when you deliberately
            send it, through one of two forms:
          </p>
          <LegalList
            items={[
              <>
                <strong className="font-semibold text-espresso">
                  Booking a session.
                </strong>{" "}
                The booking calendar asks for your name, email address, phone
                number, and the service and time you choose. Anything you type
                into a notes field reaches us too.
              </>,
              <>
                <strong className="font-semibold text-espresso">
                  The coaching enquiry form.
                </strong>{" "}
                First and last name, phone number, email address, and whatever
                you write in the message field.
              </>,
            ]}
          />
          <p>
            Because this is a massage practice, what you write in a message or
            notes field may describe pain, injury, or a health condition. That
            is health information about you, and it is treated as confidential.
            Please do not include more detail than you need to — the intake
            conversation before your session is the right place for the rest.
          </p>
        </Section>

        <Section title="Who else sees it">
          <LegalList
            items={[
              <>
                <strong className="font-semibold text-espresso">
                  GoHighLevel
                </strong>{" "}
                is the scheduling and client-management system behind both the
                booking calendar and the coaching form. Both are embedded from{" "}
                <code className="rounded bg-espresso/5 px-1 py-0.5 text-[0.9em]">
                  api.gradydigital.com
                </code>
                , and everything you submit is stored there.
              </>,
              <>
                <strong className="font-semibold text-espresso">Google</strong>{" "}
                supplies the map on the booking page and in the footer. Loading
                a page with the map on it lets Google see your IP address and
                set its own cookies, under Google&rsquo;s privacy policy rather
                than this one. The map does not load until you scroll near it.
              </>,
              <>
                <strong className="font-semibold text-espresso">
                  GitHub Pages
                </strong>{" "}
                hosts the site and keeps standard server logs, which include
                visitor IP addresses.
              </>,
            ]}
          />
          <p>
            Your information is never sold, rented, or given to anyone for
            marketing. It is shared only where the law requires it.
          </p>
        </Section>

        <Section title="How it is used">
          <p>
            To schedule and deliver your appointment, to reply to what you sent,
            and to keep the records a massage practice is required to keep.
          </p>
          <p>
            Marketing email is sent only if you ask for it, and every message
            includes a way to stop.{" "}
            <Unconfirmed>
              whether a newsletter or marketing list is actually in use, and
              through which system
            </Unconfirmed>
          </p>
        </Section>

        <Section title="How long it is kept">
          <p>
            Enquiries that do not become appointments are kept only as long as
            they are useful, then deleted. Client and treatment records are kept
            for the period Massachusetts requires of a licensed massage
            therapist.{" "}
            <Unconfirmed>
              the retention period Lauren&rsquo;s license and insurer require
            </Unconfirmed>
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            You can ask what is held about you, ask for it to be corrected, or
            ask for it to be deleted, by writing to the address below. Some
            records have to be kept for a fixed period regardless, and where
            that applies it will be explained rather than the request quietly
            ignored.
          </p>
          <p>
            To avoid the map entirely, use the address in the footer rather than
            the embedded map, or block third-party content in your browser.
          </p>
        </Section>

        <Section title="Children">
          <p>
            This site is not directed at children and does not knowingly collect
            information from anyone under 13. Sessions for minors are arranged by
            a parent or guardian.{" "}
            <Unconfirmed>
              whether minors are treated, and what consent is required
            </Unconfirmed>
          </p>
        </Section>

        <Section title="Security">
          <p>
            Booking and enquiry data is held in GoHighLevel and protected by its
            access controls; the site itself stores nothing. No method of
            transmission over the internet is completely secure, so please do
            not send sensitive health detail through a web form when it can wait
            for the conversation at your appointment.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            If this policy changes, the date at the top changes with it. Material
            changes will be flagged rather than slipped in.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy, or about information held about you:
          </p>
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
          <p>
            <Unconfirmed>
              the real email address for privacy requests — the one in the code
              is still a placeholder
            </Unconfirmed>
          </p>
          <p className="pt-2">
            <Link
              href="/terms/"
              className="font-semibold text-espresso underline decoration-copper/40 underline-offset-4 transition-colors duration-200 hover:text-copper"
            >
              Terms of Service
            </Link>
          </p>
        </Section>
      </div>
    </section>
  );
}
