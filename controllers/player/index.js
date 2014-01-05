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

exports.move = function(req, res, next){
  res.render('move', { });
};

exports.new = function(req, res, next){
  res.render('new', { title: 'Player | New' });
};

exports.create = function(req, res, next){
  if(req.body.player)
  {
    var id = Object.keys(db.players).length;
    var player_name = req.body.player.name;
    var player = db.players[id];
    if (player){
      console.log('ERROR - Player with id=[%s] already exists', id);
      res.message('Player already exists!');
      res.redirect('/players');
    }
    else if(player_name != 'undefined' && player_name != null && player_name != ''){
      db.players.push({ name: player_name, characters: [], id: id});
      var player = db.players[id];
      // console.log('CREATE - Player with id=[%s], name=[%s]', player.id, player.name);
      res.message('Added player ' + player.name);
      res.redirect('/players');
    }
    else
    {
      //console.log('ERROR - No player name given [%s]', player_name);
      res.message('Player needs a name [%s]!', player_name);
      res.render('new', { title: 'Player | New' });
    }    
  }
  else
  {
    console.log('ERROR - No player given [%s]', res.body.player);
    res.render('list', { players: db.players, title: 'Players' });
  }    
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
  res.message('Information for player %s updated!', req.player.name);
  res.redirect('/player/' + req.player.id);
};
