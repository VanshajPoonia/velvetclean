"use client";

import { useState, type FormEvent } from "react";
import { DuotonePhoto } from "./duotone-photo";
import { Reveal } from "./reveal";
import { nav, socials } from "@/lib/content";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ground py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <DuotonePhoto
          src="/photos/contact-backdrop.jpg"
          alt=""
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ground via-ground/90 to-ground"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal>
              <h2 className="text-balance font-display text-[clamp(2rem,4vw,3.25rem)] italic leading-[1.1] text-ink">
                Your clean house is only a click away
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-ink-muted">
                Tell us about your space and we&rsquo;ll follow up with a
                custom quote. Serving the St. Louis and St. Charles area.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-12 hidden lg:block">
              <p className="text-xs font-semibold tracking-[0.3em] text-gold">
                FOLLOW ALONG
              </p>
              <ul className="mt-4 flex gap-6">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-sm text-ink-muted transition-colors hover:text-gold-bright"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl border border-gold/15 bg-raised/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-10">
              {submitted ? (
                <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                  <p className="font-display text-3xl italic text-rose">
                    Request received
                  </p>
                  <p className="mt-4 max-w-sm text-pretty leading-relaxed text-ink-muted">
                    Thank you — we&rsquo;ll review your details and follow up
                    with a custom quote shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Preferred date" htmlFor="date">
                    <input id="date" name="date" type="date" className={inputClass} />
                  </Field>

                  <fieldset className="sm:col-span-2">
                    <legend className="text-xs font-semibold tracking-[0.3em] text-gold">
                      SERVICE
                    </legend>
                    <div className="mt-3 flex gap-6">
                      {["Residential", "Commercial"].map((option, i) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 text-sm text-ink"
                        >
                          <input
                            type="radio"
                            name="service"
                            value={option}
                            defaultChecked={i === 0}
                            className="h-4 w-4 accent-[color:var(--color-gold-bright)]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <Field label="Property address" htmlFor="address" full>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      autoComplete="street-address"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Special requests" htmlFor="notes" full>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      className={inputClass}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-gold-bright px-7 py-3 text-sm font-semibold tracking-wide text-ground transition-transform hover:scale-[1.02] active:scale-[0.98] sm:col-span-2 sm:w-fit"
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-gold/20 bg-ground/60 px-4 py-2.5 text-ink placeholder:text-ink-muted outline-none transition-colors focus:border-gold-bright focus:ring-2 focus:ring-gold-bright/30";

function Field({
  label,
  htmlFor,
  children,
  full,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label
        htmlFor={htmlFor}
        className="text-xs font-semibold tracking-[0.3em] text-gold"
      >
        {label.toUpperCase()}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative mt-24 border-t border-gold/15 pt-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center sm:px-10 lg:px-12">
        <span className="font-display text-xl italic text-ink">Velvet</span>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-ink-muted transition-colors hover:text-gold-bright"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="text-sm text-ink-muted transition-colors hover:text-gold-bright"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink-muted/70">
          © {new Date().getFullYear()} Velvet Cleaning LLC
        </p>
      </div>
    </div>
  );
}
