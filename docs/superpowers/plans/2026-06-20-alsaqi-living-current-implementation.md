# Alsaqi Living Current Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current generic Alsaqi landing page with the approved bilingual Living Current experience, covering every meaningful PDF section and all 19 source photographs.

**Architecture:** Astro renders complete bilingual content from a typed source module. Focused components own each story chapter; small TypeScript modules progressively enhance language, product, audience, and scroll motion. PDF photography is rendered to color-correct sRGB assets and optimized by Astro.

**Tech Stack:** Astro 5, TypeScript, semantic HTML, CSS custom properties, IntersectionObserver, Web Animations API, requestAnimationFrame, Node smoke tests.

## Global Constraints

- Primary audience: premium consumer brand with a strong partner and investor path.
- Direction: Living Current with industrial proof and product theatre.
- Arabic must be natively composed, not mechanically mirrored English.
- Include all 19 mapped profile photographs and every approved PDF content chapter.
- Never claim ISO or HACCP certification has already been obtained.
- No heavy animation library, autoplay video, invented claims, or Novan/Stim changes.
- Preserve `779779630`, `info@alsaqiwater.com`, and `www.alsaqiwater.com` exactly.
- All behavior must have keyboard, reduced-motion, mobile, and no-JavaScript fallbacks.

---

### Task 1: Establish PDF Content And Asset Contracts

**Files:**
- Create: `tests/pdf-coverage.mjs`
- Create: `src/data/alsaqi.ts`
- Create: `src/data/assets.ts`
- Create: `src/assets/alsaqi/01-hero-family.png` through `src/assets/alsaqi/19-retail-crown.jpg`
- Modify: `tests/brand-smoke.mjs`

**Interfaces:**
- Produces: `alsaqiContent`, `products`, `audiences`, `values`, `marketPhases`, `responsibilityPillars`, `growthOpportunities`, and `alsaqiImages`.
- Each bilingual field is `{ en: string; ar: string }`.
- Each asset entry is `{ src, page, alt: { en, ar } }`.

- [ ] **Step 1: Write the failing coverage test**

Assert that `src/data/alsaqi.ts` contains the nine chapter keys, six values, three audiences, three market phases, four responsibility pillars, four growth opportunities, exact contacts, exact product sizes, and careful ISO/HACCP language. Assert that `src/data/assets.ts` maps 19 named assets.

- [ ] **Step 2: Run the test and verify RED**

Run: `node tests/pdf-coverage.mjs`

Expected: FAIL because `src/data/alsaqi.ts` does not exist.

- [ ] **Step 3: Render and crop the PDF photography**

Render physical pages 3-20 at 180 DPI with Poppler. Crop the photographic half of each alternating spread using Sharp: odd physical pages use the left half and even physical pages use the right half. Preserve page 1 as the hero. Export sRGB JPEG/PNG assets with semantic names.

- [ ] **Step 4: Implement the typed content and asset modules**

Define the approved English and Arabic source copy in `src/data/alsaqi.ts`. Import all images statically in `src/data/assets.ts` so Astro can optimize them.

- [ ] **Step 5: Run coverage tests and verify GREEN**

Run: `node tests/pdf-coverage.mjs && node tests/brand-smoke.mjs`

Expected: PASS with no output.

- [ ] **Step 6: Commit**

```bash
git add tests src/data src/assets/alsaqi
git commit -m "feat: add complete Alsaqi source content"
```

