/*
 * Работа с коллекцией (массивом объектов)
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// // ВАЖНО!!! В массиве сложных типов(обьектов) получаем не копию, а ссылку на этот обьект, поэтому в цикле for of 
// // его можно изменить по ссылке

// for (const friend of friends) {
//   console.log(friend);
//   console.log(friend.name);

//   friend.newprop = 555;
// }
// console.table(friends);

/*
 * Ищем друга по имени
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// // const findFriendByName = function (allFriends, name) {
// //   console.log(allFriends.includes(name));
// //   includes - не подходит ибо сравнивает элементы, в данном случае элементами будут обьекты и запись сравнения выйдет такой
// //   { name: 'Mango', online: false } === 'Poly';
// // }
// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     // console.log(friend.name); // ---> так на каждой итерации можно получить доступ к свойству этого обьекта
//     if (friend.name === name) { 
//    return `Нашли. Это ${friend.name}`;
//     }
//   }
//   return 'Совпадений нет';
//  };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

//  const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// const getAllNames = function (allFriends) {
//   const names = []; // создать массив что бы потом добавить после цикла элементы 

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 в данном примере надо вернуть все свойство обьекта
 */
//  const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: true },
// ];

// const getOnlineFriends = function (allFriends) {
//   const onlineFriend = [];

//   for (const friend of allFriends) {
//     if (friend.online) { // буквально если true ---> не нужно сравнивать с true, такая запись все равно что friend.online === true
//       onlineFriend.push(friend); // пушим не имя, а целый обьект в данной задаче
//     }
//   }
//   return onlineFriend;
// };

// console.log(getOnlineFriends(friends));

/*
 * Получаем имена только друзей которые не онлайн
 */
// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];
//  for (const friend of allFriends) {
//    if (!friend.online) { 
//      offlineFriends.push(friend);
//    }
//   }
//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

 const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: true },
];

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = { // --->  возвращает ОБЬЕКТ со свойствами и массивами
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    if (friend.online) { 
      friendsByStatus.online.push(friend); // обращение к обьекту friendsByStatus, его свойству online, пушим в массив целое свойство обьекта
      continue; // ----> если не true пропускаем итерацию
    }
    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend); не обращать внимания на эту магию :)
  }
  return friendsByStatus;
}

console.log(getFriendsByStatus(friends));