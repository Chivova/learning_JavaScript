// Пример 2 - Дефолтные значения параметров функции
// Напишите функцию greet(name), 
// которая при вызове будет получать имя 
// (например, «Василий») и логировать строку «Привет, <имя>». 
// В случае отсутствующего аргумента выводить «Привет, гость»

const greet = function (name = 'гость') {  // современный синтаксис ----> можем здесь написать параметр поумолчанию (если name
    // undefined то name принимает значение  гость)
    const greeting = `Привет ${name}`;

    // const greeting = `Привет ${name || 'гость'}`; // так писали раньше
    console.log(greeting);
}

greet('Poly');
greet('Kiwi');
greet();

// Пример 3 - Псевдомассив arguments
// Напишите функцию calculateAverage() 
// которая принимает произвольное кол-во аргументов 
// и возвращает их среднее значение. 
// Все аругменты будут только числами.

const calculateAverage = function () {
    // console.log(arguments);
    let sum = 0;
    for (const argument of arguments) {
        sum += argument;
    }
    const averege = sum / arguments.length;
    
    return averege;
}


console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// Пример 4 - Стрелочные функции (explicit return - явный возврат --> с фигурными скобками {} и обьязательно return)
// Выполните рефакторинг 
// заменив объявление функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

const checkNumbers = (a, b) => {
    if (a > b) {
    return `число ${a} больше ${b}`;
  }

    return `число ${b} больше ${a}`;
    
 };

console.log(checkNumbers(7, 3)); // число 7 больше 3
console.log(checkNumbers(7, 10)); // число 10 больше 7

  
// Пример 5 - Стрелочные функции (implicit return - неявный возврат --> без фигурныч скобок {} и без return)
// Выполните рефакторинг 
// заменив объявление функции на стрелочную функцию.

// function mult(x, y, z) {
//   return x * y * z;
// }

const mult = (x, y, z) => x * y * z;

console.log(mult(1,2,3)); // 6
console.log(mult(2, 5, 10)); // 100