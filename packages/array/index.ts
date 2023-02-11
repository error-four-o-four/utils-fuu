export const arrayFrom2D = (w: number, h: number, val: unknown = null) =>
  Array.from({ length: h }).map(() =>
    Array.from({ length: w }).fill(val)
  ) as unknown[];

export const arrayFromRange = (
  max: number,
  min: number = 0,
  step: number = 1
): number[] =>
  Array.from(
    { length: Math.ceil(max - min + 1) / step },
    (_, i) => i * step + min
  );

export default {
  from2D: arrayFrom2D,
  fromRange: arrayFromRange,
};
