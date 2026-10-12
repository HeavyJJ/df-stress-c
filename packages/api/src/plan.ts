import semver from "semver";

/** True when an installed plan version is older than the minimum we support. */
export function needsUpgrade(installed: string, minimum: string): boolean {
  // BUG: arguments are reversed. gt(a, b) is "a > b".
  return semver.gt(minimum, installed) ? false : true;
}
