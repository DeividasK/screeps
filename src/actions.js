// @flow
const actions = {
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
