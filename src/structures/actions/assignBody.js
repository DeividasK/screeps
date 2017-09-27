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
  template: BodyParts,
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

export function getAvailableEnergy(spawn: StructureSpawn, role: CreepRole) {
  const smallestBodyCost = 200;
  let availableEnergy;

  if (role === 'harvester') {
    availableEnergy =
      spawn.room.energyAvailable > smallestBodyCost
        ? spawn.room.energyAvailable
        : smallestBodyCost;
  } else {
    availableEnergy = spawn.room.energyCapacityAvailable;
  }

  return availableEnergy;
}

export function assignBody(spawn: StructureSpawn, role: CreepRole): BodyParts {
  const availableEnergy = getAvailableEnergy(spawn, role);

  const body = findBiggestCreatableBody(availableEnergy, [WORK, MOVE, CARRY]);

  return body;
}
