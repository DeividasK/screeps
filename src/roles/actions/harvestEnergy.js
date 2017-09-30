// @flow
export default function harvestEnergy(creep: Creep) {
  if (creep.memory.hasEnergy) {
    return false;
  }

  const source = creep.pos.findClosestByPath(FIND_SOURCES, {
    filter: source => source !== undefined && source.energy > 0,
  });

  if (source === null) {
    return false;
  }

  const status = creep.harvest(source);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(source);
  }

  return true;
}
