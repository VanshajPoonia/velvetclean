import clsx from "clsx";
import { team } from "@/lib/content";
import { DuotonePhoto } from "./duotone-photo";
import { Reveal } from "./reveal";

export function Team() {
  return (
    <section id="team" className="relative bg-field py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-balance font-display text-[clamp(2rem,4vw,3.25rem)] italic leading-[1.1] text-ink">
                The faces behind Velvet Cleaning
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-pretty leading-relaxed text-ink-muted">
                Every member of our team shares a commitment to reliability,
                professionalism, and attention to detail. We&rsquo;re proud
                to bring personality, care, and exceptional service into
                every home we visit.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.16} className="mt-14">
          <DuotonePhoto
            src="/photos/team-banner.jpg"
            alt="Four Velvet Cleaning team members together, smiling and holding cleaning supplies"
            sizes="90vw"
            className="aspect-[16/7] w-full"
          />
        </Reveal>

        <div className="mt-24 flex flex-col gap-20 sm:gap-24">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="grid items-center gap-8 border-t border-gold/15 pt-16 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12"
            >
              <Reveal
                className={clsx(
                  "lg:col-span-4",
                  i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                )}
              >
                <DuotonePhoto
                  src={member.photo}
                  alt={`${member.name}, a Velvet Cleaning team member, at work`}
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="aspect-[3/4] w-full max-w-xs"
                />
              </Reveal>

              <div
                className={clsx(
                  "lg:col-span-8",
                  i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                )}
              >
                <Reveal>
                  <h3 className="font-display text-4xl italic text-rose sm:text-5xl">
                    {member.name}
                  </h3>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
                    {member.bio}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
