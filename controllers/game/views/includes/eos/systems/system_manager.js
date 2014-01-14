var SystemManager = Class.extend({
  init: function(){
    startTime = new Date().getTime();
    console.log(startTime);
    this._startTime = startTime;
    this._lastTime  = startTime;
    this._systems   = [];
    this._logged    = 0;
    this._actionKey = null;
  },
  start: function(){
    this.update();
  },
  addSystem: function(aSystem){
    this._systems.push(aSystem);
  },
  setActionKey: function(aKey){
    this._actionKey = aKey;
  },
  currentTime: function(){
    return new Date().getTime();
  },
  update: function(){
    currentTime    = this.currentTime();
    deltaTime      = currentTime - this._lastTime;
    this._lastTime = currentTime;

  	for(system in this._systems)
    {
      this._systems[system].update(deltaTime, this._actionKey);
    }

    this._actionKey = null;

    var _uniSystemManager = this;
    window.requestAnimFrame(function(){_uniSystemManager.update();});
  }
});

window.requestAnimFrame = (
  function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();