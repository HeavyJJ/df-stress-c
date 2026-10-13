import semver from "semver";

/** True when an installed plan version is older than the minimum we support. */
export function needsUpgrade(installed: string, minimum: string): boolean {
  return semver.lt(installed, minimum);
}
