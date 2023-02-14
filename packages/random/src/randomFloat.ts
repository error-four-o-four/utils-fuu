export const randomFloat = (max = 1, min = 0): number =>
  Math.random() * (max - min) + min;
