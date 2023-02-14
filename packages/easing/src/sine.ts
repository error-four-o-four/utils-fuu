import { HALF_PI } from './constants';

export const sineIn = (n: number): number => Math.sin((n - 1) * HALF_PI) + 1;

export const sineOut = (n: number): number => Math.sin(n * HALF_PI);

export const sineInOut = (n: number): number =>
  0.5 * (1 - Math.cos(n * Math.PI));
