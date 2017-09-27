// @flow
import actions from 'actions';

export function run(creep: Creep) {
  if (!creep.memory.hasEnergy) {
    return actions.harvestEnergy(creep);
  }

  return actions.storeEnergy(creep);
}
