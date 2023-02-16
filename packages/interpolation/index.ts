// @todo lagrange interpolation
// https://www.youtube.com/watch?v=j155J5x6Pq0

// @todo bezier
// https://pomax.github.io/bezierinfo/

export const interpolateCubic = (
  a: number,
  b: number,
  c: number,
  d: number,
  t: number
) => {
  const t2 = t * t;
  const ti = 1.0 - t;
  const ti2 = ti * ti;
  return (
    a * (ti2 * ti) + b * (3.0 * ti2 * t) + c * (3.0 * ti * t2) + d * (t2 * t)
  );
};
