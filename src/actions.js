// @flow
import * as structure from 'utils/structure';

const actions = {
  storeEnergy: function storeEnergy(creep: Creep) {
    const targetsWithCapacity = creep.room.find(FIND_STRUCTURES, {
        filter: (target) => structure.canStoreEnergy(target) && structure.hasCapacity(target)
    });

    if (targetsWithCapacity.length === 0) {
      return actions.moveToSpawn(creep);
    }

    if(creep.transfer(targetsWithCapacity[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      return creep.moveTo(targetsWithCapacity[0]);
    }
  },
  harvestEnergy: function harvestEnergy(creep: Creep) {
      const sources = creep.room.find(FIND_SOURCES, {
          filter: (source) => source.energy > 0
      });

      if (sources.length === 0) return;

      if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0]);
      }
  },
  moveToSpawn: function moveToSpawn(creep: Creep) {
    const spawn1 = Game.spawns['Spawn1'];
    return creep.moveTo(spawn1);
  },
  withdrawEnergy: function withdrawEnergy(creep: Creep) {
    const spawn1 = Game.spawns['Spawn1'];
    const withdrawalStatus = creep.withdraw(spawn1, RESOURCE_ENERGY);

    switch(withdrawalStatus) {
      case ERR_NOT_IN_RANGE:
        return actions.moveToSpawn(creep);
      case ERR_NOT_ENOUGH_RESOURCES:
        return creep.memory.role = 'harvester';
    }
  }
};

module.exports = actions;