### Task 2: Build The Arabic-Native Shell And Living Current Hero

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/layouts/Base.astro`
- Modify: `src/components/Header.astro`
- Create: `src/components/HeroCurrent.astro`
- Create: `src/components/Manifesto.astro`
- Modify: `src/styles/global.css`
- Create: `tests/arabic-experience.mjs`

**Interfaces:**
- Consumes: `alsaqiContent`, `alsaqiImages`.
- Produces: `[data-current-root]`, `[data-current-path]`, and complete language attributes for enhancement modules.

- [ ] **Step 1: Write the failing Arabic and hero test**

Assert exact Arabic slogan, Arabic company name, Kufi/Arabic font tokens, RTL-specific selectors, `HeroCurrent` import, two conversion paths, and real hero image use.

- [ ] **Step 2: Verify RED**

Run: `node tests/arabic-experience.mjs`

Expected: FAIL because `HeroCurrent.astro` does not exist.

- [ ] **Step 3: Implement header, hero, manifesto, and layout**

Build the dark fixed identity bar, consumer/partner navigation, complete Arabic ordering, cinematic hero, current-line origin, executive summary, vision, and mission. Keep content server-rendered.

- [ ] **Step 4: Implement the bilingual visual tokens**

Add fixed desktop/mobile type sizes, Arabic-specific line breaks and widths, RTL motion variables, navy/cyan/green/wood palette, focus states, and reduced-motion defaults.

- [ ] **Step 5: Verify GREEN and build**

Run: `node tests/arabic-experience.mjs && npm run build`

Expected: tests pass and Astro builds one route.

- [ ] **Step 6: Commit**

```bash
git add src/pages src/layouts src/components/Header.astro src/components/HeroCurrent.astro src/components/Manifesto.astro src/styles tests/arabic-experience.mjs
git commit -m "feat: create Living Current brand opening"
```

### Task 3: Implement Product Theatre And Audience Lens

**Files:**
- Create: `src/components/ProductTheatre.astro`
- Create: `src/components/AudienceLens.astro`
- Create: `src/scripts/product-theatre.ts`
- Create: `src/scripts/audience-lens.ts`
- Modify: `src/scripts/main.ts`
- Modify: `src/styles/global.css`
- Modify: `tests/size-selector-smoke.mjs`
- Create: `tests/audience-lens-smoke.mjs`

**Interfaces:**
- Product controls: `[data-product-option]`, `[data-product-stage]`, `aria-selected`.
- Audience controls: `[data-audience-option]`, `[data-audience-panel]`, `aria-selected`.

- [ ] **Step 1: Extend product and audience tests and verify RED**

Run: `node tests/size-selector-smoke.mjs && node tests/audience-lens-smoke.mjs`

Expected: FAIL on missing real product stage and audience lens contracts.

- [ ] **Step 2: Build product theatre**

Render real product-family photography, exact use cases, packaging attributes, keyboard tabs, and a CSS displacement ring. The selected product changes scale, copy, and accessible state.

- [ ] **Step 3: Build audience lens**

Render all consumer, trader, and investor values. The selected lens changes the visible diagram and source photograph without removing inactive content from accessibility and no-JavaScript fallbacks.

- [ ] **Step 4: Add focused enhancement modules**

Each module initializes only when its root exists, uses event delegation, and exposes no globals.

- [ ] **Step 5: Verify GREEN and build**

Run: `node tests/size-selector-smoke.mjs && node tests/audience-lens-smoke.mjs && npm run build`

- [ ] **Step 6: Commit**

```bash
git add src/components/ProductTheatre.astro src/components/AudienceLens.astro src/scripts src/styles tests
git commit -m "feat: add product and audience experiences"
```

### Task 4: Implement Industrial Proof And Quality Gate

**Files:**
- Create: `src/components/FactoryConveyor.astro`
- Create: `src/components/QualityGate.astro`
- Create: `src/scripts/factory-conveyor.ts`
- Modify: `src/scripts/main.ts`
- Modify: `src/styles/global.css`
- Create: `tests/industrial-proof-smoke.mjs`

**Interfaces:**
- Factory stages use `[data-factory-stage]` and a root progress custom property `--factory-progress`.
- Quality claims use source-accurate strings and `data-certification-direction`.

- [ ] **Step 1: Write the failing industrial proof test and verify RED**

Assert automated lines, PLC/HMI, monitoring, waste reduction, food safety, health conformity, periodic tests, and future-direction ISO/HACCP language.

- [ ] **Step 2: Implement the bounded conveyor chapter**

Use four source images and a desktop sticky sequence. Render normal vertical flow at mobile widths and when reduced motion is enabled.

- [ ] **Step 3: Implement the quality gate**

Use the quality-bottle source art and four illuminated checkpoints. State certification direction carefully.

- [ ] **Step 4: Verify GREEN and build**

Run: `node tests/industrial-proof-smoke.mjs && npm run build`

- [ ] **Step 5: Commit**

```bash
git add src/components/FactoryConveyor.astro src/components/QualityGate.astro src/scripts src/styles tests/industrial-proof-smoke.mjs
git commit -m "feat: add industrial and quality proof"
```

### Task 5: Implement Market, Values, Responsibility, And Growth

**Files:**
- Create: `src/components/MarketRunway.astro`
- Create: `src/components/ValuesOrbit.astro`
- Create: `src/components/ResponsibilityMatrix.astro`
- Create: `src/components/GrowthModel.astro`
- Create: `src/components/PartnerInvitation.astro`
- Create: `src/scripts/market-runway.ts`
- Modify: `src/scripts/main.ts`
- Modify: `src/styles/global.css`
- Create: `tests/commercial-story-smoke.mjs`

**Interfaces:**
- Market phases use `[data-market-phase]` and `--market-progress`.
- Values and responsibility render complete server-side lists.

- [ ] **Step 1: Write the failing commercial story test and verify RED**

Assert the three phases, equation terms, five competitive advantages, six values, four responsibility pillars, four growth opportunities, three business-model routes, partnership audiences, and closing Arabic claim.

- [ ] **Step 2: Build market runway and work equation**

Assemble launch, establish, expand, then product + price + distribution = successful brand.

- [ ] **Step 3: Build values and responsibility**

Use stable readable cards after the initial orbit/unfold animation. Never require motion to access content.

- [ ] **Step 4: Build growth model and partnership close**

Render private label, new markets, retail chains, beverage expansion, supply routes, and exact contacts.

- [ ] **Step 5: Verify GREEN and build**

Run: `node tests/commercial-story-smoke.mjs && npm run build`

- [ ] **Step 6: Commit**

```bash
git add src/components src/scripts src/styles tests/commercial-story-smoke.mjs
git commit -m "feat: complete Alsaqi commercial story"
```

### Task 6: Orchestrate Living Current Motion And Complete QA

**Files:**
- Create: `src/scripts/living-current.ts`
- Create: `src/scripts/reveal.ts`
- Create: `src/scripts/language.ts`
- Modify: `src/scripts/main.ts`
- Modify: `src/styles/global.css`
- Modify: `src/components/WaterFooter.astro`
- Modify: `README.md`

**Interfaces:**
- `initLivingCurrent()`, `initLanguage()`, and `initReveals()` are idempotent initializers.
- Motion modules read CSS custom properties and respect `prefers-reduced-motion`.

- [ ] **Step 1: Write failing motion contract assertions**

Extend smoke tests to require reduced-motion branches, RTL progress direction, requestAnimationFrame throttling, and no legacy generic `.reveal` dependency.

- [ ] **Step 2: Implement the current and reveal orchestration**

Use one passive scroll listener, one scheduled animation frame, section progress calculations, and CSS variables. IntersectionObserver runs discrete entry sequences.

- [ ] **Step 3: Complete Arabic behavior**

Keep canonical Arabic copy, reverse directional logic, use Arabic-specific typography and line breaks, and verify language persistence fails safely.

- [ ] **Step 4: Run the full automated suite**

Run:

```bash
node tests/brand-smoke.mjs
node tests/pdf-coverage.mjs
node tests/arabic-experience.mjs
node tests/size-selector-smoke.mjs
node tests/audience-lens-smoke.mjs
node tests/industrial-proof-smoke.mjs
node tests/commercial-story-smoke.mjs
npm run build
git diff --check
```

Expected: every command exits 0.

- [ ] **Step 5: Run browser QA**

Verify 1440x900 and 390x844 in English and Arabic. Check keyboard operation, mobile menu, product and audience controls, RTL sequence, reduced motion, console errors, image loading, and responsive overflow.

- [ ] **Step 6: Commit**

```bash
git add src README.md tests
git commit -m "feat: finish Living Current experience"
```
