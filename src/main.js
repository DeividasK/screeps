// @flow
import initRoles from 'role.init';
import memoryHandler from 'memory';
import mainControls from 'mainControls';
import { getNextCreepBody } from 'structures/actions';

function loop() {
  memoryHandler.flushIfNecessary();

  const nextCreepSchema = getNextCreepBody(Memory, Game.spawns['Spawn1']);

  if (nextCreepSchema) {
    memoryHandler.addToQueue(nextCreepSchema);
  }

  mainControls.processQueue();

  initRoles();
}

export { loop };

// Goals
// x Add flow
// x Update all syntax
// x Folders
// - Withdraw from the nearest storage
// - Tests
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available
