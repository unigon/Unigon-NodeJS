var EntityManager = Class.extend({
  init: function(){
  	this._entities     = [];
    this._components   = {};
    this._lowestUnassignedEntityId = 1;
  },
  generateNewEntityId: function(){
  	// BUG - we ideally check for the largest possible integer
  	// value
    return this._lowestUnassignedEntityId++;
  },
  createEntity: function(){
  	entityId = this.generateNewEntityId();
  	entity = new Entity(entityId);
  	this._entities.push(entityId);
  	return entity;
  },
  addComponentToEntity: function(aComponent, aEntity){
    componentName = aComponent.name();
    if(this._components[componentName])
    {
    	// intentionally do nothing
    }
    else
    {
    	this._components[componentName] = {};

    }
    this._components[componentName][aEntity.entityId()] = aComponent;
  },
  getComponentForEntity: function(aComponentName, aEntity){
  	this._components[aComponentName][aEntity.entityId()];
  },
  removeEntity: function(aEntity){
    for(componentName in this._components)
    {
    	entityId = aEntity.entityId();
    	if(this._components[componentName][entityId])
    	{
     	  delete this._components[componentName][entityId];
    	}
    }
  },
  getEntitiesForComponent: function(aComponentName)
  {
  	entities = this._components[aComponentName];
  	if(!entities)
  	{
  		entities = {};
  	}
  	return entities;
  }
});