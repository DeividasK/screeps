// @flow
const smallestBody = [WORK,CARRY,MOVE];
const smallCarrier = [WORK,CARRY,CARRY,CARRY,MOVE];
const smallWorker = [WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];

import initRoles from 'role.init';
import memoryHandler from 'memory';
import mainControls from 'mainControls';

function loop() {
    memoryHandler.flushIfNecessary();

    mainControls.maintain('harvester', 6, smallWorker);
    mainControls.maintain('upgrader', 4, smallWorker);
    mainControls.maintain('builder', 1, smallestBody);

    mainControls.processQueue();

    initRoles();
}

export { loop };

// Goals
// x Add flow
// x Update all syntax
// x Folders
// - Tests
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available
