const smallestBody = [WORK,CARRY,MOVE];
const smallCarrier = [WORK,CARRY,CARRY,CARRY,MOVE];

const initRoles = require('role.init');
const memoryHandler = require('memory');
const mainControls = require('mainControls');

module.exports.loop = function () {
    memoryHandler.flushIfNecessary();

    const spawn1 = Game.spawns['Spawn1'];

    mainControls.maintain('harvester', 10, smallCarrier);
    mainControls.maintain('upgrader', 5, smallestBody);
    mainControls.maintain('builder', 2, smallestBody);

    initRoles();
}

// Goals
// x Upgrader creep
// x Repair creeps
// x Sync with Github
// x Creeps go to other energy sources
// x Build extensions
// x Build roads
// x Build bigger creeps
