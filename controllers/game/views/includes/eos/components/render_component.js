var RenderComponent = Component.extend({
  init: function(aSprite, aColor){
  	this._super('RenderComponent');
    this.sprite = aSprite;
    this.color  = aColor;
  }
});