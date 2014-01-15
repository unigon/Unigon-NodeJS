var ControllerSystem = System.extend({
  init: function(aEntityManager, aLayer){
    this._super(aEntityManager, aLayer);
    this._componentName = 'ControllerComponent';
  },
  update: function(deltaTime, action){
    if(action == null) return;

    entitiesWithController = this._entityManager.getEntitiesForComponent(this._componentName);
    for(entityId in entitiesWithController)
    {
      controllerComponent = this._entityManager.getComponentForEntity(this._componentName, entityId);
      positionComponent   = this._entityManager.getComponentForEntity('PositionComponent', entityId);
      movementComponent   = this._entityManager.getComponentForEntity('MovementComponent', entityId);
      rendererComponent   = this._entityManager.getComponentForEntity('RenderComponent', entityId);
      if(
        controllerComponent != null && 
        positionComponent != null && 
        movementComponent != null && 
        rendererComponent != null
      ){
        if(action == controllerComponent.upKey())
        {
          if(positionComponent.y >= movementComponent.speed){
            positionComponent.y -= movementComponent.speed;
            if (UG_DEBUG) console.log(
              'Move Entity [' + entityId + 
              '] up by [' + movementComponent.speed + 
              '] to [' + positionComponent.toString() + ']');            
          }
        }
        if(action == controllerComponent.downKey())
        {
          if(positionComponent.y < (this._layer.height() - rendererComponent.sprite.height)){
            positionComponent.y += movementComponent.speed;
            if (UG_DEBUG) console.log(
              'Move Entity [' + entityId + 
              '] down by [' + movementComponent.speed + 
              '] to [' + positionComponent.toString() + ']');            
          }
        }
        if(action == controllerComponent.leftKey())
        {
          if(positionComponent.x >= movementComponent.speed){
            positionComponent.x -= movementComponent.speed;
            if (UG_DEBUG) console.log(
              'Move Entity [' + entityId + 
              '] left by [' + movementComponent.speed + 
              '] to [' + positionComponent.toString() + ']');
          }
        }
        if(action == controllerComponent.rightKey())
        {
          if(positionComponent.x < (this._layer.width() - rendererComponent.sprite.width)){
            positionComponent.x += movementComponent.speed;
            if (UG_DEBUG) console.log(
              'Move Entity [' + entityId + 
              '] right by [' + movementComponent.speed + 
              '] to [' + positionComponent.toString() + ']');
          }
        }
        if(action == controllerComponent.secondaryActionKey())
        {
          positionComponent.reinit();
          if (UG_DEBUG) console.log(
            'Activate Entity [' + entityId + '] secondary action');
        }
        if(action == controllerComponent.primaryActionKey())
        {
          positionComponent.reinit();
          if (UG_DEBUG) console.log(
            'Activate Entity [' + entityId + '] primary action');
        }
      }
    }

  },
});