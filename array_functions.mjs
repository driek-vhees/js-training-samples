/**
 * Run with:
 * node --experimental-modules array_functions.mjs
 */
import { printHeader } from './utils';

function forEachSample() {
  const invertedArr = [];
  Array.from('ABCDEF').forEach(letter => invertedArr.unshift(letter));
  printHeader(`[forEachSample] ${invertedArr.join('')}`);
}

function mapSample() {
  const numberArr = [1, 2, 3, 4, 5, 6];
  const powerArr = numberArr.map(number => number*number);
  printHeader(`[mapSample] ${powerArr.join('-')}`);
}

function sum(a, b) {
  return a + b;
}

function reduceSample() {
  const numberArr = [1, 2, 3, 4, 5, 6];
  const totalSum = numberArr.reduce(sum, 0);
  printHeader(`[reduceSample] ${totalSum}`);
}

function run() {
  forEachSample();
  mapSample();
  reduceSample();
}

run();
