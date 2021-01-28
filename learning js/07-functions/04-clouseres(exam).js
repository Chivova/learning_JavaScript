/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (plases) {
  return function (number) {
    return Number(number.toFixed(plases));
  };
};

const rounder1 = rounder(1);
const rounder2 = rounder(2);

// console.dir(rounder1);
// console.dir(rounder2);

console.log(rounder1(3.45));
console.log(rounder2(4.579));
console.log(rounder1(2.143));
console.log(rounder2(7.8762));
console.log(rounder1(3.332));
console.log(rounder2(10.14987));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add, такая запись ибо совпадает имя свойства и значение
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary; // --> приватная переменная, к которой ограничен доступ(не можно изменить на прямую, только через методы
  //   которые могут быть написаны с проверками, для избежание мошенничества)

  return {
    raise(amount) {
      if (amount > 1000) {
        return "Ты офигел?";
      }

      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Текущая зарпалата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory("Mango", 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());
