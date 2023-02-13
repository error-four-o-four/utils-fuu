export const randomRgb = (): number[] =>
  Array.from(
    {
      length: 3,
    },
    () => Math.round(255 * Math.random())
  ).map((v) => Math.floor(v));

// return Array.from({length: 3}, () => 255 * nsin(this.angle())).map((v) => Math.floor(v));
