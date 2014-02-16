var Camera = Class.extend({
  init: function(cameraConfig){
    this._x      = cameraConfig.x;
    this._y      = cameraConfig.y;
    this._width  = cameraConfig.width;
    this._height = cameraConfig.height;
    this._bounds = {};
    this._bounds.upperLeft   = {x: cameraConfig.x, y: cameraConfig.y};
    this._bounds.upperRight  = {x: cameraConfig.x + cameraConfig.width, y: cameraConfig.y};
    this._bounds.bottomLeft  = {x: cameraConfig.x, y: cameraConfig.y + cameraConfig.height};
    this._bounds.bottomRight = {x: cameraConfig.x + cameraConfig.width, y: cameraConfig.y + cameraConfig.height};
  },
  leftEdge: function(){
    return this._bounds.upperLeft.x;
  },
  rightEdge: function(){
    return this._bounds.upperRight.x;
  },
  topEdge: function(){
    return this._bounds.upperLeft.y;
  },
  bottomEdge: function(){
    return this._bounds.bottomRight.y;
  },
  width: function(){
    return this._width;
  },
  height: function(){
    return this._height;
  },
  move: function(horizontal, vertical){
    this._bounds.upperLeft.x   += horizontal;
    this._bounds.upperLeft.y   += vertical;
    this._bounds.upperRight.x  += horizontal;
    this._bounds.upperRight.y  += vertical;
    this._bounds.bottomLeft.x  += horizontal;
    this._bounds.bottomLeft.y  += vertical;
    this._bounds.bottomRight.x += horizontal;
    this._bounds.bottomRight.y += vertical;
  },
  moveLeft: function(){
    this._move(-1,0);
  },
  moveRight: function(){
    this._move(1,0);
  },
  moveUp: function(){
    this._move(0,-1);
  },
  moveDown: function(){
    this._move(0,1);
  },
  reinit: function(){

  },
  copy: function(){
    camera = new CameraComponent(this._x, this._y, this._width, this._height);
    return camera;
  }
});