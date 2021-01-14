// Как узнать сколько свойств в обьекте

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];
console.table(friends);
console.log(Object.keys(friends).length);
// так как Object.keys возвращает массив ключей, то можно просто взять у него длину