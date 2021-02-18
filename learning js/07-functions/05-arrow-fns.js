/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 * - Контекст стрелки
 */

//  Обычная функция
// const add = function (a, b, c) {
//     return a + b + c;
// };

// Слово function не используется, вместо этого сразу идет объявление параметров, за которыми всегда следует символ =>.

// Если параметров нет, то ОБЯЗАТЕЛЬНО должны быть пустые круглые скобки.
const fn = () => {
  console.log('Hello! :]');
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
/*
 * Контекст стрелки
 *
 * Контекст внутри стрелки определяется местом ее объявления, а не вызова,
 * и ссылается на контекст родительской функции.
 */

//  Там где обьявили стрелочную функцию, там и такой контекст она запомнит и навсегда

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window

// const user = { name: 'Mango' };
// user.showContext = showThis; // undefined

// user.showContext(); // this in showThis: window // undefined - в обычной функции сработало бы, но в стрелочной
// так не работает, this запомнилось буквально во время ее создания 92 строка. Функция обьявлена в глобальной области
// видимости, поэтому будет this всегда undefined

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);

//     const inner = () => {
//       console.log('this in inner: ', this);
//     };

//     inner(); // если бы была обычная функци был бы undefined, так как функция вызвана без контекста, а стрелдочная
// была обьявлена в методе обьекта, сам метод ссылается при вызове user.showName(); на контекст обьекта, поэтому console.log('this in inner: ', this);
// сработает, inner получит контекст функции showName() будет сссылкатся на внешний обьект, то есть на user
//   },
// };

// user.showName();

/*
 * 💩 Стрелки как методы объекта - НИКОГДП НЕ ИСПОЛЬЗОВАТЬ СТРЕЛОЧНУЮ ФУНКЦИЮ КАК МЕТОД ОБЬЕКТА!!!
 */
// const user = {
//   fullName: 'Mango',
//   showName: () => {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//   },
// };

// 💩 - из-за того что обьект обьявлен в глобальной области видимости, соотвествено стрелочная функция тоже будет так обьявлена и
// ее this всегда будет undefined

// user.showName(); // undefined

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
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, (fruit) => fruit.quantity >= 120);
console.log(r3);

/*
 * Цепочки вызовов - chaining
 */
const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(function(num) {
//   return num > 2;
// });

const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log(greaterThenTwo);

// const multByTwo = greaterThenTwo.map(function(num) {
//   return num * 3;
// });

const multByTwo = greaterThenTwo.map((num) => num * 3);
// console.log(multByTwo);

// const sorted = multByTwo.sort(function(a, b) {
//   return a - b;
// });

const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted);

// const res = numbers
//   .filter(function(num) {
//     return num > 2;
//   })
//   .map(function(num) {
//     return num * 3;
//   })
//   .sort(function(a, b) {
//     return a - b;
//   });

const res = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);

// console.log(res);

/*
 * Сортируем тех кто онлайн по рангу
 */
// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter(function(player) {
//     return player.isOnline;
//   })
//   .sort(function(prevPlayer, nextPlayer) {
//     return prevPlayer.rank - nextPlayer.rank;
//   });

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.table(onlineAndSorted);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

/*
 * Увеличиваем кол-во поинтов каждого игрока
 */
// const upatedPlayers = players.map(function(player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// const upatedPlayers = players.map(player => {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

const upatedPlayers = players.map((player) => ({
  ...player,
  points: player.points + player.points * 0.1,
}));

// console.table(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */
const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(function(player) {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }

//   return player;
// });

// const updatedPlayers = players.map(player => {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }

//   return player;
// });

// const updatedPlayers = players.map(player => {
//   return player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 50 }
//     : player;
// });

const updatedPlayers = players.map((player) =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player
);

console.table(updatedPlayers);
