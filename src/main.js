// @flow
import initRoles from 'role.init';
import memoryHandler from 'memory';
import mainControls from 'mainControls';
import { getNextCreepSchema } from 'structures/actions';

function loop() {
  memoryHandler.update(Memory);

  const nextCreepSchema = getNextCreepSchema(Memory, Game.spawns['Spawn1']);

  if (nextCreepSchema) {
    memoryHandler.addToQueue(nextCreepSchema, Memory);
  }

  mainControls.processQueue();

  initRoles(Game);
}

export { loop };

// Goals
// - Update upgrader role to harvest instead of withdrawing
// - Automatically add extension construction sites
// - Updae builder role to harvest instead of withdrawing
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available
