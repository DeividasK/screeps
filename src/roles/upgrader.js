// @flow
import runner from './runner';

export function run(creep: Creep) {
  const actionItems = [
    { name: 'withdrawEnergy', additionalCheck: 'storageAboveQuarter' },
    'harvestEnergy',
    'upgradeController',
  ];

  runner(creep, actionItems);
}
