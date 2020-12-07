/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'JavaScript';
// 1 - олд скулл
const letters = string.split('');
// метод split() - медот строки, который разбивает строку посимвольно, ('') - разделитель в котрый можно поставить 
// любой символ. Создается массив с элемкетами, который можно перебрать
let inversedString = ''; // для нового значеия, так как toLowerCase() и toUpperCase не диструктивны метод(не изменяет значение)
console.log(letters);
// перебираем элементы массива и сравниваем нижный регистр

for (const letter of letters) {
    console.log(letter); // удобно когда нужно посмотрнть каждую итерацию
    // if (letter === letter.toLowerCase()) {
    //     console.log('Эта буква в нижем регистре - ', letter);
    //     inversedString += letter.toUpperCase();
    // } else { // в противном случае если letter === letter.toLowerCase() ---> не равна сама себе
    //     console.log('Эта буква в верхнем регистре - ', letter);
    //     inversedString += letter.toLowerCase();      
    // }
        // если есть тоько два условия записываем через тернарник
    inversedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase() :
            letter.toLowerCase();
}
console.log(inversedString);