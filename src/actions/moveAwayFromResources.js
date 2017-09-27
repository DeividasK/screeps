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

export function getPosition(
  direction: number,
  x: number,
  y: number,
): { x: number, y: number } {
  switch (direction) {
    case TOP:
      return { x, y: y - 1 };
    case TOP_RIGHT:
      return { x: x + 1, y: y - 1 };
    case RIGHT:
      return { x: x + 1, y };
    case BOTTOM_RIGHT:
      return { x: x + 1, y: y + 1 };
    case BOTTOM:
      return { x, y: y + 1 };
    case BOTTOM_LEFT:
      return { x: x - 1, y: y + 1 };
    case LEFT:
      return { x: x - 1, y };
    default:
      // TOP_LEFT
      return { x: x - 1, y: y - 1 };
  }
}

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

  for (let i = 0; i < directions.length; i += 1) {
    const direction: number = directions[i];

    const targetPosition = getPosition(direction, creep.pos.x, creep.pos.y);

    const objectsAtTargetPosition: Array<{
      type: string,
      [string]: mixed,
    }> = creep.room.lookAt(targetPosition.x, targetPosition.y);

    const obstacle = _.some(objectsAtTargetPosition, object => {
      return _.includes(OBSTACLE_OBJECT_TYPES, object[object.type]);
    });

    if (obstacle) {
      continue;
    }

    const moveStatus = creep.move(direction);

    if (moveStatus === OK) {
      return true;
    }

    return false;
  }

  return false;
}
