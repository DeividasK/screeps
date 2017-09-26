// @flow
import _ from 'lodash';
import { canBuild, createArea, canBuildOn } from '.';

export function createConstructionSites(type: StructureType, game: GameObject) {
  const rooms = _.values(game.rooms);
  const room = rooms[0];

  const availableAmountForStructureType: ?number = canBuild(room, type);

  if (!availableAmountForStructureType) {
    return false;
  }

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

  return room.createConstructionSite(suitableArea, type);
}
