var db = require('../../db');

exports.before = function(req, res, next){
  var id = req.params.game_id;
  if (!id) return next();
  // pretend to query a database...
  process.nextTick(function(){
    req.game = db.games[id];
    // cant find that character
    if (!req.game) return next(new Error('Game not found'));
    // found it, move on to the routes
    next();
  });
}

exports.list = function(req, res, next){
  res.render('list', { games: db.games, title: 'Games' });
};

exports.new = function(req, res, next){
  res.render('new', { title: 'Game | New' });
};

exports.create = function(req, res, next){
  if(req.body.game)
  {
    var id = Object.keys(db.games).length;
    var game_name = req.body.game.name;
    var game = db.games[id];
    if (game){
      console.log('ERROR - Game with id=[%s] already exists', id);
      res.message('Game already exists!');
      res.redirect('/games');
    }
    else if(game_name != 'undefined' && game_name != null && game_name != ''){
      db.games.push({ name: game_name, characters: [], id: id});
      var game = db.games[id];
      // console.log('CREATE - Game with id=[%s], name=[%s]', game.id, game.name);
      res.message('Added game ' + game.name);
      res.redirect('/game/' + game.id);
    }
    else
    {
      //console.log('ERROR - No game name given [%s]', game_name);
      res.message('Game needs a name [%s]!', game_name);
      res.render('new', { title: 'Game | New' });
    }    
  }
  else
  {
    console.log('ERROR - No game given [%s]', res.body.game);
    res.render('list', { games: db.games, title: 'Games' });
  }    
};

exports.edit = function(req, res, next){
  res.render('edit', { game: req.game, title: 'Game | ' + req.game.name + ' | Edit' });
};

exports.show = function(req, res, next){
  res.render('show', { game: req.game, title: 'Game | ' + req.game.name });
};

exports.update = function(req, res, next){
  var body = req.body;
  req.game.name = body.game.name;
  res.message('Information for game updated!');
  res.redirect('/game/' + req.game.id);
};