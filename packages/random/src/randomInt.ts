export const randomInt = (max = 10, min = 0) => {
  const [a, b] = min < max ? [min, max] : [max, min];
  Math.floor(
    Math.random() * (Math.ceil(b) - Math.floor(a) + 1) + Math.floor(a)
  );
};
