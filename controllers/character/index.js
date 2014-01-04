var db = require('../../db');

exports.before = function(req, res, next){
  var character = db.characters[req.params.character_id];
  if (!character) return next(new Error('Character not found'));
  req.character = character;
  next();
};

exports.show = function(req, res, next){
  res.render('show', { character: req.character, title: 'Character | ' + req.character.name });
};

exports.edit = function(req, res, next){
  res.render('edit', { character: req.character, title: 'Character | ' + req.character.name + ' | Edit' });
};

exports.update = function(req, res, next){
  var body = req.body;
  req.character.name = body.user.name;
  res.message('Information updated!');
  res.redirect('/character/' + req.character.id);
};