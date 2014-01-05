// faux database


var games = exports.games = [];
var next_game_id = 0;

games.push({ name: 'Out The Door', id: next_game_id++  });

var characters = exports.characters = [];
var next_character_id = 0;

characters.push({ name: 'Frodo Baggins', games: [games[0]], id: next_character_id++ });
characters.push({ name: 'Bilbo Baggins', games: [], id: next_character_id++ });
characters.push({ name: 'Strider', games: [], id: next_character_id++ });
characters.push({ name: '犬', games: [], id: next_character_id++ });

var players = exports.players = [];
var next_player_id = 0;

players.push({ name: 'J.R.R. Tolkien', characters: [characters[0], characters[1], characters[2]], id: next_player_id++  });
players.push({ name: '和道', characters: [characters[3]], id: next_player_id++ });
players.push({ name: 'Ward', characters: [], id: next_player_id++ });

