// Элементы массива нумеруются, начиная с нуля.
// Мы можем получить элемент, указав его номер в квадратных скобках:
// const fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// Методы pop/push, shift/unshift
// apush(...items) – добавляет элементы в конец,
// pop() – извлекает элемент из конца,
// shift() – извлекает элемент из начала,
// unshift(...items) – добавляет элементы в начало.

const fruits = ["Яблоко", "Апельсин", "Слива"];
fruits.pop();
console.log(fruits); 
fruits.push('Груша');
console.log(fruits);


fruits.shift();
console.log(fruits);
fruits.unshift('Манго', 'Мандарин');
console.log(fruits); 