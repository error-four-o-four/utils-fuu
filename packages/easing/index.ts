// https://easings.net/
// https://solhsa.com/interpolation/
// https://github.com/IDMNYU/p5.js-func/blob/master/lib/p5.func.js

// https://www.youtube.com/watch?v=60VoL-F-jIQ - the art of code
// https://www.youtube.com/watch?v=YJB1QnEmlTs - simondev

import * as quadratic from './src/quadratic';
import * as cubic from './src/cubic';
import * as sine from './src/sine';

import * as exponential from './src/exponential';
import * as smoothstep from './src/smoothstep';
import * as elastic from './src/elastic';

export default {
  ...quadratic,
  ...cubic,
  ...sine,
  ...exponential,
  ...smoothstep,
  ...elastic,
};

export * from './src/quadratic';
export * from './src/cubic';
export * from './src/sine';

export * from './src/exponential';
export * from './src/smoothstep';
export * from './src/elastic';
