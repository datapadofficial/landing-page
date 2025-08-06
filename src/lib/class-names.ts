/**
 * Simple utility to combine class names
 */
export function classNames(
  classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}
