// @flow
import _ from 'lodash';

// Build cost / weight (empty) / weight (loaded)
export const creepBodies = [
  [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE], // 500 / 2 / 6
  [WORK, CARRY, CARRY, CARRY, MOVE], // 300 / 1 / 4
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
    return calculateBodyCost(bodyPartsArray) < availableEnergyCapacity;
  });
}

export function assignBody(spawn: StructureSpawn): BodyParts {
  return findBiggestCreatableBody(spawn.room.energyCapacityAvailable);
}
