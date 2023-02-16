export const randomInt = (max = 10, min = 0): number => {
  const [a, b] = min < max ? [min, max] : [max, min];
  return Math.floor(
    Math.random() * (Math.ceil(b) - Math.floor(a) + 1) + Math.floor(a)
  );
};
