// @flow
export function canStoreEnergy(structure: any) {
    return structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN;
}

export function hasCapacity(structure: any) {
    return structure.energy < structure.energyCapacity;
}
