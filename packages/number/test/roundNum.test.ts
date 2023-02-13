import { describe, test, assert, expectTypeOf } from 'vitest';

import { roundNum } from '../index';

describe('number.round / roundNum', () => {
  describe('types', () => {
    test('expects and returns a number', () => {
      expectTypeOf(roundNum).parameter(0).not.toBeUndefined();
      expectTypeOf(roundNum).parameter(0).not.toBeNull();
      expectTypeOf(roundNum).parameter(0).not.toBeString();
      expectTypeOf(roundNum).parameter(0).toBeNumber();

      expectTypeOf(roundNum).returns.not.toBeUndefined();
      expectTypeOf(roundNum).returns.not.toBeNull();
      expectTypeOf(roundNum).returns.not.toBeString();
      expectTypeOf(roundNum).returns.toBeNumber();
    });
  });

  test('rounds a float to an integer by default', () => {
    const t = Array.from({ length: 9 }, (_, i) => 1 + (i + 1) * 0.1);
    const e = [1, 1, 1, 1, 2, 2, 2, 2, 2];
    t.forEach((n, i) => {
      const r = roundNum(n);
      assert.strictEqual(r, e[i]);
    });
  });

  test('rounds a number to a given decimal', () => {
    const n = 1.23456789;
    const t = Array.from({ length: 9 }, (_, i) => i);
    const e = [
      1, 1.2, 1.23, 1.235, 1.2346, 1.23457, 1.234568, 1.2345679, 1.23456789,
    ];

    t.forEach((i) => {
      const r = roundNum(n, i);
      assert.strictEqual(r, e[i]);
      assert.strictEqual(`${r}`.length, `${e[i]}`.length);
    });
  });
});
