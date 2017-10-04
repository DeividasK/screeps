// @flow
export default function storageAboveQuarter(creep: Creep): boolean {
  return creep.room.storage.store[RESOURCE_ENERGY] > 250000;
}
