import { process } from "@/lib/content";
import { DuotonePhoto } from "./duotone-photo";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-field-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="max-w-lg text-balance font-display text-[clamp(2rem,4vw,3.25rem)] italic leading-[1.1] text-ink">
                From request to a beautifully maintained space
              </h2>
            </Reveal>

            <RevealGroup className="mt-16 flex flex-col">
              {process.map((step) => (
                <RevealItem key={step.step}>
                  <div className="flex gap-6 border-t border-gold/15 py-8 first:border-t-0 first:pt-0 sm:gap-10">
                    <span className="font-display text-4xl italic text-gold/70">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-pretty leading-relaxed text-ink-muted">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="lg:col-span-5 lg:pt-24">
            <Reveal className="lg:sticky lg:top-28">
              <DuotonePhoto
                src="/photos/process-vacuum.jpg"
                alt="A Velvet Cleaning team member vacuuming a living room"
                warm
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
