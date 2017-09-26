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

  const structuresInPosition: Array<any> = room.lookForAt(
    LOOK_STRUCTURES,
    pos.x,
    pos.y,
  );
  const constructionSiteInPosition: Array<any> = room.lookForAt(
    LOOK_CONSTRUCTION_SITES,
    pos.x,
    pos.y,
  );

  if (
    structuresInPosition.length !== 0 ||
    constructionSiteInPosition.length !== 0
  ) {
    return false;
  }

  const areaDimensions: AreaDimensions = createArea(pos, 1);

  const objectsAtArea: Array<{
    type: string,
    [string]: mixed,
  }> = room.lookAtArea(
    areaDimensions.top,
    areaDimensions.left,
    areaDimensions.bottom,
    areaDimensions.right,
    true,
  );

  const hardObstaclesAtArea: Array<{
    type: string,
    [string]: mixed,
  }> = _.filter(objectsAtArea, object => {
    return object.type === LOOK_SOURCES || object.type === LOOK_MINERALS;
  });

  if (hardObstaclesAtArea.length > 0) {
    return false;
  }

  const softObstaclesAtArea: Array<{
    type: string,
    [string]: mixed,
  }> = _.filter(objectsAtArea, object => {
    return (
      object.type === LOOK_CONSTRUCTION_SITES ||
      object.type === LOOK_STRUCTURES ||
      (object.type === LOOK_TERRAIN && object[LOOK_TERRAIN] === 'wall')
    );
  });

  if (softObstaclesAtArea.length > maxObstacles) {
    return false;
  }

  return true;
}
