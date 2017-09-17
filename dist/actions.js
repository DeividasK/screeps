const spawn1 = Game.spawns['Spawn1'];

module.exports = {
  moveToSpawn: (creep) => {
    return creep.moveTo(spawn1);
  },
  withdrawEnergy: (creep) => {
    const withdrawalStatus = creep.withdraw(spawn1, RESOURCE_ENERGY);

    switch(withdrawalStatus) {
      case ERR_NOT_IN_RANGE:
        return this.moveToSpawn(creep);
    }
  }
};
