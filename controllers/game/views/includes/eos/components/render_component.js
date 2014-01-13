var RenderComponent = Component.extend({
  init: function(aSprite){
  	this._super('RenderComponent');
    this._sprite = aSprite;
  },
  sprite: function(){
  	return this._sprite;
  }
});