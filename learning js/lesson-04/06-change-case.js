/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */


const changeCase = function (string) {
    const letters = string.split('');
    let inversedString = '';

    for (const letter of letters) {
        const isInToLowerCase = letter === letter.toLowerCase();
        
        inversedString += isInToLowerCase ? letter.toUpperCase() : letter.toLowerCase();
    }

    return inversedString;

 };

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX
