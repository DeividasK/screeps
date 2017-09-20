// @flow
import * as structure from 'utils/structure';
import moveToSpawn from './moveToSpawn';

export default function storeEnergy(creep: Creep) {
  const targetWithCapacity = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
      filter: (target) => structure.canStoreEnergy(target) && structure.hasCapacity(target)
  });

  if (targetWithCapacity === null) {
    return moveToSpawn(creep);
  }

  if(creep.transfer(targetWithCapacity, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    return creep.moveTo(targetWithCapacity);
  }
}
