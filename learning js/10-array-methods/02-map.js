/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map((number) => number * 2);

// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// console.table(players);

// const playerNames = players.map((player) => player.name);
// console.log('playerNames', playerNames);

// const playerIds = players.map((player) => player.id);
// console.log('playerIds', playerIds);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */
const upatedPlayers = players.map((player) => ({
  ...player, // распыляем в новый обьект все свойства со старого (новый обьект со свойстами players)
  points: player.points * 1.1, //свойство которое хотим изменить
}));

// console.log(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });

// более краткая запись

const updatedPlayers = players.map((player) =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player
);
// console.table(updatedPlayers);

/*
 * map своими руками
 */

const numbers = [5, 10, 15, 20, 25];

// - создает и возвращает новый массив
// - перебирает оригинальный массив
// - вызывает колбек для каждого элемента и кидает туда аргументы
// - записывает результат вызова функции в новый массив

const map = (array, callback) => {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const result = callback(array[i], i, array);
    newArray.push(result);
  }

  return newArray;
};

const doubledNumbers = map(numbers, (number, index, array) => {
  console.log(number);
  console.log(index);
  console.log(array);

  return number * 2;
});

// console.log(doubledNumbers);

/*
 * Пишем руками на Array.prototype.map
 */

Array.prototype.map = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    const result = callback(this[i], i, this);
    newArray.push(result);
  }

  return newArray;
};

// const numbers = [5, 10, 15, 20, 25];

const doubled = numbers.map((number) => number * 2);

// console.log(doubled);
