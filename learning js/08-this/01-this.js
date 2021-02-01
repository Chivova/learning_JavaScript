/*
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

// Функция это сложный тип, когда мы куда-то  передаем функцию, мы передаем не копию, а буквально ссылку

// console.log('[] === []: ', [] === []); // ---> false
// console.log('{} === {}: ', {} === {}); // ---> false
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {}, // ---> false
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA; // буквально в fnB передаем ссылку на fnA
// console.log('fnB === fnA: ', fnB === fnA); // ---> true ( ссылки на один и тот же обьект)

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag(); // функция showTag() вызывается в контексте обьекта user, this будет ссылатся на этот обьект (user),
//поэтому в методе обьекта мы используем не имя самого обьекта а ключевое слово this
/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo(); // если вызвать функцию без какого-то обьекта в 'строгом режиме' получим undefined, не в строгом режиме window

/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 *
 * Не важно где обьявлена функция с словом this, важно как ее вызвать, потому что значение this определяется в момент вызова
 */
const showTag = function () {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
};

// showTag(); // ---> undefined

const user = {
  tag: "Mango",
};

user.showUserTag = showTag; // создается в обьект user свойство с именем showUserTag, в которую записываем ссылку на функцию
// showTag(). showUserTag получится как метод обьекта user

user.showUserTag(); // вызываем этот метод в контексте user, в этом методе лежит ссылка на функциюю showTag и на этой строке
// определяется значение ключевого слова this

/*
 * Вызов без контекста, но объявлена как метод объекта.
 НЕ ВАЖНО как ты обьявил функцию(методолм обьекта, внешняя), ВАЖНО как ее ВЫЗВАТЬ
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag; // во внешней  переменной присвоится ссылка на функцию showTag()

// outerShowTag(); // ---> undefined, нет привязки к контексту обьекта

/*
 * Контекст в callback-функциях
 */
// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag); // undefined

/*
 * Тренируемся 1
 */

const fn = function () {
  console.log("fn -> this", this);
};

fn(); // Какой this ??? undefined

/*
 * Тренируемся 2
 */

const book = {
  title: "React for beginners",
  showThis() {
    console.log("showThis -> this", this);
  },
  showTitle() {
    console.log("showTitle -> this.title", this.title);
  },
};

// book.showThis(); // Какой this ??? // book{}

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ??? // undefined

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ??? --> undefined + ошибка Cannot read property 'title', так как вместо обьекта this будет undefined
// ---> undefined.title

/*
 * Тренируемся 3
 */

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//     // this.color = color;
//   };

//   // changeColor(); // Какой this ??? --> undefined

//   const sweater = {
//     color: "teal",
//   };

//   sweater.updateColor = changeColor; // в обьекте sweater создастся свойство updateColor с значением где будет лежать ссылка на функцию changeColor

//   // sweater.updateColor("red"); // Какой this ??? sweater{}

//   return sweater.updateColor;
// };

// // makeChangeColor();

// const swapColor = makeChangeColor(); // --> в переменную swapColor присваивается ссылка на вызов makeChangeColor(), в теле этой функции
// //создается функция changeColor, в обьект sweater создается свойство updateColor с сыылкой на changeColor(162 строка), и в результате
// //возвращаем sweater.updateColor(ссылка на эту функцию записывается в переменную swapColor на 171 строке)
// // Получается в переменную swapColor заисывается ссылка на функцию changeColor

// swapColor("blue"); // Какой this ??? --> undefined --> грубо говоря вызываем функцию changeColorchangeColor без явного обьекта

/*
 * Тренируемся 4
 */

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log("changeColor -> this", this);
  };

  return changeColor;
};

const updateColor = makeChangeColor();
updateColor("yellow"); // Какой this ??? // undefined

const hat = {
  color: "blue",
  updateColor, // тут лежит ссылка на  makeChangeColor()
};

hat.updateColor("orange"); // Какой this ??? // hat{}

/*
 * Тренируемся 5
 */

const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this); // undefined
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this); // undefined
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value); // вызывается просто функция без какого-либо обьекта
};

updateCounter(10, counter.increment); //  при передаче метода обьекта как callback контекст не сохраняется (передается
// просто ссыслка на какуе - то пандомную функцию в памяти, которая ничего не знает про обьект хранящий ссылку)
updateCounter(5, counter.decrement);
