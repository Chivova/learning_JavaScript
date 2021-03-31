/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//     name: 'My playlist',
//     raiting: 5,
//     tracks: ['track-01', 'track-02', 'track-03'],
//     trackCount: 3,
// };
// console.log(playlist);
// name: 'My playlist', raiting: 5, ......, ---> это свойство обьекта
// name - ключ (имя) свойства , 'My playlist' - значение свойства

// литерал обьекста всегда справа от присвоения ----> = { };
// 3 случая когда {} литерал, в остальных случаях пока что - это область видимости
// 1 -ПРИСВОЕНИЕ
// const x = {};

// 2 - ПРИ ПЕРЕДАЧИ АРГУМЕНТА
// const fn = function (myObject) {
//   аргумент в функции (myObject) тут равносильно что myObject = { a: 1, b: 2 } 
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// 3 - ВОЗВРАТ
// const rtfm = function () {
//   return { a: 5 }; возврат всегда с присвоением
// };

// console.log(rtfm());

// !!!!!Ключ свойства всегда переобразовуеться в строку!!!!!
// 'name'
// 'raiting'
// 'tracks'
// 'trackCount'
/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */
const playlist = {
    name: 'My playlist',
    raiting: 5,
    tracks: ['track-01', 'track-02', 'track-03'],
    trackCount: 3,
};
console.log(playlist);

// 1 синтаксис(способ) через точку

console.log(playlist.raiting);
console.log(playlist.name);
// или
console.log(playlist['trackCount']); // важно передавать свойство как строку иначи интепретатор будет думать что это переменная
// console.log(playlist.propertyName); при обращении к несуществуемому свойству всегда вернется undefined

// бывает случай когда свойство ключа хранится в переменной
const propertyName = 'tracks';
console.log(playlist[propertyName]);

// Добавление свойства в обьект
playlist.centre = 'Rock';
console.log(playlist);
// если записать значение в существующее имя обьекста то значение перезапишится
playlist.trackCount = 7;
console.log(playlist);

/*
 * Короткая запись свойств
 Используется при динамическом возврате, например с формы
 */
const username = 'Mango';
const email = 'mango@mail.com';

// const signupData = {
//     username: username,
//     email: email,
// };

// Если имя ключа должно совпадать с именем переменной в которой лежит значение, то можно просто указать имя самой переменной.
// Ее имя будет использовано как имя свойства, а ее значение как значение свойства

// чтобы не дублировать ключ с иминем переменной записываем через короткую запись
const signupData = { 
    username,
    email,
};

console.log(signupData);

/*
 * Вычисляемые свойства
 вычисляется с помощю [] 
 [] - вычисляет ключ из кокой-либо переменной
 */
//  <input name="color" value="tomato" >
// Допустим вытащили имя input в переменную inputName, а свойство в inputValue
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue, // если не поставить [] (inputName: inputValue,) то inputName будет использоватся как имя ключа свойства
};
// [] --> буквально означают иди найти это имя переменной и ее значение используй как ключ
console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 Обьект это сложный тип и в обьектах так же как и с массивами 
 [] === []; false
 {} === {}; false
 
 */

console.log({ a: 1 } === { a: 1 }); // false ---> не равны так как лежат в 2 разных ячейках памяти

const a = { x: 1, y: 2, };
const b = a;
console.log(b === a);// true ----> так как в переменной а лежит ссылка на обьект, после присвоения b = a, 
// в переменную b создалась ссылка на обьект а, 2 ссылкы указывающие на одну и туже ячейку в памяти

a.c = 100;
// тоже самое
// b.c = 100;

console.log(a);
console.log(b);

/*
 * !!!!!!!!!!Массивы и функции это объекты!!!!!!!!!!!!!!!!
 В JS все является обьектами
 */

 // const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);
