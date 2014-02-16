var SystemManager = Class.extend({
  init: function(){
    startTime = new Date().getTime();
    console.log(startTime);
    this._startTime = startTime;
    this._lastTime  = startTime;
    this._systems   = [];
    this._logged    = 0;
    this._actionKey = null;
    this._messages  = new Messages();
    this._camera    = null;
  },
  start: function(){
    this.update();
  },
  addSystem: function(systemInfo){
    if(!this.getSystem(systemInfo.name)){
      this._systems.push(systemInfo);
    } else {
      console.error('UG_ERROR - System by name [' + systemInfo.name + '] already exists.');
    }
  },
  setActionKey: function(aKey){
    this._actionKey = aKey;
  },
  currentTime: function(){
    return new Date().getTime();
  },
  getSystem: function(name){
    for(id in this._systems)
    {
      if(this._systems[id].name == name){
        return this._systems[id].system;
      }
    }
    console.warn('UG_WARN - Unable to find a system by name [' + name + ']'); 
  },
  update: function(){
    currentTime    = this.currentTime();
    deltaTime      = currentTime - this._lastTime;
    deltaTime      = deltaTime / 1000;
    this._lastTime = currentTime;

  	for(id in this._systems)
    {
      this._systems[id].system.update(deltaTime, this._actionKey, this._messages);
      this._messages.update();
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