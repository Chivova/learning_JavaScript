// Пример работы стека
const bar = function () {
  console.log("bar");
};

const baz = function () {
  console.log("baz");
};

const foo = function () {
  console.log("foo");
  bar();
  baz();
};

// [main] --> глобальная функция выполняющая код
// прошла по функциям до первого вызова
foo();
// [main, foo] --> добавилась функциия foo(добавилась наверх  стека)
// [main, foo, console.log] --> в функции foo вызвалася функция console.log(добавилась наверх  стека)
// [main, foo] --> убрался console.log(убралась свехру стека)
// [main, foo, bar] --> в функции foo вызвалась функция bar (добавилась наверх стека)
// [main, foo, bar, console.log]
// [main, foo, bar]
// [main, foo]
// [main, foo, baz]
// [main, foo, baz, console.log]
// [main, foo, baz]
// [main, foo]
// [main]
//
