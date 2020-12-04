/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90, 1];
 // 2. сделать переменную total до цикла (она будет видна только в цикле если обьявить в самом цикле)
let total = 0;

// 1.перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);
//     // 3. каждый элемент приплюслвать к total
//     total += cart[i]; // на каждой итерации приплюсовуем cart[i] к total
// }
// console.log('Total sum: ',total);

// Так как в цикле не нужно менять значение элементов массива, используем for..of

for (const value of cart) {
    total += value;
}
console.log('Total sum: ', total);

/* Пример когда нужно поменять каждый элемент массива
Например увеличить на 10% */

const secondCart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90, 7];
console.log(secondCart);

for (let i = 0; i < secondCart.length; i += 1) {
    secondCart.length; // ----> потому что в условии стоит  < - меньше, а не '<='
    secondCart[i] = Math.round(secondCart[i] * 1.1);
}

console.log(secondCart);