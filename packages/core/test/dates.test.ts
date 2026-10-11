import test from "node:test";
import assert from "node:assert/strict";
import { daysInMonth } from "../src/dates.ts";

// Distractor package: these pass and must stay green.
test("daysInMonth knows February", () => {
  assert.equal(daysInMonth(2026, 2), 28);
  assert.equal(daysInMonth(2028, 2), 29);
});
