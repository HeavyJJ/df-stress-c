import test from "node:test";
import assert from "node:assert/strict";
import { daysInMonth, daysInclusive } from "../src/dates.ts";

// Distractor package: these pass and must stay green.
test("daysInMonth knows February", () => {
  assert.equal(daysInMonth(2026, 2), 28);
  assert.equal(daysInMonth(2028, 2), 29);
});

test("daysInclusive counts both endpoints", () => {
  assert.equal(daysInclusive("2026-03-31", "2026-03-31"), 1);
  assert.equal(daysInclusive("2026-03-01", "2026-03-31"), 31);
});
