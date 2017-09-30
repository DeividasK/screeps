// @flow
import runner from './runner';

export function run(creep: Creep) {
  const actionItems = [
    'withdrawEnergy',
    'harvestEnergy',
    'build',
    { name: 'transferToStructure', additionalArguments: [STRUCTURE_TOWER] },
    'fillStorage',
  ];

  runner(creep, actionItems);
}
