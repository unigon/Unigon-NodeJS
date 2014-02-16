var SystemManager = Class.extend({
  init: function(messages){
    startTime = new Date().getTime();
    console.log(startTime);
    this._startTime = startTime;
    this._lastTime  = startTime;
    this._systems   = [];
    this._logged    = 0;
    this._actionKey = null;
    this._messages  = null;
    this._camera    = null;
    this._frames    = 0;
    this._lastFrameTime = startTime;
  },
  start: function(){
    this.update();
  },
  addMessages: function(messages)
  {
    this._messages = messages;
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
    this._frames++;
    this._lastTime = currentTime;

  	for(var index = 0; index < this._systems.length; index++)
    {
      this._systems[index].system.update(deltaTime, this._actionKey, this._messages);
    }

    framesInLapsedTime = currentTime - this._lastFrameTime;
    if(framesInLapsedTime >=1000)
    {
      framesPerSecond = 1000*this._frames / framesInLapsedTime;
      this._lastFrameTime = currentTime;
      this._frames = 0;
      this._messages.add('fps', Math.floor(framesPerSecond)+ ' FPS');
    }

    this._actionKey = null;
    this._messages.update();

    var _uniSystemManager = this;
    window.requestAnimFrame(function(){_uniSystemManager.update();});
  }
});

window.requestAnimFrame = (
  function(callback) {
    return window.webkitRequestAnimationFrame || window.requestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();