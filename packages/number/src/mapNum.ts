export const mapNum = (
  n: number,
  a1: number,
  b1: number,
  a2: number,
  b2: number
) => ((n - a1) / (b1 - a1)) * (b2 - a2) + a2;
