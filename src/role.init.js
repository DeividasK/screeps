// @flow
import sharedActions from './roles/shared';
import * as roles from './roles';

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
      continue;
    }

    role.run(creep);
  }
}
