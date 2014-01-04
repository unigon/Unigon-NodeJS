// faux database

var characters = exports.characters = [];

characters.push({ name: 'Frodo Baggins', id: 0 });
characters.push({ name: 'Bilbo Baggins', id: 1 });
characters.push({ name: 'Strider', id: 2 });
characters.push({ name: '犬', id: 3 });

var players = exports.players = [];

players.push({ name: 'J.R.R. Tolkien', characters: [characters[0], characters[1], characters[2]], id: 0  });
players.push({ name: '和道', characters: [characters[3]], id: 1 });
players.push({ name: 'Ward', characters: [], id: 2 });