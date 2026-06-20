# Alsaqi Living Current Redesign

**Status:** Approved design specification
**Date:** 2026-06-20
**Project:** Al Saqi Mineral Water Factory bilingual website

## Goal

Rebuild the Alsaqi website as a distinctive consumer-first mineral-water experience with a strong distributor and investor path. The site must use the full substance, imagery, diagrams, and visual language of the supplied PDFs rather than reducing them to a generic landing page.

## Source Material

The redesign is grounded in both client PDFs:

- `بروفايل الساقي كامل.pdf`: 20 physical pages, 30,212,489 bytes.
- `فولدر الساقي سورس.pdf`: 2 physical pages, 707,850 bytes.

The profile contains 19 major photographic assets, embedded Noor, Avant Garde, Proxima Nova, and Myriad Pro typography, and a recurring navy/cyan/green identity. The folder adds a condensed brand promise, exact contact details, product positioning, commitment, responsibility, and packaging attributes.

The contact contract is `779779630`, `info@alsaqiwater.com`, and `www.alsaqiwater.com`.

## Selected Direction

The selected direction is **Living Current**.

Alsaqi opens as an emotional, premium consumer brand. A continuous current then leads visitors through product choice, industrial proof, commercial value, responsibility, and partnership. The experience borrows the production credibility of the proposed Precision in Motion direction and the product interaction of Retail Theatre without losing the softer consumer entry point.

The single memorable device is a responsive current line derived from the logo's water and leaf geometry. It changes purpose by chapter: reveal mask, product scale, audience dial, conveyor route, market runway, and partnership path. It must never become an unrelated decorative squiggle.

## Audience And Conversion

The primary audience is the everyday consumer. The secondary audience is distributors, traders, institutions, and investors.

The homepage has two clear conversion paths:

1. **Drink Alsaqi:** discover the product range, use occasions, quality, and availability.
2. **Grow with Alsaqi:** understand trader value, investor value, production capacity, business model, growth strategy, and partnership contact.

Neither path becomes a separate microsite. Both remain part of one coherent brand story and share the same source material.

## Page Story

### 1. The Refined Choice

The hero uses real Alsaqi bottle photography, the exact company identity, the Arabic slogan `الساقي… اختيارك الراقي`, all three sizes, and the two conversion paths. The hero must communicate water and product before corporate claims.

### 2. More Than Water

The executive summary becomes a concise brand declaration covering:

- High production quality and health standards.
- Accurate understanding of market behavior and needs.
- Focused products designed for high turnover.
- Professional distribution built for profitability and continuity.
- Alsaqi as a brand-building platform rather than only a production facility.

### 3. Three Sizes, Three Jobs

The product theatre preserves the PDF positioning exactly:

- **330 ml:** rapid consumption and high-density points of sale.
- **750 ml:** restaurants, cafes, hospitality, and refined individual service.
- **1200 ml:** practical, economical daily and family use.

The folder's packaging attributes also appear: clear and visually attractive, easy to carry and use, prominent on shelf, and supportive of the purchase decision.

### 4. Value For Everyone

An audience lens consolidates the three circular value analyses without removing any point.

**Consumer:** safe water, consistent quality and taste, practical modern packaging, appropriate price for quality, and daily reliability.

**Trader:** high turnover, competitive margin, stable supply, fast-moving continuous profit, easy reordering, and ready marketing support.

**Investor:** stable demand, fast cash cycle, scalability, potential for a high-value brand, and relatively low risk.

### 5. Precision In Motion

A production chapter covers:

- Highly efficient automated production lines.
- Industrial control through PLC/HMI systems.
- Precise quality monitoring at every stage.
- Waste reduction and improved operational efficiency.
- Stable production and dependable supply.

### 6. Standards, Clearly Stated

The quality chapter includes food-safety systems, health-specification conformity, periodic quality tests, and the direction toward ISO and HACCP certification.

The website must not state or imply that ISO or HACCP certification has already been obtained. It must use language such as “working toward” or “direction toward certification,” matching the source.

### 7. Launch, Establish, Expand

The market runway preserves all three strategy phases:

- **Launch:** build a strong distributor network, provide motivating entry offers, and spread quickly across points of sale.
- **Establish:** maintain product availability and strengthen market trust.
- **Expand:** geographic growth, additional production lines, and new products.

The work philosophy assembles after the runway: reliable product + intelligent pricing + effective distribution = successful brand.

Competitive advantages remain visible: focus on best-selling products, trader-directed distribution, studied pricing flexibility, professional market-led management, and a strong scalable visual identity.

### 8. How Alsaqi Operates

The six institutional values are presented in full:

1. Quality first.
2. Trust and credibility.
3. Commercial value.
4. Operational efficiency.
5. Innovation and development.
6. Sustainability.

The responsibility matrix retains all four pillars:

