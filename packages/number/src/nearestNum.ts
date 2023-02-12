export const nearestNum = (n: number, steps: number = 10) =>
  Math.round(n * steps) / steps;
