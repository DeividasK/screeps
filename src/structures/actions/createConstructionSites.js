// @flow
import _ from 'lodash';
import logger from 'logger';
import { createArea } from 'utils/createArea';
import { canBuild, canBuildOn } from '.';

export function createConstructionSites(type: StructureType, game: GameObject) {
  const rooms = _.values(game.rooms);
  const room = rooms[0];

  const availableAmountForStructureType: ?number = canBuild(room, type);

  if (!availableAmountForStructureType) {
    return false;
  }
  logger(
    'Available amount for ' + type + ' is ' + availableAmountForStructureType,
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

  const suitableArea = _.find(areaArray, roomPosition =>
    canBuildOn(room, roomPosition),
  );

  if (suitableArea === undefined) {
    logger(
      'Suitable area was not found in area array: ' + JSON.stringify(areaArray),
    );
    return;
  }

  logger('Suitable area ' + JSON.stringify(suitableArea));

  const status = room.createConstructionSite(
    suitableArea.x,
    suitableArea.y,
    type,
  );

  if (status !== OK) {
    logger('Status: ' + status);
  }
}
