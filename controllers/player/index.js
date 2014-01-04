var db = require('../../db');

exports.before = function(req, res, next){
  var id = req.params.player_id;
  if (!id) return next();
  // pretend to query a database...
  process.nextTick(function(){
    req.player = db.players[id];
    // cant find that player
    if (!req.player) return next(new Error('User not found'));
    // found it, move on to the routes
    next();
  });
}

exports.list = function(req, res, next){
  res.render('list', { players: db.players, title: 'Players' });
};

exports.edit = function(req, res, next){
  res.render('edit', { player: req.player, title: 'Player | ' + req.player.name + ' | Edit' });
};

exports.show = function(req, res, next){
  res.render('show', { player: req.player, title: 'Player | ' + req.player.name });
};

exports.update = function(req, res, next){
  var body = req.body;
  req.player.name = body.player.name;
  res.message('Information for player updated!');
  res.redirect('/player/' + req.player.id);
};
