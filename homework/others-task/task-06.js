
// Напишите код, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
// Если посетитель вводит «Админ», то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc – вывести строку «Отменено»
// В противном случае вывести строку «Я вас не знаю»
// Пароль проверять так:
// Если введён пароль «Я главный», то вывести строку «Здравствуйте!»
// Иначе выводить строку «Неверный пароль»

let login = prompt('Введите логин');

switch (login) { 
    case 'Админ': { 
        let pass = prompt('Введите пароль');
        
        if (pass === 'Я главный') {
            alert('Здравствуйте!');
        } else { 
            alert('Неверный пароль');
        }
    }
        break;
    
    case null: {
        alert('Отменено');
    }
        break;  
        
    default:
        alert('Я вас не знаю');
}

// let login;

// while (true) {
//     login = prompt('Введите логин');
//     console.log(login);

//     if (!login) {
//         alert('Отменено');
//     }
    
//     if (login === 'Админ') {
//         let pass = prompt('Введите пароль');

//         if (pass === 'Я главный') {
//             alert('Здравствуйте!');
//             break;
//         }
//         alert('Неверный пароль');
        
//     } else {
//         alert('Я вас не знаю');
//     }  
        
//     }
 
    