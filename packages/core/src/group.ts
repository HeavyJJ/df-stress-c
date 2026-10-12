export interface Charge { account: string; cents: number; }

/** Total cents per account. Uses Object.groupBy, which exists on Node 21+ only. */
export function totalsByAccount(charges: Charge[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const charge of charges) {
    out[charge.account] = (out[charge.account] ?? 0) + charge.cents;
  }
  return out;
}
