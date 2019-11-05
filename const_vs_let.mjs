/**
 * Run with:
 * node --experimental-modules const_vs_let.mjs
 */
import { printHeader, printIfError } from './utils';

export function run() {
  const aConstString = 'Hello world';
  const aConstObject = { foo: 'bar', cool: 'aid' };
  const aConstArray = [1, 2, 4];
  let aLetString = 'Hello world';
  let aLetObject = { foo: 'bar', cool: 'aid' };
  let aLetArray = [1, 2, 4];

  /*--------------------------
  | const
  ----------------------------*/
  printIfError('ERROR 01', () => {
    aConstString = 'It is a new world';
  });

  printIfError('ERROR 02', () => {
    aConstObject = {};
  });

  printIfError('ERROR 03', () => {
    aConstObject.foo = 'fubar';
  });

  printIfError('ERROR 04', () => {
    aConstArray = [];
  });

  printIfError('ERROR 05', () => {
    aConstArray[0] = 99999999;
  });

  /*--------------------------
  | let
  ----------------------------*/
  printIfError('ERROR 11', () => {
    aLetString = 'It is a new world';
  });

  printIfError('ERROR 12', () => {
    aLetObject = {};
  });

  printIfError('ERROR 13', () => {
    aLetObject.foo = 'fubar';
  });

  printIfError('ERROR 14', () => {
    aLetArray = [];
  });

  printIfError('ERROR 15', () => {
    aLetArray[0] = 0;
  });

  printHeader('Lets examine the variables!');
  console.log({
    aConstString: aConstString,
    aConstObject: aConstObject,
    aConstArray: aConstArray,
    aLetString: aLetString,
    aLetObject: aLetObject,
    aLetArray: aLetArray,
  });
}

run();
