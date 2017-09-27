// @flow
import actions from '../actions';

export function run(creep: Creep) {
  let status;

  if (!creep.memory.hasEnergy) {
    return actions.harvestEnergy(creep);
  }

  status = creep.upgradeController(creep.room.controller);

  if (status === ERR_NOT_IN_RANGE) {
    return creep.moveTo(creep.room.controller);
  }
}
