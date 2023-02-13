export const randomHsl = (s: number = 100, l: number = 50): number[] => [
  360 * Math.random(),
  s,
  l,
];
