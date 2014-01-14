var player;
var layers = {};
var layer_player;
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
    layer = new Layer( this, this.getContext("2d") );
    layers[this.id] =  { id: this.id, layer: layer };
  });
  
  // add the player to the player layer
  layer_player = layers['layer_player'];
  if(layer_player){
    playerConfiguration = gameConfiguration.player;

    color  = new Color(
      playerConfiguration.sprite.color.red, 
      playerConfiguration.sprite.color.green, 
      playerConfiguration.sprite.color.blue);
    player = new Player(
      playerConfiguration.position.x, 
      playerConfiguration.position.y, 
      playerConfiguration.size.width, 
      playerConfiguration.size.height, 
      playerConfiguration.size.step,  
      color,  
      playerConfiguration.sprite.image
    );
    layer_player.layer.add(player);

    // color  = new Color(
    //   playerConfiguration.sprite.color.green, 
    //   playerConfiguration.sprite.color.red, 
    //   playerConfiguration.sprite.color.blue);
    // npc = new Player(
    //   playerConfiguration.position.x-150, 
    //   playerConfiguration.position.y-150, 
    //   playerConfiguration.size.width, 
    //   playerConfiguration.size.height, 
    //   playerConfiguration.size.step,  
    //   color,  
    //   playerConfiguration.sprite.image
    // );
    // layer_player.layer.add(npc);

    layer_player.layer.animate();

    playerEntity = entityManager.createEntity();
    currentHitPoints = 200;
    maximumHitPoints = 200;

    playerHealth = new HealthComponent(currentHitPoints, maximumHitPoints);
    entityManager.addComponentToEntity(playerHealth, playerEntity);

    playerColor  = new ColorComponent(
      playerConfiguration.sprite.color.red, 
      playerConfiguration.sprite.color.green, 
      playerConfiguration.sprite.color.blue);
    entityManager.addComponentToEntity(playerColor, playerEntity);

    playerPosition = new PositionComponent(
      playerConfiguration.position.x, 
      playerConfiguration.position.y,
      0);
    entityManager.addComponentToEntity(playerPosition, playerEntity);

    playerController = new ControllerComponent(
      gameConfiguration.keyUp,
      gameConfiguration.keyRight,
      gameConfiguration.keyDown,
      gameConfiguration.keyLeft,
      gameConfiguration.keyActionPrimary,
      gameConfiguration.keyCenter
      );
    entityManager.addComponentToEntity(playerController, playerEntity);

    healthSystem = new HealthSystem(entityManager);
    systemManager.addSystem(healthSystem);
    controllerSystem = new ControllerSystem(entityManager);
    systemManager.addSystem(controllerSystem);
    systemManager.start();

  }
  
});
