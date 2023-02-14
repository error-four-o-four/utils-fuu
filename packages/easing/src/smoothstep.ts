// https://en.wikipedia.org/wiki/Smoothstep
export const smoothStep = (n: number): number => n * n * (3.0 - 2.0 * n);

export const smootherStep = (n: number): number =>
  n * n * n * (n * (n * 6.0 - 15.0) + 10.0);

// https://www.youtube.com/watch?v=pydKWTSGMEM
export const overshoot = (n: number, N = 2, K = 2): number => {
  const a = N * n * n;
  const b = 1 - K * (n * n) * (n - 1);
  return a * (1 - n) + b * n;
};

export const smoothOvershoot = (n: number, K = 3, N = 3): number => {
  const s = smoothStep(n);
  return overshoot(s, K, N);
};

// https://www.shadertoy.com/view/4ldSD2
export const cheapStep = (n: number): number => {
  const s = 1 - n * n;
  return 1 - s * s;
};
