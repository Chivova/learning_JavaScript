/*
 * Перебор через for...in и Object.keys|values|entries
 for...in  - лучше не использовать(он переберает не только собственные свойства обьекта, а и унаследованные)
 Object - это конструктор (такой же как и Number, Boolean, Array) в которого есть методы
 Object.keys - переберает ключи и возвращает массив ключей
Object.values - переберает значения и возвращает массив значений
Object.entries - вернет массив записей, каждым элементом которого будет еще один массив из 2-х элементов, 
ключа и значения этого ключа из объекта. 
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// const keys = Object.keys(feedback); // буквально получи массив ключей keys из обьекта feedback
// console.log(keys);
// for (const key of keys) {
//     console.log(key); // доступ к ключу
//     console.log(feedback[key]); // доступ к значению, но так лучше не делать :)
//     // цепочка такова:
//     // console.log(feedback['good']);
//     // console.log(feedback.good);
//     //  console.log(5);
//     totalFeedback += feedback[key]; // подсщитываем общее количество фидбэков
// }
// console.log('total:', totalFeedback);

const values = Object.values(feedback);

for (const value of values) {
    console.log(value);
    totalFeedback += value;
}
console.log('total:', totalFeedback);


// Object.entries ---> очень редко используеться
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};
/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);
console.log(entries);
// 0: (2) ["name", "Resort Hotel"]
// 1: (2) ["stars", 5]
// 2: (2) ["capacity", 100]
/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */