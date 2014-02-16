var Camera = Class.extend({
  init: function(cameraConfig){
    this._x      = cameraConfig.x;
    this._y      = cameraConfig.y;
    this._width  = cameraConfig.width;
    this._height = cameraConfig.height;
    this._padding = {},
    this._padding.top = cameraConfig.padding.top;
    this._padding.bottom = cameraConfig.padding.bottom;
    this._padding.left = cameraConfig.padding.left;
    this._padding.right = cameraConfig.padding.right;
    this._bounds = {};
    this._setBounds();
  },
  _setBounds: function(){
    this._bounds.upperLeft   = {x: this._x, y: this._y};
    this._bounds.upperRight  = {x: this._x + this._width, y: this._y};
    this._bounds.bottomLeft  = {x: this._x, y: this._y + this._height};
    this._bounds.bottomRight = {x: this._x + this._width, y: this._y + this._height};
  },
  paddedLeftEdge: function(){
    return this.leftEdge() + this._padding.left;
  },
  paddedRightEdge: function(){
    return this.rightEdge() - this._padding.right;
  },
  paddedTopEdge: function(){
    return this.topEdge() + this._padding.top;
  },
  paddedBottomEdge: function(){
    return this.bottomEdge() - this._padding.bottom;
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
  center: function(positionComponent){
    this._x = positionComponent.x - this._width / 2;
    this._y = positionComponent.y - this._height / 2;
    this._setBounds();
  },
  copy: function(){
    camera = new CameraComponent(this._x, this._y, this._width, this._height);
    return camera;
  }
});