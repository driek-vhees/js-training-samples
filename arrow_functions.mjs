/**
 * Run with:
 * node --experimental-modules arrow_functions.mjs
 */
import { printHeader } from './utils';

const anArrowFuncVar = () => {
  printHeader("print: anArrowFuncVar");
};

const aRegularFuncVar = function () {
  printHeader("print: aRegularFuncVar");
};

function aNamedFunc() {
  printHeader("print: aNamedFunc");
}

function run() {
  const anArray = ['Betty', 'Barney', 'Fred', 'Wilma'];
  printHeader("Regular function");
  anArray.forEach(function(aName) {
    console.log("Hello " + aName);});
  
  printHeader("Arrow function");
  anArray.forEach(aName => {
    console.log("Hello " + aName);
  });

  anArrowFuncVar();
  aRegularFuncVar();
  aNamedFunc();
}

run();
