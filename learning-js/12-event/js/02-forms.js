/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault(); // event - обьект-событие отправки формы, preventDefault() - свойство которое предотвращает
//   // перезагрузку вкладки браузера при отправке формы
// }

// * - Свойство elements => когда нужно точечно поработать с отдельнными элементами
// function onFormSubmit(event) {
//   event.preventDefault();

//   const email = event.currentTarget.elements.email.value; // получаем значение в поле email
//   const subscription = event.currentTarget.elements.subscription.value; // получаем значение радиокнопок subscription
// // свойство currentTarget на обьекте события(event) ссылается на тот элемент который прослушивает это событие (на саму форму)
// // свойсто elements (ЕСТЬ только в формах) показует все элементы формы к которым потом можно дустучатся через другие свойства,
// // имя которых на прямую зависит от атрибутов name на HTML странице
// }

// * - Класс FormData => если просто нужно отправить данные из всей формы. FormData собирает все знячения полей которые в ней есть
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget); // при вызове передаем аргументом cсылку на саму форму(на сам DOM-узел)

  console.log(formData); // на самом деле он не пустой, он сделан так что выглядит таким

  // В результате если нужно в обьекте formData есть метод forEach(значение, имя) => не совсем тот который есть в массивах,
  // чтобы перебрать и посмотреть чт овнутри находится
  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
