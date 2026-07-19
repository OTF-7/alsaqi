# BRIEF: Three hero variants for Alsaqi Water — showcase page

## Goal
Build ONE new Astro page at `src/pages/heroes.astro` containing THREE full-viewport hero sections stacked vertically, each a *distinct art direction* for the same brand. The client will scroll through and pick one. This is a demo page — do NOT touch `index.astro` or existing components. Create new components under `src/components/heroes/` (HeroRaqi.astro, HeroNaqaa.astro, HeroYemen.astro) plus any shared script under `src/scripts/`.

Between the three heroes, insert a slim dark divider strip (~12vh) with the variant name + one-line description (Arabic) so the client knows where one ends and the next begins. Variant labels: «١ — الراقي», «٢ — النقاء», «٣ — من اليمن».

## Hard constraints
- Astro 5, no React. Vanilla TypeScript + CSS animations / requestAnimationFrame / IntersectionObserver. **No new npm dependencies** (no GSAP — hand-roll the motion; you have no network access).
- Do NOT start a dev server; it is already running elsewhere. Validate with `npx astro build` (must pass) — you may run that.
- Page language: **Arabic, dir="rtl"** only (demo). Use the existing `Base.astro` layout (it loads fonts: Alexandria = Arabic display, Noto Sans Arabic = Arabic body — CSS vars `--arabic-display`, `--arabic` exist in `src/styles/global.css`).
- Scope the styles of each hero (class-prefix or `<style>` in each component). Do NOT edit `global.css` except, if absolutely needed, additive utility at the end.
- `prefers-reduced-motion: reduce` must disable all continuous animation in every variant.
- Must look correct at 1440px desktop AND 390px mobile width.

## Assets (all exist)
- Bottle cutouts (transparent PNG, dark-scene lighting, high-res):
  - `src/assets/alsaqi/cutouts/bottle-330.png` (350×1090 crop)
  - `src/assets/alsaqi/cutouts/bottle-750.png` (410×1420)
  - `src/assets/alsaqi/cutouts/bottle-1200.png` (500×1700)
  Note: bottles are transparent-bodied with baked-in dark reflections → they look best on dark/mid backgrounds; on the light variant place them over a non-white panel/gradient zone.
- Logo with alpha: `src/assets/logo.png` (calligraphic الساقي inside a water drop, blues/greens).
- Import via `astro:assets` `<Image>` like existing components do.

## Brand
- Palette: deep petrol navy `#07293f` / `#0a3554`, petrol `#0f5c85`, aqua `#2fa8c9`, brand green `#4ea832`, lime `#8dc63f`, white. Signature brand move: diagonal gradient navy→teal→green (like their printed folder cover). Gold/amber `#c9a45c` allowed ONLY as faint rim-light accent in variant 1.
- Logo motif: the water drop; use drop-shaped outlines/masks as decorative motif.
- Texts — USE VERBATIM, do not rephrase (client requirement; taken from their printed brochures):
  - Kicker: `مياه معدنية طبيعية`
  - H1: `الساقي… اختيارك الراقي`
  - Support line: `مياه معدنية طبيعية بمعايير جودة عالية وتجربة تعكس الذوق الرفيع`
  - Secondary line (variant 3 may use): `الساقي… نقاء يُوثق، وفرصة تُستثمر.`
  - CTAs: primary `اكتشف مياه الساقي`, secondary `انمُ مع الساقي`
  - Factory name: `مصنع الساقي للمياه المعدنية`
- Sizes for small labels: 330 مل / 750 مل / 1200 مل.

## Shared quality bar (all three)
Huge Arabic display type (clamp up to ~7rem), bottles as cut-out heroes (not photos-in-boxes), one signature motion idea per variant executed WELL, entrance choreography (staggered reveals on load), subtle continuous ambient motion afterwards. No generic "card grid" look. No borders around heroes. Every variant includes the three bottles (1200 center-tallest), logo top corner, kicker, H1, support line, both CTAs.

---

