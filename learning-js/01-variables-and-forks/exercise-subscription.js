/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const sub = 'free';

// создаем условие если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent = sub === 'pro' || sub === 'vip';
// Как будет выглядеть 
// sub = 'pro'
// true || false => true

// sub = 'vip'
// false || true => true

// sub = 'free'
// false || false => false

console.log('Есть доступ к контенту? ', canAccessContent);

// можно создать условие где sub не будет равно free const canAccessContent = sub !=== 'free';
// но тогда можно ввести любое слово кроме free и будет все равно доступ 