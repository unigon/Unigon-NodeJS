$(document).keydown(function(e){
  // alert(e.keyCode);
  var redraw = false;
  if (e.keyCode == gameConfiguration.keyUpLeft) { 
    player.moveUp();
    player.moveLeft();
  }  
  if (e.keyCode == gameConfiguration.keyUpRight) { 
    player.moveUp();
    player.moveRight();
  }  
  if (e.keyCode == gameConfiguration.keyDownLeft) { 
    player.moveDown();
    player.moveLeft();
  }  
  if (e.keyCode == gameConfiguration.keyDownRight) { 
    player.moveDown();
    player.moveRight();
  }  
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
  if (e.keyCode == gameConfiguration.keyCenter) { 
    player.center();
  }
  if (e.keyCode == gameConfiguration.keyActionPrimary) { 
    player.action('primary');
  }
  if (redraw){
    layer_player.layer.redraw();
  }
});