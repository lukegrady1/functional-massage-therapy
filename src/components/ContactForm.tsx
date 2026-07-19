"use client";

import { useState } from "react";
import { PaperPlaneTilt, CheckCircle, ArrowClockwise } from "@phosphor-icons/react";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted transition-colors focus:border-espresso focus:outline-none focus:ring-2 focus:ring-copper/50";

export function ContactForm({
  /*
    Identifies which page the enquiry came from. Sent with the payload so
    coaching leads land in a separate GoHighLevel pipeline from massage
    booking enquiries, rather than all landing in one bucket.
  */
  source = "contact-page",
  heading,
}: {
  source?: string;
  heading?: string;
} = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const next: Record<string, string> = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn’t look right.";
    if (!message) next.message = "Let me know how I can help.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    try {
      // TODO: wire to a real endpoint (GoHighLevel form/webhook).
      // The payload below is the shape to POST once the GHL endpoint exists:
      //   { name, email, phone, message, source }
      void { name, email, message, source };
      await new Promise((res) => setTimeout(res, 900));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="surface-raised flex flex-col items-center justify-center rounded-3xl px-6 py-14 text-center">
        <CheckCircle size={48} weight="fill" className="text-copper" />
        <h3 className="mt-5 font-display text-2xl font-bold text-espresso">
          Message sent
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">
          Thank you for reaching out. I’ll get back to you within one
          business day. For anything urgent, give me a call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="press mt-6 inline-flex items-center gap-2 text-sm font-semibold text-espresso hover:text-copper"
        >
          <ArrowClockwise size={16} weight="bold" />
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="surface-raised rounded-3xl p-7 sm:p-8"
    >
      <div className="flex flex-col gap-5">
        {heading && (
          <p className="text-lg font-semibold text-espresso">{heading}</p>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-espresso">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputCls}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm font-medium text-copper-dark">{errors.name}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-espresso">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              className={inputCls}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm font-medium text-copper-dark">
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-espresso">
              Phone{" "}
              <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(774) 000-0000"
              className={inputCls}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-espresso">
            How can I help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me a little about what you’re dealing with."
            className={`${inputCls} resize-none`}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-sm font-medium text-copper-dark">
              {errors.message}
            </p>
          )}
        </div>

        {status === "error" && (
          <p className="rounded-xl bg-copper/12 px-4 py-3 text-sm font-medium text-copper-dark">
            Something went wrong sending your message. Please try again or call
            instead.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          // Matches Button's primary variant. `press` carries the hover lift
          // and press feedback; the arrow-slide is deliberately not applied
          // because this button's icon leads and spins while submitting.
          className="press inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-[0.95rem] font-semibold text-bone shadow-sm shadow-espresso/20 hover:bg-espresso-deep hover:shadow-lg hover:shadow-espresso/25 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <ArrowClockwise size={18} weight="bold" className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <PaperPlaneTilt size={18} weight="fill" />
              Send message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
