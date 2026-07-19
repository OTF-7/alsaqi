# Adversarial review — round 2

Fresh production validation was run on 2026-07-15 with `npx astro check && npx astro build`. This review treats source intent as insufficient: findings below are based on the resulting DOM/CSS geometry and generated files.

## Findings

1. **BLOCKER — The trader value equation overlaps its fifth node at both 768px and 1024px.**

   Evidence: `src/components/AudienceLens.astro:45-49` puts the fifth lozenge at the bottom of `.lens-infographic` and the equation in the next grid row. `src/styles/site.css:648-651` anchors that fifth lozenge to `bottom: 0` and gives the equation `margin-top: -4.4rem`. At the `max-width: 1024px` layout, `src/styles/site.css:737-741` makes the infographic 590px tall, changes the panel to one column with a 1.5rem (24px) gap, and leaves a `-4rem` (-64px) equation margin. The equation therefore intrudes 40px into the preceding infographic row. The trader is the one lens that renders both a fifth node and an equation, so its equation lands over the bottom lozenge. The mobile reset at `src/styles/site.css:760-770` does not apply at 768px, and 1024px also matches the faulty rule. This directly fails the no-overlap requirement at two named acceptance widths.

2. **MAJOR — Growth-card arrows lose their card as their positioning context and break in the 390px stack.**

   Evidence: each hexagon contains an absolute decorative arrow (`src/components/GrowthModel.astro:20-22`). `.growth-grid` is positioned (`src/styles/site.css:690`), but its articles never receive `position: relative` in either article rule (`src/styles/site.css:374-378`, `src/styles/site.css:691-692`). The arrow is then assigned `position: absolute; top: 24%` at `src/styles/site.css:692`, resolving vertically against the shared grid instead of its individual card. At 390px, `src/styles/site.css:775-776` stacks four cards of at least 155px, making the shared grid at least 620px before gaps; every arrow consequently targets roughly the same 149px+ shared-grid y-coordinate instead of its own card. The card `clip-path` can clip the displaced descendants; without clipping they stack at the same vertical band. Either result is broken card composition and not the promised per-card purposeful icon.

3. **MAJOR — Hover/focus parity is incomplete, and one literal card class has no hover at all.**

   Evidence: the deliberate interaction selectors at `src/styles/site.css:698-721` cover the data cards, tabs, pill CTAs, desktop nav, and main footer links, but omit all of the following rendered controls:

   - `.vision-card` (`src/components/VisionMission.astro:12-17`, styled at `src/styles/site.css:203-212`) has neither `:hover` nor `:focus-visible`; it is the explicit card-class failure requested by the audit.
   - `.site-brand`, `.lang-switch button`, `.menu-toggle`, and `.mobile-menu a` are rendered at `src/components/Header.astro:17-39` and styled at `src/styles/site.css:120-142`, but none has a hover-and-focus animation pair. The mobile nav therefore does not inherit the desktop nav's animated underline.
   - The footer back-to-top link at `src/components/WaterFooter.astro:52-55` has only its static circle rule at `src/styles/site.css:418`.
   - `.whatsapp` has a 250ms hover-only transform (`src/styles/global.css:37-53`), no animated `:focus-visible` equivalent, and its 250ms hover-in exceeds the mandatory 200ms ceiling.

   The global outline at `src/styles/global.css:35` preserves basic keyboard visibility, but it does not satisfy the explicit requirement that both states animate something.

4. **MAJOR — The center pour thread was not removed “everywhere”; it remains live on the built `/heroes` route and its animation code remains shipped there.**

   Evidence: `src/components/heroes/HeroRaqi.astro:27-35` still renders the 900-unit vertical `data-pour-thread`, and `src/components/heroes/HeroRaqi.astro:171-181` positions, strokes, and draws it. `src/scripts/heroes.ts:20-21` queries it and `src/scripts/heroes.ts:44-52` continuously regenerates the line. The fresh build contains `data-pour-thread` and `M60 0 L60 900` in `dist/heroes/index.html:2`. Even the index stylesheet retains the old one-pixel center-thread definition at `src/styles/site.css:180-187`; `src/styles/site.css:606` merely hides it later with `display: none !important` rather than removing it. The main `dist/index.html` does not display the thread, but the unqualified “everywhere” cleanup is not complete.

