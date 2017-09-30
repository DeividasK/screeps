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

  return Actions.build(creep);
}
