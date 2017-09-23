// @flow
import initRoles from 'role.init';
import memoryHandler from 'memory';
import mainControls from 'mainControls';

function loop() {
  memoryHandler.flushIfNecessary();

  mainControls.maintain('harvester');
  mainControls.maintain('upgrader');
  mainControls.maintain('builder');

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
