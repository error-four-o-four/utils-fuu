export const exponentialIn = (n: number): number =>
  n === 0.0 ? n : 2 ** (10 * (n - 1));

export const exponentialOut = (n: number): number =>
  n === 1.0 ? n : 1 - 2 ** (-10 * n);

export const exponentialInOut = (n: number): number => {
  if (n === 0.0 || n === 1.0) return n;

  return n < 0.5 ? 0.5 * 2 ** (20 * n - 10) : -0.5 * 2 ** (-20 * n + 10) + 1;
};
