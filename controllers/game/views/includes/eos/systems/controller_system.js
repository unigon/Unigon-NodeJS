var ControllerSystem = System.extend({
  init: function(aEntityManager, aLayers){
    this._super(aEntityManager, aLayers);
    this._componentName = 'ControllerComponent';
  },
  addCamera: function(camera){
    this._camera = camera;
  },  
  addMap: function(map){
    this._map = map;
  },  
  update: function(deltaTime, action, messages, camara){
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
            if(this._camera.topEdge() >= movementDelta){
              this._camera.move(0, -1 * movementDelta);
            }
            if(positionComponent.y >= movementDelta){
              positionComponent.y -= movementDelta;
              
              messages.add('console', 
                'Move Entity [' + entityId + 
                '] up by [' + movementDelta + 
                '] to [' + positionComponent.toString() + ']');            
            }
            break;        
          case controllerComponent.downKey():
            if(this._camera.topEdge() < (this._map.height() - this._camera.height())){
              this._camera.move(0, movementDelta);
            }
            if(positionComponent.y < (this._map.height() - rendererComponent.sprite.height)){
              positionComponent.y += movementDelta;
              messages.add('console', 
                'Move Entity [' + entityId + 
                '] down by [' + movementDelta + 
                '] to [' + positionComponent.toString() + ']');            
            }
            break;
          case controllerComponent.leftKey():
            if(this._camera.leftEdge() >= movementDelta)
            {
              this._camera.move(-1 * movementDelta, 0);              
            }
            if(positionComponent.x >= movementDelta){
              positionComponent.x -= movementDelta;
              messages.add('console', 
                'Move Entity [' + entityId + 
                '] left by [' + movementDelta + 
                '] to [' + positionComponent.toString() + ']');
            }
            break;
          case controllerComponent.rightKey():
            if(this._camera.rightEdge() < (this._map.width() - this._camera.width())){
              this._camera.move(movementDelta, 0);
            }
            if(positionComponent.x < (this._map.width() - rendererComponent.sprite.width)){
              positionComponent.x += movementDelta;
              messages.add('console', 
                'Move Entity [' + entityId + 
                '] right by [' + movementDelta + 
                '] to [' + positionComponent.toString() + ']');
            }
            break;
          case controllerComponent.secondaryActionKey():
            positionComponent.reinit();
            this._camera.center(positionComponent);
            messages.add('console', 
              'Activate Entity [' + entityId + '] secondary action');
            break;
          case controllerComponent.primaryActionKey():
            positionComponent.reinit();
            this._camera.center(positionComponent);
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