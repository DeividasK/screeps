// @flow
const actions = require('actions');

var builder = {
	run: function(creep: Creep) {
		let status;

		if(creep.memory.canWork && creep.carry.energy === 0) {
			creep.memory.canWork = false;
	  }

	  if(!creep.memory.canWork && creep.carry.energy === creep.carryCapacity) {
		  creep.memory.canWork = true;
	  }

		if (!creep.memory.canWork) {
			return actions.withdrawEnergy(creep);
		}

		// Try to repair first
		const repairSites = creep.room.find(FIND_MY_STRUCTURES, { filter: (structure) => structure.hits < structure.hitsMax / 3 }  );

		if (repairSites.length > 0) {
			status = creep.repair(repairSites[0]);

			if (status === ERR_NOT_IN_RANGE) {
				return creep.moveTo(repairSites[0]);
			}
		}

		// Look for construction sites
    const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);

		if(constructionSites.length > 0) {
			status = creep.build(constructionSites[0]);

			if (status === ERR_NOT_IN_RANGE) {
				return creep.moveTo(constructionSites[0]);
			}
		}
  }
};

module.exports = builder;
