const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
// console.log('imageEl', imageEl);
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// изменяем свойство атрибута src(меняем картинку)
imageEl.alt = 'Это новый котик'; // изменяем свойство атрибута alt

const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl);
heroTitleEl.textContent = 'Я сладкий пирожочек!'; // изменить текст

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('src')); // старый синтаксис и можно работать с любым атрибутом которой можно придумать
// console.log(imageEl.src); // более новый синтаксис и работает только со свойствами обьекта

// imageEl.removeAttribute('src'); // удалить атрибут
// console.log(imageEl.hasAttribute('src')); // проверяем есть ли этот атрибуд

/*
 * Data-атрибуты
 */
const actions = document.querySelectorAll('.js-actions button');
console.log(actions); // возвращает массив(на самом деле пвсевдомассив)
console.log(actions[2].dataset); // dataset => обьект всех атрибутов которые на нем находятся, возвразает пару КЛЮЧ: ЗНАЧЕНИЕ
// в данном примере с документа html, data-атрибут => data-action="add", где action свойство, add - значение
console.log(actions[2].dataset.action); // обращаение по индексу к 3 элементу(к 3 кнопке), и через dataset
// достучатся к значению action => edit
