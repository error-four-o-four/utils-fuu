export { randomInt } from './src/randomInt';
export { randomFloat } from './src/randomFloat';
export { randomRadians } from './src/randomRadians';

export { maybe } from './src/maybe';
export { randomFrom } from './src/randomFrom';

export { randomRgb } from './src/randomRgb';
export { randomHex } from './src/randomHex';
export { randomHsl } from './src/randomHsl';

// namespace
import { randomInt as int } from './src/randomInt';
import { randomFloat as float } from './src/randomFloat';
import { randomRadians as radians } from './src/randomRadians';

import { maybe } from './src/maybe';
import { randomFrom as from } from './src/randomFrom';

import { randomRgb as rgb } from './src/randomRgb';
import { randomHex as hex } from './src/randomHex';
import { randomHsl as hsl } from './src/randomHsl';

export default {
  int,
  float,
  radians,
  maybe,
  from,
  rgb,
  hex,
  hsl,
};
