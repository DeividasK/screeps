const smallestBody = [WORK,CARRY,MOVE];

const initRoles = require('role.init');
const memoryHandler = require('memory');
const mainControls = require('mainControls');

module.exports.loop = function () {
    memoryHandler.flushIfNecessary();

    const spawn1 = Game.spawns['Spawn1'];

    mainControls.maintain('harvester', 10, smallestBody);
    mainControls.maintain('upgrader', 5, smallestBody);

    const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    for (const creepName in harvesters) {
        spawn1.renewCreep(harvesters[creepName]);
    }

    initRoles();
}

// Goals
// x Upgrader creep
// x Repair creeps
// x Sync with Github
// x Creeps go to other energy sources
// x Build extensions
// x Build roads
// - Build bigger creeps
