# Guzman Rosario Brand

Design and build a premium, professional author website for novelist Sonia I. Guzman Rosario, showcasing her novel "Bethsabe of New York." The site must feel like a polished, high-end literary brand website — clean, uncluttered, editorial in style, with every image and every line of text fully legible. Avoid busy, cluttered, or low-contrast sections. Prioritize clarity, breathing room, and visual hierarchy above decoration.

=== DESIGN SYSTEM ===

Overall aesthetic: elegant literary/editorial site inspired by a cinematic oil-painting book cover (tropical sunset over the ocean, palm trees, a small wooden boat). The feeling should be sophisticated, warm, and cinematic — like a bestselling author's official site — never cluttered, never low-contrast, never busy.

COLOR PALETTE (defined as design tokens, used consistently site-wide):

- Background (dark sections): Deep espresso brown #2A1B10, with a secondary darker brown #1C1108 for depth/gradients

- Background (light sections): Warm ivory/cream #FAF3E7, used for body-copy-heavy pages so long text stays highly readable

- Primary accent (gold): #C9A24B — used for headings, dividers, icons, button borders

- Secondary accent (deep ocean blue): #1E3F63 — used for secondary buttons, tags, section backgrounds

- Tertiary accent (teal, from the boat art): #2F6B63 — small accents only (links, hover states)

- Warm highlight (sunset amber): #E0954D — used sparingly for CTAs/hover states

- Text on dark backgrounds: soft warm white #F7F1E3 (never pure white, never gray-on-brown with low contrast)

- Text on light backgrounds: deep charcoal-brown #2B2018 (never light gray — must be fully readable)

- Ensure a minimum 4.5:1 contrast ratio between all text and its background. Never place body text directly on a busy image without a solid or gradient overlay panel behind it.

TYPOGRAPHY:

- Display/headings font: an elegant serif (Playfair Display or Cormorant Garamond), gold or dark-brown depending on background, generous letter-spacing on all-caps headings, clear size hierarchy (H1 48–64px, H2 32–40px, H3 22–26px)

- Body font: a highly readable serif or humanist sans-serif (Lora or Source Serif Pro), 16–18px minimum, line-height 1.6–1.8, max text column width ~700px so paragraphs never stretch edge-to-edge

- Never place body text smaller than 16px anywhere on the site

LAYOUT PRINCIPLES:

- Generous whitespace between every section (minimum 80–120px vertical padding on desktop)

- One clear focal point per section — never combine large images, dense text, and multiple CTAs in the same block

- Consistent 12-column responsive grid, content max-width ~1200px, centered

- All images must be sharp, properly cropped (no stretching/distortion), with lazy-loading and clean rounded-corner or framed presentation

- Use soft drop shadows or thin gold borders to frame images and cards — not harsh borders

- Thin gold divider lines (1px, with generous spacing above/below) to separate sections instead of hard color blocks

- Buttons: pill or slightly rounded rectangle, gold or amber fill with dark brown text (or outlined gold on dark backgrounds), clear hover state (slight lift + color shift), generous padding so they never feel cramped

=== SITE STRUCTURE ===

1. HOME PAGE

- Full-width hero using the front cover artwork as background, with a smooth dark gradient overlay (bottom-to-top, brown to transparent) so all text sits in a legible zone — never place text over the busiest part of the painting (the sky/face area).

- Centered content: "BETHSABE OF NEW YORK" (large gold serif), subtitle "A Chronology of Life & Love, a Story About Resilience, Anguish & Fight Against COVID-19" in clean white text, small tag line "Based on Real Events," author name "Sonia I. Guzman Rosario."

- Two clear CTA buttons: "Discover the Book" and "Buy Now" — side by side, evenly spaced, never overlapping text.

- Below the hero, on a clean ivory background: a short, well-spaced introduction paragraph (max 700px wide, centered) summarizing the book.

- A quote section on a solid deep-brown background featuring 3 author quotes, each in its own clearly separated card with generous padding — displayed as a simple 3-column grid on desktop, stacked on mobile, not a busy carousel.

- A clean 4-card "Explore" grid linking to About the Book / About the Author / Gallery / Contact, each with a small icon, short title, and one line of description — equal-height cards, aligned perfectly.

- Simple footer with publisher credit and social icons, clearly separated from the page above by a divider.

2. ABOUT THE BOOK PAGE

- Clean hero banner (shorter than homepage hero) using a cropped, softly overlaid section of the cover art, with page title "About the Book" in gold serif, clearly legible.

- Full synopsis presented as short, well-spaced paragraphs on an ivory background — never a solid wall of text; break into 2–3 short paragraphs with clear spacing.

- A distinct "About This Novel" section explaining the hybrid fiction/nonfiction docudrama concept, on a subtly contrasting background panel (e.g., light warm gray-beige) to visually separate it from the synopsis.

- A clean two-column "Book Details" panel: left column = full-size book cover image with soft shadow; right column = clearly formatted detail list (Title, Author, Genre, Original Language, English Edition, ISBN 979-8-90558-086-4, Publisher: Parker Publishers) using aligned labels and values.

- Buy Now buttons clearly grouped together, evenly spaced, with retailer names visible.

3. ABOUT THE AUTHOR PAGE

- Two-column layout on desktop (stacks cleanly on mobile): author portrait on one side (properly cropped, sharp, centered, with soft shadow/frame), biography text on the other with clear paragraph spacing.

- One clearly separated pull-quote block using one of her personal quotes, in large italic gold serif on a dark panel.

- A short "Inspiration Behind the Novel" section with its own clear heading and spacing, not run into the biography paragraph.

- Social icons in a clean row, evenly spaced, clearly clickable.

4. GALLERY PAGE

- Clean, evenly-spaced image grid (3 columns desktop, 2 tablet, 1 mobile), consistent aspect ratios so the grid looks aligned and tidy, not jumbled.

- Simple filter tabs at the top ("Book Cover Art," "Events," "Press") with a clear active-state style.

- Lightbox on click, with a visible close button and smooth fade transition.

5. CONTACT PAGE

- Simple two-column layout: contact form on one side, contact info/social links on the other.

- Form fields (Name, Email, Message) with clear labels above each field, gold-outlined inputs on an ivory or soft dark card background — never low-contrast placeholder-only fields.

- One clear, prominent submit button.

- Optional newsletter signup as a distinct, clearly separated small section below.

=== NAVIGATION & TECHNICAL ===

- Sticky top navigation bar: transparent over the hero, becomes solid dark-brown with a subtle shadow on scroll. Logo/site title in gold serif on the left, nav links (Home | About the Book | About the Author | Gallery | Contact) evenly spaced on the right, clear hover underline in gold.

- Fully responsive across mobile, tablet, and desktop — no overlapping text, no cropped images, no horizontal scroll.

- Subtle, tasteful fade-in-on-scroll animations only — never distracting or excessive motion.

- Footer: dark brown background, gold divider line at top, "© 2025 Sonia I. Guzman Rosario. All rights reserved.", publisher credit, and clearly spaced social icons.

- Overall priority: clarity and legibility over decoration. Every section should look intentional, uncluttered, and easy to scan — like a professional publishing house's author page, not a generic dense template.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sonia-guzman-site.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7bb9e4f2-41ec-401b-8cac-7688f88443ee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
