import clsx from "clsx";
import { packages } from "@/lib/content";
import { DuotonePhoto } from "./duotone-photo";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="services" className="relative bg-ground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Reveal>
          <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,4vw,3.25rem)] italic leading-[1.1] text-ink">
            Luxury care, tailored to the space
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            From routine home cleanings and deep cleans to offices, retail
            locations, event venues, and short-term rentals — every
            appointment is approached with care, discretion, and a commitment
            to leaving your space refreshed, polished, and impeccably
            maintained.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal
                className={clsx(
                  "lg:col-span-7",
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                )}
              >
                <DuotonePhoto
                  src={pkg.photo}
                  alt={`Velvet Cleaning ${pkg.name.toLowerCase()} service in progress`}
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="aspect-[4/3] w-full"
                />
              </Reveal>

              <div
                className={clsx(
                  "lg:col-span-5",
                  i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                )}
              >
                <Reveal>
                  <h3 className="font-display text-3xl italic text-ink">
                    {pkg.name} Package
                  </h3>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="mt-5 text-pretty leading-relaxed text-ink-muted">
                    {pkg.description}
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-gold/15 pt-6">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.3em] text-gold">
                        INCLUDES
                      </p>
                      <p className="mt-1 text-ink">{pkg.includes}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.3em] text-gold">
                        STARTING AT
                      </p>
                      <p className="mt-1 font-display text-3xl italic text-rose">
                        {pkg.startingAt}
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.18}>
                  <a
                    href="#contact"
                    className="mt-8 inline-block rounded-full border border-gold/50 px-7 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-gold-bright hover:text-gold-bright"
                  >
                    Inquire Today
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
