/*
 * Классы
 * - объявление
 * - конструктор
 * - методы
 * - static
 * - приватные свойства - пока что не добавлены в стандарт JS. Это как бы новый синтаксис, но юзать можно
 * - синтаксис публичных свойства и методы классов - пока что не добавлены в стандарт JS. Это как бы новый синтаксис, но юзать можно
 * - геттеры и сеттеры
 */

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// объявление
class Car {
  //   static свойства - используются только для класса(конструктора)
  static description = 'Класс описывающий автомобиль';

  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
  }

  // приватные свойства - обьявление без this, просто через #. Доступно только в экземпляре, изменить его нельзя и достучатся тоже
  //   запись myCar.#private(выдаст ошибку) или myCar.private(undefined)
  #private = 'private';

  //   конструктор
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  // методы

  changePrice(newPrice) {
    this.price = newPrice;
    console.log(this.#private); // так можно получить значение приватного свойства
  }

  updateModel(newModel) {
    this.model = newModel;
  }
}

// console.dir(Car);
// console.log(Car.description);

const myCar = new Car({ brand: 'VW', model: 'Golf', price: 35000 });
myCar.changePrice(30000);
console.log(myCar);
// Car.logInfo(myCar);
