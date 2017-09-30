// @flow
export default function fillStorage(creep: Creep) {
  if (creep.room.storage === undefined) {
    return false;
  }

  let status = creep.transfer(creep.room.storage, RESOURCE_ENERGY);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.storage);
  }

  return true;
}
