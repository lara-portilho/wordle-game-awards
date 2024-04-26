export function cn2(
  className1: string,
  className2: string | undefined | null | false
) {
  return `${className1}${className2 ? " " + className2 : ""}`;
}
