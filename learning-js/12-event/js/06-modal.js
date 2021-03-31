/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackDropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress); // вешаем только тогда, когда модалка открыта, чтобы keydown не работал до прослушивания
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.addEventListener('keydown', onEscKeyPress); // снимаем слушателя, когда модалка закроется, чтобы keydown перестал прослушиваться
  document.body.classList.remove('show-modal');
}

// Чем ниже элемент в глубину в разметке, тем ближе он к экрану(по оси Z).Поэтому если клацнуть на саму модалку или абзац в ней
// то произойдет так же закрытие модалки это называется ВСПЛЫТИЕ СОБЫТИЙ. Событие всплывает через предков на вверх, то есть
// в данном примере div.backdrop => div.maodal => <p> когда клацнешь по <p></p> событие всплывает к div.maodal и т.д., так как
// слушатель висит именно на backdrop'е

function onBackDropClick(event) {
  //   console.log('Кликнули по бекдроп!!!!');
  //   console.log(event.currentTarget);
  //   console.log(event.target);
  //   event.currentTarget ==> текущий элемент на котором ловим событие( весит addEventListener), в данном случае это всегда
  //  будет div.backdrop, так как на нем весит слушатель событий
  //   event.target ==> это целевой элемент, буквально то где произошло это событие(куда в интерфейсе клацнули)
  if (event.currentTarget === event.target) {
    // => сравниваем что это 2 одинаковых обьекта
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal(); // просто вызываем функцию чтобы убрать класс с body
  }
}

function onEscKeyPress(event) {
  // console.log(event.code);
  // console.log(event.key);
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE; // всегда лучше надеяться на свойство code, a не key

  if (isEscKey) {
    onCloseModal();
  }
}
