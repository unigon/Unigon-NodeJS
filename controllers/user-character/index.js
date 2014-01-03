var db = require('../../db');

exports.name = 'character';
exports.prefix = '/user/:user_id';

exports.create = function(req, res, next){
  var id = req.params.user_id;
  var user = db.users[id];
  var body = req.body;
  if (!user) return next(new Error('User not found'));
  var character = { name: body.character.name };
  character.id = db.characters.push(character) - 1;
  user.characters.push(character);
  res.message('Added character ' + body.character.name);
  res.redirect('/user/' + id);
};