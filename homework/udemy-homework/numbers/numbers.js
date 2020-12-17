/* Вопросы к этому заданию

1.Получить число pi из Math и округлить его до 2-х знаков после точки */

let pi = Math.PI;
pi = parseFloat(pi.toFixed(2)) ;
console.log(pi);

/* 2.Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51 */

const maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
const minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

console.log(`max: ${maxNumber}, min: ${minNumber}`);
/* 3.Работа с Math.random:

a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число. */

let floatRandomNumber;

floatRandomNumber = Math.random();
floatRandomNumber = parseFloat(floatRandomNumber.toFixed(2));

console.log(floatRandomNumber);

let intRandomNumber;
intRandomNumber = Math.round(Math.random() * 50 + 1);

console.log(intRandomNumber);

/* 4.Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)? */
let result = 0.6 + 0.7;
result = parseFloat(result.toFixed(1));

console.log(result);

/* 5.Получить число из строки ‘100$’ */

const strToNum = parseInt('100$');
console.log(strToNum);