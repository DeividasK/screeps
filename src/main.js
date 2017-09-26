// @flow
import initRoles from 'role.init';
import memoryHandler from 'memory';
import {
  getNextCreepSchema,
  processQueue,
  createConstructionSites,
} from 'structures/actions';
import _ from 'lodash';

function loop() {
  memoryHandler.update(Memory);

  const nextCreepSchema: CreepSchema = getNextCreepSchema(
    Memory,
    Game.spawns['Spawn1'],
  );

  createConstructionSites(STRUCTURE_EXTENSION, Game);

  if (nextCreepSchema) {
    memoryHandler.addToQueue(nextCreepSchema, Memory);
  }

  processQueue(Memory, Game.spawns['Spawn1']);

  initRoles(Game);
}

export { loop };

// Goals
// - Update upgrader role to harvest instead of withdrawing
// - Updae builder role to harvest instead of withdrawing
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available
