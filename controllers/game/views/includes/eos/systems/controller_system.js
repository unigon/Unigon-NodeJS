var ControllerSystem = System.extend({
  init: function(aEntityManager, aLayers){
    this._super(aEntityManager, aLayers);
    this._componentName = 'ControllerComponent';
  },
  update: function(deltaTime, action, messages){
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
        switch(action)
        {
          case controllerComponent.upKey():
            if(positionComponent.y >= movementDelta){
              positionComponent.y -= movementDelta;
              messages.add('console', 
                'Move Entity [' + entityId + 
                '] up by [' + movementDelta + 
                '] to [' + positionComponent.toString() + ']');            
            }
            break;        
          case controllerComponent.downKey():
            if(positionComponent.y < (rendererComponent.layer.height() - rendererComponent.sprite.height)){
              positionComponent.y += movementDelta;
              messages.add('console', 
                'Move Entity [' + entityId + 
                '] down by [' + movementDelta + 
                '] to [' + positionComponent.toString() + ']');            
            }
            break;
          case controllerComponent.leftKey():
            if(positionComponent.x >= movementDelta){
              positionComponent.x -= movementDelta;
              messages.add('console', 
                'Move Entity [' + entityId + 
                '] left by [' + movementDelta + 
                '] to [' + positionComponent.toString() + ']');
            }
            break;
          case controllerComponent.rightKey():
            if(positionComponent.x < (rendererComponent.layer.width() - rendererComponent.sprite.width)){
              positionComponent.x += movementDelta;
              messages.add('console', 
                'Move Entity [' + entityId + 
                '] right by [' + movementDelta + 
                '] to [' + positionComponent.toString() + ']');
            }
            break;
          case controllerComponent.secondaryActionKey():
            positionComponent.reinit();
            messages.add('console', 
              'Activate Entity [' + entityId + '] secondary action');
            break;
          case controllerComponent.primaryActionKey():
            positionComponent.reinit();
            messages.add('console', 
              'Activate Entity [' + entityId + '] primary action');
            break;
          default:
            break;
        }
      }
    }

  },
});