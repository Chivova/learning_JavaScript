// Пример 4 - с помощью метода split() и метода join() 
// напишите функцию snakeToCamelCase(word)
// которая принимает имя переменной в 
// формате snake_case и возвращает новое имя, 
// в формате camelCase ----> thisIsSomeVariableName

const variableName = 'this_is_some_variable_name';
console.log(variableName);

const capitalize = (word) => {
    const letters = word.split('');
    console.log(letters);

    letters[0] = letters[0].toUpperCase();
    
    return letters.join('');
};

const snakeToCamelCase = (word) => {
    const transformToCamelCase = word.split('_');
    console.log(transformToCamelCase);

    for (let i = 1; i < transformToCamelCase.length; i += 1) // начинаем с let i = 1, чтобы не трогать первый элемент
    { 
        transformToCamelCase[i] = capitalize(transformToCamelCase[i]);
    }

     return transformToCamelCase.join('');
};

console.log(snakeToCamelCase(variableName));

// Пример 5 - Поиск элемента
// Напиши функцию findLargestNumber(numbers)которая 
// ищет самое большое число в массиве.

const findLargestNumber = function (numbers) {
    let largestNumber = 0;  // можно так же присвоить 0 индекс ---> numbers[0];

    for (const number of numbers) {
        if (number > largestNumber) {
            largestNumber = number;
         }
    }

    // for (let i = 0; i < numbers.length; i += 1) { 
    //     if (numbers[i] > largestNumber) {
    //         largestNumber = numbers[i];
    //      }
    // }

    return largestNumber;
};

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 83, 7, 12])); // 83