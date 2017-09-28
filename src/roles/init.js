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

    if (sharedActions(creep)) {
      game.spawns['Spawn1'].renewCreep(creep);
      console.log('Renewing creep ' + JSON.stringify(creep));
      continue;
    }

    console.log(creep.name + ' does not need renewal.');

    role.run(creep);
  }
}
