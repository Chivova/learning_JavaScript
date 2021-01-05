/*1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while. */

const str = 'i am in the easycode';
let strFirstUpper = str.split(' ');

for (let i = 0; i < strFirstUpper.length; i++) { 

  strFirstUpper[i] = strFirstUpper[i][0].toUpperCase() + strFirstUpper[i].slice(1);

}
console.log(strFirstUpper.join(' '));

// Пример преподователя
// let str = 'i am in the easycode';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (i === 0 || str[i - 1] === ' ') {
//     res += str[i].toUpperCase();
//   } else {
//     res += str[i];
//   }
// }

// console.log(res);

/* 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш 
(то есть последняя буква становится первой, предпоследняя - второй итд). */

const reversedString = 'tseb eht ma i';
let normalizeString = '';

for (let i = reversedString.length - 1; i >= 0; i -= 1) { 
    
    normalizeString += reversedString[i];
    
}
console.log(normalizeString);

// Пример преподователя
// let str = 'tseb eht ma i';
// let res = '';

// for (let i = str.length; i--;) {
//   res += str[i];
// }

// console.log(res);

/* 3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for. */

const n= 10;
let factorial= '' ;

for (let i = n; i > 0; i -= 1) { 
    factorial += i + '*';
}
console.log('10! = ',factorial);

// Пример преподователя

let res = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}
console.log(res);

/* 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for. */
const string = 'JavaScript is a pretty good language';
let camelCaseString = string.split(' ');

for (let i = 0; i < camelCaseString.length; i += 1) { 
    camelCaseString[i] = camelCaseString[i][0].toUpperCase() + camelCaseString[i].slice(1);
    
}
camelCaseString = camelCaseString.join('');
console.log(camelCaseString);

// Пример преподователя

// let str = 'JavaScript is a pretty good language';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (i === 0 || str[i - 1] === ' ') {
//     res += str[i].toUpperCase();
//   } else if (str[i] !== ' '){
//     res += str[i];
//   }
// }

// console.log(res);

/* 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
    Массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of. */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (const odd of array) {
    if (odd % 2 === 0) { 
        continue;
        
    }

     console.log(`${odd}`);
}

// Пример преподователя
let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let num of arr) {
  if (num % 2) {
    console.log(num);
  }
}

/* 6. Дан объект:
let list = {
name: ‘denis’,
work: ‘easycode’,
age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in. */

let list = {

name: 'denis',

work: 'easycode',

age: 29

}

for (const key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase();
    }
}
console.log(list);

// Пример преподователя
// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29
// }

// for (let key in list) {
//   if (typeof list[key] === 'string') {
//     list[key] = list[key].toUpperCase();
//   }
// }

// console.log(list);