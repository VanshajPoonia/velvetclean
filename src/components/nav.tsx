"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { nav } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "bg-ground shadow-[0_1px_0_0_rgba(184,147,90,0.2)]"
          : "bg-transparent"
      )}
    >
      {/* Permanent scrim so nav text stays legible over bright hero-photo
          highlights even before the solid scrolled background kicks in. */}
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 bg-gradient-to-b from-ground/85 via-ground/45 to-transparent transition-opacity duration-500",
          scrolled || open ? "opacity-0" : "opacity-100"
        )}
      />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#hero" className="flex items-baseline gap-2">
          <span className="font-display text-2xl italic text-ink">Velvet</span>
          <span className="hidden text-[0.6rem] font-medium tracking-[0.35em] text-gold-bright sm:inline">
            CLEANING LLC
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium tracking-wide text-ink-muted transition-colors hover:text-gold-bright"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-gold/50 px-5 py-2 text-sm font-medium tracking-wide text-ink transition-colors hover:border-gold-bright hover:text-gold-bright md:inline-block"
        >
          Request a Quote
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-ink"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-px w-6 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-ink"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-gold/15 bg-ground md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 font-display text-2xl italic text-ink"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: nav.length * 0.05, duration: 0.4 }}
                className="mt-3"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-full border border-gold-bright px-5 py-2 text-sm font-medium tracking-wide text-gold-bright"
                >
                  Request a Quote
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
