export const roundNum = (n: number, decimals = 0): number =>
  Math.round(10 ** decimals * n) / 10 ** decimals;
