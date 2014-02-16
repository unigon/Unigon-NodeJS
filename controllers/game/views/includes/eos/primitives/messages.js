var Messages = Class.extend({
  init: function(messagesConf){
    this._targets = { };
    for(target in messagesConf)
    {
      this._addTarget(target, messagesConf[target]);
    }
  },
  _addTarget: function(target, targetConf)
  {
    if(!this._targets[target]){
      this._targets[target] = {};
      this._targets[target].messages = [];      
      this._targets[target].emptyOnUpdate = targetConf.emptyOnUpdate;
    }    
  },
  add: function(target, aMessage){
    if(!this._targets[target]){
      this._targets[target] = [];
    }
    this._targets[target].messages.push(aMessage);
  },
  clear: function(target){
    if(this._targets[target]){
      this._targets[target].messages.length = 0;
    }
  },
  clearAll: function(){
    for(target in this._targets){
      this.clear(target);
    }
  },
  update: function(){
    for (target in this._targets){
      html = '';

      for (id in this._targets[target].messages){
        html += this._targets[target].messages[id];
        html += '<br />';
      }
      if(html.length > 0 && this._targets[target].emptyOnUpdate)
      {
        $('#' + target).html(html);
      }
      else
      {
        $('#' + target).prepend(html);
      }
    }
    this.clearAll();
  },
});