var HealthSystem = System.extend({
  init: function(aEntityManager, aLayers){
  	this._super(aEntityManager, aLayers);
    this._componentName = 'HealthComponent';
  },
  update: function(deltaTime, action){
  	entitiesWithHealth = this._entityManager.getEntitiesForComponent(this._componentName);

  	for(entity in entitiesWithHealth)
  	{
      healthComponent = entitiesWithHealth[entity];
      if(healthComponent != null && healthComponent != 'undefined'){
        if(healthComponent.isDead()){
          if (UG_DEBUG) console.log('Entity [' + entity + '] is dead.');
          return;
        }
        if(healthComponent.maximumHitPoints() == 0){
          if (UG_DEBUG) console.log('Entity [' + entity + '] is dead.');
          return;
        }
        else if(healthComponent.currentHitPoints() <= 0){
          healthComponent.die();
          // add render logic
        }  
      }
  	}

  }
});