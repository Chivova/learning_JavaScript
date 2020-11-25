/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

// У конструктора Number есть 2 метода parseInt() - возвращает целое число и parseFloat() - возвращает 
 
// parseInt() - по символьно с лева на право парсит до тех пор пока не запинаеться  не на числе (даже не учитывает точку)
// Пример: припустим получили ширину из css 70px, с него надо получить буквально число 70
let elementWidth = '70px';
 elementWidth = parseInt(elementWidth);
// console.log(elementWidth);
console.log('Ширина: ', elementWidth);

// parseFloat() - возвращает число с плавуещей запятой, парсит до 0, 9, не числа

let elementHeight = '175.595px';
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);


/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */

// toFixed() - в основном для работы с деньгами, отсекает уазанае значение после запятой
// вызываеться на самом числе, не деструктивный метод, поэтому возвращает то что вызываем,
// а возвращает новое значение на место своего вызова (возвращт строку)
// В () передаеться сколько хотим отсечь после запятой
 
// const salary = 1500.58915;
// console.log(salary.toFixed(2));

// тут вернет строку, поэтому 

// let salary = 1500.58915;
// salary = salary.toFixed(2);
// salary = Number(salary)
// console.log(salary);
// console.log(typeof salary)

// запись слишком длиная поэтому можно записать методом "матрешка"(можно в одну инструкцию вложить
// вызовы функй в друг друга)

let salary = 1500.58915;
salary = Number(salary.toFixed(2));
console.log(salary);

// интерпретатор читает из глубины: сначала он прочитает salary.toFixed(2) эту часть,
//     на это место вернеться строка 1500.58915, после чего вызовет Number и в salary запишеться число



/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */

let quantity = '32';
let value = 'Эту строку невозможно привести к числу';

console.log(Number(quantity));
console.log(Number(value)); 
// console.log(Number(value)); - вернет NaN


/*
 * Обьект Math() - при работе с базовой математикой
 * pow() - функция  Возведение в степень
 * sqrt() - квадратный корень
 * - Exponent operator
 */
// Math.pow(, ); - первое значение которое  хотим возвсти, второе в какую степень
const base = 4;
const power = 5;
const resultPower = Math.pow(base, power);
console.log(resultPower);
// без записи в переменную
// console.log(Math.pow(base, power));
// современная запись через оператор экспонент **
const newBase = 2;
const newPower = 3;
const newResultPower = newBase ** newPower;
console.log(newResultPower); 

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */
// первое что всегда делаем - придумываем алгоритм

// 1 - попросить ввести число и сохранить в переменную
// let userNumber = prompt('Введи число');
// userNumber = Number(userNumber);
// console.log(userNumber);

// 2 - попросить ввести степень и сохранить в переменную
// let userPower = prompt('Введи степень');
// userPower - Number(userPower);
// console.log(userPower);
// 3 -  Возвести введенные данные в степень и вывести
// console.log(userNumber ** userPower);
// или
// const userResult = userNumber ** userPower;
// console.log(userResult);


/*
 * Генерим псевдослучайные числа
 * - Math.random() - генерирует по умолчанию числа от 0 до 1
 * - Math.round()  - округляет запятую к высшему или нижнему значанию (как в математике идет округление)
 */

// Math.random(), что бы задать диапазон генерации чисел, нужна формула : Math.random() * (max - min) + min
 
const max = 40;
const min = 10;
console.log(Math.random() * (max - min) + min);

// такой результат генерирует с большим количеством чисел после запятой для этого есть метод Math.round()

const newMax = 50;
const newMin = 5;
const generateReselt = Math.round(Math.random() * (max - min) + min);
console.log(generateReselt);

// Пример использования генерации чисел - когда заходишь на сайт а там меняеться цвет фона
// 1. Обьявляем масив 
const colors = ['tomato', 'red', 'orange', 'green', 'teal'];
// 2.Обьявляем  переменную, где длина масива минус 1
const exampleMax = colors.length - 1;
// 2.Обьявляем  переменну с нулем где 0 это индекс масива (первая строчка)
const exampleMin = 0;
// 3. Генерируем 
const index = Math.round(Math.random() * (exampleMax - exampleMin) + exampleMin);
// 4. Находим  текущий цвет colors
const color = colors[index];
// 5.Получаем текущий цвет
console.log(color);
// 6.Вешаем на body
document.body.style.backgroundColor = color;

console.log(Number(null)) 
// в численом преобразовании Number(null) всегда приведится к нулю, и так же '0', false