5. **MAJOR — Two generic hero decorations survive the purpose pass.**

   Evidence: `src/components/HeroCurrent.astro:16-17` still renders `.hero-aurora` and `.hero-spotlight` as `aria-hidden` decoration. `src/styles/site.css:156-157` defines them as a blurred floating color streak and a large radial ellipse, and `src/styles/site.css:439` continuously animates the aurora. Neither shows the product, reproduces brochure imagery/diagram language, nor represents a drop/water action. The spotlight is exactly an aimless ellipse of the kind item 3 says to delete; color alone is not purpose.

6. **MAJOR — The first vision panel still contains a large unfilled void.**

   Evidence: both panels are at least 570px tall (`src/styles/site.css:203`), and both headings are pushed down by `clamp(8rem, 17vw, 13rem)` (`src/styles/site.css:210`). At 1440px that is the 13rem/208px cap. Only the mission panel contains the drop/tower/terrace centerpiece (`src/components/VisionMission.astro:17-25`); the vision panel at `src/components/VisionMission.astro:12-16` has only the tiny `V` before that 208px gap. This leaves a large dark rectangle rather than completing the brochure motif across the section, contrary to the explicit empty-void/purpose pass.

7. **MINOR — Deleted random-ring systems survive as dead CSS instead of being deleted.**

   Evidence: `src/styles/site.css:221-224` still defines the old three-ring `.product-halo`; `src/styles/site.css:265-270` still defines the circular `.lens-orbit`; and `src/styles/site.css:360-361` still defines `.responsibility-lines`. None has a matching element in `dist/index.html`, so this is not a current visual regression. It is nevertheless direct proof that the mandated “DELETE every decorative element” cleanup was implemented by abandoning selectors, not deleting the generic systems.

## Watermark measurements — pass

The shared filter is real and active: `src/components/SiteArt.astro:3-7` contains one `feTurbulence` with a 12s SMIL `animate` plus `feDisplacementMap`; all 11 watermark nodes in `dist/index.html:2` carry `.living-watermark`, which applies `filter: url(#water-jiggle)` at `src/styles/site.css:43-56`. Reduced motion removes the filter at `src/styles/site.css:585-590`.

Regular words resolve from `clamp(4.25rem, 10.5vw, 11rem)` (`src/styles/site.css:594-604`), overridden by the 1024/760/390 rules at `src/styles/site.css:734-736`, `src/styles/site.css:754-756`, and `src/styles/site.css:780-782`. The hero uses `clamp(2.6rem, 6.4vw, 6rem)` and the listed breakpoint overrides. Estimated Alexandria width uses the requested `0.55em × character count` model:

