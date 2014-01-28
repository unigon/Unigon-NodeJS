var SpriteComponent = Component.extend({
  init: function(width, height, imageUrl, frames){
    this._super('SpriteComponent');
    this.width     = width;
    this.height    = height;
    this.imageUrl  = imageUrl;
    this.isReady   = false;
    if(frames){
      this.sequence   = frames.sequence;
      this.frameWidth  = frames.width;
      this.frameHeight = frames.height;
      this.frameSpeed  = frames.speed;
    } else {
      this.sequence = [0];
      this.frameWidth = width;
      this.frameHeight = height;
      this.ticksPerFrame = 1;
    }
    this.frameElapsed = 0;
    this.frameX    = 0;
    this.frameY    = 0;
    this.frameIndex = 0;
    self = this;
    if(imageUrl){
      this.image   = new Image();
      this.image.onload = function() { self.isReady = true };
      this.image.src = imageUrl;
    }
  },
  nextFrame: function(deltaTime){
    frame           = this.sequence[this.frameIndex];
    this.frameX     = this.frameWidth * frame;
    this.frameElapsed += deltaTime;
    if(this.frameElapsed >= this.frameSpeed){
      this.frameElapsed = this.frameSpeed - this.frameElapsed;
      this.frameIndex++;
    }
    this.frameIndex = this.frameIndex >= this.sequence.length ? 0 : this.frameIndex;
  },
  print: function()
  {
    if (UG_DEBUG) console.log('width=' + this.width + ', height=' + this.height + ', imageUrl=[' + this.imageUrl + ']');
  }
});
