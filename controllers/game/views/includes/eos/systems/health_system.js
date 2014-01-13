var HealthSystem = System.extend({
  init: function(aEntityManager){
  	this._super(aEntityManager);
  },
  update: function(deltaTime){
  	entitiesWithHeath = this._entityManager.getEntitiesForComponent(this._componentName);
  	for(entity in entitiesWithHeath)
  	{
  		healthComponent = entity[this._componentName];
  		if(healthComponent.isDead()){
  			return;
  		}
  		if(healthComponent.maximumHitPoints() == 0){
  			return;
  		}
  		else if(healthComponent.currentHitPoints() <= 0){
  			healthComponent.die();
  			// add render logic
  		}
  	}

  }
});