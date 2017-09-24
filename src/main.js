// @flow
import initRoles from 'role.init';
import memoryHandler from 'memory';
import {
  getNextCreepSchema,
  processQueue,
  canBuild,
  createArea,
} from 'structures/actions';
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

  const spawns = room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_SPAWN },
  });
  const spawn = spawns[0];

  const area: AreaDimensions = createArea(spawn.pos, 10);

  const areaArray = room.lookForAtArea(
    LOOK_TERRAIN,
    area.top,
    area.left,
    area.bottom,
    area.right,
    true,
  );

  // JSON.stringify(_.values(Game.rooms)[0].lookForAtArea(LOOK_STRUCTURES, 43, 30, 45, 32, true))
  // JSON.stringify(_.values(Game.rooms)[0].lookForAtArea(LOOK_TERRAIN, 43, 30, 45, 32, true))

  /*

  // Find empty space to build on

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
