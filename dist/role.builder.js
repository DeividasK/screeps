const actions = require('actions');

var builder = {
	run: function(creep) {
		if(creep.memory.canWork && creep.carry.energy === 0) {
			creep.memory.canWork = false;
	  }

	  if(!creep.memory.canWork && creep.carry.energy === creep.carryCapacity) {
		  creep.memory.canWork = true;
	  }

	  if(creep.memory.canWork && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
			return creep.moveTo(creep.room.controller);
		}

    return actions.withdrawEnergy(creep);
  }
};

module.exports = builder;
