var Position = Class.extend({
  init: function(positionX, positionY, positionZ){
    this.initialX = positionX;
    this.initialY = positionY;
    this.initialZ = positionZ;
    this.x = positionX;
    this.y = positionY;
    this.z = positionZ;
  },
  reinit: function(){
    this.x = this.initialX;
    this.y = this.initialY;
    this.z = this.initialZ;
  },
  copy: function(){
    position = new Position(this.x, this.y, this.z);
    return position;
  }
});