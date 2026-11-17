// Calendar helpers. A date is a plain "YYYY-MM-DD" string read as UTC midnight,
// so results never depend on the server's time zone.
const MS_PER_DAY = 86_400_000;
const ISO = /^\d{4}-\d{2}-\d{2}$/;

export function parseIsoDate(iso: string): Date {
  if (!ISO.test(iso)) throw new TypeError(`expected YYYY-MM-DD, got ${JSON.stringify(iso)}`);
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== iso) {
    throw new RangeError(`not a real calendar date: ${iso}`);
  }
  return date;
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/**
 * Billable days from start to end, counting BOTH ends.
 * daysInclusive("2026-03-10","2026-03-10") is 1; a full March is 31.
 */
export function daysInclusive(startIso: string, endIso: string): number {
  const diff = parseIsoDate(endIso).getTime() - parseIsoDate(startIso).getTime();
  return Math.round(diff / MS_PER_DAY);
}
