# @fuus/string

![npm](https://img.shields.io/npm/v/@fuus/string?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@fuus/string?label=minified&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@fuus/string?label=zipped&style=flat-square)

## Example

```js
import string from '@fuus/string';
```

## API

- `pluralizeStr: (num: number, single: string, plural?: string) => string`
- `capitalizeStr: (str: string, lowerRest?: boolean) => string`
- `compressWhitespace: (str: string) => string`
- `toCamelCase: (str: string) => string | undefined`
- `toKebabCase: (str: string) => string | undefined`
- `toTitleCase: (str: string) => string | undefined`
