/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');
// titleEl.innerHTML = '<a href="">Это ссылка)</a>'; // Использовать для добавления чего-то нового(заменит =>
// Это < span > заголовок</span > на <a href="">Это ссылка)</a>)
// titleEl.innerHTML = ''; // Использовать для очистки содержимого тэга

/*
 * Вставка разметки с insertAdjacentHTML() - Использовать для добавления содержимого в тэге
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 *
 *'beforebegin' - перед element
'afterbegin' - внутрь element, в самое начало контента
'beforeend' - внутрь element, в самый конец контента
'afterend' - после element
 */

titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title__link">Это ссылка)</a>'
);
