import test from "node:test";
import assert from "node:assert/strict";
import { needsUpgrade } from "../src/plan.ts";

test("an older installed version needs an upgrade", () => {
  assert.equal(needsUpgrade("1.2.0", "1.5.0"), true);
});

test("an up-to-date version does not need an upgrade", () => {
  assert.equal(needsUpgrade("2.0.0", "1.5.0"), false);
});

test("an exact minimum version does not need an upgrade", () => {
  assert.equal(needsUpgrade("1.5.0", "1.5.0"), false);
});
