export const clampNum = (n: number, a: number, b: number) =>
  Math.max(Math.min(n, Math.max(a, b)), Math.min(a, b));
