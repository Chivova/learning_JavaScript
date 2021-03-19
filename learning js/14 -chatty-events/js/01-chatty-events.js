/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 *
 * throttling => _.throttle(func, [wait=0], [options={}]) => https://lodash.com/docs/4.17.15#throttle
 * Вызывает функцию не чаще чем через заданый промежутолк времени
 *
 * debouncing => _.debounce(func, [wait=0], [options={}]) => https://lodash.com/docs/4.17.15#debounce
 *  Вызывает функцию после окончания потока событий(например ввод с клавиатуры) через заданый промежуток времени
 */

/*
 * Mousemove и throttle
 */
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
