var HealthComponent = Component.extend({
  init: function(aCurrentHitPoints, aMaximumHitPoints){
  	this._super('HealthComponent');
  	this._currentHitPoints = aCurrentHitPoints;
  	this._maximumHitPoints = aMaximumHitPoints;
    this._alive = true;
  },
  isAlive: function(){
    return this._alive;
  },
  currentHitPoints: function(){
  	return this._currentHitPoints;
  },
  maximumHitPoints: function(){
  	return this._maximumHitPoints;
  },
  isDead: function(){
    return !this.isAlive();
  },
  die: function(){
    this._alive = false;
  }
});