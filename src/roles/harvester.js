// @flow
import runner from './runner';

export function run(creep: Creep) {
  const actionItems = [
    'pickupEnergy',
    'harvestEnergy',
    { name: 'transferToStructure', additionalArguments: [STRUCTURE_SPAWN] },
    { name: 'transferToStructure', additionalArguments: [STRUCTURE_EXTENSION] },
    'build',
    { name: 'transferToStructure', additionalArguments: [STRUCTURE_TOWER] },
    'fillStorage',
  ];

  runner(creep, actionItems);
}
