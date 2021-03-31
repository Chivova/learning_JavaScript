/*
 * Работем с коллекцией товаров в корзине:
 * - getItems() - должен возвращать ссылку на массив items
 * - add(product) - добавить продукт
 * - remove(productName) - удалить продукт
 * - clear() - очистить корзину
 * - countTotalPrice() - посчитать общую стоимость
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍒', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    console.table(this.items);

     for (const item of this.items) {
       if (item.name === product.name) {
        console.log('Такой продукт уже есть', product.name);
         item.quantity += 1;
         return; // ---> если такой продукт есть код ниже выполнять не надо, поэтому return
       }
       
    }

    const newProduct = {
      ...product,
      quantity: 1,
    }; // создаем новый обьект у которого будет новое свойство quantity, с помощю операции распыления добавлем туда оригинальный
    // product и потом добавляем новый обьект(newProduct) в корзину
   
    this.items.push(newProduct);
  },
  remove(productName) {
  //  Так как нам для работы с методом splice() нужен индекес используем цикл for
//     for (let i = 0; i < this.items.length; i += 1) {
//       // console.log(this.items[i]);
//       // this.items[i] ---> запись не очень читабельна, поэтому лучше сделать локальную переменную
//       const item = this.items[i];

//       if (item.name === productName) {
//         this.items.splice(i, 1);
//         console.log('Нашли такой продукт', productName);   
//       }
// }
    // Через деструктуризацию!!!!!!!!!!!!
    const { items } = this;
    for (let i = 0; i < items.length; i++) {
      const { name } = items[i];
      if (productName === name) {
        console.log('Нашли такой продукт', productName);
        console.log('Индекс:', i);

        items.splice(i, 1);  //---> на определенном индексе удали 1 элемент
         
      }
    }
  },
  clear() {
    this.items = []; // ---> просто очищаем пустым массивом
  },
  countTotalPrice() {
    // let total = 0;
    // for (const item of this.items) {
    //   total += item.price;
    // }
    // return total;

    // Через деструктуризацию!!!!!!!!!!!!
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) { // так как в item лежит обьект(на каждой итерации элемент масиива это обьект) и нам во 
      // всей этой функции нужно только свойство price днлаем деструктуризацию сразу
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {

    for (const item of this.items) {
      if (item.name === productName) {
        console.log('Found', productName);
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        console.log('Found', productName);
        item.quantity -= 1;
      }
    }
  },
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍒', price: 60 });
cart.add({ name: '🍒', price: 60 });
cart.add({ name: '🍒', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());

cart.increaseQuantity('🍎');
console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());

cart.decreaseQuantity('🍒');
cart.decreaseQuantity('🍒');
console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());

cart.remove('🍒');
console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());

cart.clear();
console.log(cart.getItems());

