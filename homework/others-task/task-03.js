/* Чётные числа

Проверка на четность

function isEven (num) {
  return num % 2 === 0;
}

Задание
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
Чётным считается число которое делится на 2 без остатка.

Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].
Вызов функции getEvenNumbers(8, 8) возвращает [8]. */

function getEvenNumbers(start, end) {
    console.log(start, end);

const evenNumbersArray = [];
  
  for (let i = start; i <= end; i += 1){
    
      if (i % 2 === 0) {
      evenNumbersArray.push(i);
    } 
  }

    return evenNumbersArray; 
};
  
 console.log(getEvenNumbers(2, 5) );
 console.log(getEvenNumbers(3, 11) );
 console.log(getEvenNumbers(6, 12) );
 console.log(getEvenNumbers(8, 8) );