- **Environment:** conserve resources and reduce environmental impact.
- **Health:** provide a safe product supporting a healthy lifestyle.
- **Community:** support local initiatives and employment.
- **Economy:** support traders and economic activity.

### 9. Build The Market Together

The closing chapter includes all growth opportunities:

- Entering new markets.
- Private-label manufacturing.
- Strategic retail-chain partnerships.
- Expansion into carbonated and flavored beverages.

The business model includes distributor networks, institutional supply contracts, and direct sales to major organizations. Its commercial logic is high sales volume, fast turnover, and a studied margin.

The partnership invitation addresses traders, investors, expansion partners, and distributors. The conclusion preserves the source meaning and closes with `الساقي… نقاء يُوثق، وفرصة تُستثمر.`

## PDF Page Coverage

Every physical profile page is mapped into the page story:

| Physical page | Source section | Website destination |
| --- | --- | --- |
| 1 | Cover and bottle family | Hero |
| 2 | Date and contacts | Footer and contact |
| 3 | Executive summary | More Than Water |
| 4 | Vision | Brand promise |
| 5 | Mission | Brand promise and audience lens |
| 6 | Institutional values | Values orbit |
| 7 | Work philosophy | Market runway equation |
| 8 | Products | Product theatre |
| 9 | Trader value | Audience lens |
| 10 | Investor value | Audience lens |
| 11 | Consumer value | Audience lens |
| 12 | Competitive advantage | Market runway |
| 13 | Market strategy | Market runway |
| 14 | Operations and production | Precision in Motion |
| 15 | Quality and standards | Quality gate |
| 16 | Social responsibility | Responsibility matrix |
| 17 | Growth opportunities | Growth chapter |
| 18 | Business model | Growth chapter |
| 19 | Partnership invitation | Partnership call to action |
| 20 | Conclusion | Final statement |

Both folder pages are also covered through the hero, brand promise, products, commitment, responsibility, packaging attributes, and contact details.

## Visual And Asset System

- Use the PDF's deep navy, mineral blue, cyan, spring green, white, and warm wood palette.
- Export the exact Alsaqi logo from the PDF. Do not recreate the wordmark with approximate typography.
- Convert CMYK PDF imagery to color-correct sRGB assets before web optimization.
- Use all 19 relevant photographs: 11 as major chapter scenes and 8 as supporting transitions, proof frames, or the partner gallery.
- Rebuild the circular analyses, market phases, flowing frames, arrows, and success equation as responsive interface graphics rather than flat screenshots.
- Use Astro's image pipeline to produce responsive WebP/AVIF variants while preserving a high-quality source asset.
- Keep the source imagery's cinematic and slightly surreal atmosphere. Do not replace it with generic stock photographs.

## Typography

The source uses Noor Bold/Regular for Arabic and Avant Garde, Proxima Nova, and Myriad Pro for English.

Licensed webfont files will be used if the client provides them. Embedded PDF subsets will not be extracted and redistributed as webfonts. Until licensed files are available, the implementation uses a close Arabic display/body pairing and a geometric English display/body pairing selected for similar proportions and energy.

## Arabic Experience

Arabic is a complete art direction, not a translated English layout.

- Arabic source copy is the canonical content wherever the PDFs provide it.
- Arabic headings use an assertive Kufi-style display face with readable Arabic body typography.
- The Arabic hierarchy may use different line breaks, type sizes, and copy widths from English.
- Navigation order, directional controls, progress, audience dial movement, market runway, and conveyor movement reverse logically in RTL.
- Decorative currents and image crops are recomposed for RTL rather than mechanically mirroring photography or logos.
- Arabic does not use English-style tracking or uppercase conventions.
- Arabic punctuation and idiomatic phrasing are preserved.
- Arabic-Indic numerals may be used for narrative counters; product labels retain internationally recognizable `330 ml`, `750 ml`, and `1200 ml` where clarity benefits.
- Every English and Arabic state receives separate desktop and mobile visual QA.

## Motion System

Motion has one orchestrated grammar. Generic fade-up animation must not be applied to every element.

### Hero

- Bottles rise through a water-mask reveal.
- The headline reveals line by line.
- The logo-derived current traces once and becomes the scroll guide.
- A reduced-motion state displays the final composition immediately.

### Product Theatre

- Real bottle imagery changes scale and position between 330, 750, and 1200 ml.
- Selection triggers a restrained displacement ring and contextual copy transition.
- Keyboard, touch, and click selection are equivalent.

### Audience Lens

- Consumer, trader, and investor values share one rotating dial.
- The active audience controls both diagram labels and the adjacent photograph.
- All values remain in the DOM and accessible without animation.

### Factory Conveyor

- A bounded pinned sequence moves through automatic lines, PLC/HMI, quality control, and efficiency.
- The mobile version becomes a normal vertical sequence and never traps scrolling.

### Market And Values

- Market phases progress along one path and assemble the work equation at completion.
- Six values orbit the Alsaqi mark once, then settle into stable readable cards.
- Responsibility pillars unfold from a central bottle into four independent outcomes.

