# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js + React, TypeScript, single-page marketing site (all sections on one scrolling route, no client-side page navigation between Home/About/Services/Team/Contact). User-confirmed choice over plain static HTML/CSS.

## Users

Homeowners and small/local businesses in the St. Louis and St. Charles, Missouri area shopping for residential or commercial cleaning who respond to a boutique, personality-driven brand rather than a generic cleaning-service look. Secondary: prospective cleaners evaluating the team/culture via the "Meet the Cleaners" content.

## Product Purpose

Velvet Cleaning LLC is a real, operating residential and commercial cleaning company. The site's job is to communicate the brand (polished, a little sexy/edgy, personality-forward) and drive booking inquiries through a request-a-quote flow: submit booking request → receive custom quote → pay non-refundable retainer to secure the appointment → service is performed and balance settled on-site.

## Positioning

Differentiates from generic local cleaning services via a "boutique/glamour" brand identity: a distinctive editorial visual style, and named individual cleaners presented with personality and confidence rather than an anonymous crew. The current live site (velvetcleaningllc.com) already carries this positioning but executes it with generic template design (flat color blocks, default fonts, no motion) despite strong photography; this project's job is a visual redesign that matches the ambition of the brand, not a repositioning.

## Operating Context

Booking flow (reused verbatim as the site's core CTA sequence):
1. Submit Your Booking Request — contact info, property details, preferred date/time, special requests.
2. Receive Your Quote — customized quote based on property size, cleaning level, estimated time; availability confirmed.
3. Secure Your Appointment — non-refundable retainer required to confirm the date/time.
4. Relax While We Handle The Rest — team arrives, remaining balance due at start of service unless otherwise arranged.

Two service packages (starting prices, scope expands with square footage/frequency/condition):
- Residential Package — up to 2 hours with 2 cleaners, starting at $450.
- Commercial Package — up to 4 cleaners for up to 4 hours, starting at $1,250 (offices, retail, short-term rentals, event venues; recurring plans available).

## Capabilities and Constraints

- No backend/email service is configured yet. The contact/booking form ships as a polished, client-side-validated UI only for this build; real submission wiring (email/CRM provider) is a follow-up once a provider is chosen.
- No photo-to-person mapping exists (source filenames are opaque camera IDs). Photos from `assets/` are used freely across hero/services/about/team sections for atmosphere and are not tied to a specific named team member's bio card.
- Service area: St. Louis and St. Charles, MO.

## Brand Commitments

- Name: Velvet Cleaning LLC. Existing script wordmark "Velvet Cleaning LLC" and deep magenta/burgundy brand color are established and should be preserved as the identity anchor (redesign the execution, not the identity).
- Team roster and voice (bios reused as-is from the live site): Daisy, Honey Bee, Austin, Summer, Jesi Doll, Jay — each with an existing personality-forward bio describing their approach to the work.
- Social presence: Facebook, X, Instagram (icons only on current site; no handles captured).
- Tone: confident, polished, a little playful/sexy, never crude or generic-corporate.

## Evidence on Hand

- 17 professional/editorial photos in `assets/` (boudoir-styled photography of the cleaning team performing cleaning tasks — lingerie, tattoos, kitchens/bathrooms as settings). These are the business's own real marketing photography and are the primary visual asset for the redesign.
- Full copy for hero, about, services (both package descriptions), booking-flow steps, and all six team bios captured from the live reference site (see conversation/screenshots) — reused verbatim per user confirmation.
- No existing PRODUCT.md/DESIGN.md/component library prior to this file; project directory contained only `assets/` before this build.

## Product Principles

1. The brand is the photography plus a confident, editorial voice — design should read as boutique/editorial, not as a generic template with a magenta re-skin.
2. Preserve the identity anchor (name, wordmark spirit, magenta/burgundy family) while replacing every generic execution choice: default fonts, flat color blocks, static layout, uncropped/awkward images.
3. Sexy and edgy, never tacky or crude — restraint and editorial photo treatment (crops, grain, duotone, scrims) do more work than exposure.
4. All booking-flow and pricing copy is real business detail; do not alter numbers, package inclusions, or the four-step process without the user's sign-off.
5. Single scrolling page: navigation is in-page anchor scrolling, not route changes.

## Accessibility & Inclusion

No product-specific accessibility requirement was established beyond standard web accessibility (contrast, keyboard nav, reduced-motion support) covered by general design guidance.
