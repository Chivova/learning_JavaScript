/*
 * Типы событий: keypress, keydown, keyup
    keypress => при вводе НЕ РЕАГИРУЕТ на СЛУЖЕБНЫЕ КЛАВИШИ(типа: alt, ctrl, Esc)
    keydown => РЕАГИРУЕТ на абсолютно любую нажатую клавишу
    keyup => тоже самое что и keydown, но выведет текст после того как отпустить клавишу
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 * KeyboardEvent.code => буквально физическая клавиша которую нажали(местоположение, номер)
 * KeyboardEvent.key => выводит символ(значение) которое ввели
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress); // вешаем событие на обьект window ввод с клавиатуры
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  // console.log('event.key: ', event.key);
  // console.log('event.code: ', event.code);

  // refs.output.textContent += event.code; // выведет t: KeyT, h: KeyH
  refs.output.textContent += event.key; // выведет t, h
}

function onClearOutput() {
  refs.output.textContent = '';
}
