# @fuus/number

![npm](https://img.shields.io/npm/v/@fuus/number?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@fuus/number?label=minified&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@fuus/number?label=zipped&style=flat-square)

## Example

```js
import { delay } from '@fuus/number'
delay(() => console.log('👋'), 500);
```

## API

- `delay(fn, ms)`\
Delays the execution of an asynchronous function.

- `debounce(fn, ms)`\
Creates a debounced function that delays invoking the provided function until at least ms milliseconds have elapsed since the last time it was invoked.

- `throttle(fn, ms)`\
Creates a throttled function that only invokes the provided function at most once every defined milliseconds
