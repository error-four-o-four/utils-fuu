import { HALF_PI } from './constants';

export const elasticIn = (n: number): number =>
  Math.sin(13 * HALF_PI * n) * 2 ** (10 * (n - 1));

export const elasticOut = (n: number): number =>
  Math.sin(-13 * HALF_PI * (n + 1)) * 2 ** (-10 * n);

export const elasticInOut = (n: number): number =>
  n < 0.5
    ? 0.5 * Math.sin(13 * HALF_PI * (2 * n)) * 2 ** (10 * (2 * n - 1))
    : 0.5 *
      Math.sin(-13 * HALF_PI * (2 * n - 1 + 1)) *
      2 ** (-10 * (2 * n - 1 + 2));
