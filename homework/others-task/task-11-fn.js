// Пример - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCourse = name => {
    if (courses.includes(name)) return 'У вас уже есть такое курс'; // проверяем есть ли элемент в масиве, если есть делаем быстрый возврат
    // структура if () return; --> позволяет делать быстрый возврат, если код сложный используем {return;}
    courses.push(name);
};

const removeCourse = name => { 
    const removedIndex = courses.indexOf(name);
   
    if (removedIndex === -1) return 'Курс с таким имененем не найден';
    

     courses.splice(removedIndex, 1);
};

const updateCourse = (oldName, newName) => { 
    const replacedIndex = courses.indexOf(oldName);

    if (replacedIndex === -1) return 'Курс с таким имененем не найден';

    courses.splice(replacedIndex, 1, newName);

};

console.log(courses);
addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

console.log(courses);
console.log(addCourse('CSS')); // 'У вас уже есть такое курс'

console.log(courses);
removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
console.log(courses);
console.log(removeCourse('Vue')); // 'Курс с таким имененем не найден'

console.log(courses);
updateCourse('Express', 'NestJS'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'NestJS']
console.log(courses);

console.log(updateCourse('Java', 'C++')); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'NestJS']


  
// Пример  - Напишите функцию, 
// которая считает сумму цифр в числе
// и возвращает ее

const calcDiditsSum = number => {
    const digits = String(number).split(''); // String - ибо число не можно разбить метод split для строки
    let sum = 0;

    for (const digit of digits) {
        sum += Number(digit); // Number - чтобы переобразовать строку в число
    }

    return sum;
};

console.log(calcDiditsSum(123)); // 6
console.log(calcDiditsSum(258)); // 15
console.log(calcDiditsSum(1)); // 1

// Пример 8 - Напишите функцию power(x,n), 
// которая возводит x в степень n.

const power = (x, n) => {
    let resultPower = 1; // ВАЖНО, когда плюсуем то =0, когда умножаем =1

    for (let i = 0; i < n; i += 1) { 
        resultPower *= x;
    }

    return resultPower;
};

console.log(power(5, 0)); // 1
console.log(power(5, 2)); // 25
console.log(power(5, 3)); // 125