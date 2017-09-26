// @flow
import _ from 'lodash';
import { createArea } from './createArea';

export function canBuildOn(
  room: Room,
  pos: { x: number, y: number, structure: {} },
): boolean {
  /*
    . x .
    . o .
    x x x
    ^ - should be false
  */
  const maxObstacles = 3;

  const areaDimensions: AreaDimensions = createArea(pos, 1);
  // $FlowFixMe
  const structuresInArea: Array<Structure> = room.lookForAtArea(
    LOOK_STRUCTURES,
    areaDimensions.top,
    areaDimensions.left,
    areaDimensions.bottom,
    areaDimensions.right,
    true,
  );

  if (structuresInArea.length > maxObstacles) {
    return false;
  }

  // $FlowFixMe
  const constructionSitesInArea: Array<Structure> = room.lookForAtArea(
    LOOK_CONSTRUCTION_SITES,
    areaDimensions.top,
    areaDimensions.left,
    areaDimensions.bottom,
    areaDimensions.right,
    true,
  );

  if (constructionSitesInArea.length + structuresInArea.length > maxObstacles) {
    return false;
  }

  const terrainInArea = room.lookForAtArea(
    LOOK_TERRAIN,
    areaDimensions.top,
    areaDimensions.left,
    areaDimensions.bottom,
    areaDimensions.right,
    true,
  );
  const wallsInArea = _.filter(terrainInArea, { terrain: 'wall' });
  const obstaclesInArea =
    structuresInArea.length +
    constructionSitesInArea.length +
    wallsInArea.length;

  if (obstaclesInArea > maxObstacles) {
    return false;
  }

  return true;
}