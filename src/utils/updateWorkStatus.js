// @flow
export default function updateWorkStatus(creep: Creep) {
  if(creep.memory.hasEnergy && creep.carry.energy === 0) {
    creep.memory.hasEnergy = false;
  }

  if(!creep.memory.hasEnergy && creep.carry.energy === creep.carryCapacity) {
    creep.memory.hasEnergy = true;
  }

  return creep.memory.hasEnergy;
}
