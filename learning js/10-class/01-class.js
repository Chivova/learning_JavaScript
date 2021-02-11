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
// class Car {
//   //   static свойства - используются только для класса(конструктора)
//   static description = 'Класс описывающий автомобиль';

//   static logInfo(carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//   }

//   // приватные свойства - обьявление без this, просто через #. Доступно только в экземпляре, изменить его нельзя и достучатся тоже
//   //   запись myCar.#private(выдаст ошибку) или myCar.private(undefined)
//   #private = 'private';

//   //   конструктор
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   // методы

//   changePrice(newPrice) {
//     this.price = newPrice;
//     console.log(this.#private); // так можно получить значение приватного свойства
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }

//   getModel() {
//     return this.model;
//   }

//   setModel(newModel) {
//     this.model = newModel;
//   }
/*  геттеры и сеттеры - собственные свойства класса желательно хранить в constructor. Но существует и другой вариант
  — разместить в теле класса методы set и get.Эти методы используют особый синтаксис, а при их вызове, после имени объекта
  следует написать только имя геттера или сеттера без вызова функции, т.е.без круглых скобок.

  На приямую в коде к свойствам обращаться не стоит(что-то типа myCar.model), ибо в будущем это свойство может измениться.
  Для этого можно сделать метод getModel(){return this.model} для чтения во внешнем коде, и например для перезаписи
  setModel(newModel){this.model = newModel}. Но такой подход плох кучей вызовов методов в коде:
    console.log(myCar.getModel());
    myCar.setModel('Polo');
    console.log(myCar.getModel());

    set и get - заменяют обращение и запись какого-то свойства. Имя set и get не долно совпадать с именем свойства, поэтому
    в свйостве можно использовать _ (нижнее подчеркивание):
get - операция чтения
     get model (){
        return this._model;
     }

    console.log(myCar.model); // вызывается геттер

set - записать
     set model (newModel) {
        this._model = newModel;
     }

    myCar.model = 'Polo'; // вызываетсся сеттер
  */
// }

// console.dir(Car);
// console.log(Car.description);

// const myCar = new Car({ brand: 'VW', model: 'Golf', price: 35000 });
// myCar.changePrice(30000);
// console.log(myCar);
// Car.logInfo(myCar);

class Car {
  static description = 'Класс описывающий автомобиль';

  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
  }

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
}

const carInstance = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(carInstance.model);
carInstance.model = 'Q4';
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 50000;
console.log(carInstance.price);

console.log(carInstance);
