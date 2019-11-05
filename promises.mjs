/**
 * Run with:
 * node --experimental-modules promises.mjs
 */
import { printHeader } from './utils';
function resolver(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 1000);
}

function rejector(resolve, reject) {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 1000);
}

function plainPromises() {
  const promise1 = new Promise(resolver);
  const promise2 = new Promise(rejector);
  
  promise1.then(function(value) {
    console.log('Plain resolver:' + value);
  });
  
  promise2
    .then(value => console.log(value))
    .catch(e => console.log(e));
}

async function asyncFunctionBlock() {
  function create2SecondPromise() { 
    return new Promise(resolve => {
      setTimeout(() => {
        const randomInt = Math.floor(Math.random() * 100);
        resolve(randomInt);
      }, 2000);
    });
  }
  
  function create2SecondPromiseFail() { 
    return new Promise(rejector);
  }
    
  async function anAsyncFunc(aPromise) {
    try {
      const x = await aPromise;
      printHeader('SUCCESS ON ASYNC: ' + x);
    } catch (e) {
      printHeader('ERROR ON ASYNC');
      console.log(e);
    }
  }
  
  await anAsyncFunc(create2SecondPromise());
  await anAsyncFunc(create2SecondPromiseFail());
}

async function run() {
  printHeader('Plain promises');
  plainPromises();
  printHeader('Async functions [START]');
  await asyncFunctionBlock();
  printHeader('Async functions [END]');
}

run();
