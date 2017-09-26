// @flow
import _ from 'lodash';
import logger from 'logger';
import { canBuild, createArea, canBuildOn } from '.';

export function createConstructionSites(type: StructureType, game: GameObject) {
  const rooms = _.values(game.rooms);
  const room = rooms[0];

  const availableAmountForStructureType: ?number = canBuild(room, type);

  if (!availableAmountForStructureType) {
    logger('No available for ' + type);
    return false;
  }
  logger(
    'Available amount for ' + type + ' is ' + availableAmountForStructureType,
  );

  const spawns = room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_SPAWN },
  });
  logger('Spawns are ' + JSON.stringify(spawns));

  const spawn = spawns[0];
  logger('Spawn is ' + JSON.stringify(spawn));

  const area: AreaDimensions = createArea(spawn.pos, 10);

  logger('Area is ' + JSON.stringify(area));

  const areaArray = room.lookForAtArea(
    LOOK_TERRAIN,
    area.top,
    area.left,
    area.bottom,
    area.right,
    true,
  );

  logger('Area array is ' + JSON.stringify(areaArray));

  const suitableArea = _.find(areaArray, roomPosition =>
    canBuildOn(room, roomPosition),
  );

  logger('Suitable area ' + JSON.stringify(suitableArea));

  const status = room.createConstructionSite(suitableArea, type);

  logger('Status: ' + status);
}
