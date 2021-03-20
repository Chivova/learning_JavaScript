/*
 * Библиотека lazysizes
 * Чтобы работало во всех браузерах:
 * - подкючаем библиотеку lazysizes
 * - читаем доки
 * - и по докам ставим нужный класс => lazyload и заменяем атриббут src на data-src
 * - если нужно пишешь свой код для анимации
 *
 * - feature detection
 */

/* const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((image) => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}
 */