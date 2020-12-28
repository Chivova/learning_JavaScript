// const fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// console.log(fruits.length); 

/*
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл */

const styles = ['Джаз', 'Блюз'];

styles.push(' Рок-н-ролл');
console.log(styles);

// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// console.log(styles);

// или самый простой способ если нужно заменить только 1 элемент
// const middleIndexElement = Math.ceil((styles.length / 2) - 1);
// styles[middleIndexElement] = 'Классика';

// или лучше будет через переменную и метод splice
const middleIndexElement = Math.ceil((styles.length / 2 ) - 1); /* тоже самое что и в предедущем примере, только через 
1 так как индексация начинается с 0 */
styles.splice(middleIndexElement, 1, 'Классика');
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Рэп', 'Регги');
console.log(styles);




