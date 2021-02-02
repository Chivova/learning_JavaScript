/*
 * call и apply
 Функция это на самом деле довольно хитрый объект, поэтому у нее тоже есть методы.
 С помощью методов call и apply можно выполнить функцию в контексте какого-то объекта, не делая функцию его методом.
 */

// const showThis = function (a, b, c) {
//   console.log(a, b, c);
//   console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, 2); // --> возьми эту функцию-- > вызови у нее метод call --> и первый аргументом передай ей обьект
// // в контексте которого нужно вызвать, а дальше можно просто передавать любые аргументы

// // Разница между call и apply в синтаксисе, метод apply требует в передаче аргументов []. Результат будет одинаковый
// showThis.apply(objA, [5, 1, 2]);

// showThis();
//

// Если нужно в аргументе передать масив, для call и apply будет такая запись
// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, [10, 20, 30]);
// Синтаксис метода apply
// showThis.apply(objB, [1, 1, [10, 20, 30]]);

const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};

const hat = {
  color: 'red',
};

// changeColor.call(hat, 'teal');
// console.log(hat);

const sweater = {
  color: 'green',
};

// changeColor.apply(sweater, ['tomato']);
// console.log(sweater);

/*
  bind

Когда необходимо не вызвать функцию на месте, а передать ссылку на эту функцию,
причем с привязанным контекстом, call и apply не подходят.Метод bind позволяет решить эту задачу.
Метод bind создает копию функции fn с привязанным контекстом obj и аргументами arg1, arg2 и так дале,
после чего возвращает ее как результат своей работы.В результате мы получаем копию функции с привязанным контекстом,
которую можно передать куда угодно и вызвать когда угодно.
*/

const changeHatColor = changeColor.bind(hat); // --> копия функции с навсегда привязанным контекстом(будет всегда ссылатся на
// обьект который указан в () )
const changeSweaterColor = changeColor.bind(sweater);
changeHatColor('yellow');
console.log(hat);
changeSweaterColor('tomato');
console.log(sweater);

// Чаще всего метод bind используется для привязки контекста при передаче методов объекта как функций обратного вызова.

/*
Пример - передаем метод обьекста как callback
 * counter
 */

const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter)); // копия метода increment с навсегда привязанным обьектом counter (передача колбеком)
updateCounter(5, counter.decrement.bind(counter)); // копия метода decrement с навсегда привязанным обьектом counter

console.log(counter);
