// @flow
export default function moveToSpawn(creep: Creep) {
  const spawn1 = Game.spawns['Spawn1'];
  return creep.moveTo(spawn1);
}
