/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */
Массив это набор ячеек в памяти
//  * - Объявление

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends); // через console.log() можно выводить, но лучше через console.table()---> выведет в виде табл с индексом и значением
console.log(friends.length); // свойство length выводит длину массива
console.table(friends);

// индекс массива всегда считантся length - 1;
const lastIndex = friends.length - 1;
console.log(lastIndex); // пример если нужно взять последнее значение в массиве

friends[0]; // если нужно обратится к определенному элементу массива, где friends название переменной(массивва) [index]
console.log(friends[1]); // вывдет Kiwi
console.log(friends[3]); // вывдет Ajax
console.log(friends[4]); //если поставить индекс больше чем елементов, выведет undefined
