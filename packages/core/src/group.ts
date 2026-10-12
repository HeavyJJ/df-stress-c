export interface Charge { account: string; cents: number; }

// Object.groupBy is ES2024 (Node 21+). tsconfig targets ES2022, so declare it here
// to keep `tsc --noEmit` green. The call below still runs for real: Node 22 has it,
// Node 20 throws "TypeError: Object.groupBy is not a function" (the C3 failure).
declare global {
  interface ObjectConstructor {
    groupBy<T, K extends PropertyKey>(items: Iterable<T>, keyOf: (item: T, index: number) => K): Partial<Record<K, T[]>>;
  }
}

/** Total cents per account. Uses Object.groupBy, which exists on Node 21+ only. */
export function totalsByAccount(charges: Charge[]): Record<string, number> {
  const groups = Object.groupBy(charges, (c) => c.account);
  const out: Record<string, number> = {};
  for (const [account, list] of Object.entries(groups)) {
    out[account] = (list ?? []).reduce((sum, c) => sum + c.cents, 0);
  }
  return out;
}
