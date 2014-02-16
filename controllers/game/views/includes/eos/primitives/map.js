var Map = Class.extend({
  init: function(mapConfig){
    this._width = mapConfig.width;
    this._height = mapConfig.height;
    this._bounds = {};
    this._bounds.upperLeft   = {x: 0, y: 0};
    this._bounds.upperRight  = {x: mapConfig.width, y: 0};
    this._bounds.bottomLeft  = {x: 0, y: mapConfig.height};
    this._bounds.bottomRight = {x: mapConfig.width, y: mapConfig.height};
  },
  width: function(){
    return this._width;
  },
  height: function(){
    return this._height;
  }
});