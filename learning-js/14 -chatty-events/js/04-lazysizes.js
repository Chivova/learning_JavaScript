/*
 * Библиотека lazysizes
 * - feature detection => выявление аозможностей браузера
 */

if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер поддерживает lazyload');
  // feature detection => проверяет поддерживает ли браузер атриббут  loading = "lazy", если да
  // добавляем динамически отриббуту src путь к картинке  img.src = img.dataset.src, если нет подключаем библиотеку lazysizes
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ поддерживает lazyload');
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach((image) => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');
}

function addLazySizesScript() {
  const script = document.createElement('script'); // подключает lazysizes и все необходимые для этого атриббуты, класс уже
  // прописан в HTML
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach((img) => {
    img.src = img.dataset.src; // => добавляем динамически отриббуту src путь к картинке
  });
}
