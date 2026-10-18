import test from "node:test";
import assert from "node:assert/strict";
import { totalsByAccount } from "@df/core";

test("totals charges per account", () => {
  assert.deepEqual(totalsByAccount([
    { account: "a", cents: 100 },
    { account: "b", cents: 50 },
    { account: "a", cents: 25 },
  ]), { a: 125, b: 50 });

  assert.deepEqual(totalsByAccount([
    { account: "a", cents: 10 },
    { account: "a", cents: 15 },
  ]), { a: 25 });
});
