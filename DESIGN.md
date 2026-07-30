---
name: Velvet Cleaning LLC
description: Boutique cleaning service marketing site — velvet as rich dark fabric, not a color name
colors:
  ground: "#150910"
  field: "#3d0f26"
  field-2: "#5c1638"
  raised: "#4a1230"
  gold: "#b8935a"
  gold-bright: "#d1ab74"
  ink: "#f6ece9"
  ink-muted: "#d8b7c4"
  rose: "#e8b4c8"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  display-hero:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.3em"
rounded:
  sm: "8px"
  md: "12px"
  full: "9999px"
spacing:
  section-y: "6rem"
  section-y-lg: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.ground}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
---

# Design System: Velvet Cleaning LLC

## Overview

**Creative North Star: "Velvet, the fabric"**

The brand's own name is the design brief: velvet is a rich, dark, heavy fabric that catches light and invites touch — not a shade of pink. The prior execution (a flat magenta Squarespace template) used the name only as a hex code. This system instead builds every surface from near-black and deep burgundy grounds, treats the business's real editorial photography as the star material (unified into one cohesive tone via a burgundy-to-gold duotone rather than left in its original mixed lighting), and lets a single antique-gold accent do the work of "luxury" instead of gloss, gradients, or glass.

The system rejects two defaults at once: the generic-cleaning-service look (bright white, checkmarks, blue) and the generic-AI-marketing-page look (cream background, tracked-caps eyebrows above every section, gradient-text hero). Confirmed visual rejections: no cream/sand/paper background at any lightness; no eyebrow label repeated above each section; no gradient text; no glass-as-decoration.

**Key Characteristics:**
- Near-black-to-burgundy grounds throughout — the page never lands on a light or neutral surface.
- Duotone + grain photography treatment unifies photos shot in different rooms/lighting into one editorial world.
- Bodoni Moda italic carries every headline and the wordmark; Archivo carries everything functional.
- Antique gold is rationed: labels, hairlines, CTA fill, hover states — never a large field.
- Motion is one grammar (fade + rise, exponential ease-out) applied once per section, not decoration per element.

## Colors

Every surface in the system is a step on the same dark velvet ramp; there is no light or neutral background anywhere.

