// @flow
import * as roles from './roles';

export default function init() {
    for(const creepName in Game.creeps) {
        const creep = Game.creeps[creepName];
        const role = roles[creep.memory.role]

        if (role !== undefined) {
            role.run(creep);
        } else {
            console.log('Creep memory role ', creep.memory.role, ' is undefined');
        }
    }
};
