var PositionComponent = Component.extend({
  init: function(positionX, positionY, positionZ){
    this._super('PositionComponent');
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
    position = new PositionComponent(this.x, this.y, this.z);
    return position;
  },
  toString: function()
  {
    return 'x=' + this.x + ', y=' + this.y + ', z=' + this.z;
  },
  print: function()
  {
    console.log(this.toString());
  }
});