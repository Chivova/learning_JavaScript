/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) { 
//     // allLogins - параметр который будет находится внутри функции, что бы в будущем, когда функция будет в одном файле,
//     // а данные в другом не было ошибки, ибо функция будет искать внешнюю переменную (logins), а на вызове функции (в этом файле будут переменные) 
//     // console.log(findLogin(logins, 'avocod3r'));  уже можно передавать то что нам нужно и аргумент  logins передаст 
//     // значения в параметр allLogins
// }
// const findLogin = function (allLogins, loginToFind) {
//     // let message = `Пользователь ${loginToFind} не найден.` // будет лишняя переменная, ведь можно воспользоваться return ниже по коду----->
//     for (const login of logins) {
//         if (login === loginToFind) {
//               return `Пользователь ${loginToFind} найден.`;
//          }
        
//     }
//     return `Пользователь ${loginToFind} не найден.`; // <-----
// };

const findLogin = function (allLogins, loginToFind) {
    // const message = allLogins.includes(loginToFind)
    //     ? `Пользователь ${loginToFind} найден.`
    //     : `Пользователь ${loginToFind} не найден.`;
    // return message;
    // запись через переменную, но лучше сделать и так:
    // отсекаем все лишнее и переменную(лучшая практика привікать так писать)
    return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден.`
        : `Пользователь ${loginToFind} не найден.`;
    
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));