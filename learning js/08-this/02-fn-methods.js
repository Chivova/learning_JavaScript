/*
 * call и apply
 Функция это на самом деле довольно хитрый объект, поэтому у нее тоже есть методы.
 С помощью методов call и apply можно выполнить функцию в контексте какого-то объекта, не делая функцию его методом.
 */

const showThis = function (a, b, c) {
    console.log(a, b, c);
    console.log('showThis -> this', this);
};

showThis();

const objA = {
    a: 5,
    b: 10,
};

showThis.call(objA, 5, 1, 2); // --> возьми эту функцию-- > вызови у нее метод call --> и первый аргументом передай ей обьект
// в контексте которого нужно вызвать, а дальше можно просто передавать любые аргументы

// Разница между call и apply в синтаксисе, метод apply требует в передаче аргументов []. Результат будет одинаковый
showThis.apply(objA, [5, 1, 2]);

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

