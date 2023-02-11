export const randomInt = (max: number = 10, min: number = 0) =>
  Math.floor(
    Math.random() * (Math.ceil(max) - Math.floor(min) + 1) + Math.floor(min)
  );
