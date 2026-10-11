import { prorate } from "@df/core";

export interface Invoice {
  readonly cents: number;
  readonly label: string;
}

/** First invoice for a plan that starts mid-month and is billed to month end. */
export function firstInvoice(monthlyCents: number, startIso: string, monthEndIso: string): Invoice {
  const cents = prorate(monthlyCents, startIso, monthEndIso);
  return { cents, label: `${startIso}..${monthEndIso}` };
}
