// @flow
import * as roles from './roles';

export default function init(game: GameObject) {
  for (const creepName in game.creeps) {
    const creep = game.creeps[creepName];
    const role = roles[creep.memory.role];

    if (role !== undefined) {
      role.run(creep);
    } else {
      console.log('Creep memory role ', creep.memory.role, ' is undefined');
    }
  }
}
