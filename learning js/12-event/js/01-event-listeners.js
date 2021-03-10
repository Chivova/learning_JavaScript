/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//   console.log('Boom');
// });

/*
 Очень важно правильно наименовать передаваемую callback функцию в слушателя события
Примеры
- handle*:  => const handleTargetButtonClick = () => { };
- Handler: => const targetButtonClickHandler = () => { };
- on*: => onTargetButtonClick = () => { };
*/

// ==> параметр event (просто знать что он есть) это просто обьект который содержит служебную информацию  о событии которое произошло

addListenerBtn.addEventListener('click', (event) => {
  console.log(event);
  console.log('Вешаю слушателя события на целевую кнопку');

  //   targetBtn.addEventListener('click', () =>
  //     console.log('Клик по целевой кнопке')
  targetBtn.addEventListener('click', onTargetButtonClick);
});

removeListenerBtn.addEventListener('click', (event) => {
  console.log(event);
  console.log('Снимаю слушателя события с целевой кнопки');

  //   targetBtn.removeEventListener('click', () => // через анонимные функции (в случае если нужно отписывать слушателя,
  // в других случаях можно через анонимную) слушателя не снимешь ибо в targetBtn.addEventListener и targetBtn.removeEventListener
  // будет лежать  2 разных функции поэтому нужно создать одну внешнюю функцию onTargetButtonClick (в данном примере),
  // и они получат ссылку на одну и туже функцию

  // console.log('Клик по целевой кнопке')
  //   );
  targetBtn.removeEventListener('click', onTargetButtonClick);
});

const onTargetButtonClick = (event) => {
  console.log(event);
  console.log('Клик по целевой кнопке');
};
