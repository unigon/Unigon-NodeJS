var player;
var layers = {};
var layer_player;
$(document).ready( function(){
  $('.game_layer').each(function(){
    layer = new Layer( this, this.getContext("2d") );
    layers[this.id] =  { id: this.id, layer: layer };
  });
  
  layer_player = layers['layer_player'];
  if(layer_player){
    player = new Player(gameConfiguration.player.position.x, gameConfiguration.player.position.y );
    layer_player.layer.add(player);
    layer_player.layer.redraw();
  }
});
