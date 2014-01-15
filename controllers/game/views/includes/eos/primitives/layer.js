var Layer = Class.extend({
  init: function(canvas, canvasContext, width, height){
    this.canvas = canvas;
    this.context = canvasContext;
    this.canvas.setAttribute('width',  width  + 'px');
    this.canvas.setAttribute('height', height + 'px');
  },
  clear: function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  width: function(){
  	return this.canvas.width;
  },
  height: function(){
  	return this.canvas.height;
  }
});