/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 * - !!!!cвойство Node.nodeName только для чтения, возвращающие имя текущего узла в виде строки.!!!!
 * Для того чтобы не писать на каждую кнопку слушателя, при клике на каждую кнопку событие будет всплывать и его можно
 *  повесить и отловить на общем родителе(или общем контейнере) выше, в данном примере на div
 */

const container = document.querySelector('.js-container');

container.addEventListener('click', OnClick);

function OnClick(evt) {
  //   console.log(evt.target); // <button type="button">Кнопка 2</button>
  //   console.log(evt.currentTarget); // <div class="container js-container"</div>
  //   console.log(evt.target.nodeName); // BUTTON => нам нужно кликать только по кнопке
  if (evt.target.nodeName !== 'BUTTON') {
    // фильтр цели ===> чтобы не кликалось по родителю(div), а только по кнопке
    return;
  }
}

/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
