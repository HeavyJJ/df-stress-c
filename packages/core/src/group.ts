export interface Charge { account: string; cents: number; }

/** Total cents per account. Uses Object.groupBy, which exists on Node 21+ only. */
export function totalsByAccount(charges: Charge[]): Record<string, number> {
  const groups = Object.groupBy(charges, (c) => c.account);
  const out: Record<string, number> = {};
  for (const [account, list] of Object.entries(groups)) {
    out[account] = (list ?? []).reduce((sum, c) => sum + c.cents, 0);
  }
  return out;
}
