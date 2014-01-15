var RenderSystem = System.extend({
  init: function(aEntityManager, aLayers){
    this._super(aEntityManager, null);
    this._componentName = 'RenderComponent';
    this.layers = aLayers;
  },
  update: function(deltaTime, action){
    for(layer in this.layers)
    {
      this.layers[layer].clear();
    }
   
    entitiesWithController = this._entityManager.getEntitiesForComponent(this._componentName);
    for(entityId in entitiesWithController)
    {
      positionComponent   = this._entityManager.getComponentForEntity('PositionComponent', entityId);
      renderComponent     = this._entityManager.getComponentForEntity('RenderComponent', entityId);

      color  = renderComponent.color;
      sprite = renderComponent.sprite;

      if(color != null && renderComponent.layer != null)
      {
        renderComponent.layer.context.fillStyle = color.rgb();
        // if (UG_DEBUG) console.log('Set Entity [' + entityId + '] color to [' + color.rgb() + ']');
      }
      
      if(positionComponent != null && sprite != null){
        renderComponent.layer.context.fillRect(positionComponent.x, positionComponent.y, sprite.width, sprite.height);
      //   if (UG_DEBUG) console.log('Set Entity [' + entityId + '] position to [' + positionComponent.print() + ']');
      //   if (UG_DEBUG) console.log('Set Entity [' + entityId + '] sprite to [' + sprite.print() + ']');
      //   if (UG_DEBUG) console.log('Rendered Entity [' + entityId + '] at dt [' + deltaTime + ']');
      }
      
    }

  },
});