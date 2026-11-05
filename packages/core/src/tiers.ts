// Loyalty tiers, lowest to highest. A customer moves up one tier at a time.
export type Tier = "bronze" | "silver" | "gold";

/**
 * The tier name for a 1-based level (1 => bronze, 2 => silver, 3 => gold).
 * Levels outside 1..3 are clamped to the ends.
 */
export function tierForLevel(level: number): Tier {
  const names = ["bronze", "silver", "gold"];
  const index = Math.min(Math.max(level, 1), names.length) - 1;
  return names[index];
}
