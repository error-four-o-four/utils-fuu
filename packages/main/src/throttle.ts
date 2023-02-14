export const throttle = (func: (...args: any[]) => unknown, ms: number) => {
  let throttled: boolean;
  return function wait(this: any, ...args: any[]) {
    if (!throttled) {
      func.apply(this, args);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, ms);
    }
  };
};
