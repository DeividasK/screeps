const initRoles = require('role.init');
const memoryHandler = require('memory');

module.exports.loop = function () {
    memoryHandler.flushIfNecessary();

    const spawn1 = Game.spawns['Spawn1'];

    const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    for (const creepName in harvesters) {
        spawn1.renewCreep(harvesters[creepName]);
    }

    if(harvesters.length < 10 && spawn1.canCreateCreep([WORK,CARRY,MOVE]) === OK) {
        var newName = spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }

    if(upgraders.length < 5 && upgraders.length < harvesters.length - 2 && spawn1.canCreateCreep([WORK,CARRY,MOVE]) === OK) {
        var newName = spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }

    initRoles();
}

// Goals
// x Upgrader creep
// x Repair creeps
// x Sync with Github
// - Creeps go to other energy sources
// - Build extensions
// - Build bigger creeps
// - Build roads