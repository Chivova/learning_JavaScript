/*Пример, заходим на сайт dev.to, открывем статью под названием 5 Things I Learned by Asking Developers One Question
в URL пустые строчки заменяются на типе (-) ---> https://dev.to/shaundai/5-things-i-learned-by-asking-developers-one-question-52h7
это и есть slug

 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';
// let normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

//                                                     ЦЕПОЧКИ (chaining) ВЫЗОВОВ
// В данном примере моэно заметить, что есть 3 переменные, из них промежуточные(они используются в промежутке вычислений и дольше не нужны)
// normalizedTitle и words, потэтому можно использовать цепочку(chain) вызовов

const chainSlug = title.toLowerCase().split(' ').join('-'); // Тут нужно помнить что код читается слева на право
// const chainSlug = title.toLowerCase() на место этого вызова станет 'top 10 benefits of react framework' такая строка
// .split(' ') - этот метод вызывается не на методе toLowerCase() а на его результате!!!! и теперь в переменной chainSlug лежит масив
// .join('-') - вызывается на массиве (на результате split) и записывает top-10-benefits-of-react-framework в chainSlug
console.log(chainSlug);
// !!!!Важно запомнить что в цепочке метод вызывается на результате работы предедущего метода, а не на самом методе!!!!!!

