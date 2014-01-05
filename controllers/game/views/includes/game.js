var player;
var layers = {};
var layer_player;
$(document).ready( function(){
  game = $('#game');
  game.width(gameConfiguration.canvas.width  + 'px');
  game.height(gameConfiguration.canvas.height + 'px');

  $('.game_layer').each(function(){
    layer = new Layer( this, this.getContext("2d") );
    layers[this.id] =  { id: this.id, layer: layer };
  });
  
  layer_player = layers['layer_player'];
  if(layer_player){
    playerConfiguration = gameConfiguration.player;
    player = new Player(playerConfiguration.position.x, playerConfiguration.position.y, playerConfiguration.size.width, playerConfiguration.size.height, playerConfiguration.size.step,  playerConfiguration.sprite.color,  playerConfiguration.sprite.image);
    layer_player.layer.add(player);
    layer_player.layer.redraw();
  }
});
