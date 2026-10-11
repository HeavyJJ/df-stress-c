import { daysInclusive, daysInMonth, parseIsoDate } from "./dates.ts";

/**
 * Charge for part of one calendar month, in integer cents.
 * The customer pays for every day from start to end, both included,
 * as a share of that month. A full month costs exactly monthlyCents.
 */
export function prorate(monthlyCents: number, startIso: string, endIso: string): number {
  const start = parseIsoDate(startIso);
  const end = parseIsoDate(endIso);
  if (start.getUTCFullYear() !== end.getUTCFullYear() || start.getUTCMonth() !== end.getUTCMonth()) {
    throw new RangeError("prorate() only handles a single calendar month");
  }
  const billable = daysInclusive(startIso, endIso);
  if (billable <= 0) {
    throw new RangeError(`billable days must be positive, got ${billable} for ${startIso}..${endIso}`);
  }
  const monthDays = daysInMonth(start.getUTCFullYear(), start.getUTCMonth() + 1);
  return Math.round((monthlyCents * billable) / monthDays);
}
