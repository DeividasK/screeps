// @flow
const roles = {
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
};

module.exports = function init() {
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
