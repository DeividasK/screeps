// @flow
import _ from 'lodash';

export function calculateBodyCost(bodyPartsArray: BodyParts): number {
  return _.reduce(
    bodyPartsArray,
    (sum: number, bodyPart: BodyPartType): number => {
      return sum + BODYPART_COST[bodyPart];
    },
    0,
  );
}

export function findBiggestCreatableBody(
  availableEnergyCapacity: number,
  template: BodyParts = [WORK, MOVE, CARRY],
): BodyParts {
  const body: BodyParts = [];
  let nextBodyPart: string;
  let templateCopy = template.slice();

  while (true) {
    if (templateCopy.length === 0) {
      templateCopy = template.slice();
    }

    nextBodyPart = templateCopy.shift();

    if (
      calculateBodyCost(body.concat(nextBodyPart)) > availableEnergyCapacity
    ) {
      break;
    }

    body.push(nextBodyPart);
  }

  return body;
}

export function getAvailableEnergy(spawn: StructureSpawn, urgent: boolean) {
  const smallestBodyCost = 200;
  let availableEnergy;

  if (urgent) {
    availableEnergy =
      spawn.room.energyAvailable > smallestBodyCost
        ? spawn.room.energyAvailable
        : smallestBodyCost;
  } else {
    availableEnergy = spawn.room.energyCapacityAvailable;
  }

  return availableEnergy;
}

export function assignBody(
  spawn: StructureSpawn,
  urgent: boolean = false,
): BodyParts {
  const availableEnergy = getAvailableEnergy(spawn, urgent);

  const body = findBiggestCreatableBody(availableEnergy);

  return body;
}
