/*
 * Наследование
 *  - extends
 *  - super()
 */

//  Базовый класс

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

// Унаследованый класс (extends)
/* Вызвать конструктор родителя можно только изнутри конструктора потомка.
В частности, super() нельзя вызвать из произвольного метода.
В конструкторе потомка мы обязаны вызвать super() до первого обращения к ключевому слову this.
До вызова super() не существует this, так как по спецификации в этом случае именно super инициализирует this.
super() можно вызывать только в наследующем классе, иначе будет ошибка. */

/*
Цепочка:
--> Вызвали new Warrior, создался пустой обьект
--> В этом пустом обьекте вызвалась функция constructor котораяя вызывается в контексте этого обьекта
--> И в функции constructor вызывается функция super(super это функция constructor в Hero) в контексте этого обьекта
--> Поэтому сначала приходят this.name = name; this.xp = xp; потом происходит явный возврат и добавляется this.weapon = weapon;
*/

class Warrior extends Hero {
  //повторяющиися переменные лучше собрать через операцию rest и киеуть дальше в super
  constructor({ weapon, ...restProps } = {}) {
    super(restProps); // это вызов самой функции constructor с класса Hero, сюда мы прокидываем свойства с базового класса,
    //   а в  constructor свое свойство класса ребенка Warrior
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const mango = new Warrior({ name: 'mango', xp: 0, weapon: 'sword' });
console.log(mango);

mango.attack();
mango.gainXp(1000);

const ajax = new Berserk({
  name: 'ajax',
  xp: 500,
  weapon: 'axe',
  warcry: 'waaaaaaaah',
});

console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp(1800);
console.log(ajax);

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует 🧙‍♂️`);
  }
}

const poly = new Mage({ name: 'poly', xp: 500, spells: ['fireball'] });

console.log(poly);
poly.cast();
poly.gainXp(200);
/*
Цепочка прототипов :
--> Конструктор вызывается через new
--> Создается новый обьект, в его свойстве __proto__ кладется ссылка в обьект Warrior.prototype
--> Так как Warrior.prototype тоже обьект у него есть тоже свойство __proto__, поэтому его свойство __proto__ ведет к Hero.prototype
--> А Hero.prototype есть метод gaintXp()
*/

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype, // в свойстве __proto__ в mango лежит ссылка на Warrior.prototype
// );
// / console.log(Object.getPrototypeOf(mango) === Warrior.prototype);// более правильная запись, вместо __proto__
// лучше писать Object.getPrototypeOf

// В свою очередь в Warrior.prototype(ведь это тоже обьект) в свойстве __proto__  лежит ссылка на Hero.prototype
// поэтому есть доступ к  gaintXp()
// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );
