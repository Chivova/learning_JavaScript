let string = "some test string";

/* ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

Вопросы к этому заданию

Получить первую и последнюю буквы строки */
let firstSymbol = string[0];
let lastSymbol = string[string.length - 1];

console.log(firstSymbol, lastSymbol);

// Пример преподавателя

const firstChar = string[0];
const lastChar = string[string.length - 1];
console.log(firstChar, lastChar);

/* Сделать первую и последнюю буквы в верхнем регистре */

firstSymbol = firstSymbol.toUpperCase();
lastSymbol = lastSymbol.toUpperCase();

console.log(firstSymbol, lastSymbol);

// Пример преподавателя

const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper);

/* Найти положение слова ‘string’ в строке */
const findWord = string.indexOf('string');

console.log(findWord);

// Пример преподавателя

const wordPos = string.indexOf('string');
console.log(wordPos);

/* Найти положение второго пробела (“вручную” ничего не считать) */
// const findSecSpace = string.lastIndexOf(' ');

// console.log(findSecSpace); ----> не правильно потому что если будет содержать текст больше двух пробелов

// Пример преподавателя

const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

/* Получить строку с 5-го символа длиной 4 буквы */
const str1 = string.slice(5, 9);

console.log(str1);

// Пример преподавателя

const substr = string.substr(5, 4);
console.log(substr);

/* Получить строку с 5-го по 9-й символы */
const str2 = string.slice(5, 9);

console.log(str2);

const slice = string.slice(5, 10);
console.log(slice);

// Пример преподавателя
/* Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов) */
const str3 = string.slice(0, -6);

console.log(str3);

// Пример преподавателя

const lastSix = string.slice(0, -6);
console.log(lastSix);

/* Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016” */

const a = 20;
const b = 16;
string = a.toString() + b.toString();
console.log(string);

// Пример преподавателя

// const a = 20, b = 16;
// const strFromNum = String(a) + String(b);
// console.log(strFromNum);

