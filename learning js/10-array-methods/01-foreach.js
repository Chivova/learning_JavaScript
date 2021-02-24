/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for или for of, если не нужно прерывать цикл
 */

const numbers = [5, 10, 15, 20, 25];

numbers.forEach((number) => {
  console.log('number', number);
});