## Variant 1 — «الراقي» (dark majlis luxury)
Mood: midnight majlis, cinematic product spot. Closest to premium liquor/perfume sites.
- Background: near-black petrol `#041624` with a huge radial spotlight behind the bottle trio; faint diagonal teal→green aurora sheen drifting very slowly along the top edge; barely-visible drop-outline pattern in the deep background.
- Bottles stand on a glossy "black water" surface: build reflection with CSS (`transform: scaleY(-1)` + gradient mask + blur). Slight per-bottle parallax on mouse move (desktop only, few px, eased).
- Behind the bottles: the H1 rendered GIANT (viewport-wide, white, ~10% opacity full version) *plus* the readable H1 in front. Type behind product, product in front of type — the stim overlap trick.
- Gold `#c9a45c` used only as thin rim-light gradient on the surface line and a hairline under the kicker.
- Signature motion: **the first Pour** — a thin luminous vertical thread of water (SVG path, gradient aqua→green, gentle sine ripple via rAF) descends from the top of the viewport behind the H1 and "lands" at the water surface with a soft ripple ring that repeats every few seconds. This thread is the beginning of the site-wide "الساقي يسقي" concept.
- Entrance: spotlight blooms from black → bottles rise 40px with stagger (center first) → type slides up → thread pours in last.

## Variant 2 — «النقاء» (glass & light)
Mood: morning light through water; a lab-clean, air-and-glass world. The anti-dark-site.
- Background: off-white `#f4f9fb` to pale aqua; a full-viewport **caustics field**: overlapping blurred SVG/CSS blobs of aqua/green at low opacity slowly morphing (CSS keyframes on border-radius/transform — cheap, elegant), like light on a pool floor.
- The bottle trio sits inside a large **drop-shaped panel** (CSS clip-path or inline SVG mask) filled with the brand navy→teal→green gradient — dark enough for the cutouts to read. The drop panel is the composition anchor, echoing the logo.
- Type: petrol-navy H1, oversized; the word «الراقي» in the H1 gets a liquid gradient fill (aqua→green, animated background-position shimmer, slow).
- Signature motion: **refraction line** — a horizontal "waterline" crosses the section; content above it is crisp, and a mirrored, slightly wavy, blurred copy of the H1 shows below it like text seen through water (CSS reflection + `filter: url(#wave)` SVG turbulence displacement, animated subtly).
- Entrance: caustics fade in → drop panel scales from 0.92 with a soft "surface tension" overshoot → bottles rise with stagger → H1 letters reveal with a wipe.

## Variant 3 — «من اليمن» (heritage line-art)
Mood: the folder cover brought to life — Yemen's architecture and terraced mountains in white line-art over the brand gradient.
- Background: full-bleed diagonal brand gradient navy→petrol→green (like their folder cover 2026 page).
- Decorative layer: hand-drawn-style **white outline SVG line-art** (stroke only, ~1.5px, opacity ~0.5) of: a large water drop outline containing simplified Yemeni tower-house silhouettes (Shibam-style stacked rectangles with crown crenellation), plus terraced mountain contour lines flowing along the bottom. DRAW these as inline SVG paths yourself — stylized and geometric is fine, aim for elegant, not literal. On load, strokes draw themselves in (`stroke-dasharray`/`dashoffset` transition, staggered ~2s).
- Bottles: trio bottom-right (RTL: visually left), standing on the topmost terrace contour line, modest scale (this variant is about place, not product monumentality).
- Type: H1 white and huge, top-right (RTL start), kicker above it, support line + the secondary line `الساقي… نقاء يُوثق، وفرصة تُستثمر.` below, CTAs on gradient-appropriate styles (primary = white pill, dark text; secondary = outline white).
- Signature motion: after strokes draw in, a single **droplet** (small SVG drop) detaches from the big drop outline every ~6s and falls along a curved path into the terrace lines, which respond with one soft expanding contour ripple.
- Optional flourish if cheap: very slow pan/drift of the line-art layer for depth.

## Divider strips
Dark `#041624`, centered small Arabic label (`«١ — الراقي»` etc.) + one-liner: 
1. `فخامة المجلس… منتج تحت الضوء` 
2. `نقاء يُرى بالعين… ضوء وماء` 
3. `قصة أرض… تُروى بخط أبيض`

## Definition of done
- `npx astro build` passes.
- `/heroes` renders all three variants correctly in RTL Arabic with the real assets.
- Each variant's entrance choreography triggers when it scrolls into view (IntersectionObserver), not all on page load.
- Reduced-motion supported. Mobile 390px lays out cleanly (bottles scale down, type clamps).
- Code style matches the repo (Astro components, scoped styles, TS scripts in `src/scripts/` loaded via the component).
