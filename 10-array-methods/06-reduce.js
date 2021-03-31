/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно !!!
 * - Заменяет всё на свете, но использовать нужно с умом
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => acc + number, 0); // acc --> аккумулятор , 0 --> начальное значение аккумулятора
console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);
console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed, // можно не деструктизировать когда всего одно обащение к свойству
  0
);
console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

// const totalAmount = cart.reduce(
//   (total, item) => total + item.price * item.quantity,
//   0
// );
// console.log(totalAmount);

//через деструкторизацию

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);
console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []); // создаем новый массив, туда на кажой итерации
// распиляем старый аккумулятор, а дальше следующее значение, [] --> изначальное значение для acc(создание нового массива)
console.log(allTags);
// 1 - итерация
// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// 2 - итерация
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']] => ['js', 'nodejs', 'html', 'css'] // --> пойдет на 3 - итерацию и т.д.

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
// console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags);

  return tags;
}, []);

// console.log(allTags);

/*
 * Ведём статистику тегов - еще пример этой же задачи
 */
// const tagsStats = allTags.reduce(function(acc, tag) {
//   console.log('TAG: ', tag);
//   console.log('ACC: ', acc);

//   if (acc.hasOwnProperty(tag)) {
//     console.log('такое свойство есть, увеличиваем значение');

//     acc[tag] += 1;

//     return acc;
//   }

//   console.log('Такого свойства нет, добавляем на обьект');
//   acc[tag] = 1;

//   return acc;
// }, {});

// Грязная версия, мутирует аргумент который придет в acc
// const tagsStats = allTags.reduce(function(acc, tag) {
//   acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;

//   return acc;
// }, {});

// Чистая версия, каждый раз создает новый обьект
const tagsStats = allTags.reduce(function (acc, tag) {
  return {
    ...acc,
    [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1,
  };
}, {});

// console.log(tagsStats);

/*
 * Reduce своими руками
 */
// Array.prototype.reduce = function(callback, initialValue = this[0]) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };
