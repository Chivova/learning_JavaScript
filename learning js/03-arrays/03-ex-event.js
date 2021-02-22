/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

/* 1. переменная total
2. перебираем массив
3. ставим условие только не четные числа(на каждой итерации проверить элемент на чётность)
4. если четный плюсуем к total
5. выводим
Лучший код в конце !!!!!! */
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// console.log(numbers);

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number ;
//         console.log('Четное число: ', number );
//     }
// }
// console.log('Сумма: ', total);

// % 2 !== 0 ---> для нечетных чисел
// пример через for для нечетных чисел

const numbersOdd = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let totalOdd = 0;
console.log(numbersOdd);

for (let i = 0; i < numbersOdd.length; i += 1) {
    const numberOdd = numbersOdd[i]; // в переменную numbersOdd сделать копию значения  numbersOdd[i], 
    // так как numbersOdd[i] плохо читается в коде ----> обьявляется в цикле

    if (numberOdd % 2 !== 0 ) {
        console.log('Нечетное: ', numberOdd);
         totalOdd += numberOdd;
}
}
console.log('Сумма: ', totalOdd);

// !!!!!!Более правильным будет записать код от обратного!!!!!!! ---> если нет(false) пропускаем в противном случе выполяем

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
console.log(numbers);

for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log('Эту итерацию нужно пропустить!!!! - ', number);
        continue; // ---> пропускает эту итерацию и выпоняет код ниже
    }
    total += number;
    console.log(`${number} - Четное!!!!`);
}
console.log('Сумма: ', total);