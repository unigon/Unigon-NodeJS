var ColorComponent = Component.extend({
  init: function(red, green, blue){
    this._super('ColorComponent');
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
    color = new ColorComponent(this.red, this.green, this.blue);
    return color;
  }
});