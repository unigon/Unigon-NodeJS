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

  camera = new Camera(gameConfiguration.camera);
  map    = new Map(gameConfiguration.map);

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

  // center camera on the player
  entitiesWithController = entityManager.getEntitiesForComponent('ControllerComponent');
  for(entityId in entitiesWithController)
  {
    positionComponent   = entityManager.getComponentForEntity('PositionComponent', entityId);
    camera.center(positionComponent, map);
  }

  // add the various sub-systems 
  // used by the game
  healthSystem = new HealthSystem(entityManager, layers);
  systemManager.addSystem({name: 'HealthSystem', system: healthSystem});

  controllerSystem = new ControllerSystem(entityManager, layers);
  controllerSystem.addCamera(camera);
  controllerSystem.addMap(map);
  systemManager.addSystem({name: 'ControllerSystem', system: controllerSystem});

  renderSystem = new RenderSystem(entityManager, layers);
  renderSystem.addCamera(camera);
  renderSystem.addMap(map);
  systemManager.addSystem({name: 'RenderSystem', system: renderSystem});

  systemManager.start(); 

  $('#layer_loading').fadeOut(600);
});
