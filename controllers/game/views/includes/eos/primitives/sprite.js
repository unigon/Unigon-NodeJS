var Sprite = Class.extend({
  init: function(position, width, height, movement, color, spriteImage){
    this.position = position;
    this.lastRedrawPosition = new Position( position.x, position.y, position.z );
    this.spriteImage = spriteImage;
    this.color = color;
    this.height = height;
    this.width = width;
    this.movement = movement;
    this.initials = { color: color, width: width, height: height, movement: movement };
  },
  layer: function(layer){
    this.layer = layer;
  },
  draw: function(){
    if(layer){
      this.layer.context.fillStyle=this.color.rgb();
      this.layer.context.fillRect(this.position.x, this.position.y, this.width, this.height);
      this.lastRedrawPosition = this.position.copy();
    }
  },
  moveUp: function(){
    this.position.y -= this.movement.speed;
  },
  moveDown: function(){
    this.position.y += this.movement.speed;
  },
  moveLeft: function(){
    this.position.x -= this.movement.speed;
  },
  moveRight: function(){
    this.position.x += this.movement.speed;
  },
  center: function(){
    this.position.reinit();
  },
  action: function(actionType){
    // intentionally empty
  },
  update: function(){
    // intentionally do nothing
  }
});
