var ControllerSystem = System.extend({
  init: function(aEntityManager){
    this._super(aEntityManager);
    this._componentName = 'ControllerComponent';
    this.log = 0;
  },
  update: function(deltaTime, action){
    if(action == null) return;

    entitiesWithController = this._entityManager.getEntitiesForComponent(this._componentName);
    for(entityId in entitiesWithController)
    {
      controllerComponent = this._entityManager.getComponentForEntity(this._componentName, entityId);
      positionComponent   = this._entityManager.getComponentForEntity('PositionComponent', entityId);
      rendererComponent   = this._entityManager.getComponentForEntity('RendererComponent', entityId);

      if (this.log++ < 1){
        console.log(entity);
        console.log(controllerComponent);
        console.log(positionComponent);
        console.log(rendererComponent);
      } 
      if(controllerComponent != null && positionComponent != null){
        if(action == controllerComponent.upKey())
        {
          if (UG_DEBUG) console.log('Move Entity [' + entityId + '] up');
          positionComponent.y--;
        }
        if(action == controllerComponent.downKey())
        {
          if (UG_DEBUG) console.log('Move Entity [' + entityId + '] down');
          positionComponent.y++;
        }
        if(action == controllerComponent.leftKey())
        {
          if (UG_DEBUG) console.log('Move Entity [' + entityId + '] left');
          positionComponent.x--;
        }
        if(action == controllerComponent.rightKey())
        {
          if (UG_DEBUG) console.log('Move Entity [' + entityId + '] right');
          positionComponent.x++;
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