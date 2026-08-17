# BRIEF: Full Alsaqi site rebuild — «الراقي» dark majlis direction

## Decision (client-approved)
The client reviewed `/heroes` and chose **Variant 1 «الراقي» (HeroRaqi) as the base art direction for the ENTIRE site**, with two additions:
1. The giant background watermark/ghost type (the huge low-opacity slogan behind content) must **jiggle like water** — apply the SVG turbulence/displacement treatment used on HeroNaqaa's waterline text (`filter: url(#…wave-filter)` with animated turbulence) to ghost type, subtly and slowly (premium, not gimmicky).
2. Adopt **HeroYemen's animation vocabulary as accents** throughout: stroke-drawn white line-art (drop outlines, Yemeni tower-house silhouettes, terraced contour lines) and the **falling water-droplet animation** (droplet detaches, falls along a curve, lands with an expanding ripple). Use these as section dividers/backdrops — texture, not the main event.

**Absolute quality rule from the client: NO overlapping text/icons/buttons at any viewport width.** Test compositions at 1440, 1024, 768, 390 widths. Any absolutely-positioned decorative layer must never sit over readable text at any width. This includes the hero CTAs vs bottles on mobile (currently too close in HeroRaqi mobile) and HeroNaqaa-style panels. Decorative ghost type must stay behind content with enough contrast separation to keep foreground text readable.

## Scope
Rebuild `src/pages/index.astro` and its sections in the «الراقي» style. The existing site's sections are dated/broken (several reveal-gated sections render blank — kill that logic). Reuse what helps (Header, WhatsApp, language mechanics), rebuild the rest. Keep `/heroes` page as-is (internal reference).

