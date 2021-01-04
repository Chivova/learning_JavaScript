// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

// Вопросы к этому заданию
// Создать объект с полем product, равным ‘iphone’

// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

// Добавить поле details, которое будет содержать объект с полями model и color

const firstObject = {};

firstObject.product = 'iphone';
firstObject.price = 1000;
firstObject.currency = 'dollar';
firstObject.details = {};
firstObject.details.model = 12;
firstObject.details.color = 'white';

console.log(firstObject);

// Решение преподователя

/* const item = { 
    product: "iPhone"
}

item.price = 1000;
item.currency = "dollar";
// или 
item['price'] = 1000;
item['currency'] = "dollar";

item.details = {};
item.details.model = "XR";
item.details.color = "Red";

console.log(item); */