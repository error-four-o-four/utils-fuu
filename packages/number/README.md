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
