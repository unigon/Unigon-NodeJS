var Sprite = Class.extend({
  init: function(canvasContext, position, width, height, fillStyle, spriteImage){
    this.canvasContext = canvasContext;
    this.position = position;
    this.spriteImage = spriteImage;
    this.fillStyle = fillStyle;
    this.height = height;
    this.width = width;
  },
  draw: function(){
    this.canvasContext.fillStyle=this.fillStyle;
    this.canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height);
  },
  moveUp: function(){
    this.position.y++;
    this.draw();
  },
  moveDown: function(){
    this.position.y--;
    this.draw();
  },
  moveLeft: function(){
    this.position.x--;
    this.draw();
  },
  moveRight: function(){
    this.position.x++;
    this.draw();
  },
});