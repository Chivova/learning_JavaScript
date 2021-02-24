/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
numbers.sort();
// console.log(numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
// console.log(letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

numbers.sort((curEl, nextEl) => curEl - nextEl);
// console.log(numbers);

numbers.sort((curEl, nextEl) => nextEl - curEl);
// console.log(numbers);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const ascSortedNumbers = [...numbers].sort((curEl, nextEl) => curEl - nextEl);
// console.log(ascSortedNumbers);

const descSortedNumbers = [...numbers].sort((curEl, nextEl) => nextEl - curEl);
// console.log(descSortedNumbers);

/*
 * Кастомная сортировка сложных типов
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени

const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
// console.table(sortedByWorstPlayers);

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];
  //   console.log(a.name.charCodeAt(0) > b.name.charCodeAt(0)); // сравнивает по таблице в Unicode

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.table(byName);
