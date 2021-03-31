import products from './data/products.js';

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */
// const product = {
//   name: 'Сервоприводы',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };
{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__price>Цена: 1111 кредитов</p>
</article>
*/
}

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.classList.add('product__descr');
// descrEl.textContent = product.description;

// const priceEl = document.createElement('p');
// priceEl.classList.add('product__price');
// priceEl.textContent = `Цена: ${product.price}`;

// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);

/*
 * Пишем функцию для создания карточки продукта
 */
const productsContainerEl = document.querySelector('.js-products');

// Создаем функцию makeProductCard для создания одного товара
const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.classList.add('product__descr');
  descrEl.textContent = description;

  const priceEl = document.createElement('p');
  priceEl.classList.add('product__price');
  priceEl.textContent = `Цена: ${price}`;

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

// передаем makeProductCard как callback и получаем на выходе массив всех продуктов
const elements = products.map(makeProductCard);
console.log(elements);

// расспыляем массив
productsContainerEl.append(...elements);
