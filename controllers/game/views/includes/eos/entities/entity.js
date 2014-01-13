var Entity = Class.extend({
  init: function(aEntityId){
    this._entityId   = aEntityId;
  },
  entityId: function(){
    return this._entityId;
  }
});