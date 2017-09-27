// @flow
import _ from 'lodash';

// Build cost / weight (empty) / weight (loaded)
export const creepBodies = [
  [
    WORK,
    WORK,
    WORK,
    WORK,
    WORK,
    WORK,
    WORK,
    WORK,
    CARRY,
    CARRY,
    CARRY,
    CARRY,
    MOVE,
    MOVE,
    MOVE,
    MOVE,
    MOVE,
    MOVE,
    MOVE,
    MOVE,
  ], // 1400 / 1 / 2(1.5)
  [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], // 800 / 1 / 2
  [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], // 550 / 1 / 2(1.7)
  [WORK, WORK, CARRY, MOVE], // 300 / 2 / 3
  [WORK, CARRY, MOVE], // 200 / 1 / 2
];

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
): BodyParts {
  // $FlowFixMe
  return _.find(creepBodies, function(bodyPartsArray: BodyParts): boolean {
    return calculateBodyCost(bodyPartsArray) <= availableEnergyCapacity;
  });
}

export function getAvailableEnergy(spawn: StructureSpawn, role: CreepRole) {
  let availableEnergy;

  if (role === 'harvester') {
    const energyInExtensions = spawn.room.energyAvailable - spawn.energy;
    availableEnergy = energyInExtensions + spawn.energyCapacity;
  } else {
    availableEnergy = spawn.room.energyCapacityAvailable;
  }

  return availableEnergy;
}

export function assignBody(spawn: StructureSpawn, role: CreepRole): BodyParts {
  const availableEnergy = getAvailableEnergy(spawn, role);

  const body = findBiggestCreatableBody(availableEnergy);

  return body;
}
