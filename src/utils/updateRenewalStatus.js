// @flow
import { findBiggestCreatableBody } from 'structures/actions/assignBody';

export default function updateRenewalStatus(creep: Creep) {
  const minThreshold = 1250;
  const maxThreshold = 1450;
  const renewalStatus = creep.memory.needsRenewal;

  if (renewalStatus === 'never') {
    return;
  }

  if (renewalStatus === undefined) {
    creep.memory.needsRenewal = 'no';
    return;
  }

  if (renewalStatus === 'yes' && creep.ticksToLive > maxThreshold) {
    creep.memory.needsRenewal = 'no';
    return;
  }

  // renewalStatus === 'no'
  if (creep.ticksToLive > minThreshold) {
    return;
  }

  const biggestCreatableBody = findBiggestCreatableBody(
    creep.room.energyCapacityAvailable,
  );

  if (creep.body.length < biggestCreatableBody.length) {
    console.log('Creep body length', creep.body.length);
    console.log('Biggest creatable body', biggestCreatableBody.length);
    creep.memory.needsRenewal = 'never';
    return;
  }

  creep.memory.needsRenewal = 'yes';
  return;
}
