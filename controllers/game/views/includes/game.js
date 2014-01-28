var player;
var divLayers = {};
var layers = [];
var layerPlayer;
var entityManager = new EntityManager();
var systemManager = new SystemManager();
var componentManager = new ComponentManager(entityManager);
var UG_DEBUG = false;

$(document).keydown(function(e){
  systemManager.setActionKey(e.keyCode);
});

$(document).ready( function(){
  // configure the DIV id="game"
  game = $('.game_div');
  game.width(  gameConfiguration.canvas.width  + 'px' );
  game.height( gameConfiguration.canvas.height + 'px' );

  $('#layer_loading').show();

  // load DIV layers with class="game_layer"
  $('.game_layer').each(function(){
    layer = new Layer( 
      this, 
      this.getContext("2d"), 
      gameConfiguration.canvas.width, 
      gameConfiguration.canvas.height );
    divLayers[this.id] =  { id: this.id, layer: layer };
    layers.push(layer);
  });
  
  // load up the configuration
  if(layersConfiguration){
    componentManager.createLayers(layersConfiguration);
  }

  // add the various sub-systems 
  // used by the game
  healthSystem = new HealthSystem(entityManager, layers);
  systemManager.addSystem(healthSystem);

  controllerSystem = new ControllerSystem(entityManager, layers);
  systemManager.addSystem(controllerSystem);

  renderSystem = new RenderSystem(entityManager, layers);
  systemManager.addSystem(renderSystem);

  systemManager.start(); 

  $('#layer_loading').fadeOut(600);
});
