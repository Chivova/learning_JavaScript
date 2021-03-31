/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */



const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 92];

// let total = 0;

// for (const value of cart) {
//     total += value; 
// }
// console.log('Total: ', total);

const calculateTotalPrice = function (items) {
    console.log('items внутри функции: ', items);
    let total = 0; // обьявляем локальную переменную (доступна только внутри функции)
    for (const item of items) {
        total += item;
    }
    return total; // возвращаем total и даем доступ за пределы функции
};
const r1 = calculateTotalPrice([1, 2, 3]); // так же может вывести через переменную
// console.log(calculateTotalPrice([1,2,3])); // 6
console.log(`Общая сумма покупок: ${r1}`);
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600
console.log(calculateTotalPrice(cart));