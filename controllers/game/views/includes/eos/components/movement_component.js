var MovementComponent = Component.extend({
  init: function(speed, acceleration){
    this._super('MovementComponent');
    this.initialSpeed        = speed;
    this.initialAcceleration = acceleration;
    this.speed        = speed;
    this.acceleration = acceleration;
  },
  reinit: function(){
    this.speed        = this.initialSpeed;
    this.acceleration = this.initialAcceleration;
  },
  copy: function(){
    movement = new MovementComponent(this.speed, this.acceleration);
    return movement;
  },
  print: function()
  {
    if (UG_DEBUG) console.log('speed=' + this.speed + ', acceleration=' + this.acceleration);
  }
});