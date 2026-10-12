import test from "node:test";
import assert from "node:assert/strict";
import { totalsByAccount } from "@df/core";

test("totals charges per account", () => {
  assert.deepEqual(totalsByAccount([
    { account: "a", cents: 100 },
    { account: "b", cents: 50 },
    { account: "a", cents: 25 },
  ]), { a: 125, b: 50 });
});

test("totals multiple charges for the same account", () => {
  assert.deepEqual(totalsByAccount([
    { account: "x", cents: 10 },
    { account: "x", cents: 20 },
    { account: "x", cents: 5 },
  ]), { x: 35 });
});
