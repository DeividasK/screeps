// @flow
import updateWorkStatus from 'utils/updateWorkStatus';

export default function sharedActions(creep: Creep) {
  const hasEnergy = updateWorkStatus(creep);
}
