import { describe, test, assert } from 'vitest';

import number, { roundNum } from '../index';

describe('@fuus/number', () => {
  test('Package has named exports', () => {
    assert.exists(roundNum);
    assert.isFunction(roundNum);
  });

  test('Package has a default export', () => {
    assert.exists(number);
    assert.isObject(number);
    assert.strictEqual(number.round, roundNum);
    assert.notStrictEqual(number.clamp, roundNum);
  });
});
