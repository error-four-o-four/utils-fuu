export const cubicIn = (n: number): number => n * n * n;

export const cubicOut = (n: number): number => {
  const v = n - 1;
  return v * v * v + 1;
};

export const cubicInOut = (n: number): number => {
  if (n < 0.5) return 4 * n * n * n;

  const v = 2 * n - 2;
  return 0.5 * v * v * v + 1;
};
