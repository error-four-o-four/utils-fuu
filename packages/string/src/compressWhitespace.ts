export const compressWhitespace = (str: string): string =>
  str.replace(/\s{2,}/g, ' ');
