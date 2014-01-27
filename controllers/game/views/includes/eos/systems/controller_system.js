var ControllerSystem = System.extend({
  init: function(aEntityManager, aLayers){
    this._super(aEntityManager, aLayers);
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
        movementDelta =  movementComponent.speed * deltaTime;
        if(action == controllerComponent.upKey())
        {
          if(positionComponent.y >= movementDelta){
            positionComponent.y -= movementDelta;
            if (UG_DEBUG) console.log(
              'Move Entity [' + entityId + 
              '] up by [' + movementDelta + 
              '] to [' + positionComponent.toString() + ']');            
          }
        }
        if(action == controllerComponent.downKey())
        {
          if(positionComponent.y < (rendererComponent.layer.height() - rendererComponent.sprite.height)){
            positionComponent.y += movementDelta;
            if (UG_DEBUG) console.log(
              'Move Entity [' + entityId + 
              '] down by [' + movementDelta + 
              '] to [' + positionComponent.toString() + ']');            
          }
        }
        if(action == controllerComponent.leftKey())
        {
          if(positionComponent.x >= movementDelta){
            positionComponent.x -= movementDelta;
            if (UG_DEBUG) console.log(
              'Move Entity [' + entityId + 
              '] left by [' + movementDelta + 
              '] to [' + positionComponent.toString() + ']');
          }
        }
        if(action == controllerComponent.rightKey())
        {
          if(positionComponent.x < (rendererComponent.layer.width() - rendererComponent.sprite.width)){
            positionComponent.x += movementDelta;
            if (UG_DEBUG) console.log(
              'Move Entity [' + entityId + 
              '] right by [' + movementDelta + 
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