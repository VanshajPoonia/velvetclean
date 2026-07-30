import { DuotonePhoto } from "./duotone-photo";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="relative bg-field py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <DuotonePhoto
              src="/photos/about-mirror.jpg"
              alt="A Velvet Cleaning team member wiping a gilt-framed mirror, reflected in its glass"
              warm
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="aspect-[4/5] w-full max-w-md lg:max-w-none"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <h2 className="text-balance font-display text-[clamp(2rem,4vw,3.25rem)] italic leading-[1.1] text-ink">
              Elevated cleaning with a purpose
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
              Our team is committed to delivering detailed, reliable cleaning
              services while maintaining the highest standards of
              professionalism, respect, and discretion. Every visit is
              tailored to your home&rsquo;s unique needs, ensuring a spotless
              environment and a seamless experience from booking to
              completion.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <blockquote className="mt-10 border-l border-gold/40 pl-6">
              <p className="text-balance font-display text-2xl italic leading-snug text-rose sm:text-3xl">
                &ldquo;Velvet Cleaning was created with a simple belief:
                cleaning services can be both exceptional and personal.&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
              Whether you&rsquo;re looking for routine maintenance, a deep
              clean, a move-in or move-out service, or preparation for a
              special event, Velvet Cleaning is here to help you reclaim your
              time and enjoy a beautifully maintained space. A clean home is
              more than appearance — it&rsquo;s comfort, peace of mind, and
              the freedom to spend more time on what matters most.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
