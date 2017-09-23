// @flow
import * as roles from './roles';

export default function init(memory: MemoryObject) {
  for (const creepName in memory.creeps) {
    const creep = memory.creeps[creepName];
    const role = roles[creep.role];

    if (role !== undefined) {
      role.run(creep);
    } else {
      console.log('Creep memory role ', creep.role, ' is undefined');
    }
  }
}
