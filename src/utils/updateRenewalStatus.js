// @flow
import { findBiggestCreatableBody } from 'structures/actions/assignBody';

export default function updateRenewalStatus(creep: Creep) {
  const renewalThreshold = 50;
  const renewalStatus = creep.memory.needsRenewal;

  if (renewalStatus === 'never') {
    return;
  }

  if (renewalStatus === undefined) {
    creep.memory.needsRenewal = 'no';
    return;
  }

  if (renewalStatus === 'yes' && creep.ticksToLive > 1450) {
    creep.memory.needsRenewal = 'no';
    return;
  }

  // renewalStatus === 'no'
  if (creep.ticksToLive > renewalThreshold) {
    return;
  }

  const biggestCreatableBody = findBiggestCreatableBody(
    creep.room.energyCapacityAvailable,
  );

  if (creep.body.length < biggestCreatableBody.length) {
    creep.memory.needsRenewal = 'never';
    return;
  }

  creep.memory.needsRenewal = 'yes';
  return;
}