### Motion Constraints

- Use CSS transforms, IntersectionObserver, Web Animations, and one requestAnimationFrame scroll controller.
- Avoid cursor followers, endless ambient motion, autoplay video, and multiple competing parallax systems.
- Respect `prefers-reduced-motion` and provide no-motion equivalents for every interaction.

## Component Architecture

The Astro page is divided into focused components:

- `Header.astro`: bilingual navigation, language control, consumer and partner paths.
- `HeroCurrent.astro`: hero identity, bottle family, and current origin.
- `Manifesto.astro`: executive summary, vision, and mission.
- `ProductTheatre.astro`: product sizes and packaging attributes.
- `AudienceLens.astro`: consumer, trader, and investor value systems.
- `FactoryConveyor.astro`: production and operating proof.
- `QualityGate.astro`: quality controls and certification direction.
- `MarketRunway.astro`: strategy phases, work equation, and competitive advantages.
- `ValuesOrbit.astro`: six institutional values.
- `ResponsibilityMatrix.astro`: four responsibility pillars.
- `GrowthModel.astro`: growth opportunities and business model.
- `PartnerInvitation.astro`: invitation, closing claim, and contact conversion.
- `WaterFooter.astro`: identity, navigation, and exact contact details.

Shared bilingual content moves into `src/data/alsaqi.ts`. Each section records its source PDF page and provides complete Arabic and English content. Components render content and do not contain long duplicated translation strings.

Interaction code is split by responsibility:

- Language and direction.
- Scroll-current progress.
- Product theatre.
- Audience lens.
- Factory conveyor.
- Market runway.
- Reveal orchestration and reduced-motion handling.

## State And Data Flow

The page has four user-controlled states: language, selected bottle size, selected audience, and mobile-menu state. Scroll progress is derived state and is not persisted.

The chosen language is stored locally with safe failure handling. Product and audience state reset to useful defaults on load. Components expose stable `data-*` contracts to small interaction modules. All source content is rendered server-side so search engines and no-JavaScript users receive the complete story.

## Error And Fallback Behavior

- If JavaScript fails, every chapter remains readable and all major images remain visible.
- If a lazy image fails, its semantic background and descriptive fallback remain present.
- If local storage is unavailable, language selection continues for the current page session.
- Pinned motion degrades to normal document flow on unsupported or constrained devices.
- Missing optional licensed fonts fall back to the approved compatible font stack without layout collapse.

## Accessibility

- Semantic section headings and landmarks.
- Keyboard-accessible product and audience controls.
- Visible focus treatment on all interactive elements.
- Accurate ARIA labels and selected states.
- Descriptive alternative text for meaningful source photography.
- Decorative diagrams hidden from assistive technology when the same content is available in text.
- WCAG AA contrast for body text and controls.
- Touch targets of at least 44 by 44 CSS pixels.
- No scroll trap or keyboard trap.

## Performance

- Initial transferred page target below 900 KB on a modern browser.
- Hero art is responsive and preloaded; later chapter imagery is lazy loaded.
- Asset dimensions are explicit to prevent layout shift.
- Motion uses transform and opacity where possible.
- No autoplay video or heavy animation framework.
- The 19 photographs are represented across the full experience but only loaded near their chapters.

## Testing And Verification

Implementation follows test-first development.

- A content-coverage test verifies all nine chapters, product sizes, six values, three audience systems, three market phases, four responsibility pillars, growth opportunities, business model, contacts, and closing claims.
- An asset-manifest test verifies all 19 photographs, their source-page mapping, alt text, and sRGB web outputs.
- A bilingual-schema test rejects missing Arabic or English fields.
- Interaction tests verify product selection, audience selection, language switching, RTL state, and reduced-motion behavior.
- Astro type checking and production build must pass.
- Browser QA covers desktop and mobile, English and Arabic, keyboard navigation, reduced motion, and slow-loading imagery.
- Active-source scans reject Novan identity leakage and incorrect claims of obtained ISO/HACCP certification.

## Acceptance Criteria

The redesign is complete when:

1. Every meaningful section from both PDFs is represented and traceable.
2. All 19 relevant photographs appear in an intentional role.
3. The page reads first as a premium water brand and second as a credible commercial opportunity.
4. Arabic feels natively composed and receives equal visual quality to English.
5. Motion is distinctive, purposeful, responsive, and accessible.
6. The current website's generic CSS bottle illustration is replaced with real product imagery.
7. The site never claims certifications not yet obtained.
8. Automated checks, production build, and browser QA pass.

## Non-Goals

- Ecommerce, checkout, customer accounts, or online ordering.
- A content-management system.
- Invented laboratory results, mineral composition, certifications, geographic claims, or factory capacity.
- New AI-generated brand photography when the PDF source already provides the required scene.
- Reworking Novan or Stim as part of this Alsaqi redesign.
