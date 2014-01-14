var ControllerSystem = System.extend({
  init: function(aEntityManager){
    this._super(aEntityManager);
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
      // rendererComponent   = this._entityManager.getComponentForEntity('RendererComponent', entityId);

      if(controllerComponent != null && positionComponent != null && movementComponent != null){
        if(action == controllerComponent.upKey())
        {
          if (UG_DEBUG) console.log('Move Entity [' + entityId + '] up by [' + movementComponent.speed + ']');
          positionComponent.y -= movementComponent.speed;
        }
        if(action == controllerComponent.downKey())
        {
          if (UG_DEBUG) console.log('Move Entity [' + entityId + '] down by [' + movementComponent.speed + ']');
          positionComponent.y += movementComponent.speed;
        }
        if(action == controllerComponent.leftKey())
        {
          if (UG_DEBUG) console.log('Move Entity [' + entityId + '] left by [' + movementComponent.speed + ']');
          positionComponent.x -= movementComponent.speed;
        }
        if(action == controllerComponent.rightKey())
        {
          if (UG_DEBUG) console.log('Move Entity [' + entityId + '] right by [' + movementComponent.speed + ']');
          positionComponent.x += movementComponent.speed;
        }
        if(action == controllerComponent.secondaryActionKey())
        {
          if (UG_DEBUG) console.log('Activate Entity [' + entityId + '] secondary action');
          positionComponent.reinit();
        }
        if(action == controllerComponent.primaryActionKey())
        {
          if (UG_DEBUG) console.log('Activate Entity [' + entityId + '] primary action');
          positionComponent.reinit();
        }
      }
    }

  },
});