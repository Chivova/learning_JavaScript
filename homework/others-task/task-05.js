/* Задание
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.
includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

Тесты
Объявлена функция includes(array, value).
Вызов includes([1, 2, 3, 4, 5], 3) возвращает true.
Вызов includes([1, 2, 3, 4, 5], 17) возвращает false.
Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') возвращает true.
Вызов includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран') возвращает false.
Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива') возвращает true.
Вызов includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви') возвращает false.
Вызов includes() для случайного массива со случайным value  возвращает верный boolean.
В функции includes используется for, return, но не метод массива includes. */

function includes(array, value) {
    
    for (const element of array) {

        if (element === value) {
    
            return true;
        }
    }

     return false;
}

// function includes(array, value) {
//     for (let i = 0; i <= array.length; i += 1) { 
//         const coincidence = array[i];
        
//         if (coincidence === value) { 
//             return true;
//         }
        
//     }

//     return false;
// }
console.log(includes([1, 2, 3, 4, 5], 3));  
console.log(includes([1, 2, 3, 4, 5], 17));  
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер')); 
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));  
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви')); 