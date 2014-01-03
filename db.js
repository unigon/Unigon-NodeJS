// faux database

var characters = exports.characters = [];

characters.push({ name: 'Tobi', id: 0 });
characters.push({ name: 'Loki', id: 1 });
characters.push({ name: 'Jane', id: 2 });
characters.push({ name: 'Raul', id: 3 });

var users = exports.users = [];

users.push({ name: 'TJ', characters: [characters[0], characters[1], characters[2]], id: 0  });
users.push({ name: 'Guillermo', characters: [characters[3]], id: 1 });
users.push({ name: 'Nathan', characters: [], id: 2 });