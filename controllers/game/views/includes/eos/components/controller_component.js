var ControllerComponent = Component.extend({
  init: function(aUpKey, aRightKey, aDownKey, aLeftKey, aPrimaryActionKey, aSecondaryActionKey){
    this._super('ControllerComponent');
    this._upKey = aUpKey;
    this._rightKey = aRightKey;
    this._leftKey = aLeftKey;
    this._downKey = aDownKey;
    this._primaryActionkey = aPrimaryActionKey;
    this._secondaryActionkey = aSecondaryActionKey;
  },
  upKey: function(){
    return this._upKey;
  },
  downKey: function(){
    return this._downKey;
  },
  rightKey: function(){
    return this._rightKey;
  },
  leftKey: function(){
    return this._leftKey;
  },
  primaryActionKey: function(){
    return this._primaryActionkey;
  },
  secondaryActionKey: function(){
    return this._secondaryActionkey;
  }
});