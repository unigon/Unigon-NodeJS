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
  },
  animate: function(){
    this.clear();
    for(var sprite in this.sprites){
      this.sprites[sprite].update();
    }    
    this.redraw();
    // this likely will not scale to two+ layers
    _layer = this;
    window.requestAnimFrame(function() {
      _layer.animate();
    });
  }
});

window.requestAnimFrame = (
  function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();