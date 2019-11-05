/**
 * Run with:
 * node --experimental-modules deconstruction.mjs
 */
import { printHeader } from './utils';

function run() {
  const aBook = {
    publisher: "'O'Reilly",
    publishedYear: 2017,
    title: 'Clean Architecture',
    author: {firstName: "Robert", lastName: "C. Martin", nickname: "Uncle Bob" },
  };

  const printBook = (book) => {
    const { title: bookTitle, publisher, publishedYear, author: { nickname } } = book;
    const message = [bookTitle, publisher, publishedYear, nickname].join('\n');
    printHeader(message);
  };
  printBook(aBook);

  // THIS MANY ARGUMENTS IS FOR DEMO PURPOSES ONLY!
  const createBook = (title, publisher, publishedYear, author) => {
    return { title, publisher, publishedYear, author };
  };
  const author = { firstName: 'Robert', lastName: 'C. Martin', nickname: 'Uncle Bob' };
  const anotherBook = createBook('Clean Code', "O'Reilly", 2008, author);

  printBook(anotherBook);
}


function constructDeconstructSample() {
  const aPerson = {firstName: 'John', lastName: 'Doe', age: 'Unknown'};
  const { firstName, lastName } = aPerson;
  printHeader("[A person] Firstname: " + firstName + ", lastname: " + lastName);
  const anotherPerson = { firstName: 'Jane', lastName };
  printHeader("[Another person] " + JSON.stringify(anotherPerson));
  const yetAnotherPerson = {age: 12, ...aPerson, firstName: 'Jimmy'};
  printHeader("[Spreaded person] " + JSON.stringify(yetAnotherPerson));
}

function nowWithArraySample() {
  const anArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const [ firstLetter, secondLetter, thirdLetter, ...spread ] = anArray;
  printHeader("First letter is: " + firstLetter);
  printHeader("Second letter is: " + secondLetter);
  printHeader("Third letter is: " + thirdLetter);
  printHeader("The rest: " + spread.join('-'));
}


run();
printHeader('');
constructDeconstructSample();
printHeader('');
nowWithArraySample();
