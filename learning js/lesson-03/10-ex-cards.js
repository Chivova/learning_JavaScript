/*
 * Работем с коллекцией карточек в trello
 * - Метод splice() - деструктивный метод(может изменять то на чем вызывается), вовзащает массив удаленных элементов
 * в () указывается с какой позиции и количество эелементов которое нужно удалить
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Удаление (по индексу), метод indexOf() ---> найти индекс в массиве, если такого элемента нету возвращает -1
 */

// const cardToRemove = 'Карточка-3';
// const indexRemove = cards.indexOf(cardToRemove);
// console.log(indexRemove);
// cards.splice(indexRemove, 1); // index - индекс элемента, 1 - сколко удалить
// console.table(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const indexInsert = 3;
// cards.splice(indexInsert, 0, cardToInsert); // indexInsert - c 3 индекса, 0 - ничего не удалаем, 
// // cardToInsert - добавить 'Карточка-6'
// console.table(cards);
// если нужно добавить еще элементы (при условии в разные места) несколько раз вызываем метод splice()

/*
 * Обновление (по индексу)
 */

const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);
cards.splice(indexToUpdate, 1, 'Обновленная Карточка-4'); // indexToUpdate - с этого индекса, 1 - одну удалить, 'Обновленная Карточка-4' - на что заменить
console.table(cards);
