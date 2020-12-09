/*
 * Псевдомассив arguments и Array.from и ...
 Псевдомассив arguments - используется для задач, когда нудно написать функцию с заранее не известнным
 количеством аргументов. Например в одном вызове будет 3 аргумента, во втором 5 т.д.
 Для этого в функции(кроме стрелочных) есть локальная встроенная переменная arguments, ее не надо обьявлять, она уже
 есть, как ключевое слово. Arguments это псевдомассив и у него нету всех методов массива, можно перебрать
 через for, поэтому псевдомассив нужно переобразовать в настоящий массив через Array.from
 */

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments); // теперь в переменной args лежит полноценный массив с набором своих методов

//     console.log(args);
// };

// через arguments и Array.from это Олд скульный метод!!!!!!

// Есть более новее синтаксис:::::
// При обьявлении параметров функции используем специальную операции rest(остаток),
//     ставиться ...(три точки) и любое имя которое мы хотим
// const fn = function (...args) { // args - становится локальной переменной для функции 
// параметр args собирает все переданые аргументы и получается настоящий массив.Более современный способ,
//     под капотом делает тоже самое что Array.from 
//     console.log(args);
// };

// fn(1, 2, 5);
// fn(4, 78, 90, 9, 7, 4);
// fn(1, 5, 0, 8, 67, 34, 96, 57, 34, 12, 7, 9, 8);

// можно в параметры передать отдельные аргументы const fn = function (a, b, c ...args) -- ->
// ---> a, b, c - первый аргумент был записан в параметр а, второй в b, третий в c (отдельные аргументы), 
// а все остальное в параметр args как  массив. ...args ставится в самом конце
// то есть расписываем какие ты хочешь аргументы как отдельные, а хочешь какие как масиив
    
// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

const add = function (...args) {
    console.log(args);

    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    return total;
}

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

const filterNumbers = function (array, ...args) {
    // аргумент из массива [1, 2, 3, 4, 5] запихываем в параметр array, а все остальное будет лежать в args
    console.log('array:', array);
    console.log('args:', args);
    const uniqueElements = []; // создаем пeрeменную с массивом уникальных элементов

    for (const element of array) { //  в переменную element записывается элемент массива array и используется
        if (args.includes(element)) {  // проверяем в args методом includes нет ли element из array, если есть возвращает true, если нету false
            uniqueElements.push(element); // если есть совпадения пушим в новый массив element

            console.log(`${element} есть везде!`)
        }
    }

    return uniqueElements;
};

 console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

