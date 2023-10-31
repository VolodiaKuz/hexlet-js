import _ from 'lodash';

// Пересечение массивов
// console.log("пересечение массивов [2, 1], [2, 3]");
console.log(_.intersection([2, 1], [2, 3])); // => [2]

// console.log("_.last(['one', 'two'])");
console.log(_.last(['one', 'two']));

// capitalize делает первую букву заглавной
console.log(_.capitalize('hello')); // Hello

// console.log("Hello, Hexlet!");

const fn = (a, b) => {
  const c = a + b;
  return c;
};

console.log(fn(7, 7));
