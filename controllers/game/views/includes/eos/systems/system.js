var System = Class.extend({
  init: function(aEntityManager, aLayers){
    this._entityManager  = aEntityManager;
    this._layers          = aLayers;
  },
  update: function(deltaTime, action){
  	// intentionally do nothing
  }
});