var Player = Sprite.extend({
  init: function(positionX, positionY, width, height, stepSize, fillStyle, spriteImage){
    position = new Position(positionX, positionY, 0);
    this._super( position, width, height, stepSize, fillStyle, spriteImage );
  },
  draw: function(){
    // Call the inherited version of dance()
    return this._super();
  },
  action: function(actionType){
    this._super(actionType);
    switch(actionType){
      case 'primary':
        alert(actionType);
        
        break;
      default:
        break;
    }
  },
});
