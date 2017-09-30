// @flow
import _ from 'lodash';

export default function transferToStructure(
  creep: Creep,
  structureType: string,
): boolean {
  const target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
    filter: { structureType },
  });

  if (target === null) {
    return false;
  }

  let status = creep.transfer(target, RESOURCE_ENERGY);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(target);
  }

  return true;
}
