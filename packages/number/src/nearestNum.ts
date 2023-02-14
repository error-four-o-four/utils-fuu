export const nearestNum = (n: number, steps = 10): number =>
  Math.round(n * steps) / steps;
