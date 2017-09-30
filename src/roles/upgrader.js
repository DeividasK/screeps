// @flow
import runner from './runner';

export function run(creep: Creep) {
  const actionItems = ['harvestEnergy', 'upgradeController'];

  runner(creep, actionItems);
}
