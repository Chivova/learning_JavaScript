// Как получить ссылку на определенную кнопку из js
// 1. Делаем переменную куда будем сохранять ссылку на кнопку

// const btnAdd = document.querySelector('button[data-add]');
// document - обьект который хранит ссылку на весь html документ 
// querySelector - метод который находится в обьекте document. В этот метод передаеться "буквально" css метод селектора
// чтобы не выбрало первую попавшуеся кнопку (button), дописываем дата атрибут [data-add], так можно и вписывать по классу
// console.log(btnAdd); // пример как можно посмотреть или получили доступ, с помощью console.log()

// console.dir(btnAdd); // dir - метод показывает все методы и свойства обьекта в консоле

// btnAdd.textContent = 'Добавить' // textContent - свойство в  котором записано текстовое содержимое 
// тега(в данном примере Прибавить, так как записано через html)  через него можно изменить 
// название обьекта(можно туда чтото зваписать btnAdd.textContent = 'Добавить'), в данном случае кнопки


// Что бы отловить через js нажатие на кнопку нужно повесить слушателя событий
// addEventListener(аргумент1, аргумент2)----> слушатель событий, которому передается 2 агрумента
// аргумент1 - тип события
// аргумент2 - функция

// btnAdd.addEventListener('click', function () { 
// // тут пишется код который будет выполнятся при клике
//     console.log('click on click')
// });
// 'click' ----> я хочу слышать клик
// function() ----> функция, в данном примере функция которая вызывается при клике

const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputElement = document.querySelector('.js-output span'); // input[js-output span] ----> берем через класс и выбираем span внутри селектора js-output
// js - output-----> обьязательная приставка  к классу 'js' когда мыобращаемся с js


let total = 0;

btnAdd.addEventListener('click', function () {
    console.log('Прибавили')
    const value = Number(valueInput.value); // ---> берем значение(.value) инпута(valueInput) во время клика на кнопку
    // и записываем в const value 
    // .value ---> берет значение инпута(valueInput) при вводе
    //  записываем в переменную const value метод Number, так как инпут возвращает строку 
    
    console.log(value);
    total += value;
    outputElement.textContent = total;
    valueInput.value = ''; // Очищаем значение в инпуте после ввода, что бы при новом вводе в инпут
    // не было старого значения(в данном случае возвращаем пустую строку)
});
    
    
btnReset.addEventListener('click', function () { // Если пользователь клацнул кнопку Очистить, обнуляем значение
    total = 0; // очещаем переменную тоже 
        
    outputElement.textContent = total;
});



