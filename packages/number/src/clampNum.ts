export const clampNum = (n: number, a: number, b: number): number => {
  if (a > b) [a, b] = [b, a];
  return Math.max(a, Math.min(b, n));
}
