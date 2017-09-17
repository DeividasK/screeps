const actions = require('actions');

function moveToEnergySource(creep) {
    const sources = creep.room.find(FIND_SOURCES, {
        filter: (source) => source.energy > 0
    });
    if (sources.length === 0) return;

    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
}

function canStoreEnergy(structure) {
    return structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN;
}

function hasCapacity(structure) {
    return structure.energy < structure.energyCapacity;
}

var roleHarvester = {
  /** @param {Creep} creep **/
  run: function(creep) {
    if (creep.ticksToLive < 300) {
        return actions.moveToSpawn(creep);
    }

    if(creep.carry.energy < creep.carryCapacity) {
       return moveToEnergySource(creep);
    }

    const targetsWithCapacity = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => canStoreEnergy(structure) && hasCapacity(structure)
    });

    if(targetsWithCapacity.length > 0 && creep.transfer(targetsWithCapacity[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        return creep.moveTo(targetsWithCapacity[0]);
    }

    return actions.moveToSpawn(creep);
  }
};

module.exports = roleHarvester;
