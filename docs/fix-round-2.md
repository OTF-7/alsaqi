# ROUND 2 — Client feedback fixes (mandatory, all seven)

Client reviewed the rebuilt site. Verdict: good bones, but **"the site is just a collection of random illustrations without a purpose — make them useful and complete."** Every fix below is mandatory. The verbatim-Arabic rule from docs/full-site-brief.md still applies unchanged — do not touch copy except where stated.

## 1. USE THE BRAND PHOTOS (biggest complaint)
The client's brochure photos exist in `src/assets/alsaqi/` (01–19) and are barely used. Integrate them so each section is VISUALLY GROUNDED in its subject, always color-graded into the palette (dark petrol overlay gradients, never a bright pasted rectangle):
- `#about` executive summary → `03-first-place.jpg` (bottle on the winners' podium) as a side visual or graded backdrop panel.
- `#products` size theatre → per-size scene behind/beside the bottle, crossfading WITH the size switch: 330 → `10-consumer-shelf.jpg` (store aisle), 750 → `01-hero-family.png` or `07-product-family.jpg` (majlis/table), 1200 → `08-trader-store.jpg` (family/daily). The scene change is what makes the theatre feel alive.
- `#value` lenses → portrait per lens, swapping with the tab: المستهلك → `10-consumer-shelf.jpg`, التاجر → `08-trader-store.jpg`, المستثمر → `09-investor-desk.jpg`.
- `#factory` → keep `13-factory-line.jpg`/`02-production-line.jpg` but make it a full-bleed graded band, not a small box.
- `#quality` → `04-lab-checklist.jpg` beside the animated checklist (it IS the same checklist in the brochure — make that visible), or `14-quality-bottle.jpg` as backdrop.
- `#market` → `12-market-launch.jpg` (truck fleet) behind the phases timeline.
- `#growth` → `16-growth-retail.jpg` or `06-road-expansion.jpg` graded band.
- `#partners` → `17-business-contract.jpg` and/or `19-retail-crown.jpg` as the closing backdrop (the crown shot suits «الساقي… نقاء يُوثق، وفرصة تُستثمر»).
Use astro:assets Image, lazy, sized. Photos must never reduce text contrast (overlay gradient ≥ what's needed for WCAG AA on body text).

## 2. FOOTER WAVE COLOR
The footer water gradient still uses the old blue `oklch` stops (Novan leftovers). Rebuild `#saqi-sea-gradient` from the site palette: deep petrol `#0a3554` → `#0f5c85` → aqua `#2fa8c9` glints with a subtle green `#4ea832` shimmer at the crest line. It must read as THIS site's water.

## 3. PDF ILLUSTRATIONS, ANIMATED, WITH PURPOSE
Replace generic decorative shapes with the brochure's own visual language, animated, and each tied to its section's meaning:
- The folder-cover motif — a **water-drop outline containing Yemeni tower-house line-art** — becomes the `#vision` centerpiece (stroke-draw on scroll, then gentle float). It already half-exists; finish it: recognizable Shibam-style stacked houses with crenellations, terraced contour base.
- `#value` → the brochure's **hexagon** infographic language (pages 7–9 use a center hexagon labeled للتاجر/للمستثمر/للمستهلك surrounded by numbered lozenges). Recreate: animated center hexagon holding the active lens name, list items connected as numbered nodes. This turns the section from "list + random radar circles" into the brochure's own diagram, alive.
- `#quality` → the brochure's **shield emblem** (page 6) as a drawn-on-scroll line-art shield behind/beside the checklist.
- `#growth` → the brochure's **hexagon chain** (page 17: four linked hexagons). Animate the links drawing between them.
- `#responsibility` → four droplet-icons that fall into place with a ripple (one per pillar, staggered on scroll).
- DELETE every decorative element that doesn't meet this bar (random circles, aimless rings, floating ellipses). Decoration must be: brand drop motif, brochure diagram language, or gone.

## 4. HOVER LIFE
Every interactive/card element gets a deliberate hover (and focus-visible equivalent):
- Cards (values, pillars, growth, phases): lift 4–6px + aqua edge-glow + their icon/number animates (droplet wobble, number counts a tick, line draws).
- Size tabs & lens tabs: liquid fill sweep in the accent color.
- CTAs: water-ripple from cursor point (CSS radial, cheap).
- Bottles: slight tilt + shine sweep on hover.
- Footer links: underline that "fills" like rising water.
- Nav links: existing style + smooth accent underline.
All ≤200ms in, ≤350ms out, disabled under reduced-motion, never causing layout shift.

## 5. REMOVE THE CENTER VERTICAL LINE
The thin vertical "pour" thread down the page center is disliked. Remove it everywhere (hero + dividers + any `--scroll-progress` thread visuals). KEEP the scroll-fills-the-footer-water behavior. The hero's landing-ripple ring can stay only if it's attached to the bottles' surface, not to a line from nowhere.

## 6. WATERMARKS — JIGGLE + NO CLIPPING
- The watery jiggle must be VISIBLY present: one shared SVG `feTurbulence`+`feDisplacementMap` filter, with `<animate>` on baseFrequency (slow loop, e.g. 9–14s) so the giant ghost words genuinely undulate like text under water. Test that it renders (Chrome + Safari); if displacement on huge text is too heavy, pre-render each watermark word as inline SVG `<text>` inside its own filtered group — but it must move.
- **No clipping**: every watermark word must fit fully inside the viewport width at all breakpoints (font-size via `clamp()` keyed to vw and to word length, `white-space: nowrap`, centered; long words like «المسؤولية» sized so the FULL word is visible). Currently several («القيمة», «الجودة والمعايير» if used) bleed off-screen — fix all. Watermarks also must not overlap the fixed header at section tops: cap their box below the header line (e.g. top padding or lower placement).

## 7. PURPOSE PASS (the client's core criticism)
Walk every section and ask: does each visual element either (a) show the product, (b) show the brochure's own imagery/diagrams, or (c) reinforce the drop/water motif meaningfully? Anything else — remove. Empty dark voids (e.g., the large gap in `#market` between philosophy and the equation) must be closed up or given content. The page should feel like the brochure came alive, not like a template with Arabic pasted in.

## Definition of done
- All seven items done; `npx astro check` + `npx astro build` pass.
- Verbatim-string check still passes: every backtick Arabic string in docs/full-site-brief.md appears in dist/index.html.
- No overlaps at 1440/1024/768/390; watermarks fully on-screen at all four widths.
- Reduced-motion: all new animation disabled cleanly.
- EN translations added for any new visible microcopy (data-en/data-ar mechanism).
