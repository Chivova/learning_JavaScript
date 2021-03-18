/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// Выбрать только 1 tag

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active'); // ищем активную кнопку по классу

//   if (currentActiveBtn) { так как при первом клике когда нет класса вернется null, чтобы скрипт не упал добаляем проверку
//                           есть ли обьект(вренет true) или же null станет false, если клаас будет то снимет его
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value; // => выводит значение data атриббута

//   console.log(selectedTag);
// }

// Выбрать несколько tag
const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active'); // При таком подходе нет где хранить значение
  console.log(selectedTags);
}
