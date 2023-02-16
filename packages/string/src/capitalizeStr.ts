export const capitalizeStr = (str: string, lowerRest = true): string =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
