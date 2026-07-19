import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), "utf8");

const files = {
  packageJson: read("package.json"),
  index: read("src/pages/index.astro"),
  layout: read("src/layouts/Base.astro"),
  data: read("src/data/alsaqi.ts"),
  header: read("src/components/Header.astro"),
  hero: read("src/components/HeroCurrent.astro"),
  partners: read("src/components/PartnerInvitation.astro"),
  footer: read("src/components/WaterFooter.astro"),
  whatsapp: read("src/components/WhatsApp.astro"),
  css: read("src/styles/global.css"),
};

const joined = Object.values(files).join("\n");

assert.match(files.packageJson, /"name": "alsaqi-water"/);

/* Brand naming carries in both languages. */
assert.ok(joined.includes("مصنع الساقي للمياه المعدنية"), "Arabic factory name must be present");
assert.ok(joined.includes("Al Saqi Mineral Water Factory"), "English factory name must be present");
assert.ok(joined.includes("الساقي… اختيارك الراقي"), "Arabic tagline must be verbatim from the brand PDF");
assert.ok(joined.includes("Al Saqi… your refined choice"), "English tagline must be present");
assert.doesNotMatch(joined, /novan/i, "no Novan references may survive the rebrand");

/* Contact details reach the page. */
assert.ok(joined.includes("info@alsaqiwater.com"), "email must be present");
assert.ok(joined.includes("779779630"), "phone number must be present");
assert.ok(joined.includes("www.alsaqiwater.com"), "website must be present");
assert.match(files.partners, /wa\.me\/967/, "partner CTA must reach WhatsApp");
assert.match(files.whatsapp, /wa\.me\/967779779630/, "floating WhatsApp button must use the real number");
assert.match(files.footer, /tel:\$\{contact\.phone\}|href=\{`tel:/, "footer must expose a tel: link");
assert.match(files.footer, /mailto:/, "footer must expose a mailto: link");

/* The three bottle sizes are the product line. */
for (const size of ["330 ml", "750 ml", "1200 ml"]) {
  assert.ok(joined.includes(size), `bottle size ${size} must be present`);
}

/* Brand palette. Pinned to the definitions, since the names also appear as var() usages. */
assert.match(files.css, /--saqi-blue:\s*#/);
assert.match(files.css, /--saqi-green:\s*#/);

/* The favicon is the real brand mark, not the invented droplet that was removed. */
assert.match(files.layout, /href="\/favicon\.svg"/, "layout must reference the current favicon");
assert.doesNotMatch(joined, /alsaqi-mark\.svg/, "the deleted generic droplet mark must not return");
