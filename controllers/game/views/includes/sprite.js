var Sprite = Class.extend({
  init: function(position, width, height, stepSize, fillStyle, spriteImage){
    this.position = position;
    this.spriteImage = spriteImage;
    this.fillStyle = fillStyle;
    this.height = height;
    this.width = width;
    this.stepSize = stepSize;
  },
  layer: function(layer){
    this.layer = layer;
  },
  draw: function(){
    if(layer){
      this.layer.context.fillStyle=this.fillStyle;
      this.layer.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  },
  moveUp: function(){
    this.position.y -= this.stepSize;
  },
  moveDown: function(){
    this.position.y += this.stepSize;
  },
  moveLeft: function(){
    this.position.x -= this.stepSize;
  },
  moveRight: function(){
    this.position.x += this.stepSize;
  },
});