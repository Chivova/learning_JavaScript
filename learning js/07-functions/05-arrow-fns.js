/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

//  Обычная функция
// const add = function (a, b, c) {
//     return a + b + c;
// };

// Слово function не используется, вместо этого сразу идет объявление параметров, за которыми всегда следует символ =>.

// Если параметров нет, то ОБЯЗАТЕЛЬНО должны быть пустые круглые скобки.
const fn = () => {
  console.log("Hello! :]");
};
fn();

// Если параметр один, то он может быть без круглых скобок.
// const add = a => a + 10;
// console.log(add(5));

// Если параметров несколько(от двух и далее), то они перечисляются через запятую и ОБЯЗАТЕЛЬНО в  круглых скобках.
// const add = (a, b, c) => {
//   return a + b + c;
// };

/*
 * Если фигурные скобки после => есть, значит необходимо явно указать то,
 * что должна вернуть функция - поставить return и выражение.
 * Это называется явный возврат (explicit return) + больше одной операции в теле
 */
// const add = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };
// console.log(add(5, 10, 15));

/*
 * Если фигурных скобок нет, то возвращается результат выражения стоящего после =>
 * Это называется неявный возврат (implicit return) --> одна инструкция возврата
 * В примере ниже вернется результат выражения сложения a, b и c
 */
// const add = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));

/* У стрелочных функций нет локальной переменной arguments, содержащей все аргументы.
Если необходимо собрать все аргументы в массив, используется операция rest. */
// const add = (a, b, c) => {
//   console.log(arguments); // --> выдаст ошибку
// };

// через rest
const add = (...args) => console.log(args);
add(5, 10, 15);

// С Обьекстами

const fnA = function () {
  return {
    a: 5,
  };
};
console.log(fnA());

// const arrowFnA = () => {
//   return {
//     arrowFnA: 5,
//   };
// };
// console.log(arrowFnA());

// Для еще более краткой записи, нужно помнить что { arrowFnA: 5 } такой возврат не возможен, потому что для интерпретатора
// { } это не начало литерала, а начало тела функции, поэтому нужно при обьектах брать в доп скобки(в выражение)--> ();
// тогда вернется резултат выражения с свойством имени и значения обьекта  arrowFnA: 5
const arrowFnA = () => ({ arrowFnA: 5 });
console.log(arrowFnA());

// Переписать на стрелочную
// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };
// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

const filter = (array, test) => {
  const filteredArray = [];

  for (const el of array) {
    // console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const r1 = filter([1, 2, 3, 4, 5], (value) => value >= 3);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], (value) => value >= 4);
console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const r3 = filter(fruits, (fruit) => fruit.quantity >= 120);
console.log(r3);
