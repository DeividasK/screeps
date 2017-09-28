// @flow
import { findBiggestCreatableBody } from 'structures/actions/assignBody';

export default function updateRenewalStatus(creep: Creep) {
  const bodySizeOffset = 2;
  const minThreshold = 100;
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

  if (creep.body.length + bodySizeOffset < biggestCreatableBody.length) {
    creep.memory.needsRenewal = 'never';
    return;
  }

  creep.memory.needsRenewal = 'yes';
  return;
}
