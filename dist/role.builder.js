const actions = require('actions');

var builder = {
	run: function(creep) {
		if(creep.memory.canWork && creep.carry.energy === 0) {
			creep.memory.canWork = false;
	  }

	  if(!creep.memory.canWork && creep.carry.energy === creep.carryCapacity) {
		  creep.memory.canWork = true;
	  }

    const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);

	  if(creep.memory.canWork && creep.build(constructionSites[0]) == ERR_NOT_IN_RANGE) {
			return creep.moveTo(constructionSites[0]);
		}

    return actions.withdrawEnergy(creep);
  }
};

module.exports = builder;
