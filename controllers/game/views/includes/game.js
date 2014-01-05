var player;
var gameConfiguration = {
  keyUp: 87,
  keyDown: 83,
  keyLeft: 65,
  keyRight: 68,
  canvas: {
    width: 400,
    height: 400
  },
  player: {
    position: {
      x: 200,
      y: 200
    }
  }
};

$(document).keydown(function(e){
  if (e.keyCode == gameConfiguration.keyUp) { 
    player.moveUp();
  }
  if (e.keyCode == gameConfiguration.keyDown) { 
    player.moveDown();
  }
  if (e.keyCode == gameConfiguration.keyLeft) { 
    player.moveLeft();
  }
  if (e.keyCode == gameConfiguration.keyRight) { 
    player.moveRight();
  }
});

$(document).ready( function(){
  var game = $('.game');
  if(game){
    var canvas = game[0];

    canvas.setAttribute('width', gameConfiguration.canvas.width + 'px');
    canvas.setAttribute('height', gameConfiguration.canvas.height + 'px');

    var context = canvas.getContext("2d");
    
    player = new Player(context, gameConfiguration.player.position.x, gameConfiguration.player.position.y );
    player.draw();
  }
});
