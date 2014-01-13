var Component = Class.extend({
  init: function(aName){
  	this._name = aName;
  },
  name: function(){
  	return this._name;
  }
});