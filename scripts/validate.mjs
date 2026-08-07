#!/usr/bin/env node
// Validates a plugin directory against Agent Plugins 1.0.0 and Agent Skills.
//
//   node scripts/validate.mjs [dir ...]     (defaults to the repo root)
//
// Exits non-zero on any violation.

import { resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { validatePlugin, SPEC } from "./lib/validate-plugin.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const targets = process.argv.slice(2).map((a) => resolve(a));
if (!targets.length) targets.push(ROOT);

let failed = 0;
let totalChecks = 0;

for (const target of targets) {
  const { checks, errors } = validatePlugin(target);
  const label = relative(ROOT, target) || ".";
  if (targets.length > 1) console.log(`\n${label}`);
  for (const c of checks) console.log(`  ok   ${c}`);
  for (const e of errors) console.error(`  FAIL ${e}`);
  totalChecks += checks.length;
  if (errors.length) failed++;
}

console.log(
  failed
    ? `\n${failed} of ${targets.length} plugin(s) violate Agent Plugins ${SPEC}`
    : `\n${targets.length} plugin(s) conformant with Agent Plugins ${SPEC} (${totalChecks} checks)`
);
process.exit(failed ? 1 : 0);
