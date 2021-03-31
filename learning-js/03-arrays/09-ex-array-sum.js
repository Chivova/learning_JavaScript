/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// // плохой вариант но рабочий перебрать 2 массива

// for (let i = 0; i < array1.length; i += 1){
//     total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1){
// total += array2[i];
// }

// console.log(total);

// Лучший вариант
// метод concat() - сшивает массивы в один (конкатенирует 2 или больше массивов в 1)
// concat(array2, [1,2,9], [6, 3 ,9 ,8]) можем передать много массивов через запятую
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2); // делаем один масив numbers и перебираем
console.log(numbers);
for (const number of numbers) {
    total += number;
}
console.log(total);
