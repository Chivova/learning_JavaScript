/* Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
 Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch. 
Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

*/

/* 1.обьявить переменные
2. вывести сообщение названия страны через prompt
3.привести значение к toLowerCase()
4.сделать цикл через switch
5. вывести в лог 'Доставка в [страна] будет стоить [цена] кредитов'
6. если указанной страны нет, вывести 'В вашей стране доставка не доступна' через alert */

/* Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов  */

const countryChine = 'китай';
const countryChile = 'чили';
const countryAustralia = 'австралия';
const countryIndia = 'индия';
const countryJamaica = 'ямайка';
let priceDelivery;

let countryDelivery = prompt('Введите страну доставки');
countryDelivery = countryDelivery.toLowerCase();


switch (countryDelivery) {
    case countryChine :
        priceDelivery = 100;
        break;
     case countryChile :
        priceDelivery = 250;
        break;
    case countryAustralia :
        priceDelivery = 170;
        break;
    case countryIndia :
        priceDelivery = 80;
        break;
    case countryJamaica :
        priceDelivery = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
console.log(`Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`);