| Watermark | Chars | 390px (font → width) | 768px | 1024px | 1440px |
|---|---:|---:|---:|---:|---:|
| الساقي… اختيارك الراقي | 22 | 24.18 → 292.6px | 49.15 → 594.7px | 65.54 → 793.0px | 92.16 → 1115.1px |
| الساقي | 6 | 48.75 → 160.9px | 96 → 316.8px | 128 → 422.4px | 151.2 → 499.0px |
| النقاء | 6 | 48.75 → 160.9px | 96 → 316.8px | 128 → 422.4px | 151.2 → 499.0px |
| القيمة | 6 | 48.75 → 160.9px | 96 → 316.8px | 128 → 422.4px | 151.2 → 499.0px |
| الإنتاج | 7 | 48.75 → 187.7px | 96 → 369.6px | 128 → 492.8px | 151.2 → 582.1px |
| الجودة | 6 | 48.75 → 160.9px | 96 → 316.8px | 128 → 422.4px | 151.2 → 499.0px |
| السوق | 5 | 48.75 → 134.1px | 96 → 264.0px | 128 → 352.0px | 151.2 → 415.8px |
| القيم | 5 | 48.75 → 134.1px | 96 → 264.0px | 128 → 352.0px | 151.2 → 415.8px |
| المسؤولية | 9 | 48.75 → 241.3px | 96 → 475.2px | 128 → 633.6px | 151.2 → 748.4px |
| النمو | 5 | 48.75 → 134.1px | 96 → 264.0px | 128 → 352.0px | 151.2 → 415.8px |
| الشراكة | 7 | 48.75 → 187.7px | 96 → 369.6px | 128 → 492.8px | 151.2 → 582.1px |

No estimated word exceeds its viewport or padded content box. Regular watermark tops resolve to 104px/112px/112px/144px at 390/768/1024/1440, below the 74px/82px fixed header; section content is `z-index: 2` while watermarks are `z-index: 0` (`src/styles/site.css:29`, `src/styles/site.css:43-57`).

## Decorative-element purpose inventory

| Remaining element/system | Evidence | Judgment |
|---|---|---|
| Shared zero-size filter defs | `src/components/SiteArt.astro:1-10` | Technical prerequisite, not visible decoration — pass. |
| Living Arabic ghost words | section components; `dist/index.html:2` | Brand/brochure language plus water displacement — pass. |
| Hero aurora and elliptical spotlight | `src/components/HeroCurrent.astro:16-17` | No permitted purpose — **finding 5**. |
| Hero surface glow and landing ripple | `src/components/HeroCurrent.astro:41-42` | Water surface physically attached to the bottles — pass. |
| Terrace, tower-drop, falling-drop dividers | `src/components/SectionDivider.astro:6-30` | Brochure tower/terrace language and drop motif — pass. |
| Vision drop, Shibam towers, crenellations, terrace paths | `src/components/VisionMission.astro:18-24` | Brochure cover motif — pass, but incomplete distribution causes **finding 6**. |
| Product photos, bottle cutouts, size ghost | `src/components/ProductTheatre.astro:23-37` | Product/role communication — pass. |
| Value photo, hex center, numbered lozenges, connectors | `src/components/AudienceLens.astro:31-49` | Brochure infographic language — pass, subject to **finding 1**. |
| Quality photo, shield, check stamps | `src/components/QualityGate.astro:15-32` | Brochure quality emblem/checklist — pass. |
| Market equation operators and launch photo | `src/components/MarketRunway.astro:22-42` | Functional equation plus required brochure photo — pass. |
| Value-card droplets | `src/components/ValuesOrbit.astro:12-19` | Brand drop motif — pass. |
| Responsibility droplets and ripples | `src/components/ResponsibilityMatrix.astro:16-25` | Required four-pillar drop sequence — pass. |
| Growth photo, hexagons, link strokes, arrows | `src/components/GrowthModel.astro:14-23` | Brochure growth-chain language — purpose passes; positioning fails in **finding 2**. |
| Partner crown photo | `src/components/PartnerInvitation.astro:7-10` | Required product/brochure closing image — pass. |
| Footer tower skyline and water surface | `src/components/WaterFooter.astro:15-35` | Yemeni brochure line art and water motif — pass. |
| CTA ripples, bottle shine, tab fills, nav/footer underlines | `src/styles/site.css:705-732` | Functional interaction feedback — pass where wired; omissions are **finding 3**. |
| Dead halo/orbit/line selectors | `src/styles/site.css:221-224`, `265-270`, `360-361` | No DOM purpose — **finding 7**. |

The former market void is closed: the equation now uses `margin-block: clamp(2.5rem, 5vw, 4rem)` (`src/styles/site.css:665`) and is followed directly by the photo-backed phase band. No other source-defined `min-height`/padding void was evidenced beyond the vision panel in finding 6.

