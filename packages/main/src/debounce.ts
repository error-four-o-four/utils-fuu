export const debounce = (fn: (...args: any[]) => unknown, ms = 300) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function wait(this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), ms);
  };
};
