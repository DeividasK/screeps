// @flow
import initRoles from 'roles/init';
import memoryHandler from 'memory';
import {
  getNextCreepSchema,
  processQueue,
  createConstructionSites,
  manageCreepCount,
} from 'structures/actions';
import roomActions from 'rooms';
import _ from 'lodash';

function loop() {
  memoryHandler.update(Memory, Game.rooms['W7S56']);

  manageCreepCount(Memory, Game.spawns['Spawn1']);

  const nextCreepSchema: CreepSchema = getNextCreepSchema(
    Memory,
    Game.spawns['Spawn1'],
  );

  if (nextCreepSchema) {
    memoryHandler.addToQueue(nextCreepSchema, Memory);
  }

  processQueue(Memory, Game.spawns['Spawn1']);

  createConstructionSites(STRUCTURE_EXTENSION, Game);
  createConstructionSites(STRUCTURE_STORAGE, Game);
  createConstructionSites(STRUCTURE_TOWER, Game);

  roomActions(Game);

  initRoles(Game);
}

export { loop };

/*
Goals:
Claim another room
  Add logic to increase scout number
    Find room exists
    For each exit
      If other room is not in Game.rooms return false
      If room controller is undefined return false
      If room controller my is true return false
      If room
  Add scout to room roles
  Send scout to another room
  Place a flag in another room
  Send claimers to other rooms
Refactor queue to be part of room memory
Create pure harvester role (harvest / build container)
Create courrier role
? Renew creeps
? Automatically build roads
Recycle creeps
? Creep should move away from an energy source
*/
