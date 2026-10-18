export interface Charge { account: string; cents: number; }

/** Total cents per account. Works on all supported Node versions. */
export function totalsByAccount(charges: Charge[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const charge of charges) {
    out[charge.account] = (out[charge.account] ?? 0) + charge.cents;
  }
  return out;
}
