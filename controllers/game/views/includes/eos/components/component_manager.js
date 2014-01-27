var ComponentManager = Class.extend({
  init: function(){
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