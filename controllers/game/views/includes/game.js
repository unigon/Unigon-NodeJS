var player;
var divLayers = {};
var layers = [];
var layerPlayer;
var entityManager = new EntityManager();
var systemManager = new SystemManager();
var componentManager = new ComponentManager();
var UG_DEBUG = true;

$(document).keydown(function(e){
  systemManager.setActionKey(e.keyCode);
});

$(document).ready( function(){
  // configure the DIV id="game"
  game = $('#game');
  game.width(  gameConfiguration.canvas.width  + 'px' );
  game.height( gameConfiguration.canvas.height + 'px' );

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
    for(layerName in layersConfiguration){
      layerData = layersConfiguration[layerName];
      layer     = divLayers[layerName];
      if (layer){
        for(aId in layerData)
        {
          entity = entityManager.createEntity();
          for(componentName in layerData[aId]){
            componentData = layerData[aId][componentName];
            component = componentManager.createComponent(componentName, componentData, layer.layer);
            if(component){
              entityManager.addComponentToEntity(component, entity);
            }
          }
        }
      } else {
        console.warn('Unable to find a div layer by id [' + layerName + ']');
      }
    }
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
});
