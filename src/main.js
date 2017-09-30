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

  if (nextCreepSchema) {
    memoryHandler.addToQueue(nextCreepSchema, Memory);
  }

  processQueue(Memory, Game.spawns['Spawn1']);

  initRoles(Game);
}

export { loop };

// Goals
// Harvester -> build if full capacity -> storage if no construction sites
// Builder -> Take from storage -> Harvest if storage empty
// - Defend against invader
// - Renew creeps
// - Automatically adjust harvesters count
// - Automatically build roads
// - Recycle creeps
// - Creep should move away from an energy source
