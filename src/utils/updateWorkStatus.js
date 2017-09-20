// @flow
export default function updateWorkStatus(creep: Creep) {
  if(creep.memory.canWork && creep.carry.energy === 0) {
    creep.memory.canWork = false;
  }

  if(!creep.memory.canWork && creep.carry.energy === creep.carryCapacity) {
    creep.memory.canWork = true;
  }

  return creep.memory.canWork;
}
