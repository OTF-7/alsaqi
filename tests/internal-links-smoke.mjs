import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const pagePath = join(root, "src/pages/index.astro");
const page = readFileSync(pagePath, "utf8");
const mountedComponents = [...page.matchAll(/import\s+\w+\s+from\s+["']\.\.\/components\/([^"']+\.astro)["']/g)]
  .map((match) => join(root, "src/components", basename(match[1])));
const source = [pagePath, ...mountedComponents]
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");
const ids = new Set([...source.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]));
const internalTargets = [...source.matchAll(/\shref=["']#([^"']+)["']/g)].map((match) => match[1]);

assert.ok(mountedComponents.length > 0, "homepage must mount components");
assert.ok(internalTargets.length > 0, "homepage must expose internal navigation");
for (const target of internalTargets) {
  assert.ok(
    ids.has(target),
    `internal link #${target} must point to an id mounted on the homepage`,
  );
}
