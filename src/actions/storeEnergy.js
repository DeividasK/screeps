// @flow
import * as structure from 'utils/structure';
import moveToSpawn from './moveToSpawn';

export default function storeEnergy(creep: Creep) {
  const targetsWithCapacity = creep.room.find(FIND_STRUCTURES, {
      filter: (target) => structure.canStoreEnergy(target) && structure.hasCapacity(target)
  });

  if (targetsWithCapacity.length === 0) {
    return moveToSpawn(creep);
  }

  if(creep.transfer(targetsWithCapacity[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    return creep.moveTo(targetsWithCapacity[0]);
  }
}
