var roleUpgrader = {
	/** @param {Creep} creep **/
	run: function(creep) {
		if(creep.memory.upgrading && creep.carry.energy == 0) {
			creep.memory.upgrading = false;
			creep.say('🔄 Withdraw');
	  }

	  if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
		  creep.memory.upgrading = true;
		  creep.say('⚡ Upgrade');
	  }

	  if(creep.memory.upgrading) {
			if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
				creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
			}
		}
		else {
			var mySpawns = creep.room.find(FIND_MY_SPAWNS);

			if(creep.withdraw(mySpawns[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(mySpawns[0], {visualizePathStyle: {stroke: '#ffaa00'}});
			}
		}
  }
};

module.exports = roleUpgrader;