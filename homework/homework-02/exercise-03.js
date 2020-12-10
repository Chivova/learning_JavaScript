/* Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
возвращает самое длинное слово в этой строке. */

const findLongestWord = function(string) {
  const stringArray = string.split(' ');
  let lineLength = ' ';
  console.log(stringArray);

  for (const element of stringArray) {
    // console.log(element.length);
    if (element.length > lineLength) { 
      lineLength = element;
      // console.log(lineLength);
    }
  }
  return lineLength;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'