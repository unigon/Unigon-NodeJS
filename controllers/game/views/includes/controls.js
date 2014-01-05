$(document).keydown(function(e){
  if (e.keyCode == gameConfiguration.keyUp) { 
    player.moveUp();
    layer_player.layer.redraw();
  }
  if (e.keyCode == gameConfiguration.keyDown) { 
    player.moveDown();
    layer_player.layer.redraw();
  }
  if (e.keyCode == gameConfiguration.keyLeft) { 
    player.moveLeft();
    layer_player.layer.redraw();
  }
  if (e.keyCode == gameConfiguration.keyRight) { 
    player.moveRight();
    layer_player.layer.redraw();
  }
});