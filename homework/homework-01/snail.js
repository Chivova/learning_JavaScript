/* Каждый день улитка проползает 7 футов вверх и каждую ночь опускается вниз на 2 фута.  
Сколько дней потребуется улитке, чтобы подняться на указанную высоту? 
 
Пример вводных данных:  
31 
 
Пример результата: 
6 
 
Пояснение: давайте определим расстояние, которое улитка преодолевает в день: 
День 1: 7-2=5 
День 2: 5+7-2=10 
День 3: 10+7-2=15 
День 4: 15+7-2=20 
День 5: 20+7-2=25 
День 6: 25+7=32  
Таким образом, на 6 день улитка проползет 32 фута и выберется из колодца днем, не опустившись на 2 фута ночью. */


/* Робиш змінну відстань загальна, відстань пройдена і змінну дні.Довжина = 32. Вайл довжина загальна! = 32
робимо + 7 до довжини пройденої і перевіряємо чи вона не більше загальної, якщо ні, то день + 1,
    довжина - 2 і повторюємо */
/* Тобі цикл потрібно закінчити коли умова виконається, умова у тебе довжина = 32.
Ти в кожному циклі додаєш 7 і перевіряєш чи равлик не виповз, якщо ні, то додаєш 7 до поточної довжини і
віднімаєш 2(ну або додаєш 5), і повторюєш */
const distance = 128;
const dayDistance = 7;
const nightDistance = 2;
let allDistance = 0;
let day = 1;

while (allDistance < distance) {
    
    allDistance += dayDistance;
    if (allDistance < distance) {
        day += 1;
        allDistance -= nightDistance;
    }
    else if (allDistance === distance) { 
        allDistance += nightDistance;
    }
}
console.log(day);

// for (let dayDistance = 7; allDistance <= distance;) { 
//     allDistance += dayDistance ;
//     if (allDistance < distance) {
//         day += 1;
//         allDistance -= nightDistance;
//     } else if (allDistance < distance) { 
//         allDistance += nightDistance;
//     }
// }
// console.log(day);

// const dayToExit = function (ft, moveUp = 7, moveDown = 2) {
//     let move = 0
//     let day = 0;
    
//     for (let i = 0; i < ft; i += 1) {
//         move += moveUp;
//         day += 1;
//         if (move < ft) {
//             move -= moveDown;
//             continue;
//         }
//         return day;
//     }
// }
 
// console.log(dayToExit(128));