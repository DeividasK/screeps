const actions = require('actions');

const upgrader = {
	/** @param {Creep} creep **/
	run: function(creep) {
		if(creep.memory.upgrading && creep.carry.energy == 0) {
			creep.memory.upgrading = false;
	  }

	  if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
		  creep.memory.upgrading = true;
	  }

	  if(creep.memory.upgrading) {
			if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
				return creep.moveTo(creep.room.controller);
			}
		}

		return actions.withdrawEnergy(creep);
  }
};

module.exports = upgrader;
