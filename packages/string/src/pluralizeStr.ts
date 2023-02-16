export const pluralizeStr = (
  num: number,
  single: string,
  plural = `${single}s`
) => (Math.abs(num) === 1 ? single : plural);
