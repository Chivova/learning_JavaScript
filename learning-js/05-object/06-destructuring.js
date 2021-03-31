/*
 * Деструктуризация объекта (распаковка)
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};
// // Что бы вывести в console.log(); имя всех свойств обьекта нужна такая запись
// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.tracks,
//     playlist.trackCount);

// Для избежания повторения обращения к обьекту playlist используем деструктуризацию 
// !!!!Деструктуризация нужна что бы вытащить из обьекта свойства в локальную переменную для удобства дальнейшей работы!!!!
// Синтаксис
// const { } = playlist;
// { } ---> орперация деструктуризации, = playlist ---> обьект деструктуризации
// Если есть слева от = {} это и есть орперация деструктуризации
// В пузатых скобках {} записываеттся имя локальной переменной, которая должна совпадать с именем свойства обьекта
// const { name, rating, tracks, trackCount, centre } = playlist;
// console.log(name);
// console.log(rating);
// console.log(tracks);
// console.log(trackCount);
// console.log(centre); // вернется undefined ибо нет такого свойства в обьекте
// Присвоения undefined можно избежать, задав переменным значения по умолчанию, в случае если такого свойства в объекте нет.
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     centre: 'Rock',
// };
// const { name, rating, tracks, trackCount, centre = 'Hip-Hop' } = playlist;
// Если такое свойство в обьекте будет, то значения по умолчанию проигнорируется. Важно помнить!!!!!! Если такого свойства
// нет в обьекте то значение запишится не в обьект как свойство,а просто в локальную переменную.
// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };
// const { name, rating, tracks, trackCount, centre = 'Hip-Hop' } = playlist;
// console.log(playlist);
// console.log(centre);

// Как поменять имя локальной переменной от имени свойства обьекта!!!!!!!!!!!!!!!!!!!
// Синтаксис ---> имя свойства и через : имя переменной
// trackCount: numberOfTracks ---> в переменную numberOfTracks запиши значение свойства trackCount из playlist обьекта
// Если нужно дефолтное значение переменной записываем в переменную -->  trackCount: numberOfTracks = 0 !!!!!!
// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const { name, rating, tracks, trackCount: numberOfTracks } = playlist;

// console.log(numberOfTracks);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// // const { name, tag, location, avatar, stats } = profile;
// // console.log(name, tag, location, avatar, stats); // деструктуризируется в переменную stats весь обьект
// // Что бы провести деструктуризацию в глубину нужно записать:
// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes }, // ---> то что лежит в stats деструктуризуй еще вот эти переменные
// };

// console.log(name, tag, location, avatar, followers, views, likes);

/*
 * Деструктуризация массивов
 Порядок имеет значение
 */

// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;

// console.log(red, green, blue);
// В результате такой записи будут созданы 3 переменные и в них будут помещены элементы
// в нумерованом порядке, от 0 до конца массива.

// Если переменных больше чем элементов массива, им будет присвоено undefined, поэтому можно указывать значения по умолчанию.
// const rgb = [255, 100, 80];
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(red, green, blue, alfa);

// Если нужно пропустить свойство:
// const rgb = [255, 100, 80];
// const [red, , blue,] = rgb;
// console.log(red, blue);


const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

// console.log(entries);

    // 3 ур сразу в обьявление переменной
for (const [name, rating] of entries) {

  // ур2
  // const [name, rating] = entry;

  // ур1
  // const name = entry[0];
  // const rating = entry[1];

  console.log(name, rating);
}

/*
 * Операция rest (сбор)
 Когда из обьекта необходимо выкинуть определенное количество свойств в локальную переменную, а все остальные
 свой   ства собрать в кокой-то другой, что бы использовать где-то дальше
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProp } = profile; //--> В переменной restProp будет лежать обьект со свойствами avatar и stats
// console.log(name, tag, location);
// console.log(restProp);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 * Паттерн используется когда в функцию передается больше 3 агрументов для лучшей читабельности кода (кидаем в функцию
 * целый обьекст с подписанными свойствами)
 * 
 * деструктурию можно встретить 2 способами, непостредственно в самой теле функции или после подписи
 */
// 1 способ ---->
// const showProfileInfo = function (userProfile) {
//     const { name, tag, location, avatar, stats } = userProfile;
//     console.log(name, tag, location, avatar, stats);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);

// 2 способ ---->
// const showProfileInfo = function ( { name, tag, location, avatar, stats }) {
//     console.log(name, tag, location, avatar, stats);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);

// Так же можно использовать операцию rest

const showProfileInfo = function (userProfile) {
     const { name, tag, location, avatar, ...restStats } = userProfile;
    console.log(name, tag, location, avatar);
    console.log(restStats);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);