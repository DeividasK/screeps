// @flow
const actions = require('actions');

var builder = {
	run: function(creep: Creep) {
		if(creep.memory.canWork && creep.carry.energy === 0) {
			creep.memory.canWork = false;
	  }

	  if(!creep.memory.canWork && creep.carry.energy === creep.carryCapacity) {
		  creep.memory.canWork = true;
	  }

		// Try to repair first
		const repairSites = creep.room.find(FIND_MY_STRUCTURES, { filter: (structure) => structure.hits < structure.hitsMax / 10 }  );
		if(creep.memory.canWork && creep.build(repairSites[0]) == ERR_NOT_IN_RANGE) {
			return creep.moveTo(repairSites[0]);
		}

		// Look for construction sites
    const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);
	  if(creep.memory.canWork && creep.build(constructionSites[0]) == ERR_NOT_IN_RANGE) {
			return creep.moveTo(constructionSites[0]);
		}

    return actions.withdrawEnergy(creep);
  }
};

module.exports = builder;
