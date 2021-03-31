/*
 * - Создание элементов
 * - Вставка узлов:
 * Если нужно вставить, как узлы(виноградная гроздь)
 * appendChild(elem) - Добавляет elem в конец дочерних элементов parentElem
 *
 * insertBefore(elem, nextSibling) - Добавляет elem в коллекцию детей parentElem, перед элементом nextSibling.
 * Если вторым аргументом указать null, тогда insertBefore сработает как appendChild
 *
 *  - Вставка узлов:
 * Если нужно вставить отдельные элементы(соседи)
 * append(...elems) -  добавляет elems в конец,  (...elems) => можно добавить  любе количество через запятую элементов
 *
 * prepend(...elems) - добавляет elems в начало, (...elems) => можно добавить  любе количество через запятую элементов
 */

/*
 * Создаём заголовок
 */
// createElement(тэг)

const titleEl = document.createElement('h1'); // создаем заголовок
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок :)';

// console.log(titleEl);
// document.body.appendChild(titleEl);

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imgEl = document.createElement('img');
imgEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imgEl.alt = 'valais-alpine-mountains-glacier';
imgEl.width = 320;
// console.log(imgEl);
// document.body.appendChild(imgEl);

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl); // => запись не очень валидная, так как мы делаем несколько обращени к  DOM дереву, что бы
// heroEl.appendChild(imgEl); // => добавить все элементы за одну операцию лучше заюзать в данном примере APPEND

heroEl.append(titleEl, imgEl);
/*
 * Создаём и добавляем новый пункт меню
 */

//  Важно не доблаять все по-отдельности. Нужно сначала все собрать в памяти(создать поддерево) и потом все поместить в разментку

const navItemEl = document.createElement('li'); // создаем еще один пункт li
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a'); // создаем ссылку а
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/portfolio';

navItemEl.appendChild(navLinkEl); // вставляем ссылку в li
// console.log(navItemEl);

// Вставляем в конец
const navEl = document.querySelector('.site-nav'); // получаем ссылку на родительский элемент ul
// navEl.appendChild(navItemEl); // вставляем в конец li(получается на самом деле как поддерево, вставляется li в которм лежит и ссылка)

// Вставляем в начало, при этом припустим что сам у нас уже занят
navEl.insertBefore(navItemEl, navEl.firstElementChild);

// Вставляем передпоследним
// navEl.insertBefore(navItemEl, navEl.lastElementChild);

// Вставляем вместо второго. Тут без children[index] уже не обойтись
// navEl.insertBefore(navItemEl, navEl.children[1]);
