// Создайте массив с элементами 1, 2 и 3. 
// Увеличьте второй элемент массива на единицу.

const numbers = [1, 2, 3];

console.log(numbers);

numbers[1]++;
console.log(numbers);
// или

numbers[1] += 1;

console.log(numbers);

// Пример 3 - с помощью метода split() и метода join()
// напишите функцию capitalize(word)
// которая принимает слово и возвращает новое слово, 
// с 1м символом в верхнем регистре
const lowerWord = 'hello';

const capitalize = (word) => {
    const letters = word.split('');
    console.log(letters);

    letters[0] = letters[0].toUpperCase();
    
    return letters.join('');
};

console.log(lowerWord);
console.log(capitalize(lowerWord));