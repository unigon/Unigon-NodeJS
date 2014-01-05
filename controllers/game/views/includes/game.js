var player;
var gameConfiguration = {
  keyUp: 87,
  keyDown: 83,
  keyLeft: 65,
  keyRight: 68
};

$(document).keydown(function(e){
  if (e.keyCode == gameConfiguration.keyUp) { 
    player.moveUp();
  }
  if (e.keyCode == gameConfiguration.keyDown) { 
    player.moveDown();
  }
  if (e.keyCode == gameConfiguration.keyLeft) { 
    player.moveLeft();
  }
  if (e.keyCode == gameConfiguration.keyRight) { 
    player.moveRight();
  }
});

var Position = Class.extend({
  init: function(positionX, positionY, positionZ){
    this.x = positionX;
    this.y = positionY;
    this.z = positionZ;
  }
});

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

var Player = Sprite.extend({
  init: function(canvasContext, positionX, positionY){
    position = new Position(positionX, positionY, 0);
    width = 15;
    height = 15;
    fillStyle = '#FF0000';
    spriteImage = null;
    this._super( canvasContext, position, width, height, fillStyle, spriteImage );
  },
  draw: function(){
    // Call the inherited version of dance()
    return this._super();
  },
});



$(document).ready( function(){
  var game = $('.game');
  if(game){
    var canvas = game[0];

    canvas.setAttribute('width', '400px');
    canvas.setAttribute('height', '400px');

    var context = canvas.getContext("2d");
    
    player = new Player(context, 200, 200 );
    player.draw();
  }
});
