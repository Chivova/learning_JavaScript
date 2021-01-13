/*
 * Методы объекта и this при обращении к свойствам в методах
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
    raiting: 5,
    tracks: ['track-01', 'track-02', 'track-03'],
     trackCount: 3,
     getName() { 
         console.log('это getName');
     },// --->  это называется метод обьекта, методы обьекта используется для того что бы работать со свойствами данного 
    //  обьекта(под капотом это все равно функция)
     
    
};
console.log(playlist);
playlist.getName();

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