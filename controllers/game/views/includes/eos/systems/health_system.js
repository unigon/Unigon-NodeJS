var HealthSystem = System.extend({
  init: function(aEntityManager, aLayers){
  	this._super(aEntityManager, aLayers);
    this._componentName = 'HealthComponent';
  },
  update: function(deltaTime, action, messages){
  	entitiesWithHealth = this._entityManager.getEntitiesForComponent(this._componentName);

  	for(entity in entitiesWithHealth)
  	{
      healthComponent = entitiesWithHealth[entity];
      if(healthComponent != null && healthComponent != 'undefined'){
        if(healthComponent.isDead()){
          messages.add('console','Entity [' + entity + '] is dead.');
          return;
        }
        if(healthComponent.maximumHitPoints() == 0){
          messages.add('console','Entity [' + entity + '] is dead.');
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