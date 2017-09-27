// @flow
import _ from 'lodash';
import createArea from 'utils/createArea';

const directions = [
  TOP,
  TOP_RIGHT,
  RIGHT,
  BOTTOM_RIGHT,
  BOTTOM,
  BOTTOM_LEFT,
  LEFT,
  TOP_LEFT,
];

export default function moveAwayFromResources(creep: Creep): boolean {
  const area: AreaDimensions = createArea(creep.pos, 1);

  const objectsAtArea: Array<{
    type: string,
    [string]: mixed,
  }> = creep.room.lookAtArea(
    area.top,
    area.left,
    area.bottom,
    area.right,
    true,
  );

  const resourcesAtArea: Array<{
    type: string,
    [string]: mixed,
  }> = _.filter(objectsAtArea, object => {
    return object.type === LOOK_SOURCES || object.type === LOOK_MINERALS;
  });

  if (resourcesAtArea.length === 0) {
    return false;
  }

  console.log('Obstacles at area for creep: ' + JSON.stringify(creep));

  for (let i = 0; i < directions.length; i += 1) {
    const moveStatus = creep.move(directions[i]);
    console.log('Move status: ', moveStatus);

    if (moveStatus === OK) {
      return true;
    }

    if (moveStatus === ERR_INVALID_ARGS) {
      continue;
    }

    return false;
  }

  return false;
}
