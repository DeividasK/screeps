// @flow
import updateWorkStatus from 'utils/updateWorkStatus';
import actions from 'actions';

export default function sharedActions(creep: Creep): boolean {
  const hasEnergy = updateWorkStatus(creep);

  if (!hasEnergy) {
    return false;
  }

  return actions.moveAwayFromResources(creep);
}
