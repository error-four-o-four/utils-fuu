export const randomHsl = (s = 100, l = 50): number[] => [
  360 * Math.random(),
  s,
  l,
];
