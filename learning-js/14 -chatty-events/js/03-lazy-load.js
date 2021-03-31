/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 *
 * loading="lazy" в HTML под камотом следит за скроллом и подгружает картинки
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((image) => {
  // вешаем на все картинки слушателя
  image.addEventListener('load', onImageLoaded, { once: true });
  // 'load' => когда загрузится картинка выполняется функция
  // once: true => настройка, когда addEventListener словит 1 раз 'load' и выполнит функцию onImageLoaded регистрация снимается автоматически
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}
