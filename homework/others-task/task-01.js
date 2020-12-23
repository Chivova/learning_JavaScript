/* Фильтрация массива чисел

Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]. */

// function filterArray(numbers, value) {
//     console.log(numbers, value);

//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
  
// }

function filterArray(numbers, value) {
    console.log(numbers, value);
    
  const filteredNumbers = [];

    for (const number of numbers) {
    
        if (number > value) {
    
            filteredNumbers.push(number);
            
        }   
    }
  
  return filteredNumbers;
  
}

console.log(filterArray([1, 2, 3, 4, 5], 3) );
console.log(filterArray([1, 2, 3, 4, 5], 4)); 
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38) );
console.log(filterArray([12, 24, 8, 41, 76], 20));

