// @flow
import initRoles from 'role.init';
import memoryHandler from 'memory';
import {
  getNextCreepSchema,
  processQueue,
  createConstructionSites,
  updateCreepCount,
} from 'structures/actions';
import _ from 'lodash';

function loop() {
  memoryHandler.update(Memory);

  updateCreepCount(Memory, Game.spawns['Spawn1']);

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
// - Spawn from less energy if no harvesters and spawn is at full capacity
// - Add global creep actions
// - Automatically adjust harvesters count
// - Update upgrader role to harvest instead of withdrawing
// - Updae builder role to harvest instead of withdrawing
// - Creep repair
// - Automatically create body size (with primary parts)
// - Automatically build roads
