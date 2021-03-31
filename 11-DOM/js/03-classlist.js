const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс) - переключение (добавление/удаление) классов. Напр., по событию.
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс) - проверяет есть ли класс => true/false
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]` // находим по имени класса .site-nav__link у которого атрибут href с таким значением
);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current'); // добавляем класс
