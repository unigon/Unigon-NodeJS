var System = Class.extend({
  init: function(aEntityManager, aLayers){
    this._entityManager  = aEntityManager;
    this._layers          = aLayers;
  },
  update: function(deltaTime){
  	// intentionally do nothing
  }
});