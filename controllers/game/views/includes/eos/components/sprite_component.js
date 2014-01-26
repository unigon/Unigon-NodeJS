var SpriteComponent = Component.extend({
  init: function(width, height, imageUrl){
    this._super('SpriteComponent');
    this.width     = width;
    this.height    = height;
    this.imageUrl  = imageUrl;
    this.isReady   = false;
    self = this;
    if(imageUrl){
      this.image   = new Image();
      this.image.onload = function() { self.isReady = true };
      this.image.src = imageUrl;
    }
  },
  print: function()
  {
    if (UG_DEBUG) console.log('width=' + this.width + ', height=' + this.height + ', imageUrl=[' + this.imageUrl + ']');
  }
});
