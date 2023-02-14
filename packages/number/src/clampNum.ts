export const clampNum = (n: number, min: number, max: number): number => {
  const [a, b] = min < max ? [min, max] : [max, min];
  return Math.max(a, Math.min(b, n));
};
