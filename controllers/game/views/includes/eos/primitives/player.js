var Player = Sprite.extend({
  init: function(position, width, height, movement, color, spriteImage){
    position = position;
    this._super( position, width, height, movement, color, spriteImage );
    this._initialColor = color.copy();
  },
  draw: function(){
    // Call the inherited version of dance()
    return this._super();
  },
  action: function(actionType){
    this._super(actionType);
    switch(actionType){
      case 'primary':
        this._colorSteps          = 30; // Number of colors to display.
        this._increment           = 0;
        this._startColor          = new Color(255,0,0); // Color 1

        colorStepSize = this._colorSteps - 1;
        deltaRed      = (this._initialColor.red   - this._startColor.red)   / colorStepSize;
        deltaGreen    = (this._initialColor.green - this._startColor.green) / colorStepSize;
        deltaBlue     = (this._initialColor.blue  - this._startColor.blue)  / colorStepSize;
        this._deltaColor   = new Color(deltaRed, deltaGreen, deltaBlue);
        
        this._primary();
        break;
      default:
        break;
    }
  },
  _primary: function(){
    red          = Math.round(this._startColor.red   + this._deltaColor.red   * this._increment);
    green        = Math.round(this._startColor.green + this._deltaColor.green * this._increment);
    blue         = Math.round(this._startColor.blue  + this._deltaColor.blue  * this._increment);
    this.color   = new Color(red, green, blue);
    this._increment++;
    _self = this;
    if(this._increment <= this._colorSteps){
      window.requestAnimFrame(function() {
        _self._primary();
      });
    } else {
      this.color = this._initialColor;
    }
  }
});