## Confirmed passes

- **Photos:** all required choices are present as lazy, sized Astro `<picture>/<img>` output with hashed assets in `dist/index.html:2`: 03, all three product scenes (10/01/08), all three lens scenes (10/08/09), 13, 04, 12, 16, and 19. Their visible boxes are 300–690px minimum or full-bleed bands, and every photo system has a dark overlay at `src/styles/site.css:611-614`, `619-623`, `632-635`, `653-660`, `666-669`, `684-687`, and `694-696`.
- **Implemented hover families:** value/pillar/growth/phase/capability/advantage/responsibility/model/lens cards, size/lens tabs, pill/header CTAs, active product and hero bottles, desktop nav, footer nav/contact links all have paired hover/focus animation with 160ms in and 320ms out at `src/styles/site.css:698-732`.
- **Footer:** `src/components/WaterFooter.astro:26-32` uses only green/aqua/petrol/site-background stops; scroll progress still drives water baseline through rAF at `src/scripts/main.ts:70-139`, with reduced motion fixed at 70%.
- **Brochure animations:** vision draw/float, value connector draw/node entry, quality shield/check stamps, growth link draw, and responsibility fall/ripples are all wired through `data-draw-section`/observer classes and the animation rules at `src/styles/site.css:420-455`, `616`, and `681-689`.
- **Regression:** all 161 unique Arabic inline-code strings from `docs/full-site-brief.md` occur verbatim in fresh `dist/index.html`; `astro check` reports 0 errors/warnings/hints; `astro build` succeeds. Reduced motion suppresses CSS animation/transition globally, removes watermark filtering, hides falling dividers, fixes reveal state, and makes footer water static (`src/styles/site.css:585-590`, `src/scripts/main.ts:77`, `90-92`, `107-124`). Static analysis found no unconditional null dereference or missing required-element access in `src/scripts/`; optional DOM is guarded and the footer's non-null SVG assertion is reached only after both footer and path exist (`src/scripts/main.ts:70-73`).

## Round 3 resolution (applied directly by orchestrator — builder agent hung and was killed)

The builder codex process hung ~2h producing zero output and was terminated; the orchestrator applied all fixes directly.

1. BLOCKER equation overlap — `.lens-equation` negative margins removed (`margin-top: 1.5rem` desktop / `1.25rem` @1024; @760 already positive). Verified in-browser: trader node-5 vs equation = clear at 768 and 1024.
2. Growth arrows — `.growth-grid article` given `position: relative`; arrow re-centered inside hexagon. Verified: 4/4 arrows inside their own card, 4 distinct Y positions at 390px.
3. Hover parity — added hover + animated focus-visible for `.vision-card`, `.site-brand`, `.lang-switch button`, `.menu-toggle`, `.mobile-menu a`, footer back-to-top; `.whatsapp` retimed to 180ms + focus-visible. All hover-in ≤200ms.
4. Center thread / heroes — `/heroes` route, `src/components/heroes/`, `src/scripts/heroes.ts` deleted; `.section-divider::before` center line and its hide-rule removed.
5. Aurora/spotlight — `.hero-aurora` deleted (markup + CSS + keyframe); spotlight moved inside `.hero-products`, retuned to a centered pool behind the bottle trio (reads as product stage-light).
6. Vision void — first vision panel given a first-place podium + bottle line-art motif (`.vision-podium`, draw-on-scroll + float), mirroring the mission tower-drop.
7. Dead CSS — `.product-halo`, `.lens-orbit`, `.responsibility-lines` and their responsive refs physically deleted.

Also: watermark jiggle strengthened (displacement scale 7→16) and every watermark refitted (0/11 clip at 390/768/1024/1280). `astro check`/`build` pass, 162/162 verbatim Arabic strings present, no console errors.
