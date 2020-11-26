/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */

const x1 = 10;
const x2 = 30;
const number = 15;

const firstResult = number < x1;
console.log(`Число ${number} попадает в отрезок до ${x1}? `, firstResult);
// Упрощонная запись без переменной 
// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);

const secondResult = number > x2;
console.log(`Число ${number} попадает в отрезок после ${x2}? `, secondResult);

const thirdResult = number > x1 && number < x2;
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, thirdResult);
// Подробное описание результата:
// number > x1 && number < x2 ---> вот это видит интерпретатор
// 15 > (больше) 10 && (and) 15 < (меньше) 30; ----> после чего подставляет значение
// true && true; ----> вычесляет значения и выводит boolean резултат
// ----> true

// Еще примеры:
// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false
// && - запинается на лжи

// 5 > 10 && 5 < 30
// false && true
// false

const fourthResult = number < x1 || number > x2;
console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, fourthResult);
// Подробное описание результата:
// number < x1 || number > x2
// 15 < (меньше) 10 || (or - или ) 15 > (больше) 30;
// false || (or - или ) false;
// ----> false

// Еще примеры:
// number < x1 || number > x2
// 100 < 10 || 100 > 30
// false && true
// true
// || - запинается на правде

// 7 < 10 || 7 > 30
// true || false
// true