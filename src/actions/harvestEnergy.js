// @flow
export default function harvestEnergy(creep: Creep) {
  const source = creep.pos.findClosestByPath(FIND_SOURCES, {
    filter: source => source !== undefined && source.energy > 0,
  });

  if (source === null) return;

  const harvestStatus = creep.harvest(source);

  if (harvestStatus === OK) {
    return;
  }

  const moveStatus = creep.moveTo(source);
}
