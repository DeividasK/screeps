// @flow
import initRoles from 'roles/init';
import memoryHandler from 'memory';
import {
  getNextCreepSchema,
  processQueue,
  createConstructionSites,
  manageCreepCount,
} from 'structures/actions';
import _ from 'lodash';

function loop() {
  memoryHandler.update(Memory, Game.rooms['W7S56']);

  manageCreepCount(Memory, Game.spawns['Spawn1']);

  const nextCreepSchema: CreepSchema = getNextCreepSchema(
    Memory,
    Game.spawns['Spawn1'],
  );

  createConstructionSites(STRUCTURE_EXTENSION, Game);
  createConstructionSites(STRUCTURE_STORAGE, Game);
  createConstructionSites(STRUCTURE_TOWER, Game);

  if (nextCreepSchema) {
    memoryHandler.addToQueue(nextCreepSchema, Memory);
  }

  processQueue(Memory, Game.spawns['Spawn1']);

  initRoles(Game);
}

export { loop };

// Goals:
// Build tower
// Defend against invader
// Builder -> Take from storage -> Harvest if storage empty
// - Renew creeps
// - Automatically adjust harvesters count
// - Automatically build roads
// - Recycle creeps
// - Creep should move away from an energy source
