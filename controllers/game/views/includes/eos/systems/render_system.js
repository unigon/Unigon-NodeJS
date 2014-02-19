var RenderSystem = System.extend({
  init: function(aEntityManager, aLayers){
    this._super(aEntityManager, aLayers);
    this._componentName = 'RenderComponent';
    this._visibleEntityIds = [];
  },
  addCamera: function(camera){
    this._camera = camera;
  },
  addMap: function(map){
    this._map = map;
  },
  update: function(deltaTime, action, messages){
    for(layer in this._layers)
    {
      this._layers[layer].clear();
    }
   
    if(this._visibleEntityIds.length == 0 || action != null)
    {
      entitiesWithRenderComponent = this._entityManager.getEntitiesForComponent(this._componentName);
      if (entitiesWithRenderComponent == 'undefined') return;
      entityIds = Object.keys(entitiesWithRenderComponent);

      this._visibleEntityIds.length = 0;

      // determine what elements are visible and only render those
      // we need to do this first before we sort
      for(var id = 0; id < entityIds.length; id++)
      {
        entityId            = entityIds[id];
        positionComponent   = this._entityManager.getComponentForEntity('PositionComponent', entityId);
        renderComponent     = this._entityManager.getComponentForEntity('RenderComponent', entityId);
        sprite = renderComponent.sprite;
        if(this._camera.isWithinBounds(positionComponent, sprite))
        {
          this._visibleEntityIds.push(entityId);
        }
      }

      // painter's algorithm
      // ensure we render in order of depth
      // sprites higher on the screen (lower y) are deeper for 2D
      __entityManager = this._entityManager;
      this._visibleEntityIds.sort(function(firstId, secondId){
        firstPositionComponent    = __entityManager.getComponentForEntity('PositionComponent', firstId);
        secondPositionComponent   = __entityManager.getComponentForEntity('PositionComponent', secondId);
        return firstPositionComponent.y - secondPositionComponent.y;
      });
    }

    for(var index = 0; index < this._visibleEntityIds.length; index++)
    {
      entityId            = this._visibleEntityIds[index];
      positionComponent   = this._entityManager.getComponentForEntity('PositionComponent', entityId);
      renderComponent     = this._entityManager.getComponentForEntity('RenderComponent', entityId);
      sprite = renderComponent.sprite;

      color  = renderComponent.color;

      if(color != null && renderComponent.layer != null)
      {
        renderComponent.layer.context.fillStyle = color.rgb();
      }
      
      if(positionComponent != null && sprite != null){

        relativeX = positionComponent.x - this._camera.leftEdge();
        relativeY = positionComponent.y - this._camera.topEdge();

        if(sprite.image){
          sprite.nextFrame(deltaTime);
          renderComponent.layer.context.drawImage(
            sprite.image, 
            sprite.frameX, 
            sprite.frameY, 
            sprite.frameWidth, 
            sprite.frameHeight, 
            relativeX,
            relativeY,
            sprite.width, 
            sprite.height
            );
        } else {
          renderComponent.layer.context.fillRect(relativeX, relativeY, sprite.width, sprite.height);
        } 
      }
    }
  }
});