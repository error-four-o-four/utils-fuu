export const roundNum = (n: number, decimals: number = 0) =>
  ~~(Math.pow(10, decimals) * n) / Math.pow(10, decimals);
