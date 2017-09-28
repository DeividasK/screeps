// @flow
import updateWorkStatus from 'utils/updateWorkStatus';
import updateRenewalStatus from 'utils/updateRenewalStatus';
import actions from 'actions';

export default function sharedActions(creep: Creep) {
  const hasEnergy = updateWorkStatus(creep);
  updateRenewalStatus(creep);

  if (creep.memory.needsRenewal === 'yes') {
    actions.moveToSpawn(creep);
    console.log(JSON.stringify(creep) + ' moving to spawn.');
    return true;
  }
}
