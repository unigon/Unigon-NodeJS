var Player = Sprite.extend({
  init: function(positionX, positionY){
    position = new Position(positionX, positionY, 0);
    width = 15;
    height = 15;
    stepSize = 15;
    fillStyle = '#FF0000';
    spriteImage = null;
    this._super( position, width, height, stepSize, fillStyle, spriteImage );
  },
  draw: function(){
    // Call the inherited version of dance()
    return this._super();
  },
});
