/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */
// пример: fnB - как  функция обратного вызова (callback), a fnA - функция высшего порядка

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);

//     callback(100); //--> callback передается ссылка на функцию  fnB,  тут вызываем функцию fnB(), ей прилетеает аргумент число 100, то есть:
// запись будет выглядеть как : вместо number подставится число 100, результат  console.log('Это лог при вызове fnB', 100);
// fnB (100) { console.log('Это лог при вызове fnB', 100); };
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);

/*
 * функция doMath(a, b, callback)
 */

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   // функция add записывается в callback, в а записывается 2, а в b записывается 3
//   // на месте callback вызывается функция add, ей передаются параметры a, b, соотвественно в х запишется значение а,
//   // а в y  значение b
//   console.log(result);
// };
// const add = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 3, add);
// doMath(2, 3, sub);

// когда присваиваем функцию в переменную, мы расчитываем на ее многократное использование, если функция грубо говоря
// нужна на один раз ее называют инлайновой.В агрумент можно передать анонимную функцию. !!!!!На заметку!!!!(Если
//     после function есть имя — функция именованная, во всех остальных случая анонимная.)
// Можно записать вот так: 3 аргументом передать сразу литерал функции
const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};
doMath(2, 3, function (x, y) {
  return x + y;
});

doMath(10, 8, function (x, y) {
  return x - y;
});

/*
 * Отложенный вызов: регистрация событий
 */
// Пример: когда есть кнопка и она должна реагировать на клик когда-то потом, есть смысл использовать callback-функцию
// (функция будет вызыватся когда-то потом по событию)
const buttonRef = document.querySelector(".js-button");

buttonRef.addEventListener("click", function () {
  console.log("Клик по кнопке " + Date.now());
});

// ИЛИ

// const buttonRef = document.querySelector(".js-button");

// const handleBtnClick = function () {
//   console.log("Клик по кнопке " + Date.now());
// };

// под капотом буквально:
// function addEventListener(eventType, callback) {
// if (condition) {
//     callback();
// }
// }

// buttonRef.addEventListener("click", handleBtnClick);

/*
 * Отложенный вызов: геолокация
 */

const onGetPositionSuccess = function (position) {
  console.log("Это вызов onGetPositionSuccess");
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log("Это вызов onGetPositionError");
  console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );
/* Функция getCurrentPosition запрашивает местоположение пользователя.Эта функция нтчего не возвращает, и чтобы получить результат
работы этой функции нужно кинуть callback - функции.Если в окне нажать ОК, функция onGetPositionSuccess вернет position пользователя,
а onGetPositionError вернет error(отказ в доступе)
Чтобы перезапустить, нужно поменять порт в Live Server */
// Под какпотом происходит буквально:

// function getCurrentPosition(onSuccess, onError) {
//   if (true) {
//     onSuccess({ Все ок });
//   } else {
//     onError({ Обьект ошибки });
//   }
// };

/*
 * Отложенный вызов: интервалы
 */

// const callback = function () {
//   console.log("Через 3 секунды внутри колбека в таймауте");
// };

// console.log("В коде перед таймаутом");
// setTimeout(callback, 3000);
// console.log("В коде после таймаута");
// В коде перед таймаутом
// В коде после таймаута
// Через 3 секунды внутри колбека в таймауте

/* Сначала выполняется console.log("В коде перед таймаутом");, потом интерпретатор считывает вызов функции setTimeout(callback, 3000);
callback не вызывает, где - то ее регистрирует что нужно вызвать через 3 сек, потом выполнится console.log("В коде после таймаута");,
а птом когда проходит 3000мс вызывает callback --> и тело функции console.log("Через 3 секунды внутри колбека в таймауте"); */

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */
// В response будет лежать данные с бекенда
const onRequestSuccess = function (response) {
  console.log("Вызов функции onRequestSuccess после успешного ответа бекенда");
  console.log(response);
};

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then(onRequestSuccess);
