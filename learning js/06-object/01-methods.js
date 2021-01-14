/*
 * Методы объекта и this при обращении к свойствам в методах
 Что нужно помнить : 
 ES6 (ECMAScript 6) - синтаксис метода обьекта
 Ключевое слово this - которое позволяет получить доступ к этому обьекту
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */
// метод это самая обычная функция которая работает именно со свойствами какого-то обьекта


// что бы сделать метод данного  playlist, нужно добавить обычное свойство (допустим getName) и туда положить функцию
// getName --> свойство, function --> значение

 const playlist = {
    name: 'My playlist',
    raiting: 4,
    tracks: ['track-01', 'track-02', 'track-03'],
    //  trackCount: 3 в данном примере лишнее свойстиво обьекта. Это свойство статическое и что бы каждый раз
    // его не обновлять лучше сделать вычисление свойства динамичаски через метод обьекта

    //  getName() { 
    //      console.log('это getName');
    //  },// --->  это называется метод обьекта, методы обьекта используется для того что бы работать со свойствами данного 
    //  обьекта(под капотом это все равно функция).Для методов обьекта действуют все правила как в обычной функции (параметры,
    // аргументы, return и т.д.)
    //  Примеры:
    //  В методах обьекта НИКОГДА НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ САМОГО ИМЯ ОБЬЕКТА!!!!!!!!!!!!!
    //  Внутри функции есть ключевое слово this, через него и нужно обращаться к методу обьекта (только внутри метода)
    //  this это буквально ссылка на тот обьект который вызван
    //  http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
     changeName(newName) { 
         this.name = newName;
     },
     addTrack(newTrack) { 
         this.tracks.push(newTrack) ;
     },
     updateRating(updatingRating) { 
         this.raiting = updatingRating;
     },
     getTrackCount() { 
        return this.tracks.length;
     }, 
};
console.log(playlist.getTrackCount());
console.log(playlist);
playlist.changeName('My New Playlist');
playlist.addTrack('new track-04');
playlist.updateRating(5);
console.log(playlist.getTrackCount());
console.log(playlist);

// старая запись метода обьекта
//  const playlist = {
//     name: 'My playlist',
//     raiting: 5,
//     tracks: ['track-01', 'track-02', 'track-03'],
//      trackCount: 3,
//      getName: function () { 
//          console.log('это getName');
//      },
// };