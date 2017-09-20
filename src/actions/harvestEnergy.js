// @flow
export default function harvestEnergy(creep: Creep) {
    const source = creep.pos.findClosestByPath(FIND_SOURCES, {
        filter: (source) => source !== undefined && source.energy > 0
    });

    if (source === null) return;

    if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
      creep.moveTo(source);
    }
}
