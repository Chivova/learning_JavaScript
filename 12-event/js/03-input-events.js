/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */
const input = document.querySelector('.js-input');
const nameLabel = document.querySelector('.js-button > span');
const licenseCheckbox = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');

// ЕСть Паттерн(это НЕОБЯЗАТЕЛЬНО) который можно использовать чтобы собрать все ссылки на элементы в один в обьект
// - => надо везде писать refs.
// + => явно будет видно и проще находить ссылки на элементы через refs

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

refs.input.addEventListener('focus', onInputFocus); // получить фокус у input

refs.input.addEventListener('blur', onInputBlur); // убрать фокус у input

// refs.input.addEventListener('change', onInputChange); // используеться при поторе фокуса, но можно получить
// значение у input(использовать не будем только на checkbox и radio), грубо говоря НЕ ЮЗАТЬ ДЛЯ ТЕКСТА
// function onInputChange(event) {
//   console.log(event.currentTarget.value);
// }

// refs.input.addEventListener('input', onInputChange); // реагирует на каждое изменение этого элемента (будем использовать
//для всех input и textarea), грубо говоря ЮЗАТЬ ДЛЯ ТЕКСТА, чтобы отловоить что пользователь вводит
// function onInputChange(event) {
//   console.log(event.currentTarget.value);
// }

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}

// При вводе в поле input'a чтобы изменялось значение у span у кнопки
function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value; // в кнопке изменить значение span
}

function onLicenseChange(event) {
  //кнопка выключена когда элемент не выбран, поэто ставим НЕ!
  refs.btn.disabled = !event.currentTarget.checked;
}
