import test from "node:test";
import assert from "node:assert/strict";
import { firstInvoice } from "../src/billing.ts";

test("a plan active for the whole of March is billed the full monthly price", () => {
  assert.equal(firstInvoice(3100, "2026-03-01", "2026-03-31").cents, 3100);
});

test("a one-day trial on the last day of March bills a single day", () => {
  // Both ends count, so 2026-03-31..2026-03-31 is one billable day.
  assert.equal(firstInvoice(3100, "2026-03-31", "2026-03-31").cents, 100);
});

test("the first half of April is half the monthly price", () => {
  assert.equal(firstInvoice(3000, "2026-04-01", "2026-04-15").cents, 1500);
});
