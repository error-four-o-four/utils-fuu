# @fuus/number

![npm](https://img.shields.io/npm/v/@fuus/number?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@fuus/number?label=minified&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@fuus/number?label=zipped&style=flat-square)

## Example

```js
import num, { roundNum } from '@fuus/number';

num.round === roundNum; // true

let n = 1.23456789;
roundNum(n); // 1
num.round(n, 4); // 1.2345;
```

## API

- `isNum: (val: any) => boolean`
- `mapNum(n: number, a1: number, b1: number, a2: number, b2: number) => number`
- `clampNum: (n: number, min: number, max: number) => number`
- `roundNum: (n: number, decimals?: number) => number`
- `nearestNum: (n: number, steps?: number) => number`

- `ncos: (n: number) => number` [0, 1]
- `nsin: (n: number) => number` [0, 1]

- `linear2db: (n: number) => number`
- `db2linear: (n: number) => number`

- `intFromString: (val: string | null) => number | never`
