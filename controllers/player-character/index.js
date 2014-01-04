var db = require('../../db');

exports.name = 'character';
exports.prefix = '/player/:player_id';

exports.create = function(req, res, next){
  var id = req.params.player_id;
  var player = db.players[id];
  var body = req.body;
  if (!player) return next(new Error('User not found'));
  var character = { name: body.character.name };
  character.id = db.characters.push(character) - 1;
  player.characters.push(character);
  res.message('Added character ' + body.character.name);
  res.redirect('/player/' + id);
};