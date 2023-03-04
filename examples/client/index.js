// need to add this when published
// eslint-disable-next-line import/no-extraneous-dependencies
import number, { roundNum } from '@fuus/number';

console.log(number);

const n = 1.23456;
console.log(number.round(n));

console.log(roundNum(n, 2));
