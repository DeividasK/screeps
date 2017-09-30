// @flow
import actions from './actions';

export function run(creep: Creep) {
  let working;
  const actionItems = [
    'withdrawEnergy',
    'harvestEnergy',
    'build',
    { name: 'transferToStructure', additionalArguments: [STRUCTURE_TOWER] },
    'fillStorage',
  ];

  for (let action of actionItems) {
    if (typeof action === 'string') {
      working = actions[action].call(null, creep);
    } else if (typeof action === 'object') {
      working = actions[action.name].call(
        null,
        creep,
        ...action.additionalArguments,
      );
    }

    if (working) {
      return;
    }
  }
}
