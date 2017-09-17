const spawn1 = Game.spawns['Spawn1'];

const actions = {
  moveToSpawn: function moveToSpawn(creep) {
    return creep.moveTo(spawn1);
  },
  withdrawEnergy: function withdrawEnergy(creep) {
    const withdrawalStatus = creep.withdraw(spawn1, RESOURCE_ENERGY);

    switch(withdrawalStatus) {
      case ERR_NOT_IN_RANGE:
        return actions.moveToSpawn(creep);
    }
  }
};

module.exports = actions;
