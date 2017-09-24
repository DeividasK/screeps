// @flow
import initRoles from 'role.init';
import memoryHandler from 'memory';
import { getNextCreepSchema, processQueue, canBuild } from 'structures/actions';
import _ from 'lodash';

function loop() {
  memoryHandler.update(Memory);

  const nextCreepSchema: CreepSchema = getNextCreepSchema(
    Memory,
    Game.spawns['Spawn1'],
  );

  const rooms = _.values(Game.rooms);
  const room = rooms[0];

  const availableAmountForStructureType: ?number = canBuild(
    room,
    STRUCTURE_EXTENSION,
  );

  /*

  // Find empty space to build on
  const spawns = room.find(FIND_MY_STRUCTURES, {     filter: { structureType: STRUCTURE_SPAWN }   });
  const spawn = spawns[0];
  const top = spawn.pos.y - 5;
  const bottom = spawn.pos.y + 5;
  const left = spawn.pos.x - 5;
  const right = spawn.pos.x + 5;

  const area: { top: number, left: number, right: number, bottom: number} = createArea(spawn.pos, 10);

  const areaArray = room.lookForAtArea(LOOK_TERRAIN, area.top, ..., asArray = true)

  for each item in area check check surounding area (3 x 3 total) and see if more than 3 terrain squares are available
  if yes, build a construction site for spawn


  */

  if (nextCreepSchema) {
    memoryHandler.addToQueue(nextCreepSchema, Memory);
  }
  processQueue(Memory, Game.spawns['Spawn1']);

  initRoles(Game);
}

export { loop };

// Goals
// - Update upgrader role to harvest instead of withdrawing
// - Automatically add extension construction sites
// - Updae builder role to harvest instead of withdrawing
// - Automatically change harvester / upgrader / builder roles when visiting spawn based on the amount of energy available
