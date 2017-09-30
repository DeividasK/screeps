// @flow

export function attackInvaders(room: Room) {
  const invaders = room.find(FIND_HOSTILE_CREEPS);

  if (invaders.length === 0) {
    return false;
  }

  const towers = room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_TOWER },
  });

  if (towers.length === 0) {
    return false;
  }

  for (let tower of towers) {
    tower.attack(invaders[0]);
  }
}
