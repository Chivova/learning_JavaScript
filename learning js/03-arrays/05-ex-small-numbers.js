/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19, 2];
let smallestNumber = numbers[0]; // numbers[0]; ---> делаем предположение, что первый элемент самый маленький, ведь неизвестно что лежит в массиве

// console.log(smallestNumber);
for (const number of numbers) {
    // текущее число меньше чем у нас есть
    if (number < smallestNumber) {
        // если да перезаписывам smallestNumber
         smallestNumber = number;
    }  
}

console.log("Самое маленькое число: ", smallestNumber);