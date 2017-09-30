// @flow
import Actions from './actions';

export function run(creep: Creep) {
  let working;

  working = Actions.withdrawEnergy(creep);

  if (working) {
    return;
  }

  working = Actions.harvestEnergy(creep);

  if (working) {
    return;
  }

  working = Actions.build(creep);

  if (working) {
    return;
  }

  Actions.fillStorage(creep);
}
