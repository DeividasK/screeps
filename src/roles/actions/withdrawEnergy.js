// @flow
export default function withdrawEnergy(creep: Creep) {
  if (creep.memory.hasEnergy) {
    return false;
  }

  if (creep.room.storage === undefined) {
    return false;
  }

  if (creep.room.storage.store[RESOURCE_ENERGY] < creep.carryCapacity) {
    return false;
  }

  let status = creep.withdraw(creep.room.storage, RESOURCE_ENERGY);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.storage);
  }

  return true;
}
