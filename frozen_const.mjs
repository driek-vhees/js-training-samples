/**
 * Run with:
 * node --experimental-modules frozen_const.mjs
 */
import { printHeader, printIfError } from './utils';

function run() {
  const anObject = Object.freeze({
    foo: 'bar',
    nestedFoo: { bar: 'foo' },
  });
  printIfError('[1] Cannot reassign anObject', () => {
    anObject = {};
  });
  printIfError('[2] Cannot reassign foo', () => {
    anObject.foo = 'fubar';
  });
  printIfError('[3] Cannot reassign nestedFoo.bar', () => {
    anObject.nestedFoo.bar = 'totally foo';
  });
  printIfError('[4] Cannot add wunderbar', () => {
    anObject.wunderbar = 'yep';
  });
  printIfError('[5] Cannot add nestedFoo.noice', () => {
    anObject.nestedFoo.noice = 'oh yeah';
  });
  printHeader("Let's examine the results");
  console.log(anObject);
}

run();
