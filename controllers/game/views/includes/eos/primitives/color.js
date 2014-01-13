var Color = Class.extend({
  init: function(red, green, blue){
    this.red   = red;
    this.blue  = blue;
    this.green = green;
  },
  rgb: function(){
    return 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
  },
  array: function(){
    return [this.red, this.green, this.blue];
  },
  copy: function(){
    color = new Color(this.red, this.green, this.blue);
    return color;
  }
});