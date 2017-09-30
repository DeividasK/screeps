// @flow
export default function upgradeController(creep: Creep) {
  let status = creep.upgradeController(creep.room.controller);

  if (status === ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.controller);
  }

  return true;
}
