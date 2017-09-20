// @flow
import actions from 'actions';
import updateWorkStatus from '../utils/updateWorkStatus';

export default {
  run: function(creep: Creep) {
    if (creep.ticksToLive < 50) {
        return actions.moveToSpawn(creep);
    }

    updateWorkStatus(creep);

    if(!creep.memory.hasEnergy) {
       return actions.harvestEnergy(creep);
    }

    return actions.storeEnergy(creep);
  }
};