## Hard constraints
- Astro 5, vanilla TS + CSS (no new deps, no GSAP, no network).
- Bilingual AR/EN with the existing language-toggle mechanism (`src/scripts/language.ts`, `public/lang-restore.js`, `Localized {en, ar}` pattern in `src/data/alsaqi.ts`). AR is the primary voice; **AR strings must be EXACTLY the verbatim texts in this brief — never rephrase, never invent**. EN = faithful translations (existing EN strings in alsaqi.ts are fine to keep/adjust).
- Update `src/data/alsaqi.ts` so every AR string matches the verbatim texts below (several current entries are paraphrased — replace them).
- `prefers-reduced-motion` disables all continuous/scroll animation.
- Validate: `npx astro check` + `npx astro build` must pass. Do NOT start a dev server.
- Assets: bottle cutouts `src/assets/alsaqi/cutouts/bottle-{330,750,1200}.png`, logo `src/assets/logo.png` (transparent, correct Alsaqi mark), photos in `src/assets/alsaqi/` (dark-toned scene JPGs 01–19 — use sparingly, always color-graded into the dark palette with overlay gradients so they don't look pasted).
- Palette (from HeroRaqi): bg `#041624`, petrol `#0a3554`/`#0f5c85`, aqua `#2fa8c9`/`#72dfe9`, brand green `#4ea832`, lime `#8dc63f`, gold rim accent `#c9a45c` (hairlines only), white text. Fonts already loaded (`--font-ar-display` = Alexandria, etc.).

## Site-wide signature systems
1. **The Pour (السقيا)** — the site's spine. A thin luminous SVG water-thread (aqua→green gradient, gentle sine ripple) that visually connects sections: it appears in the hero (already in HeroRaqi), reappears descending through each section divider, and terminates in the footer where it has been "filling" the footer's water. **Scroll progress = footer water level**: the wave footer's water surface rises as the user scrolls the page (0% at top, ~full at bottom). Implement scroll-linked with rAF + `scrollY/scrollHeight`, throttled, reduced-motion → static ~70% level.
2. **Living watermark** — each major section has a huge Arabic ghost word behind content (e.g. «النقاء», «الجودة», «السوق», «الشراكة») at ~6–8% white opacity with the water-jiggle turbulence filter. One shared SVG filter def, slow animation (8–12s loops).
3. **Line-art + droplets** — between-section dividers alternate: (a) terraced contour lines that draw in on scroll, (b) a drop outline containing Shibam tower line-art, (c) a droplet falls and ripples. Keep each divider ≤20vh, decorative layer `aria-hidden`, never overlapping section text.

## Page structure & content (verbatim AR)

Use these EXACT Arabic strings. Slashes `/` separate list items (render as list items, not one line). Ellipses and diacritics must be preserved character-for-character.

### 1. Header
Existing header pattern (logo + nav + AR/EN toggle + CTA «انمُ مع الساقي»). Nav anchors to sections below. Keep it glassy-dark, unobtrusive.

### 2. Hero — HeroRaqi (as built, with upgrades)
- Add the water-jiggle to the ghost slogan text (system 2).
- Fix mobile: CTAs must clear the bottles (stack CTAs above bottles with margin, or bottles below the fold line — no contact).
- Texts (unchanged): kicker `مياه معدنية طبيعية`; H1 `الساقي… اختيارك الراقي`; support `مياه معدنية طبيعية بمعايير جودة عالية وتجربة تعكس الذوق الرفيع`; CTAs `اكتشف مياه الساقي` / `انمُ مع الساقي`; brand `مصنع الساقي للمياه المعدنية`.

### 3. الملخص التنفيذي (executive summary / manifesto) — id `about`
Watermark: «الساقي». Section title: `الملخص التنفيذي`.
Body (verbatim, render as flowing intro + 4 pillars + closing line):
`يمثل مصنع الساقي للمياه المعدنية نموذجًا صناعيًا متكاملًا في قطاع استراتيجي يتميز بالاستقرار والنمو المستمر، حيث يعتمد على منتج أساسي يشكل جزءًا يوميًا من حياة الإنسان: المياه.`
`تم تأسيس المصنع برؤية واضحة تهدف إلى بناء علامة تجارية قوية وقابلة للانتشار السريع، من خلال منظومة تجمع بين:`
- `جودة إنتاج وفق أعلى المعايير الصحية`
- `فهم دقيق لسلوك السوق واحتياجاته`
- `استراتيجية منتجات موجهة لزيادة سرعة الدوران`
- `نموذج توزيع احترافي يحقق الربحية والاستدامة`
Closing (display treatment, big): `مصنع الساقي ليس مجرد منشأة إنتاج، بل منصة لبناء علامة تجارية تنافس وتقود السوق.`

### 4. الرؤية والرسالة — id `vision`
Two panels (drop-outline line-art backdrop, stroke-draw on scroll):
- `رؤيتنا`: `أن يكون مصنع الساقي للمياه المعدنية من أبرز العلامات الرائدة في قطاع المياه، وأن يمثل معيارًا للجودة والثقة والانتشار، مع التوسع نحو الريادة الإقليمية.`
- `رسالتنا`: `إنتاج وتوفير مياه معدنية طبيعية عالية النقاء، باستخدام أحدث تقنيات المعالجة والتعبئة، وتقديم:` list: `قيمة حقيقية للتاجر` / `تجربة موثوقة للمستهلك` / `عائد مستدام للمستثمر`

### 5. المنتجات — Size Theatre — id `products`
Watermark: «النقاء». Title: `المنتجات`. Intro: `يركز المصنع على إنتاج الأحجام الأكثر طلبًا لضمان سرعة الدوران وتعظيم العائد:`
Interactive stage (evolve FlavorReactor idea): three tabs = sizes; selecting swaps the big bottle cutout (crossfade + rise), size label, and role copy. Roles (verbatim):
- 330: `عبوة سريعة الاستهلاك، مثالية لنقاط البيع عالية الحركة` — short label `خفيف وسهل الحمل`
- 750: `موجهة للمطاعم والكافيهات والتقديم الفردي الراقي` — short label `مثالي للاستخدام اليومي`
- 1200: `حل عملي واقتصادي للاستخدام اليومي والعائلي` — short label `للعائلات والمناسبات`
Packaging strip beneath (verbatim): `تم تطوير العبوة لتكون:` `واضحة وجذابة بصريًا.` / `سهلة الحمل والاستخدام.` / `بارزة على الرف وتعزز قرار الشراء.`
Closing line (display): `منتجاتنا لا تُعرض فقط… بل تُباع بثقة.`
Strategy line: `الاستراتيجية تعتمد على التركيز الذكي، وليس التوسع العشوائي.`

### 6. تحليل القيمة — Three Lenses — id `value`
Watermark: «القيمة». Title: `تحليل القيمة`. Interactive perspective switcher: three lenses (المستهلك / التاجر / المستثمر). Switching re-tints section accent (aqua / gold-ish warm / green) and swaps the value list (staggered re-entry). Verbatim lists:
- `للمستهلك`: `مياه نقية وآمنة صحياً` / `جودة ثابتة وطعم موثوق` / `عبوات عملية وتصميم عصري` / `سعر مناسب مقابل الجودة` — equation line: `الساقي = جودة يمكن الاعتماد عليها يوميًا`
- `للتاجر`: `سرعة دوران عالية تقلل تجميد رأس المال` / `هامش ربحي منافس` / `استقرار في التوريد` / `سهولة في إعادة الطلب` / `دعم تسويقي جاهز` — equation line: `الساقي = منتج سريع الحركة + ربح مستمر`
- `للمستثمر`: `سوق مستقر وطلب دائم` / `دورة نقدية سريعة` / `قابلية توسع عالية` / `إمكانية بناء علامة ذات قيمة سوقية كبيرة` / `استثمار منخفض المخاطر نسبيًا`
Closing (verbatim): `الساقي يجمع بين الجودة، والاستمرارية، والجدوى الاقتصادية في منتج واحد.`

### 7. التشغيل والإنتاج — id `factory`
Watermark: «الإنتاج». Title: `التشغيل والإنتاج`. Use photo `13-factory-line.jpg` or `02-production-line.jpg` graded dark. Four capabilities (verbatim): `خطوط إنتاج أوتوماتيكية عالية الكفاءة` / `أنظمة تحكم صناعي (PLC / HMI)` / `رقابة جودة دقيقة في جميع المراحل` / `تقليل الفاقد وتحسين الكفاءة التشغيلية`
Methodology block (verbatim): `نعتمد على منظومة تشغيل متكاملة تشمل:` `خطوط إنتاج حديثة عالية الكفاءة` / `أنظمة رقابة جودة دقيقة` / `إدارة توزيع فعالة` / `متابعة مستمرة لحركة السوق`

### 8. الجودة والمعايير — id `quality`
Watermark: «الجودة». Title: `الجودة والمعايير`. Pillars (verbatim): `تطبيق أنظمة سلامة الغذاء` / `مطابقة المواصفات الصحية` / `التوجه للحصول على شهادات ISO و HACCP` / `فحوصات جودة دورية`
**Checklist set-piece**: the 7-item lab sheet stamps its checkmarks one-by-one on scroll (IntersectionObserver, staggered; ✓ scales in with a soft glow). Verbatim items — title `كشف معايير الجودة`:
1. `الفحص الفيزيائي: اللون، الطعم، الرائحة، العكارة`
2. `الأملاح والمعادن (TDS): الكالسيوم والمغنيسيوم`
3. `درجة الحموضة (pH): متعادل`
4. `المعادن الثقيلة: الرصاص، الزرنيخ، الزئبق`
5. `الفحص الميكروبيولوجي: البكتيريا، الجراثيم`
6. `المواد الكيميائية: النترات، الكبريتات، الفلورايد`
7. `سلامة التعبئة: العبوات، الإغلاق، التاريخ`
Commitment (verbatim): `نلتزم بتقديم منتج يتميز بـ:` `جودة ثابتة` / `توفر مستمر` / `أداء موثوق`

### 9. فلسفة العمل واستراتيجية السوق — id `market`
Watermark: «السوق». Title: `فلسفة العمل`.
Philosophy (verbatim): `في سوق المياه، النجاح لا يعتمد فقط على الجودة، بل على:` `القدرة على الانتشار السريع` / `وسهولة البيع` / `وتحقيق الربحية.`
**Equation set-piece** (animated assembly, verbatim): `المعادلة الأساسية:` `منتج موثوق` + `تسعير ذكي` + `توزيع فعال` = `علامة تجارية ناجحة`
Phases timeline (three stages, Pour thread links them, verbatim):
- `مرحلة الإطلاق`: `بناء شبكة موزعين قوية` / `تقديم عروض دخول محفزة` / `انتشار سريع في نقاط البيع`
- `مرحلة التثبيت`: `ضمان توفر المنتج باستمرار` / `تعزيز ثقة السوق`
- `مرحلة التوسع`: `التوسع الجغرافي` / `إضافة خطوط إنتاج جديدة` / `تطوير منتجات إضافية`
Competitive advantage (verbatim list): `تركيز على المنتجات الأعلى مبيعًا` / `استراتيجية توزيع موجهة للتجار` / `مرونة تسعيرية مدروسة` / `إدارة احترافية قائمة على فهم السوق` / `هوية بصرية قوية وقابلة للانتشار`

### 10. القيم المؤسسية — id `values`
Watermark: «القيم». Title: `القيم المؤسسية`. Six values (verbatim title: text):
`الجودة أولًا`: `الالتزام الصارم بمعايير إنتاج تضمن منتجًا ثابتًا وموثوقًا` / `الثقة والمصداقية`: `بناء علاقات طويلة الأمد قائمة على الشفافية والاستمرارية` / `القيمة التجارية`: `تقديم منتج يحقق ربحًا فعليًا ومستدامًا لشركاء التوزيع` / `الكفاءة التشغيلية`: `إدارة احترافية تقلل التكاليف وتعزز الإنتاجية` / `الابتكار والتطوير`: `تحسين مستمر في المنتجات والتسويق والعمليات` / `الاستدامة`: `تشغيل مسؤول يحافظ على الموارد ويعزز استمرارية الأعمال`

### 11. المسؤولية الاجتماعية — id `responsibility`
Watermark: «المسؤولية». Title: `المسؤولية الاجتماعية`.
Intro (verbatim): `نؤمن بأن الجودة الحقيقية تمتد لما هو أبعد من المنتج، لذلك نحرص على:` `تقديم مياه آمنة وصحية` / `الالتزام بالممارسات البيئية` / `دعم الاقتصاد المحلي وشركاء النجاح`
Four pillars (verbatim): `البيئة`: `ترشيد استهلاك الموارد وتقليل الأثر البيئي` / `الصحة`: `تقديم منتج آمن يعزز نمط الحياة الصحي` / `المجتمع`: `دعم المبادرات المحلية وتوفير فرص العمل` / `الاقتصاد`: `دعم التجار وتعزيز النشاط الاقتصادي`
Droplet divider here (system 3c).

### 12. فرص النمو ونموذج الأعمال — id `growth`
Watermark: «النمو». Title: `فرص النمو والتوسع`. Four opportunities (verbatim): `التوسع في قطاع المشروبات (غازية ومنكهة)` / `دخول أسواق جديدة` / `التصنيع للغير (Private Label)` / `شراكات استراتيجية مع سلاسل تجارية`
Business model (verbatim): `التوزيع عبر شبكة موزعين` / `البيع المباشر للجهات الكبرى` / `عقود التوريد للمؤسسات` — `النموذج قائم على:` `حجم مبيعات مرتفع` / `دوران سريع` / `هامش مدروس`

### 13. دعوة للشراكة — id `partners`
Watermark: «الشراكة». Title: `دعوة للشراكة`.
Invitation (verbatim): `يدعو مصنع الساقي:` `التجار الباحثين عن منتج مربح وسريع البيع` / `المستثمرين الباحثين عن فرصة مستقرة وقابلة للنمو` / `شركاء التوسع والتوزيع` / `للمشاركة في بناء علامة قوية في سوق واسع ومستمر.`
Conclusion block (verbatim, cinematic): `مصنع الساقي للمياه المعدنية ليس مجرد مشروع إنتاج… بل مشروع علامة تجارية قابلة للسيطرة على السوق:` `منتج أساسي لا يتوقف الطلب عليه` / `نموذج تشغيلي واضح` / `فرصة توسع كبيرة` / `عائد استثماري واعد`
Final line (biggest display moment of the page): `الساقي… نقاء يُوثق، وفرصة تُستثمر.`
CTA buttons: WhatsApp link (+967 775757572), `info@alsaqiwater.com`.

### 14. Footer — Wave Footer 2.0 — id `footer`
Novan-style living wavify wave (SVG path regenerated per frame — reuse the mechanic from the old WaterFooter/main.ts) BUT: the water level = scroll progress (system 1: The Pour ends here, the page has been filling it). Above the waterline: faint Yemen line-art skyline (variant 3 vocabulary). In the water body: brand logo, nav links, contact (`775757572`, `info@alsaqiwater.com`, `www.alsaqiwater.com`), tagline `الساقي… اختيارك الراقي`, and `مصنع الساقي للمياه المعدنية | Al Saqi Mineral Water Factory`. Copyright line: keep the existing Al-Romana rights line from the current footer with year 2026.

## Cleanup
- Remove/replace broken old components no longer used (the blank-section reveal bug must be gone). Delete dead files.
- Keep WhatsApp floating button (number 775757572).
- Page `<title>`/meta: `مصنع الساقي للمياه المعدنية | الساقي… اختيارك الراقي` (AR primary; EN via existing mechanism if supported).

## Definition of done
1. `npx astro check` + `npx astro build` pass.
2. Every AR string byte-identical to this brief.
3. No overlapping text/controls at 1440/1024/768/390 (inspect each section's layout logic; decorative layers aria-hidden and z-indexed BEHIND text).
4. Entrance animations per section (IntersectionObserver, once), continuous ambience subtle, reduced-motion clean.
5. Bilingual toggle works on every new section (no orphan strings).
6. No console errors; no reference to Novan anywhere (grep for 'novan' case-insensitive in src/ and public/ — replace/remove leftovers, e.g. lang-restore or headers comments).
7. Lighthouse-conscious: images via astro:assets with sizes, lazy where offscreen; no layout shift on load.
