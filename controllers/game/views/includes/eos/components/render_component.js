var RenderComponent = Component.extend({
  init: function(aLayer, aSprite, aColor){
  	this._super('RenderComponent');
  	this.layer  = aLayer;
    this.sprite = aSprite;
    this.color  = aColor;
  }
});