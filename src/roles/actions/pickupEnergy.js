// @flow
export default function pickupEnergy(creep: Creep) {
  if (creep.memory.hasEnergy) {
    return false;
  }

  const droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
    filter: (resource) => !!resource && resource.resourceType === RESOURCE_ENERGY
  });

  if (droppedEnergy === null) {
    return false;
  }

  let status = creep.pickup(droppedEnergy);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(droppedEnergy);
  }

  return true;
}
