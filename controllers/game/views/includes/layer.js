var Layer = Class.extend({
  init: function(canvas, canvasContext){
    this.canvas = canvas;
    this.context = canvasContext;

    this.sprites = [];
    this.canvas.setAttribute('width',  gameConfiguration.canvas.width  + 'px');
    this.canvas.setAttribute('height', gameConfiguration.canvas.height + 'px');
  },
  add: function(sprite)
  {
    sprite.layer(this);
    sprite.draw();
    this.sprites.push(sprite);
  },
  redraw: function(){
    this.clear();
    for(var sprite in this.sprites){
      this.sprites[sprite].draw();
    }
  },
  clear: function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
});