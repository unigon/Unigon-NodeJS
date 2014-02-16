var Messages = Class.extend({
  init: function(){
    this._messages = {};
  },
  add: function(target, aMessage){
    if(!this._messages[target]){
      this._messages[target] = [];
    }
    this._messages[target].push(aMessage);
  },
  clear: function(target){
    if(this._messages[target]){
      this._messages[target].length = 0;
    }
  },
  clearAll: function(){
    for(target in this._messages){
      this.clear(target);
    }
  },
  update: function(){
    for (target in this._messages){
      html = '';
      for (id in this._messages[target]){
        html += this._messages[target][id];
        html += '<br />';
      }
      $('#' + target).prepend(html);
    }
    this.clearAll();
  },
});