import { DuotonePhoto } from "./duotone-photo";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col lg:flex-row"
    >
      <div className="relative order-2 flex flex-1 flex-col justify-center gap-8 bg-ground px-6 py-24 sm:px-10 lg:order-1 lg:w-[46%] lg:flex-none lg:px-16 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 20%, rgba(184,147,90,0.12), transparent 70%)",
          }}
        />

        <Reveal className="relative">
          <p className="text-xs font-semibold tracking-[0.4em] text-gold">
            ST. LOUIS &amp; ST. CHARLES, MO
          </p>
        </Reveal>

        <Reveal delay={0.08} className="relative">
          <h1 className="text-balance font-display text-[clamp(2.5rem,6vw,4.5rem)] italic leading-[1.05] text-ink">
            Refined service. Elevated presence.{" "}
            <span className="text-rose">Intentional care.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="relative max-w-md">
          <p className="text-pretty text-lg leading-relaxed text-ink-muted">
            Welcome to Velvet Cleaning, where exceptional cleaning meets
            unforgettable service — a polished, luxury-inspired approach that
            leaves your space refreshed, organized, and cared for.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="relative flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            className="rounded-full bg-gold-bright px-7 py-3 text-sm font-semibold tracking-wide text-ground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="text-sm font-medium tracking-wide text-ink underline decoration-gold/40 decoration-1 underline-offset-4 transition-colors hover:text-gold-bright hover:decoration-gold-bright"
          >
            See our services
          </a>
        </Reveal>
      </div>

      <div className="relative order-1 h-[52vh] w-full lg:order-2 lg:h-auto lg:flex-1">
        <DuotonePhoto
          src="/photos/hero-mop.jpg"
          alt="A Velvet Cleaning team member mopping a hallway, glancing back toward the camera"
          priority
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="absolute inset-0 h-full w-full"
          imgClassName="object-cover object-[68%_20%] lg:object-[50%_18%]"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ground/70 to-transparent lg:hidden" />
      </div>
    </section>
  );
}