### Primary
- **Ground** (#150910): the deepest surface — hero copy panel, services section, contact section. Reads as near-black with a whisper of aubergine.
- **Field** (#3d0f26): the mid-dark surface — about section, team section. The "resting" brand burgundy.
- **Field Mid** (#5c1638): the brightest of the dark surfaces — process section. Used to keep the scroll from reading as one flat block.

### Secondary
- **Antique Gold** (#b8935a): labels, hairline dividers, borders, secondary CTA outlines. Rationed — never fills a large area.
- **Bright Gold** (#d1ab74): primary CTA fill, link hover color, price emphasis. The one color allowed to look "metallic."

### Neutral
- **Blush Ink** (#f6ece9): primary text on every dark surface (16.8:1+ contrast on Ground).
- **Muted Rose** (#d8b7c4): secondary/body-muted text on dark surfaces (7–9:1 contrast) — a tint of the brand hue, never plain gray.
- **Rose Accent** (#e8b4c8): reserved for emphasis words inside headlines and pull-quotes.

### Named Rules
**The No-Neutral-Ground Rule.** The body background is never a neutral or light color at any lightness step. "Warmth" and "luxury" are carried by gold accents and photography, not by a cream or paper base.

**The Gold Rationing Rule.** Gold (either shade) never fills more than a hairline, a label, a border, or a button — it appears as trim, never as a field.

## Typography

**Display Font:** Bodoni Moda (high-contrast Didone serif), italic for headlines and the wordmark
**Body Font:** Archivo (grotesk workhorse), regular/medium/semibold

**Character:** A fashion-editorial Didone against a neutral grotesk — the same contrast axis as a perfume ad's masthead next to its ingredient copy. Italic display type is used for every heading and the "Velvet" wordmark itself, standing in for the site's original cursive-script logo without tipping into wedding-invitation territory.

### Hierarchy
- **Display Hero** (400, clamp(2.5rem, 6vw, 4.5rem), 1.05 line-height, italic): the single hero headline only.
- **Display** (400, clamp(2rem, 4vw, 3.25rem), 1.1 line-height, italic): every section heading, package names, team member names.
- **Body** (400, 1.125rem, 1.6 line-height): all paragraph copy; capped at max-w-2xl (~65–75ch).
- **Label** (600, 0.75rem, 0.3em tracking, uppercase): field labels, "Includes"/"Starting at" tags, the hero locale tag. Not used as a repeated section eyebrow.

### Named Rules
**The One Eyebrow Rule.** A tracked-uppercase label appears at most once per viewport region for a specific factual reason (e.g. the hero's locale tag, a form field's name) — never as a generic kicker repeated above every section heading.

## Layout

Single scrolling page, anchor-navigated (no client-side route changes). Content is capped at `max-w-7xl` with responsive gutters (`px-6` → `px-12`). Section rhythm alternates ground → field → ground → field-mid → field → ground, so the page reads as distinct rooms rather than one continuous block. Two-column editorial layouts (photo + text) alternate side-to-side between the two service packages and stack vertically below `lg`. Section vertical padding is generous (`py-24` to `py-32`) with more space above a heading than below it.

## Elevation & Depth

Mostly flat — the world's depth comes from photography (duotone, grain, vignette) rather than shadows. The one shadow role is the contact form card, which needs to visually lift off the page behind it.

### Shadow Vocabulary
- **Form card lift** (`shadow-2xl shadow-black/40`): applied only to the booking-form card in the Contact section, to separate it from the ambient photo backdrop behind it.

### Named Rules
**The Flat-Except-the-Form Rule.** Nothing else in the system uses a drop shadow; depth elsewhere comes from the duotone/grain photo treatment and layered background colors, not box-shadow.

## Shapes

Buttons and form inputs use soft rounding (`rounded-full` for buttons/pills, `rounded-lg` for inputs, `rounded-2xl` for the form card) — never sharp corners, never heavy rounding beyond a pill. Photography is never clipped into circles or blobs; it stays rectangular (4:5, 4:3, 3:4, 16:7 depending on section) so the duotone treatment reads as a printed photograph, not an app avatar.

## Components

### Buttons
- **Shape:** full pill (`rounded-full`)
- **Primary:** Bright Gold fill, Ground text, `px-7 py-3`, scales up ~3% on hover/tap
- **Ghost/Secondary:** transparent fill, 1px gold/50 border, Ink text; border and text shift to Bright Gold on hover
- **Text link (e.g. "See our services"):** underline in gold/40, shifts to Bright Gold with a solid underline on hover

### Cards / Containers
- **Corner Style:** `rounded-2xl` (form card only — the system otherwise avoids card containers)
- **Background:** Raised (#4a1230) at 80% opacity with `backdrop-blur-sm`
- **Shadow Strategy:** see Elevation & Depth
- **Border:** 1px gold/15

### Inputs / Fields
- **Style:** 1px gold/20 border, Ground/60 background, `rounded-lg`
- **Focus:** border shifts to Bright Gold + a 2px Bright-Gold/30 ring (never relies on border-color change alone)
- **Label:** the Label typographic role, gold, above the field

### Navigation
- **Style:** fixed, transparent over the hero with a permanent dark gradient scrim (so nav text stays legible over bright photo highlights even before scroll); becomes a solid Ground bar with a 1px gold/20 bottom hairline once scrolled.
- **Mobile:** hamburger opens a full-bleed Ground overlay with display-italic links, staggered fade-in.

### Duotone Photo (signature component)
Every photograph in the system passes through the same treatment: `grayscale(1) contrast(1.15) brightness(0.92)` on the image, a `mix-blend-mode: color` gradient overlay (Ground → Field → Bright Gold) on top, and an inset vignette shadow. This is what turns 17 photos shot in different rooms under different lighting into one coherent editorial world. A `--warm` variant biases the gradient toward Field-Mid for sections that want a slightly hotter cast (About, Process).

## Do's and Don'ts

### Do:
- **Do** run every photo through the duotone treatment before placing it — a raw, untreated photo breaks the unified world.
- **Do** keep gold to hairlines, labels, borders, and CTA fills only.
- **Do** use Bodoni Moda italic for every heading and the wordmark; never fall back to a system serif.
- **Do** cap body copy width (max-w-2xl or tighter) for the 65–75ch measure.
- **Do** give the contact/form inputs a visible focus ring, not just a border-color change.

### Don't:
- **Don't** put a tracked-uppercase eyebrow label above a section heading as a repeated pattern — one confirmed instance (a locale tag, a field label) is voice; more than that is the AI-scaffold reflex.
- **Don't** introduce a cream, sand, or paper-colored background at any lightness.
- **Don't** use gradient text for emphasis — weight, size, or the Rose accent color instead.
- **Don't** clip photography into circles, blobs, or card-with-icon layouts.
- **Don't** add a drop shadow anywhere except the contact form card.
