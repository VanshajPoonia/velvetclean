import type { Metadata } from "next";
import { Bodoni_Moda, Archivo } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velvet Cleaning LLC | Luxury Cleaning, St. Louis & St. Charles",
  description:
    "Boutique residential and commercial cleaning for St. Louis and St. Charles, MO. Refined service, elevated presence, intentional care.",
};

const DIRECTION_CONTRACT = `
  THESIS: Velvet is a fabric, not just a name — lean into rich, tactile
  darkness, studio spotlight light, and film grain instead of the flat
  magenta template the brand wears today.
  OWN-WORLD: near-black aubergine ground, deep burgundy field, blush ink,
  antique-gold accent; Bodoni Moda (display + italic wordmark) x Archivo
  (body/UI); duotone editorial photography, grain, vignette.
  STORY: visitor reads a confident boutique service, sees real proof
  (photography, named team, real pricing), understands the 4-step
  booking flow, and submits a request.
  FIRST VIEWPORT: full-bleed duotone photo right, thesis headline + hook
  + primary CTA left, minimal sticky nav above.
  FORM: brief-pinned direction — existing name/wordmark/color/photography
  preserved per brand commitments; velvet-material world chosen directly,
  concept-seed tournament skipped per new-work.md's pinned-direction rule.
  FINISH: unreviewed and undocumented is unfinished; this build ends
  with the finish review, the verdict, and DESIGN.md.
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${archivo.variable}`}>
      <body>
        <div
          hidden
          dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }}
        />
        <div className="grain-overlay" aria-hidden />
        <Nav />
        {children}
      </body>
    </html>
  );
}
