$(document).keydown(function(e){
  // alert(e.keyCode);
  if (e.keyCode == gameConfiguration.keyUpLeft) { 
    player.moveUp();
    player.moveLeft();
    layer_player.layer.redraw();
  }  
  if (e.keyCode == gameConfiguration.keyUpRight) { 
    player.moveUp();
    player.moveRight();
    layer_player.layer.redraw();
  }  
  if (e.keyCode == gameConfiguration.keyDownLeft) { 
    player.moveDown();
    player.moveLeft();
    layer_player.layer.redraw();
  }  
  if (e.keyCode == gameConfiguration.keyDownRight) { 
    player.moveDown();
    player.moveRight();
    layer_player.layer.redraw();
  }  
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