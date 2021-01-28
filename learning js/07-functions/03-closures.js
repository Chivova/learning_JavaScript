/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

const fnA = function (parameter) {
  const innerVariable = "значение внутренней переменной функции fnA";

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log("Это вызов innerFunction");
  };

  return innerFunction; // --> получается функция innerFunction замыкается в области видимости функции fnA
};

const fnB = fnA(555); // результатом вызова fnA() будет функция innerFunction

fnB(); // --> замыкание заключается в том что, при вызове функции во внешнем коде, функция fnB() будет иметь доступ к локальным
// переменным функции fnA
// возвращаемая функция во время вызова fnB()(в теле fnA это innerFunction) будет иметь доступ до всем локальным переменным(области видимости)
// родительськой функции  fnA (той, из которой ее вернули), это называется "замыкание"
// console.log(fnB);

/*
 * Поварёнок
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// Что бы не повторять при вызове функции makeDish() аргумент 'Mango' и 'Poly' можно возпользоваться замыканием

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff("Mango");

mango("омлет");
mango("чай");
mango("пирожок");
console.dir(mango);

const poly = makeSheff("Poly");

poly("котлеты");
poly("супик");
poly("кофе");
console.dir(poly);
// По факту выглядит вот так:
// const makeSheff = function (Mango) {
//     const makeDish = function (омлет) {
//         console.log(`${Mango} готовит ${омлет}`);
//     };
//     return makeDish;
// };
