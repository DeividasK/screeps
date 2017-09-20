// @flow
export default function harvestEnergy(creep: Creep) {
    const sources = creep.room.find(FIND_SOURCES, {
        filter: (source) => source.energy > 0
    });

    if (sources.length === 0) return;

    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
}
