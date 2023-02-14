export const quadraticIn = (n: number): number => n * n;

export const quadraticOut = (n: number): number => -(n * (n - 2));

export const quadraticInOut = (n: number): number =>
  n < 0.5 ? 2 * n * n : -2 * n * n + 4 * n - 1;
