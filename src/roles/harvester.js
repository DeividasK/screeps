// @flow
import actions from 'actions';
import Actions from './actions';

export function run(creep: Creep) {
  if (!creep.memory.hasEnergy) {
    return actions.harvestEnergy(creep);
  }

  if (creep.room.energyAvailable < creep.room.energyCapacityAvailable) {
    return actions.storeEnergy(creep);
  }

  let working = Actions.build(creep);

  if (working) {
    return;
  }

  Actions.fillStorage(creep);
}
