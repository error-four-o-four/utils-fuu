# @fuus/random

![npm](https://img.shields.io/npm/v/@fuus/random?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@fuus/random?label=minified&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@fuus/random?label=zipped&style=flat-square)

## Example

```js
import random, { randomInt } from '@fuus/random';

random.int === randomInt; // true

randomInt(); // returns random integer between 0 and 10
randomInt(5); // random integer between 0 and 5
random.int(5, 25); // random integer between 5 and 25
```

## API

- `randomInt: (max?: number, min?: number) => number`
- `randomInt: (max?: number, min?: number) => number`
- `randomRadians: () => number`
- `maybe: (n?: number) => boolean`
- `randomFrom: (arr: any[]) => any`
- `randomRgb: () => number[]`
- `randomHex: () => string`
- `randomHsl: (s?: number, l?: number) => number[]`
