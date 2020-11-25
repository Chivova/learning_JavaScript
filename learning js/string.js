// Код интерпретируеться слева на право и сверху вниз
// тольк в операции присваивания (=) читаеться код справа на лево

// Длину строки можно посчитать свойством  length, length не метод, ибо нету скобок ()
// '' - строчный литерал
// const message = ''; - тоже считаеться символом
const message = 'В этой строке можно посчитать количество сиmволов';
console.log(message.length);


// Конкатенация строк(сшивет строки)

const firstName = 'Alessandro';
const lastName = 'Del Piero';
// const fullName = firstName + lastName; будет без пробела
// Чтобы поставить пробел нужно добавить ' ' внутри с пробелом
const fullName = firstName + ' ' + lastName;
console.log(fullName)



// Шаблонные строки (template strings) (шаблонный литерал)
// Вывод строк и чисел делаеться через ` `(тильда) внутри ${переменная}
/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const x = 'Alessandro';
const y = 'Del Piero';
const z = 'VIP';
const q = 450;
const welcomeMsg = `Гость ${x} ${y} поселился в ${z} номер ${q}`;
console.log(welcomeMsg);

// Old school метод 
// const welcomeMsg =
//   'Гость ' + x + ' ' + y + ' поселяется в ' + z + ' номер ' + q;

// с помощю шаблона ${ } можно динамически менять результат значения переменной
const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников`;
console.log(orderMsg);

/*
 * Нормализация с методом toLowerCase()
 приведит значение к нижнему или верхнему регистру (например для поиска)
 */

const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);

// можно через let и перезаписать значение 
// let newBrand = 'PHILLIPS';
// newBrand = newBrand.toLowerCase();
// console.log(newBrand);

// ввод пользователя 
// let brand = prompt('Какой бренд');
// brand = brand.toLowerCase();
// console.log(brand)

// Метод slice() отсекает все от указонной строки
// В данном примере PHILLIPS будет выводиться как Phillips
// newBrand[0]  - взяли первый сивол и не меняем ([0] - первая символ)
// slice(1) - все после первого меняем ((1) - указываем с какой строки отсекать)
let newBrand = 'PHILLIPS';
newBrand = newBrand[0] + newBrand.slice(1).toLowerCase();
console.log(newBrand);

/*
 * Поиск в строке с методом includes()
 выводиться как true либо false
 */

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const stringFirst = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const stringSecond = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const stringThird = 'Рекламная кампания #fatlivesmatter';

console.log(stringFirst.includes(blacklistedWord1));
console.log(stringFirst.includes(blacklistedWord2));

console.log(stringSecond.includes(blacklistedWord1));
// запись console.log(stringSecond.includes(blacklistedWord2)); не пойдет 
// потому что слово РАСПРОДАЖА записана в другом регистре, поэтому юзаем .toLowerCase()
const normalizedStringSecond = stringSecond.toLowerCase();
console.log(normalizedStringSecond.includes(blacklistedWord2));

console.log(stringThird.includes(blacklistedWord1));
console.log(stringThird.includes(blacklistedWord2));
