export function intFromString(val: string | null): number | never {
  if ((typeof val === 'string' && !/^-?\d+$/.test(val)) || val === null)
    throw new Error(`${val || 'argument'} is not a valid number.`);

  return parseInt(val, 10);
}
