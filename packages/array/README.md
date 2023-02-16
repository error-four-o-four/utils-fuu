# @fuus/array

![npm](https://img.shields.io/npm/v/@fuus/array?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@fuus/array?label=minified&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@fuus/array?label=zipped&style=flat-square)

## Example

```js
import array, { arrayFromRange } from '@fuus/array';

array.fromRange === arrayFromRange; // true

arrayFromRange(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## API

- `arrayFrom2D: (w: number, h: number, val?: unknown) => unknown[]`
- `arrayFromRange: (max: number, min?: number, step?: number) => number[]`
