export const nearestNum = (n: number, steps: number = 10): number =>
  Math.round(n * steps) / steps;
