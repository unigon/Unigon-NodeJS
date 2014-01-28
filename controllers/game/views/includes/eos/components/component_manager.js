var ComponentManager = Class.extend({
  init: function(entityManager){
    this._entityManager = entityManager;
  },
  createLayers: function(layersConfiguration){
    for(layerName in layersConfiguration){
      layerData = layersConfiguration[layerName];
      layer     = divLayers[layerName];
      if (layer){
        for(aId in layerData)
        {
          entity = entityManager.createEntity();
          for(componentName in layerData[aId]){
            componentData = layerData[aId][componentName];
            if(componentName == 'sprite_map'){
              this.createComponents(componentData, layer.layer);
            } else {
              component = componentManager.createComponent(componentName, componentData, layer.layer);
              if(component){
                this._entityManager.addComponentToEntity(component, entity);
              }
            }
          }
        }
      } else {
        console.warn('Unable to find a div layer by id [' + layerName + ']');
      }
    }
  },
  createComponents: function(spriteData, layer){
    positionX = spriteData.position.x;
    positionY = spriteData.position.y;
    spriteComponents   = {};
    colorComponent = this.createComponent('color', spriteData.color, layer);
    for(sprite in spriteData.sprites)
    {
      spriteComponents[sprite] = this.createComponent('sprite', spriteData.sprites[sprite], layer);
    }

    for(row in spriteData.map)
    {
      for(column in spriteData.map[row])
      {
        entity = this._entityManager.createEntity();
        positionComponent = this.createComponent('position', { x: positionX, y: positionY}, layer);
        this._entityManager.addComponentToEntity(positionComponent, entity);
        this._entityManager.addComponentToEntity(colorComponent, entity);
        spriteName = spriteData.map[row][column];
        positionX += spriteData.size.width;
        renderComponent = new RenderComponent(
          layer, 
          spriteComponents[spriteName], 
          colorComponent
          );
        this._entityManager.addComponentToEntity(renderComponent, entity);
      }
      positionX = spriteData.position.x;
      positionY += spriteData.size.height;
    }

  },
  createComponent: function(componentName, componentData, layer){
    var component = null;
    switch(componentName)
    {
      case 'color':
        component = new ColorComponent(
          componentData.red, 
          componentData.green, 
          componentData.blue
          );
        break;
      case 'controller':
        component = playerController = new ControllerComponent(
          componentData.keyUp,
          componentData.keyRight,
          componentData.keyDown,
          componentData.keyLeft,
          componentData.keyActionPrimary,
          componentData.keyCenter
          );
        break;
      case 'health':
         component  = new HealthComponent(
          componentData.current, 
          componentData.maximum
          );
        break;
      case 'movement':
        component = new MovementComponent(
          componentData.speed, 
          componentData.acceleration
          );
        break;
      case 'position':
        component = new PositionComponent(
          componentData.x, 
          componentData.y, 
          0
          );
        break;
      case 'render':
        colorComponent  = this.createComponent(
          'color', 
          componentData.color, 
          layer
          );
        spriteComponent = this.createComponent(
          'sprite', 
          componentData.sprite, 
          layer
          );
        component = new RenderComponent(
          layer, 
          spriteComponent, 
          colorComponent
          );
        break;
      case 'sprite':
        component = new SpriteComponent(
          componentData.width, 
          componentData.height, 
          componentData.url
          );
        break;
      default:
        console.warn('Do not know how to create component [' + componentName + ']');
    }
    return component;
  }
});