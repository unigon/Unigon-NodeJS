var player;
var layers = {};
var layerPlayer;
var entityManager = new EntityManager();
var systemManager = new SystemManager();
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
    layers[this.id] =  { id: this.id, layer: layer };
  });
  
  // add the player to the player layer
  layerPlayer = layers['layer_player'];
  if(layerPlayer){

    // player entity
    // POE - plain old entity
    playerEntity = entityManager.createEntity();

    // add health to player entity
    playerHealth = new HealthComponent(
      playerConfiguration.points.current, 
      playerConfiguration.points.maximum);
    entityManager.addComponentToEntity(playerHealth, playerEntity);

    // add render to player
    // consists of color and sprite
    playerColor  = new ColorComponent(
      playerConfiguration.color.red, 
      playerConfiguration.color.green, 
      playerConfiguration.color.blue);
    playerSprite = new SpriteComponent(
      playerConfiguration.sprite.height, 
      playerConfiguration.sprite.width, 
      playerConfiguration.sprite.url);
    playerRender = new RenderComponent(
      layerPlayer.layer,
      playerSprite,
      playerColor); 
    entityManager.addComponentToEntity(playerRender, playerEntity);    

    // add position to player
    playerPosition = new PositionComponent(
      playerConfiguration.position.x, 
      playerConfiguration.position.y,
      0);
    entityManager.addComponentToEntity(playerPosition, playerEntity);

    // add movement to player
    playerMovement = new MovementComponent(
      playerConfiguration.movement.speed, 
      playerConfiguration.movement.acceleration);
    entityManager.addComponentToEntity(playerMovement, playerEntity);

    // add controller to player
    playerController = new ControllerComponent(
      playerConfiguration.controls.keyUp,
      playerConfiguration.controls.keyRight,
      playerConfiguration.controls.keyDown,
      playerConfiguration.controls.keyLeft,
      playerConfiguration.controls.keyActionPrimary,
      playerConfiguration.controls.keyCenter
      );
    entityManager.addComponentToEntity(playerController, playerEntity);

  }

  layerNpcs = layers['layer_player'];
  if(layerNpcs && npcs){
    for(npcId in npcs){
      npcConfiguration = npcs[npcId];
      npcEntity = entityManager.createEntity();
      if(npcConfiguration.position)
      {
        npcPosition = new PositionComponent(
        npcConfiguration.position.x, 
        npcConfiguration.position.y,
        0);
        entityManager.addComponentToEntity(npcPosition, npcEntity);
      }
      if(npcConfiguration.color && npcConfiguration.sprite)
      {
        npcColor  = new ColorComponent(
          npcConfiguration.color.red, 
          npcConfiguration.color.green, 
          npcConfiguration.color.blue);
        npcSprite = new SpriteComponent(
          npcConfiguration.sprite.height, 
          npcConfiguration.sprite.width, 
          npcConfiguration.sprite.url);
        npcRender = new RenderComponent(
          layerNpcs.layer,
          npcSprite,
          npcColor); 
        entityManager.addComponentToEntity(npcRender, npcEntity);   
      }
    }
  }

  layerBackground = layers['layer_background'];
  if(layerBackground && backgroundConfiguration){
    backgroundEntity = entityManager.createEntity();
   if(backgroundConfiguration.position)
    {
      backgroundPosition = new PositionComponent(
      backgroundConfiguration.position.x, 
      backgroundConfiguration.position.y,
      0);
      entityManager.addComponentToEntity(backgroundPosition, backgroundEntity);
    }    
    if(backgroundConfiguration.color && backgroundConfiguration.sprite)
    {
      backgroundColor  = new ColorComponent(
        backgroundConfiguration.color.red, 
        backgroundConfiguration.color.green, 
        backgroundConfiguration.color.blue);
      backgroundSprite = new SpriteComponent(
        backgroundConfiguration.sprite.height, 
        backgroundConfiguration.sprite.width, 
        backgroundConfiguration.sprite.url);
      backgroundRender = new RenderComponent(
        layerBackground.layer,
        backgroundSprite,
        backgroundColor); 
      entityManager.addComponentToEntity(backgroundRender, backgroundEntity);   
      console.log(backgroundRender);
    }
  }

  // add the various sub-systems 
  // used by the game
  healthSystem = new HealthSystem(entityManager, layerPlayer.layer);
  systemManager.addSystem(healthSystem);

  controllerSystem = new ControllerSystem(entityManager, layerPlayer.layer);
  systemManager.addSystem(controllerSystem);

  renderSystem = new RenderSystem(entityManager, [layerPlayer.layer, layerNpcs.layer]);
  systemManager.addSystem(renderSystem);

  systemManager.start(); 

  
});
