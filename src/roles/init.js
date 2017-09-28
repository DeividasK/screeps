// @flow
import sharedActions from './shared';
import * as roles from '.';

export default function init(game: GameObject) {
  for (const creepName in game.creeps) {
    const creep = game.creeps[creepName];
    const role = roles[creep.memory.role];

    if (role === undefined) {
      console.log(
        'Creep memory role ',
        creep.memory.role,
        ' is undefined. Creep object: ' + JSON.stringify(creep),
      );
      return;
    }

    sharedActions(creep);

    // TODO: Enable creep renewal, but add additional checks. Otherwise the colony dies
    // if (creep.memory.needsRenewal === 'yes') {
    //   actions.moveToSpawn(creep);
    //   game.spawns['Spawn1'].renewCreep(creep);
    //   continue;
    // }

    role.run(creep);
  }
}
