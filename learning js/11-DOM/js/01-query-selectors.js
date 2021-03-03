const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */
const navEl = document.querySelector('.site-nav'); // если нужен только один элемент(из всего DOM дерева находи один уникальный)
// если передать не существующий селектор вернет NULL
console.log(navEl);

const navLinksEl = document.querySelectorAll('.site-nav__link'); //находит ту колекцию которая совпадает с названием селектора
// возвращает в виде массива, если передать не существующий селектор вернет ПУСТОЙ МАССИВ
console.log(navLinksEl);

/*
 * Document.querySelector* и Element.querySelector*
 */
// Если искать через  document.querySelectorAll('.site-nav__link'), то браузер найдет все элементы с таким селектором,
// если нужно точечно указать можно использовать  Element.querySelector

// const navLinksEl = navEl.querySelectorAll('.site-nav__link'); // вместо document можно узказать в каком элементе искать, в
// // поддереве navEl(браузер вернет только те элементы потомками которого указали). navEl будет родителем
