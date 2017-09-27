// @flow
import actions from '../actions';
import updateWorkStatus from '../utils/updateWorkStatus';

function run(creep: Creep) {
  let status;
  updateWorkStatus(creep);

  if (!creep.memory.hasEnergy) {
    return actions.harvestEnergy(creep);
  }

  status = creep.upgradeController(creep.room.controller);

  if (status === ERR_NOT_IN_RANGE) {
    return creep.moveTo(creep.room.controller);
  }
}

export default { run };
