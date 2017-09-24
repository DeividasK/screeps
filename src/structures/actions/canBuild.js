// @flow
import _ from 'lodash';

export function canBuild(room: Room, structureType: StructureType): ?number {
  const controllerLevel = room.controller.level;
  const allowedAmountForStructureTypes =
    CONTROLLER_STRUCTURES[structureType][controllerLevel];

  if (allowedAmountForStructureTypes === 0) {
    return;
  }

  const existingExtensions = room.find(FIND_MY_STRUCTURES, {
    filter: { structureType },
  });
  if (existingExtensions.length === allowedAmountForStructureTypes) {
    return;
  }

  const constructedExtensions = room.find(FIND_MY_CONSTRUCTION_SITES, {
    filter: { structureType },
  });

  const availableAmountForStructureType =
    allowedAmountForStructureTypes -
    existingExtensions.length -
    constructedExtensions.length;

  return availableAmountForStructureType;
}
